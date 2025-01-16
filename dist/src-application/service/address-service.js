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
exports.AddressService = void 0;
const address_model_1 = require("../model/address-model");
const validation_1 = require("../validation/validation");
const address_validation_1 = require("../validation/address-validation");
const contact_service_1 = require("./contact-service");
const database_1 = require("../application/database");
const response_error_1 = require("../error/response-error");
class AddressService {
    static create(user, request) {
        return __awaiter(this, void 0, void 0, function* () {
            // validation
            const createRequest = validation_1.Validation.validate(address_validation_1.AddressValidation.CREATE, request);
            // check contact ada atau tidak
            yield contact_service_1.ContactService.checkContactMustExist(user.username, request.contact_id);
            // create address nya
            const address = yield database_1.prismaClient.address.create({
                data: createRequest,
            });
            return (0, address_model_1.toAddressResponse)(address);
        });
    }
    // 118 - 119 Check address must exist
    static checkAddressMustExists(contactId, addressId) {
        return __awaiter(this, void 0, void 0, function* () {
            // cari address by id dan contact id
            const address = yield database_1.prismaClient.address.findFirst({
                where: {
                    id: addressId,
                    contact_id: contactId,
                },
            });
            // handling error
            if (!address) {
                throw new response_error_1.ResponseError(404, "Address is not found");
            }
            return address;
        });
    }
    //118 - GET
    static get(user, request // kalo parameter banyak bisa di buat menjadi object type
    ) {
        return __awaiter(this, void 0, void 0, function* () {
            // validation
            const getRequest = validation_1.Validation.validate(address_validation_1.AddressValidation.GET, request);
            // check contact ada atau tidak
            yield contact_service_1.ContactService.checkContactMustExist(user.username, request.contact_id);
            const address = yield this.checkAddressMustExists(getRequest.contact_id, getRequest.id);
            //return
            return (0, address_model_1.toAddressResponse)(address);
        });
    }
    //119 - UPDATE
    static update(user, request) {
        return __awaiter(this, void 0, void 0, function* () {
            //validation
            const updateRequest = validation_1.Validation.validate(address_validation_1.AddressValidation.UPDATE, request);
            // check contact and address exist
            yield contact_service_1.ContactService.checkContactMustExist(user.username, request.contact_id);
            yield this.checkAddressMustExists(updateRequest.contact_id, updateRequest.id);
            // update to database
            const address = yield database_1.prismaClient.address.update({
                where: {
                    id: updateRequest.id,
                    contact_id: updateRequest.contact_id,
                },
                data: updateRequest,
            });
            return (0, address_model_1.toAddressResponse)(address);
        });
    }
    // Remove Address
    static remove(user, request) {
        return __awaiter(this, void 0, void 0, function* () {
            // check validation
            const removeRequest = validation_1.Validation.validate(address_validation_1.AddressValidation.REMOVE, request);
            // cehck contact and address
            yield contact_service_1.ContactService.checkContactMustExist(user.username, request.contact_id);
            yield this.checkAddressMustExists(removeRequest.contact_id, removeRequest.id);
            // delete data
            const address = yield database_1.prismaClient.address.delete({
                where: {
                    id: removeRequest.id,
                },
            });
            return (0, address_model_1.toAddressResponse)(address);
        });
    }
    // 121 - List Address
    // return nya di kirim dalam bentuk array generic
    static list(user, contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            // check contact
            yield contact_service_1.ContactService.checkContactMustExist(user.username, contactId);
            // cari seluruh address by contact id
            const addresses = yield database_1.prismaClient.address.findMany({
                where: {
                    contact_id: contactId,
                },
            });
            // retun ke bentuk nya pakai map agar semua nya berubah sesuai bentuk nya
            return addresses.map((address) => (0, address_model_1.toAddressResponse)(address));
        });
    }
}
exports.AddressService = AddressService;
