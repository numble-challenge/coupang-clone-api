import { BaseRepository } from "@/common";
import { User } from "@/types";

class UserRepository extends BaseRepository<User> {
  name = "user";
}

export default new UserRepository();
