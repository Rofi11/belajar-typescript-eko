import { Address } from "@prisma/client";

// 117 - Create address
// samakan dengan yang di schema prisma
export type AddressResponse = {
  id: number;
  street?: string | null;
  city?: string | null;
  provience?: string | null;
  country: string;
  postal_code: string;
};

export type CreateAddressRequest = {
  contact_id: number;
  street?: string;
  city?: string;
  provience?: string;
  country: string;
  postal_code: string;
};

//118 - type untuk parameter, jika sudah kebanyakan parameter nya bisa di buat menjadi type object
export type GetAddressRequest = {
  id: number;
  contact_id: number;
};

//119 - Update
export type UpdateAddressRequest = {
  id: number;
  contact_id: number;
  street?: string;
  city?: string;
  provience?: string;
  country: string;
  postal_code: string;
};

//120 - Remove
export type RemoveAddressRequest = GetAddressRequest; // karena sama

// utk konversi ke address response
export function toAddressResponse(address: Address): AddressResponse {
  return {
    id: address.id,
    street: address.street,
    city: address.city,
    provience: address.provience,
    country: address.country,
    postal_code: address.postal_code,
  };
}
