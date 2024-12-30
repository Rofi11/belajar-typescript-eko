import supertest from "supertest";
import { web } from "../src-application/application/web";
import { logger } from "../src-application/application/logging";
import { Usertest } from "./tes.utils";
describe("DELETE /api/users/logout", () => {
  // 1.create data dulu pakai tes.utils
  beforeEach(async () => {
    await Usertest.create();
  });

  // 2. delete data username test
  afterEach(async () => {
    await Usertest.delete();
  });

  it("should be able to logout", async () => {
    const response = await supertest(web)
      .delete("/api/users/logout")
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data).toBe("Data Sudah Terdelete");

    const user = await Usertest.get();
    expect(user.token).toBeNull();
  });

  it("should reject logout user if token is wrong", async () => {
    const response = await supertest(web)
      .delete("/api/users/logout")
      .set("X-API-TOKEN", "salah");

    logger.debug(response.body);
    expect(response.status).toBe(401);
    expect(response.body.errors).toBeDefined();
  });
});
