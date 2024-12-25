import { User } from "@prisma/client";

export type UserResponse = {
  username: string;
  name: string;
  token?: string;
};

// Register
export type CreateUserRequest = {
  username: string;
  password: string;
  name: string;
};

// Login
export type LoginUserRequest = {
  username: string;
  password: string;
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
