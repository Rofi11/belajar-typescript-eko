import { NextFunction, Request, Response } from "express";
import { CreateUserRequest, LoginUserRequest } from "../model/user-model";
import { UserService } from "../service/user-service";
import { UserRequest } from "../type/user-request";

export class UserController {
  // REGISTER
  static async register(req: Request, res: Response, next: NextFunction) {
    // call data service
    try {
      const request: CreateUserRequest = req.body as CreateUserRequest;
      const response = await UserService.register(request);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  // LOGIN
  static async login(req: Request, res: Response, next: NextFunction) {
    // call data service
    try {
      const request: LoginUserRequest = req.body as LoginUserRequest;
      const response = await UserService.login(request);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  // Get data yang sudah login
  static async getData(req: UserRequest, res: Response, next: NextFunction) {
    // call data service
    try {
      // get data nya
      const response = await UserService.get(req.user!); // karena type data optional, karena pasti jadi tambah tanda seru!
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
}
