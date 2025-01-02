import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../application/database";
import { UserRequest } from "../type/user-request";

// 109 - middleware untuk ambil data yang sudah login
export const authMiddleware = async (
  req: UserRequest, // diubah menjadi buatan sendiri, tapi extend dari request espress, utk menambahkan user
  res: Response,
  next: NextFunction
) => {
  // take token
  const token = req.get("X-API-TOKEN");

  //cek token
  if (token) {
    // ambil data dari database
    const user = await prismaClient.user.findFirst({
      where: {
        token: token,
      },
    });

    if (user) {
      req.user = user; // 109 - error karena di request bawwan express tidak ada property user, maka kita harus tambahkan, perlu ubah type data nya (buat manual)
      next();
      return;
    }
  }

  // jika error
  res
    .status(401)
    .json({
      errors: "authorized",
    })
    .end();
};
