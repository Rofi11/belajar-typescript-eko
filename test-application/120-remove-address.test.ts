import supertest from "supertest";
import { AddressTest, ContactTest, Usertest } from "./tes.utils";
import { web } from "../src-application/application/web";
import { logger } from "../src-application/application/logging";

describe("DELETE /api/contacts/:contactId/addresses/:addressId", () => {
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

  it("should be able to remove address", async () => {
    // ambil data contact dan address di database
    const contact = await ContactTest.get();
    const address = await AddressTest.get();
    const response = await supertest(web)
      .delete(`/api/contacts/${contact.id}/addresess/${address.id}`)
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data).toBe("ok");
  });

  it("should reject remove address if address id is not found", async () => {
    // ambil data contact dan address di database
    const contact = await ContactTest.get();
    const address = await AddressTest.get();
    const response = await supertest(web)
      .delete(`/api/contacts/${contact.id}/addresess/${address.id + 1}`)
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(404);
    expect(response.body.errors).toBeDefined();
  });

  it("should reject remove address if contact id is not found", async () => {
    // ambil data contact dan address di database
    const contact = await ContactTest.get();
    const address = await AddressTest.get();
    const response = await supertest(web)
      .delete(`/api/contacts/${contact.id + 1}/addresess/${address.id}`)
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(404);
    expect(response.body.errors).toBeDefined();
  });
});
