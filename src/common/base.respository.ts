import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
});

export abstract class BaseRepository<Entity, PK extends keyof Entity> {
  protected abstract name: string;

  protected abstract getKey(input: Pick<Entity, PK>): string;

  async check(input: Pick<Entity, PK>): Promise<boolean> {
    const key = this.getKey(input);
    const res = await redis.get<Entity>(key);
    return res != null;
  }

  async get(input: Pick<Entity, PK>): Promise<Entity> {
    const key = this.getKey(input);
    const res = await redis.get<Entity>(key);
    if (!res) {
      throw new Error("Entity not found");
    }
    return res;
  }

  async create(input: Pick<Entity, PK> & Partial<Entity>) {
    const key = this.getKey(input);
    await redis.set(key, JSON.stringify(input));
  }
}
