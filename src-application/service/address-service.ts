import { User } from "@prisma/client";
import {
  AddressResponse,
  CreateAddressRequest,
  GetAddressRequest,
  toAddressResponse,
} from "../model/address-model";
import { Validation } from "../validation/validation";
import { AddressValidation } from "../validation/address-validation";
import { ContactService } from "./contact-service";
import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";

export class AddressService {
  static async create(
    user: User,
    request: CreateAddressRequest
  ): Promise<AddressResponse> {
    // validation
    const createRequest = Validation.validate(
      AddressValidation.CREATE,
      request
    );

    // check contact ada atau tidak
    await ContactService.checkContactMustExist(
      user.username,
      request.contact_id
    );

    // create address nya
    const address = await prismaClient.address.create({
      data: createRequest,
    });

    return toAddressResponse(address);
  }

  static async get(
    user: User,
    request: GetAddressRequest // kalo parameter banyak bisa di buat menjadi object type
  ): Promise<AddressResponse> {
    // validation
    const getRequest = Validation.validate(AddressValidation.GET, request);

    // check contact ada atau tidak
    await ContactService.checkContactMustExist(
      user.username,
      request.contact_id
    );

    // cari address by id dan contact id
    const address = await prismaClient.address.findFirst({
      where: {
        id: getRequest.id,
        contact_id: getRequest.contact_id,
      },
    });

    // handling error
    if (!address) {
      throw new ResponseError(404, "Address is not found");
    }

    //return
    return toAddressResponse(address);
  }
}
