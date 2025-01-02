import { User } from "@prisma/client";
import {
  ContactResponse,
  CreateContactRequest,
  toContactResponse,
} from "../model/contact-model";
import { ContactValidation } from "../validation/contact-validation";
import { Validation } from "../validation/validation";
import { prismaClient } from "../application/database";
import { logger } from "../application/logging";
import { ResponseError } from "../error/response-error";

export class ContactService {
  static async create(
    user: User,
    request: CreateContactRequest
  ): Promise<ContactResponse> {
    // validation data
    const createContact = Validation.validate(
      ContactValidation.CREATE,
      request
    );

    // buat object baru utk menambahkan username, karena type createContact tidak ada username
    const record = {
      ...createContact,
      ...{ username: user.username },
    };

    //insert ke database
    const contact = await prismaClient.contact.create({
      data: record,
    });

    // logger.info(contact);
    logger.debug("record : " + JSON.stringify(contact));

    return toContactResponse(contact);
  }

  // get contact
  static async get(user: User, id: number): Promise<ContactResponse> {
    // cari contact by id dan username agar pasti
    const contact = await prismaClient.contact.findUnique({
      where: {
        id: id,
        username: user.username,
      },
    });

    // checking contact is define or undefine
    if (!contact) {
      throw new ResponseError(404, "Contact not found");
    }

    // return the promise
    return toContactResponse(contact);
  }
}
