# Address API Spec

## Create Address

Endpoint : POST /api/contacts/:idContacts/addresses

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "street": "jalan apa",
  "city": "kota apa",
  "provience": "Provinsi apa",
  "country": "Negara apa",
  "postal_code": "23123"
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "street": "jalan apa",
    "city": "kota apa",
    "provience": "Provinsi apa",
    "country": "Negara apa",
    "postal_code": "23123"
  }
}
```

Response Body (failed):

```json
{
  "errors": "postal_code is required"
}
```

## Get Address

Endpoint : GET /api/contacts/:idContacts/addresses/:idAddress

Request Header :

- X-API-TOKEN : token

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "street": "jalan apa",
    "city": "kota apa",
    "provience": "Provinsi apa",
    "country": "Negara apa",
    "postal_code": "23123"
  }
}
```

Response Body (failed):

```json
{
  "errors": "address is not found"
}
```

## Update Address

Endpoint : PUT /api/contacts/:idContacts/addresses/:idAddress

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "street": "jalan apa",
  "city": "kota apa",
  "provience": "Provinsi apa",
  "country": "Negara apa",
  "postal_code": "23123"
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "street": "jalan apa",
    "city": "kota apa",
    "provience": "Provinsi apa",
    "country": "Negara apa",
    "postal_code": "23123"
  }
}
```

Response Body (failed):

```json
{
  "errors": "postal_code is required"
}
```

## Remove Address

Endpoint : DELETE /api/contacts/:idContacts/addresses

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "street": "jalan apa",
  "city": "kota apa",
  "provience": "Provinsi apa",
  "country": "Negara apa",
  "postal_code": "23123"
}
```

Response Body (Success):

```json
{
  "data": "data has beeen delete"
}
```

Response Body (failed):

```json
{
  "errors": "Address is not found"
}
```

## List Address

Endpoint : GET /api/contacts/:idContacts/addresses

Request Header :

- X-API-TOKEN : token

Response Body (Success):

```json
{
  "data": [
    {
      "id": 1,
      "street": "jalan apa",
      "city": "kota apa",
      "provience": "Provinsi apa",
      "country": "Negara apa",
      "postal_code": "23123"
    },
    {
      "id": 2,
      "street": "jalan apa",
      "city": "kota apa",
      "provience": "Provinsi apa",
      "country": "Negara apa",
      "postal_code": "23123"
    }
  ]
}
```

Response Body (failed):

```json
{
  "errors": "contact is not found"
}
```
