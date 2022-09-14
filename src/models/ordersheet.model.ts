import { Product } from "./product.model";

export class OrderSheet {
  buyer = {
    name: "김넘블",
    email: "test@numble.it",
    phoneNumber: "01012341234",
  };
  address: Address;
  orderItems: {
    product: Product;
    quantity: number;
  }[];
  coupons = [];
  coupangCash = Math.floor(Math.random() * 5) * 1000 + 3000;
  coupayMoney = Math.floor(Math.random() * 3) * 1000;

  static generate(products: Product[]): OrderSheet {
    const res = new OrderSheet();

    res.address = [...addresses].sort(() => Math.random() - 0.5)[0];
    res.orderItems = products.map((product) => ({
      product,
      quantity: Math.floor(Math.random() * 2) + 1,
    }));

    return res;
  }
}

export class Address {
  id: number;
  receiver: string;
  phoneNumber: string;
  base: string;
  detail: string;
  isFreshAvailable: boolean;
  isWowAAvailable: boolean;
}

export const addresses: Address[] = [
  {
    id: 1,
    receiver: "김넘블",
    phoneNumber: "010-1234-1234",
    base: "서울특별시 넘블구 쿠팡로 11",
    detail: "101동 101호",
    isFreshAvailable: true,
    isWowAAvailable: false,
  },
  {
    id: 2,
    receiver: "박새로이",
    phoneNumber: "010-5678-5678",
    base: "서울특별시 용산구 이태원로 11",
    detail: "202동 202호",
    isFreshAvailable: false,
    isWowAAvailable: true,
  },
];
