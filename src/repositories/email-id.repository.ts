import { redis } from "@/common";

class EmailRepository {
  private getKey(email: string): string {
    return `email:${email}`;
  }

  async check(email: string): Promise<boolean> {
    const key = this.getKey(email);
    const res = await redis.get<string>(key);
    return res != null;
  }

  async get(email: string): Promise<number> {
    const key = this.getKey(email);
    return Number(await redis.get<number>(key));
  }

  async create(email: string, id: number) {
    const key = this.getKey(email);
    await redis.set(key, email);
  }
}

export default new EmailRepository();
