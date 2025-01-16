import supertest from "supertest";
import { AddressTest, ContactTest, Usertest } from "./tes.utils";
import { web } from "../src-application/application/web";
import { logger } from "../src-application/application/logging";

describe("POST /api/contacts/:contactId/addresses", () => {
  beforeEach(async () => {
    await Usertest.create();
    await ContactTest.create();
  });

  afterEach(async () => {
    await AddressTest.deleteAll();
    await ContactTest.deleteAll();
    await Usertest.delete();
  });

  it("should be able to create address", async () => {
    // ambil data contact di database
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .post(`/api/contacts/${contact.id}/addresses`)
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
    expect(response.body.data.id).toBeDefined();
    expect(response.body.data.street).toBe("Jalan belum ada");
    expect(response.body.data.city).toBe("Jakarta");
    expect(response.body.data.provience).toBe("DKI Jakarta");
    expect(response.body.data.country).toBe("Indonesia");
    expect(response.body.data.postal_code).toBe("12345");
  });

  it("should be reject create new address if request is invalid", async () => {
    // ambil data contact di database
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .post(`/api/contacts/${contact.id}/addresses`)
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

  it("should be reject create new address if contact is not found", async () => {
    // ambil data contact di database
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .post(`/api/contacts/${contact.id + 1}/addresses`)
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
