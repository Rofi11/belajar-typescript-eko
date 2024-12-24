import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";
import {
  CreateUserRequest,
  registerRequest,
  toUserResponse,
  UserResponse,
} from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";

// agar lebih rapih kita kan membungkus semua kedalam bentuk class
export class UserService {
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
}
