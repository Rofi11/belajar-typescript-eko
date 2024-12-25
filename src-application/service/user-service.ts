import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";
import {
  CreateUserRequest,
  LoginUserRequest,
  registerRequest,
  toUserResponse,
  UserResponse,
} from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

// agar lebih rapih kita kan membungkus semua kedalam bentuk class
export class UserService {
  // REGISTER
  static async register(request: CreateUserRequest): Promise<UserResponse> {
    //1.validation data
    const user = Validation.validate(UserValidation.REGISTER, request);

    // 2. mencari semua username dengan count
    const totalUserWithSameUsername = await prismaClient.user.count({
      where: {
        username: registerRequest.username,
      },
    });

    // 3.cek username yang sama
    if (totalUserWithSameUsername != 0) {
      throw new ResponseError(400, "username already exist");
    }

    // 4.hashing password
    registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

    // 5.registrasikan kedalam database (simpan)
    const User = await prismaClient.user.create({
      data: registerRequest,
    });

    //6. konversi dari User ke userResponse, kita return kan data berhasil nya
    return toUserResponse(User);
  }

  // LOGIN
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
}
