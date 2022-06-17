import { BaseRepository } from "@/common";
import { User } from "@/types";

import EmailRepository from "./email-id.repository";

class UserRepository extends BaseRepository<User> {
  name = "user";

  async checkEmail(email: string): Promise<boolean> {
    return await EmailRepository.check(email);
  }

  async findByEmail(email: string): Promise<User> {
    const id = await EmailRepository.get(email);
    return await this.get(id);
  }

  async create(input: Partial<User>) {
    const user = await super.create(input);
    await EmailRepository.create(input.email!, user.id);
    return user;
  }
}

export default new UserRepository();
