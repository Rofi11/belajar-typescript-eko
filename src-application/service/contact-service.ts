import { Contact, User } from "@prisma/client";
import {
  ContactResponse,
  CreateContactRequest,
  toContactResponse,
  UpdateContactRequest,
} from "../model/contact-model";
import { ContactValidation } from "../validation/contact-validation";
import { Validation } from "../validation/validation";
import { prismaClient } from "../application/database";
import { logger } from "../application/logging";
import { ResponseError } from "../error/response-error";
import { UserValidation } from "../validation/user-validation";

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

  //114 - refactor code use function for search contact for get and update
  static async checkContactMustExist(
    username: string,
    contactId: number
  ): Promise<Contact> {
    // cari contact by id dan username agar pasti
    const contact = await prismaClient.contact.findFirst({
      where: {
        id: contactId,
        username: username,
      },
    });

    // checking contact is define or undefine
    if (!contact) {
      throw new ResponseError(404, "Contact not found");
    }

    return contact;
  }

  // get contact
  static async get(user: User, id: number): Promise<ContactResponse> {
    // cari contact by id dan username agar pasti
    const contact = await this.checkContactMustExist(user.username, id);
    // return the promise
    return toContactResponse(contact);
  }

  // 114 - Update Contact
  static async update(
    user: User,
    request: UpdateContactRequest
  ): Promise<ContactResponse> {
    // validation
    const updateRequest = Validation.validate(
      ContactValidation.UPDATE,
      request
    );
    // search contact
    await this.checkContactMustExist(user.username, updateRequest.id);

    // update ke database data nya
    const contact = await prismaClient.contact.update({
      where: {
        id: updateRequest.id,
        username: user.username,
      },
      data: updateRequest,
    });
    // return data yang sudah di update
    return toContactResponse(contact);
  }

  // 115- REMOVE
  static async remove(user: User, id: number): Promise<ContactResponse> {
    // check contact
    await this.checkContactMustExist(user.username, id);

    // hapus contact
    const contact = await prismaClient.contact.delete({
      where: {
        id: id,
        username: user.username,
      },
    });

    return toContactResponse(contact);
  }
}
