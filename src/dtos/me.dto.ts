import { User } from "@/types";

export class MeDto {
  static from(user: User): Omit<User, "password"> {
    const { password, ...rest } = user;

    return rest;
  }
}
