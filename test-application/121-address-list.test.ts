import supertest from "supertest";
import { AddressTest, ContactTest, Usertest } from "./tes.utils";
import { web } from "../src-application/application/web";
import { logger } from "../src-application/application/logging";

describe("GET /api/contacts/:contactId/addresses", () => {
  beforeEach(async () => {
    await Usertest.create();
    await ContactTest.create();
    await AddressTest.create();
  });

  afterEach(async () => {
    await AddressTest.deleteAll();
    await ContactTest.deleteAll();
    await Usertest.delete();
  });

  it("should be able to list addresses", async () => {
    // ambil data contact di database
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .get(`/api/contacts/${contact.id}/addresses`)
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(1);
  });

  it("should reject list address if contact id is not found", async () => {
    // ambil data contact dan address di database
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .get(`/api/contacts/${contact.id + 1}/addresses`)
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(404);
    expect(response.body.errors).toBeDefined();
  });
});
