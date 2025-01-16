"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toContactResponse = toContactResponse;
// utk konversi dari prisma
function toContactResponse(contact) {
    return {
        id: contact.id,
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email,
        phone: contact.phone,
    };
}
