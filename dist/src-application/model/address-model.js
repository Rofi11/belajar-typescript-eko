"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAddressResponse = toAddressResponse;
// utk konversi ke address response
function toAddressResponse(address) {
    return {
        id: address.id,
        street: address.street,
        city: address.city,
        provience: address.provience,
        country: address.country,
        postal_code: address.postal_code,
    };
}
