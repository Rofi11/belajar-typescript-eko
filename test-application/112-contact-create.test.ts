import supertest from "supertest";
import { ContactTest, Usertest } from "./tes.utils";
import { web } from "../src-application/application/web";
import { logger } from "../src-application/application/logging";

describe("POST /api/contacts", () => {
  beforeEach(async () => {
    await Usertest.create();
  });

  afterEach(async () => {
    await ContactTest.deleteAll();
    await Usertest.delete();
  });

  it("should create new contact", async () => {
    const response = await supertest(web)
      .post("/api/contacts")
      .set("X-API-TOKEN", "token")
      .send({
        first_name: "eko",
        last_name: "khanedy",
        email: "eko@example.com",
        phone: "0899999",
      });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.id).toBeDefined();
    expect(response.body.data.first_name).toBe("eko");
    expect(response.body.data.last_name).toBe("khanedy");
    expect(response.body.data.email).toBe("eko@example.com");
    expect(response.body.data.phone).toBe("0899999");
  });

  it("should reject create new contact if data is invalid", async () => {
    const response = await supertest(web)
      .post("/api/contacts")
      .set("X-API-TOKEN", "token")
      .send({
        first_name: "",
        last_name: "",
        email: "eko",
        phone: "08999990899999089999908999990899999",
      });

    logger.debug(response.body);
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
  });
});
