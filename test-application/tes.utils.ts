// membuat data static test
import { prismaClient } from "../src-application/application/database";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

// setiap beres test akan langsung mendelete data nya, agar menghindari error
export class Usertest {
  // delete utk ketika unit test register
  static async delete() {
    await prismaClient.user.deleteMany({
      where: {
        username: "test",
      },
    });
  }

  // create utk login unit test, agar ada data nya terlebih dahulu
  static async create() {
    await prismaClient.user.create({
      data: {
        username: "test",
        name: "test",
        password: await bcrypt.hash("test", 10),
        token: "token",
      },
    });
  }
}
