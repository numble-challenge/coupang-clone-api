import { User } from "@/types";

export class UserDto {
  static from(user: User): Omit<User, "password"> {
    const { password, ...rest } = user;

    return rest;
  }
}
