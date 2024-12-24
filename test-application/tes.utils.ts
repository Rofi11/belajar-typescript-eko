// membuat data static test
import { prismaClient } from "../src-application/application/database";

// setiap beres test akan langsung mendelete data nya, agar menghindari error
export class Usertest {
  static async delete() {
    await prismaClient.user.deleteMany({
      where: {
        username: "test",
      },
    });
  }
}
