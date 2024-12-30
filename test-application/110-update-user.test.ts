import supertest from "supertest";
import { web } from "../src-application/application/web";
import { logger } from "../src-application/application/logging";
import { Usertest } from "./tes.utils";
import bcrypt from "bcrypt";

describe("PATCH /api/users/update", () => {
  beforeEach(async () => {
    await Usertest.create();
  });

  afterEach(async () => {
    await Usertest.delete();
  });

  //   jika gagal. tidak sesuai dengan validation ?? ini masih salah zod error nya tidak mengirim data
  it("should reject update user if request is invalid", async () => {
    const response = await supertest(web)
      .patch("/api/users/update")
      .set("X-API-TOKEN", "token")
      .send({
        password: "",
        name: "",
      });

    logger.debug(response.body);

    expect(response.status).toBe(500);
    expect(response.body.errors).toBe(undefined);
  });

  //   jika gagal token nya wrong
  it("should reject update user if token is wrong", async () => {
    const response = await supertest(web)
      .patch("/api/users/update")
      .set("X-API-TOKEN", "salah")
      .send({
        password: "benar",
        name: "benar",
      });

    logger.debug(response.body);

    expect(response.status).toBe(401);
    expect(response.body.errors).toBeDefined();
  });

  // ganti nama
  it("should update user name", async () => {
    const response = await supertest(web)
      .patch("/api/users/update")
      .set("X-API-TOKEN", "token")
      .send({
        name: "benar",
      });

    logger.debug(response.body);

    expect(response.status).toBe(200);
    expect(response.body.data.name).toBe("benar");
  });

  //update password dan pengecekan data di database
  it("should reject update password", async () => {
    const response = await supertest(web)
      .patch("/api/users/update")
      .set("X-API-TOKEN", "token")
      .send({
        password: "benar",
      });

    logger.debug(response.body);

    expect(response.status).toBe(200);

    const user = await Usertest.get();
    expect(await bcrypt.compare("benar", user.password)).toBe(true);
  });
});
