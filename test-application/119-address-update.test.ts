import supertest from "supertest";
import { AddressTest, ContactTest, Usertest } from "./tes.utils";
import { web } from "../src-application/application/web";
import { logger } from "../src-application/application/logging";

describe("PUT /api/contacts/:contactId/addresses/:addressId", () => {
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

  it("should be able to update address", async () => {
    // ambil data contact dan address di database
    const contact = await ContactTest.get();
    const address = await AddressTest.get();

    const response = await supertest(web)
      .put(`/api/contacts/${contact.id}/addresess/${address.id}`)
      .set("X-API-TOKEN", "token")
      .send({
        street: "Jalan belum ada",
        city: "Jakarta",
        provience: "DKI Jakarta",
        country: "Indonesia",
        postal_code: "12345",
      });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.id).toBe(address.id);
    expect(response.body.data.street).toBe("Jalan belum ada");
    expect(response.body.data.city).toBe("Jakarta");
    expect(response.body.data.provience).toBe("DKI Jakarta");
    expect(response.body.data.country).toBe("Indonesia");
    expect(response.body.data.postal_code).toBe("12345");
  });

  // utk validation error
  it("should reject update address if data is invalid", async () => {
    // ambil data contact dan address di database
    const contact = await ContactTest.get();
    const address = await AddressTest.get();

    const response = await supertest(web)
      .put(`/api/contacts/${contact.id}/addresess/${address.id}`)
      .set("X-API-TOKEN", "token")
      .send({
        street: "Jalan belum ada",
        city: "Jakarta",
        provience: "DKI Jakarta",
        country: "",
        postal_code: "",
      });

    logger.debug(response.body);
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
  });

  // utk error wrong address id
  it("should reject update address if address id is not found", async () => {
    // ambil data contact dan address di database
    const contact = await ContactTest.get();
    const address = await AddressTest.get();

    const response = await supertest(web)
      .put(`/api/contacts/${contact.id}/addresess/${address.id + 1}`)
      .set("X-API-TOKEN", "token")
      .send({
        street: "Jalan belum ada",
        city: "Jakarta",
        provience: "DKI Jakarta",
        country: "Indonesia",
        postal_code: "12345",
      });

    logger.debug(response.body);
    expect(response.status).toBe(404);
    expect(response.body.errors).toBeDefined();
  });

  // utk error wrong contact id
  it("should reject update address if contact id is not found", async () => {
    // ambil data contact dan address di database
    const contact = await ContactTest.get();
    const address = await AddressTest.get();

    const response = await supertest(web)
      .put(`/api/contacts/${contact.id + 1}/addresess/${address.id}`)
      .set("X-API-TOKEN", "token")
      .send({
        street: "Jalan belum ada",
        city: "Jakarta",
        provience: "DKI Jakarta",
        country: "Indonesia",
        postal_code: "12345",
      });

    logger.debug(response.body);
    expect(response.status).toBe(404);
    expect(response.body.errors).toBeDefined();
  });
});
