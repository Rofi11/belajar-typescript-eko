import { User } from "@prisma/client";
import {
  AddressResponse,
  CreateAddressRequest,
  toAddressResponse,
} from "../model/address-model";
import { Validation } from "../validation/validation";
import { AddressValidation } from "../validation/address-validation";
import { ContactService } from "./contact-service";
import { prismaClient } from "../application/database";

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
}
