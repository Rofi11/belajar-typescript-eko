import supertest from "supertest";
import { web } from "../src-application/application/web";
import { logger } from "../src-application/application/logging";
import { Usertest } from "./tes.utils";

describe("POST /api/users/login", () => {
  // 1.create data dulu pakai tes.utils
  beforeEach(async () => {
    await Usertest.create();
  });

  // 2. delete data username test
  afterEach(async () => {
    await Usertest.delete();
  });

  // UNTUK LOGIN YANG BERHASIL
  it("should be able to login", async () => {
    // kirim data
    const response = await supertest(web).post("/api/users/login").send({
      username: "test",
      password: "test",
    });
    // logging hasil agar tau hasil nya
    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.username).toBe("test");
    expect(response.body.data.name).toBe("test");
    expect(response.body.data.token).toBeDefined(); // karena hasil uuid random yang penting ada, makanya pakai toBeDefined()
  });

  // UNTUK LOGIN YANG GAGAL
  it("should reject login user if username is wrong", async () => {
    // kirim data
    const response = await supertest(web).post("/api/users/login").send({
      username: "salah",
      password: "test",
    });
    // logging hasil agar tau hasil nya
    logger.debug(response.body);
    expect(response.status).toBe(401);
    expect(response.body.errors).toBeDefined(); // karena hasil error random, makanya pakai toBeDefined()
  });
});
