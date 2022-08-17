import { add, format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export type ProductInput = Omit<
  Product,
  "maxPoint" | "expectedDeliveryDate" | "isAssured" | "isEarlyDelivery"
>;

export class Product {
  id: number;
  name: string;
  imageUrl: string;
  rocketType?: "normal" | "wow" | "fresh";
  rating: number;
  reviewCount: number;

  originalPrice: number;
  salePrice?: number;
  wowPrice?: number;
  /** gram */
  weight?: number;

  shippinFee?: number;
  isRecommended?: boolean;
  isMdRecommended?: boolean;
  isSoldout?: boolean;

  maxPoint: number;
  /** yyyy-MM-dd */
  expectedDeliveryDate: string;
  isAssured: boolean;
  isEarlyDelivery: boolean;

  static from(input: ProductInput): Product {
    const product = new Product();

    Object.entries(input).forEach(([key, value]) => {
      product[key] = value;
    });

    if (!product.rocketType) {
      product.rocketType = null;
    }
    if (!product.weight) {
      product.weight = null;
    }
    if (!product.salePrice) {
      product.salePrice = product.originalPrice;
    }
    if (!product.wowPrice) {
      product.wowPrice = product.salePrice;
    }
    if (!product.shippinFee) {
      product.shippinFee = 0;
    }
    if (!product.isRecommended) {
      product.isRecommended = false;
    }
    if (!product.isMdRecommended) {
      product.isMdRecommended = false;
    }
    if (!product.isSoldout) {
      product.isSoldout = false;
    }

    product.maxPoint = Math.floor(product.wowPrice / 20);

    const today = utcToZonedTime(new Date(), "Asia/Seoul");
    let expected: Date;
    switch (product.rocketType) {
      case "fresh":
      case "wow":
        expected = add(today, { days: 1 });
        break;
      case "normal":
        expected = add(today, { days: 1 });
        break;
      default:
        expected = add(today, { days: Math.floor(Math.random() * 3) + 2 });
        break;
    }

    product.expectedDeliveryDate = format(expected, "yyyy-MM-dd");
    product.isAssured = product.rocketType != null;
    product.isEarlyDelivery =
      product.rocketType === "fresh" || product.rocketType === "wow";

    return product;
  }
}
