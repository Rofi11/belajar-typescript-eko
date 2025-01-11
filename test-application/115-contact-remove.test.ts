import supertest from "supertest";
import { ContactTest, Usertest } from "./tes.utils";
import { web } from "../src-application/application/web";
import { logger } from "../src-application/application/logging";

describe("DELETE /api/contacts/:contactId", () => {
  beforeEach(async () => {
    await Usertest.create();
    await ContactTest.create();
  });

  afterEach(async () => {
    await ContactTest.deleteAll();
    await Usertest.delete();
  });

  it("should be able to remove contact", async () => {
    // ambil data contact di database
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .delete(`/api/contacts/${contact.id}`)
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data).toBe("Successfull Remove Contact");
  });

  it("should reject remove contact if contact is not found", async () => {
    // ambil data contact di database
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .delete(`/api/contacts/${contact.id + 1}`)
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(404);
    expect(response.body.errors).toBeDefined();
  });
});
