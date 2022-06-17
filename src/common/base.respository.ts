import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
});

export abstract class BaseRepository<Entity> {
  protected abstract name: string;

  private async generateId(): Promise<number> {
    const key = `${this.name}:latest-id`;
    const latest = await redis.get<number>(key);

    const id = Number(latest ?? 0) + 1;
    await redis.set<number>(key, id);

    return id;
  }

  private getKey(id: number): string {
    return `${this.name}:${id}`;
  }

  async check(id: number): Promise<boolean> {
    const key = this.getKey(id);
    const res = await redis.get<Entity>(key);
    return res != null;
  }

  async get(id: number): Promise<Entity> {
    const key = this.getKey(id);
    const res = await redis.get<Entity>(key);
    if (!res) {
      throw new Error("Entity not found");
    }
    return res;
  }

  async create(input: Partial<Entity>) {
    const id = await this.generateId();

    const key = this.getKey(id);

    const user = {
      id,
      ...input,
    };

    await redis.set(key, user);

    return user;
  }
}
