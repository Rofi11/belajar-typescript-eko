// membuat data static test
import { Address, Contact, User } from "@prisma/client";
import { prismaClient } from "../src-application/application/database";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

// setiap beres test akan langsung mendelete data nya, agar menghindari error
export class Usertest {
  // delete utk ketika unit test register
  static async delete() {
    await prismaClient.user.deleteMany({
      where: {
        username: "test",
      },
    });
  }

  // create utk login unit test, agar ada data nya terlebih dahulu
  static async create() {
    await prismaClient.user.create({
      data: {
        username: "test",
        name: "test",
        password: await bcrypt.hash("test", 10),
        token: "token",
      },
    });
  }

  //110 - utk mendapatkan data user
  static async get(): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: {
        username: "test",
      },
    });

    if (!user) {
      throw new Error("user does't found");
    }

    return user;
  }
}
// 112 - Class utk delete semua contact buatan unit test
export class ContactTest {
  static async deleteAll() {
    await prismaClient.contact.deleteMany({
      where: {
        user: {
          username: "test",
        },
      },
    });
  }

  // helper create contact
  static async create() {
    await prismaClient.contact.create({
      data: {
        first_name: "test",
        last_name: "test",
        email: "test@example.com",
        phone: "0899999",
        username: "test",
      },
    });
  }

  // helper get contact
  static async get(): Promise<Contact> {
    const contact = await prismaClient.contact.findFirst({
      where: {
        username: "test",
      },
    });

    if (!contact) {
      throw new Error("Contact is not found");
    }

    return contact;
  }
}

export class AddressTest {
  static async deleteAll() {
    await prismaClient.address.deleteMany({
      where: {
        contact: {
          username: "test",
        },
      },
    });
  }

  //118 - helper create utk di get
  static async create() {
    //ambil contact
    const contact = await ContactTest.get();
    await prismaClient.address.create({
      data: {
        contact_id: contact.id,
        street: "Jalan test",
        city: "Kota test",
        provience: "Provinsi test",
        country: "Indonesia",
        postal_code: "12345",
      },
    });
  }

  //118 - get address
  static async get(): Promise<Address> {
    const address = await prismaClient.address.findFirst({
      where: {
        contact: {
          username: "test",
        },
      },
    });

    if (!address) {
      throw new Error("Address is not found");
    }

    return address;
  }
}
