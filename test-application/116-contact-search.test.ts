import supertest from "supertest";
import { ContactTest, Usertest } from "./tes.utils";
import { web } from "../src-application/application/web";
import { logger } from "../src-application/application/logging";

describe("GET /api/contacts", () => {
  beforeEach(async () => {
    await Usertest.create();
    await ContactTest.create();
  });

  afterEach(async () => {
    await ContactTest.deleteAll();
    await Usertest.delete();
  });

  it("should be able to search contact", async () => {
    const response = await supertest(web)
      .get(`/api/contacts`)
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(1);
    expect(response.body.paging.current_page).toBe(1);
    expect(response.body.paging.total_page).toBe(1);
    expect(response.body.paging.size).toBe(10);
  });

  it("should be able to search contact using name", async () => {
    const response = await supertest(web)
      .get(`/api/contacts`)
      .query({
        name: "es",
      })
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(1);
    expect(response.body.paging.current_page).toBe(1);
    expect(response.body.paging.total_page).toBe(1);
    expect(response.body.paging.size).toBe(10);
  });

  it("should be able to search contact using email", async () => {
    const response = await supertest(web)
      .get(`/api/contacts`)
      .query({
        email: ".com",
      })
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(1);
    expect(response.body.paging.current_page).toBe(1);
    expect(response.body.paging.total_page).toBe(1);
    expect(response.body.paging.size).toBe(10);
  });

  it("should be able to search contact using email", async () => {
    const response = await supertest(web)
      .get(`/api/contacts`)
      .query({
        phone: "99",
      })
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(1);
    expect(response.body.paging.current_page).toBe(1);
    expect(response.body.paging.total_page).toBe(1);
    expect(response.body.paging.size).toBe(10);
  });

  // unit test mencari yang tidak ada di contact
  it("should be able to search contact not result", async () => {
    const response = await supertest(web)
      .get(`/api/contacts`)
      .query({
        name: "salah",
      })
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(0);
    expect(response.body.paging.current_page).toBe(1);
    expect(response.body.paging.total_page).toBe(0);
    expect(response.body.paging.size).toBe(10);
  });

  // unit test mencari page 2 atau 3
  it("should be able to search contact with paging", async () => {
    const response = await supertest(web)
      .get(`/api/contacts`)
      .query({
        page: 2,
        size: 1,
      })
      .set("X-API-TOKEN", "token");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(0);
    expect(response.body.paging.current_page).toBe(2);
    expect(response.body.paging.total_page).toBe(1);
    expect(response.body.paging.size).toBe(1);
  });
});
