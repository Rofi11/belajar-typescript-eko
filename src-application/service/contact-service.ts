import { User } from "@prisma/client";
import {
  ContactResponse,
  CreateContactRequest,
  toContctResponse,
} from "../model/contact-model";
import { ContactValidation } from "../validation/contact-validation";
import { Validation } from "../validation/validation";
import { prismaClient } from "../application/database";
import { logger } from "../application/logging";

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

    return toContctResponse(contact);
  }
}
