import supertest from "supertest";
import { web } from "../src-application/application/web";
import { logger } from "../src-application/application/logging";
import { Usertest } from "./tes.utils";

describe("POST /api/users", () => {
  // unutk tiger delete
  afterEach(async () => {
    await Usertest.delete();
  });

  // untuk yang error
  it("should reject register new user if request is invalid", async () => {
    // 1.tampung data
    const response = await supertest(web).post("/api/users").send({
      username: "",
      password: "",
      name: "",
    });
    // 2. logger
    logger.debug(response.body);
    // 3.unit test
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
    // expect(response.body.message).toBe("Invalid input");
  });

  // untuk yang berhasil
  it("should register new user", async () => {
    const response = await supertest(web).post("/api/users").send({
      username: "test",
      password: "test",
      name: "test",
    });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.username).toBe("test");
    expect(response.body.data.name).toBe("test");
  });
});
