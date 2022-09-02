import { redis } from "@/common";
import { Product } from "@/models";

let cartItemId = 1;

type CartItem = {
  id: number;
  quantity: number;
  product: Product;
};

class CartRepository {
  private getKey(userId: number): string {
    return `cart:${userId}`;
  }

  async get(userId: number): Promise<CartItem[]> {
    const key = this.getKey(userId);
    return (await redis.get(key)) ?? [];
  }

  async clear(userId: number) {
    await redis.set(this.getKey(userId), []);
  }

  async update(userId: number, itemId: number, partial: Partial<CartItem>) {
    const items = await this.get(userId);

    const index = items.findIndex((v) => v.id === itemId);
    await redis.set(this.getKey(userId), [
      ...items.slice(0, index),
      {
        ...items[index],
        ...partial,
      },
      ...items.slice(index + 1),
    ]);
  }

  async delete(userId: number, itemId: number) {
    const items = await this.get(userId);

    const index = items.findIndex((v) => v.id === itemId);
    await redis.set(this.getKey(userId), [
      ...items.slice(0, index),
      ...items.slice(index + 1),
    ]);
  }

  async reset(userId: number, products: Product[]) {
    const key = this.getKey(userId);
    const cartItems = products.map((product) => ({
      id: cartItemId++,
      quantity: 1,
      product,
    }));
    return await redis.set(key, cartItems);
  }
}

export default new CartRepository();
