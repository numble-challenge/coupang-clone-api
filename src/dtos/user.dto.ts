import { User } from "@/types";

export class UserDto {
  static from(
    user: User
  ): Omit<User, "password" | "agreements" | "phoneNumber"> {
    const { password, agreements, phoneNumber, ...rest } = user;

    return rest;
  }
}
