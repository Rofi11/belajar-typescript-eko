import { User } from "@prisma/client";
import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";
import {
  CreateUserRequest,
  LoginUserRequest,
  toUserResponse,
  UpdateUserRequest,
  UserResponse,
} from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

// agar lebih rapih kita kan membungkus semua kedalam bentuk class
export class UserService {
  // 107 - REGISTER
  static async register(request: CreateUserRequest): Promise<UserResponse> {
    //1.validation data
    const userRegister = Validation.validate(UserValidation.REGISTER, request);

    // 2. mencari semua username dengan count
    const totalUserWithSameUsername = await prismaClient.user.count({
      where: {
        username: userRegister.username,
      },
    });

    // 3.cek username yang sama
    if (totalUserWithSameUsername != 0) {
      throw new ResponseError(400, "username already exist");
    }

    // 4.hashing password
    userRegister.password = await bcrypt.hash(userRegister.password, 10);

    // 5.registrasikan kedalam database (simpan)
    const User = await prismaClient.user.create({
      data: userRegister,
    });

    //6. konversi dari User ke userResponse, kita return kan data berhasil nya
    return toUserResponse(User);
  }

  // 108- LOGIN
  static async login(request: LoginUserRequest): Promise<UserResponse> {
    //1.validation data
    const loginRequest = Validation.validate(UserValidation.LOGIN, request);
    //2. cek data user
    let user = await prismaClient.user.findUnique({
      where: {
        username: loginRequest.username,
      },
    });
    //2.1 cek user ada atau tidak
    if (!user) {
      throw new ResponseError(401, "Username or Password is wrong");
    }
    //2.2 cek password (compare password yang di kirim dan di database)
    const isPasswordValid = await bcrypt.compare(
      loginRequest.password,
      user.password
    );
    // cek password benar atau tidak
    if (!isPasswordValid) {
      throw new ResponseError(401, "Username or Password is wrong");
    }

    // 2.3 update berdasarkan username, kita mengupdate token nya
    user = await prismaClient.user.update({
      where: {
        username: loginRequest.username,
      },
      data: {
        token: uuid(),
      },
    });

    // 3. kirim data ke database
    const response = toUserResponse(user);
    response.token = user.token!; //masukan token karena tidak kosong, kita paksa dengan tanda seru
    return response;
  }

  // 109 - GET DATA YANG SUDAH LOGIN
  static async get(user: User): Promise<UserResponse> {
    return toUserResponse(user);
  }

  // 110 - UPDATE USER
  static async update(
    user: User,
    request: UpdateUserRequest
  ): Promise<UserResponse> {
    // cek data nya
    const updateRequest = Validation.validate(UserValidation.UPDATE, request);

    // cek nama
    if (updateRequest.name) {
      user.name = updateRequest.name;
    }

    //cek password
    if (updateRequest.password) {
      user.password = await bcrypt.hash(updateRequest.password, 10);
    }

    // update data di database
    const result = await prismaClient.user.update({
      where: {
        username: user.username,
      },
      data: user,
    });

    return toUserResponse(result);
  }

  // 111 - LOGOUT
  static async logout(user: User): Promise<UserResponse> {
    const result = await prismaClient.user.update({
      where: {
        username: user.username,
      },
      data: {
        token: null, // kita update token nya menjadi null
      },
    });

    return toUserResponse(result);
  }
}
