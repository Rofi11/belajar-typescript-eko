import { User } from "@prisma/client";

export type UserResponse = {
  username: string;
  name: string;
  token?: string;
};

// 107 -Register
export type CreateUserRequest = {
  username: string;
  password: string;
  name: string;
};

// 108 - Login
export type LoginUserRequest = {
  username: string;
  password: string;
};

// 110 - Update
export type UpdateUserRequest = {
  password?: string;
  name?: string;
};

export const registerRequest: CreateUserRequest = {
  username: "test",
  password: "test",
  name: "test",
};

export function toUserResponse(user: User): UserResponse {
  return {
    name: user.name,
    username: user.username,
  };
}
