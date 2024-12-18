<!-- Dokumentasi API -->

# User API Spec

## Register User

    Endpoint : POST /api/users/register

Request Body :

```json
{
  "username": "Khannedy",
  "password": "rahasia",
  "name": "Eko Khannedy"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "Khannedy",
    "name": "Eko Khannedy"
  }
}
```

Response Body (failed) :

```json
{
  "errors": "Username must not blank"
}
```

## Login User

    Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "Khannedy",
  "password": "rahasia"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "Khannedy",
    "name": "Eko Khannedy",
    "token": "uuid"
  }
}
```

Response Body (failed) :

```json
{
  "errors": "Username or password wrong"
}
```

## Get User

    Endpoint : GET /api/users/current

Request Header :

- X-API_TOKEN : token(uuid)

Request Body (Success):

```json
{
    "username" : "Khannedy",
    "password" : "rahasia",
    "name" : "Eko Khannedy
}
```

Response Body (failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Update User

    Endpoint : PACTH /api/users/update

Request Header :

- X-API_TOKEN : token(uuid)

Request Body :

```json
{
  "password": "rahasia", // tidak wajib
  "name": "Eko Khannedy" // tidak wajib
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "Khannedy",
    "name": "Eko Khannedy"
  }
}
```

Response Body (failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```

## Logout User

    Endpoint : DELETE /api/users/logout

Request Header :

- X-API_TOKEN : token(uuid)

Response Body (Success):

```json
{
  "data": "Data Sudah Terdelete"
}
```

Response Body (failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```
