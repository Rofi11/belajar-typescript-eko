import { NextFunction, Response } from "express";
import { UserRequest } from "../type/user-request";
import {
  CreateContactRequest,
  SearchContactRequest,
  UpdateContactRequest,
} from "../model/contact-model";
import { ContactService } from "../service/contact-service";
import { logger } from "../application/logging";

// UserRequest adalah data yang sudah login
export class ContactController {
  static async create(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: CreateContactRequest = req.body as CreateContactRequest;
      const response = await ContactService.create(req.user!, request);
      logger.debug("response controller: " + JSON.stringify(response));
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async get(req: UserRequest, res: Response, next: NextFunction) {
    try {
      // terima params id
      const contactId = Number(req.params.contactId);
      const response = await ContactService.get(req.user!, contactId);
      logger.debug("response controller: " + JSON.stringify(response));
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async update(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: UpdateContactRequest = req.body as UpdateContactRequest;
      request.id = Number(req.params.contactId);

      const response = await ContactService.update(req.user!, request);
      logger.debug("response controller: " + JSON.stringify(response));
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async remove(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const contactId = Number(req.params.contactId);

      const response = await ContactService.remove(req.user!, contactId);
      logger.debug("response controller: " + JSON.stringify(response));
      res.status(200).json({
        data: "Successfull Remove Contact",
      });
    } catch (e) {
      next(e);
    }
  }

  static async search(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: SearchContactRequest = {
        name: req.query.name as string,
        email: req.query.email as string,
        phone: req.query.phone as string,
        page: req.query.page ? Number(req.query.page) : 1,
        size: req.query.size ? Number(req.query.size) : 10,
      };

      const response = await ContactService.search(req.user!, request);
      logger.debug("response controller: " + JSON.stringify(response));
      // langsung response karena dari service nya sudah di bentuk return nya
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  }
}
