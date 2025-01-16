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
exports.ContactService = void 0;
const contact_model_1 = require("../model/contact-model");
const contact_validation_1 = require("../validation/contact-validation");
const validation_1 = require("../validation/validation");
const database_1 = require("../application/database");
const logging_1 = require("../application/logging");
const response_error_1 = require("../error/response-error");
class ContactService {
    static create(user, request) {
        return __awaiter(this, void 0, void 0, function* () {
            // validation data
            const createContact = validation_1.Validation.validate(contact_validation_1.ContactValidation.CREATE, request);
            // buat object baru utk menambahkan username, karena type createContact tidak ada username
            const record = Object.assign(Object.assign({}, createContact), { username: user.username });
            //insert ke database
            const contact = yield database_1.prismaClient.contact.create({
                data: record,
            });
            // logger.info(contact);
            logging_1.logger.debug("record : " + JSON.stringify(contact));
            return (0, contact_model_1.toContactResponse)(contact);
        });
    }
    //114 - refactor code use function for search contact for get and update
    static checkContactMustExist(username, contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            // cari contact by id dan username agar pasti
            const contact = yield database_1.prismaClient.contact.findFirst({
                where: {
                    id: contactId,
                    username: username,
                },
            });
            // checking contact is define or undefine
            if (!contact) {
                throw new response_error_1.ResponseError(404, "Contact not found");
            }
            return contact;
        });
    }
    // get contact
    static get(user, id) {
        return __awaiter(this, void 0, void 0, function* () {
            // cari contact by id dan username agar pasti
            const contact = yield this.checkContactMustExist(user.username, id);
            // return the promise
            return (0, contact_model_1.toContactResponse)(contact);
        });
    }
    // 114 - Update Contact
    static update(user, request) {
        return __awaiter(this, void 0, void 0, function* () {
            // validation
            const updateRequest = validation_1.Validation.validate(contact_validation_1.ContactValidation.UPDATE, request);
            // search contact
            yield this.checkContactMustExist(user.username, updateRequest.id);
            // update ke database data nya
            const contact = yield database_1.prismaClient.contact.update({
                where: {
                    id: updateRequest.id,
                    username: user.username,
                },
                data: updateRequest,
            });
            // return data yang sudah di update
            return (0, contact_model_1.toContactResponse)(contact);
        });
    }
    // 115- REMOVE
    static remove(user, id) {
        return __awaiter(this, void 0, void 0, function* () {
            // check contact
            yield this.checkContactMustExist(user.username, id);
            // hapus contact
            const contact = yield database_1.prismaClient.contact.delete({
                where: {
                    id: id,
                    username: user.username,
                },
            });
            return (0, contact_model_1.toContactResponse)(contact);
        });
    }
    // 116 -SEARCH
    static search(user, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchRequest = validation_1.Validation.validate(contact_validation_1.ContactValidation.SEARCH, request);
            // skip adalah page saat ini dikali jumlah per page nya
            const skip = (searchRequest.page - 1) * searchRequest.size;
            // buat dynamic filter
            const filters = [];
            // check if name exists
            if (searchRequest.name) {
                filters.push({
                    OR: [
                        {
                            first_name: {
                                contains: searchRequest.name,
                            },
                        },
                        {
                            last_name: {
                                contains: searchRequest.name,
                            },
                        },
                    ],
                });
            }
            // check if email exists
            if (searchRequest.email) {
                filters.push({
                    email: {
                        contains: searchRequest.email,
                    },
                });
            }
            // check if phone exists
            if (searchRequest.phone) {
                filters.push({
                    phone: {
                        contains: searchRequest.phone,
                    },
                });
            }
            // cara ke database
            const contacts = yield database_1.prismaClient.contact.findMany({
                where: {
                    username: user.username,
                    AND: filters,
                },
                take: searchRequest.size, // paging yang kita ambil dari search
                skip: skip,
            });
            const total = yield database_1.prismaClient.contact.count({
                where: {
                    username: user.username,
                    AND: filters,
                },
            });
            // return dalam bentuk type pageable
            return {
                data: contacts.map((contact) => (0, contact_model_1.toContactResponse)(contact)),
                paging: {
                    current_page: searchRequest.page,
                    total_page: Math.ceil(total / searchRequest.size),
                    size: searchRequest.size,
                },
            };
        });
    }
}
exports.ContactService = ContactService;
