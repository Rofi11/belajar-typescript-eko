import { NextFunction, Response } from "express";
import { UserRequest } from "../type/user-request";
import {
  CreateAddressRequest,
  GetAddressRequest,
  RemoveAddressRequest,
  UpdateAddressRequest,
} from "../model/address-model";
import { AddressService } from "../service/address-service";

export class AddressController {
  static async create(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: CreateAddressRequest = req.body as CreateAddressRequest;
      // ambil params
      request.contact_id = Number(req.params.contactId);

      const response = await AddressService.create(req.user!, request);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  //118 - GET
  static async get(req: UserRequest, res: Response, next: NextFunction) {
    try {
      // ambil params
      const request: GetAddressRequest = {
        id: Number(req.params.addressId),
        contact_id: Number(req.params.contactId),
      };

      const response = await AddressService.get(req.user!, request);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  //119 - UPDATE
  static async update(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: UpdateAddressRequest = req.body as UpdateAddressRequest;
      // ambil params
      request.contact_id = Number(req.params.contactId);
      request.id = Number(req.params.addressId);

      const response = await AddressService.update(req.user!, request);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  //120 - REMOVE
  static async remove(req: UserRequest, res: Response, next: NextFunction) {
    try {
      // ambil params
      const request: RemoveAddressRequest = {
        id: Number(req.params.addressId),
        contact_id: Number(req.params.contactId),
      };

      const response = await AddressService.remove(req.user!, request);
      res.status(200).json({
        data: "ok",
      });
    } catch (e) {
      next(e);
    }
  }

  //121 - list
  static async list(req: UserRequest, res: Response, next: NextFunction) {
    try {
      // ambil params
      const contactId = Number(req.params.contactId);

      const response = await AddressService.list(req.user!, contactId);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
}
