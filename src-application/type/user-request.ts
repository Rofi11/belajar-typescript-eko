import { User } from "@prisma/client";
import { Request } from "express";

// 109 - menggunakan interface, karena bawaan dari reuest nya berbentuk interface
export interface UserRequest extends Request {
  user?: User;
}
