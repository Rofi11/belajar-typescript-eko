import { Address, User } from "@prisma/client";
import {
  AddressResponse,
  CreateAddressRequest,
  GetAddressRequest,
  RemoveAddressRequest,
  toAddressResponse,
  UpdateAddressRequest,
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

  // 118 - 119 Check address must exist
  static async checkAddressMustExists(
    contactId: number,
    addressId: number
  ): Promise<Address> {
    // cari address by id dan contact id
    const address = await prismaClient.address.findFirst({
      where: {
        id: addressId,
        contact_id: contactId,
      },
    });

    // handling error
    if (!address) {
      throw new ResponseError(404, "Address is not found");
    }

    return address;
  }

  //118 - GET
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

    const address = await this.checkAddressMustExists(
      getRequest.contact_id,
      getRequest.id
    );

    //return
    return toAddressResponse(address);
  }

  //119 - UPDATE
  static async update(
    user: User,
    request: UpdateAddressRequest
  ): Promise<AddressResponse> {
    //validation
    const updateRequest = Validation.validate(
      AddressValidation.UPDATE,
      request
    );
    // check contact and address exist
    await ContactService.checkContactMustExist(
      user.username,
      request.contact_id
    );
    await this.checkAddressMustExists(
      updateRequest.contact_id,
      updateRequest.id
    );

    // update to database
    const address = await prismaClient.address.update({
      where: {
        id: updateRequest.id,
        contact_id: updateRequest.contact_id,
      },
      data: updateRequest,
    });

    return toAddressResponse(address);
  }

  // Remove Address
  static async remove(
    user: User,
    request: RemoveAddressRequest
  ): Promise<AddressResponse> {
    // check validation
    const removeRequest = Validation.validate(
      AddressValidation.REMOVE,
      request
    );
    // cehck contact and address
    await ContactService.checkContactMustExist(
      user.username,
      request.contact_id
    );
    await this.checkAddressMustExists(
      removeRequest.contact_id,
      removeRequest.id
    );

    // delete data
    const address = await prismaClient.address.delete({
      where: {
        id: removeRequest.id,
      },
    });

    return toAddressResponse(address);
  }

  // 121 - List Address
  // return nya di kirim dalam bentuk array generic
  static async list(
    user: User,
    contactId: number
  ): Promise<Array<AddressResponse>> {
    // check contact
    await ContactService.checkContactMustExist(user.username, contactId);

    // cari seluruh address by contact id
    const addresses = await prismaClient.address.findMany({
      where: {
        contact_id: contactId,
      },
    });

    // retun ke bentuk nya pakai map agar semua nya berubah sesuai bentuk nya
    return addresses.map((address) => toAddressResponse(address));
  }
}
