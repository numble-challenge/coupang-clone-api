import { BaseRepository } from "@/common";
import { User } from "@/types";

class UserRepository extends BaseRepository<User, "email"> {
  name = "user";

  protected getKey(input: Pick<User, "email">): string {
    return `${this.name}:${input.email}`;
  }
}

export default new UserRepository();
