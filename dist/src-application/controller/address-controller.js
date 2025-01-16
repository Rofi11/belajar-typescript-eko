"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressController = void 0;
const address_service_1 = require("../service/address-service");
class AddressController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                // ambil params
                request.contact_id = Number(req.params.contactId);
                const response = yield address_service_1.AddressService.create(req.user, request);
                res.status(200).json({
                    data: response,
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    //118 - GET
    static get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // ambil params
                const request = {
                    id: Number(req.params.addressId),
                    contact_id: Number(req.params.contactId),
                };
                const response = yield address_service_1.AddressService.get(req.user, request);
                res.status(200).json({
                    data: response,
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    //119 - UPDATE
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                // ambil params
                request.contact_id = Number(req.params.contactId);
                request.id = Number(req.params.addressId);
                const response = yield address_service_1.AddressService.update(req.user, request);
                res.status(200).json({
                    data: response,
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    //120 - REMOVE
    static remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // ambil params
                const request = {
                    id: Number(req.params.addressId),
                    contact_id: Number(req.params.contactId),
                };
                const response = yield address_service_1.AddressService.remove(req.user, request);
                res.status(200).json({
                    data: "ok",
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    //121 - list
    static list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // ambil params
                const contactId = Number(req.params.contactId);
                const response = yield address_service_1.AddressService.list(req.user, contactId);
                res.status(200).json({
                    data: response,
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.AddressController = AddressController;
