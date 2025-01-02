import supertest from "supertest";
import { ContactTest, Usertest } from "./tes.utils";
import { web } from "../src-application/application/web";
import { logger } from "../src-application/application/logging";

describe("PUT /api/contacts/:contactId", () => {
  beforeEach(async () => {
    await Usertest.create();
    await ContactTest.create();
  });

  afterEach(async () => {
    await ContactTest.deleteAll();
    await Usertest.delete();
  });

  it("should be able to update contact", async () => {
    // ambil data contact di database
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .put(`/api/contacts/${contact.id}`)
      .set("X-API-TOKEN", "token")
      .send({
        first_name: "eko",
        last_name: "khannedy",
        email: "eko@example.com",
        phone: "9999",
      });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.first_name).toBe("eko");
    expect(response.body.data.last_name).toBe("khannedy");
    expect(response.body.data.email).toBe("eko@example.com");
    expect(response.body.data.phone).toBe("9999");
  });

  it("should reject update contact if request is invalid", async () => {
    // ambil data contact di database
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .put(`/api/contacts/${contact.id}`)
      .set("X-API-TOKEN", "token")
      .send({
        first_name: "",
        last_name: "",
        email: "eko",
        phone: "",
      });

    logger.debug(response.body);
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
  });
});
