import type { NextApiRequest, NextApiResponse } from "next";

import { bearer, cors } from "@/lib";
import { OrderSheet, Product, ProductInput } from "@/models";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res
      .status(404)
      .send(`Cannot ${req.method} /api/ordersheet/${req.query.id}`);
  }

  try {
    bearer(req, "access");
  } catch {
    res.status(401).send("Unauthorized");
  }

  if (isNaN(Number(req.query.id))) {
    res.status(400).send("id must be numeric string");
  }

  const randomProducts = PRODUCTS.sort(() => Math.random() - 0.5);
  res.status(200).json(OrderSheet.generate(randomProducts.slice(0, 3)));
});

const PRODUCT_DATAS: Omit<ProductInput, "id">[] = [
  {
    name: "하이프루츠 썸머킹 초록사과, 1.5kg (7~10과이내), 1봉",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/96781935503599-edf7f2b3-20a6-43f5-b9a8-563b1e95a766.jpg",
    rocketType: "fresh",
    rating: 4.1,
    reviewCount: 1038,
    originalPrice: 12900,
    salePrice: 11900,
    weight: 1500,
  },
  {
    name: "국내산 당도선별 안동세척 사과, 2kg(7~12입), 1개",
    imageUrl:
      "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4077982470539041-30b735f9-2b8c-41c4-9e36-7581ea5c567b.jpg",
    rocketType: "fresh",
    rating: 4.05,
    reviewCount: 13440,
    originalPrice: 14800,
    weight: 2000,
    isRecommended: true,
  },
  {
    name: "고산지 재배 당도선별 사과, 1.5kg(5~8입), 1봉",
    imageUrl:
      "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3635426609598639-dc57d54a-ee74-4ea9-8996-51423d0f399f.jpg",
    rocketType: "fresh",
    rating: 4.5,
    reviewCount: 40232,
    originalPrice: 11800,
    salePrice: 11800,
    weight: 1500,
  },
  {
    name: "풍기 아오리 사과, 2kg(9~12입), 1박스",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2019/07/29/10/7/ad3c5ef1-4bf7-4337-8c53-e16f50b124f9.jpg",
    rocketType: "fresh",
    rating: 4.52,
    reviewCount: 988,
    originalPrice: 16900,
    weight: 2000,
  },
  {
    name: "아오리사과 4kg 정말 맛있는 사과 농원직송, 1박스, 4kg(아오리사과/29과 내외)",
    imageUrl:
      "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/0186/e5d9648d9a888d0c9b1a008bf65ea124bf72df2032319b60436882e590a0.png",
    rating: 3.02,
    reviewCount: 272,
    originalPrice: 12700,
    weight: 4000,
  },
  {
    name: "하이푸르츠 저탄소 인증 초록 사과, 2.0kg, 1박스",
    imageUrl:
      "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1013453335042571-7226a723-8b83-4dcf-8204-9e2f12845477.jpg",
    rocketType: "fresh",
    rating: 3.3,
    reviewCount: 1723,
    originalPrice: 13900,
    weight: 2000,
  },
  {
    name: "새콤달콤 맛있는 아오리 햇 사과, 한입 사과 4.5KG",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/662b/898ebb9dd3a8c231abb424e05aaa587c5cf40a7e1aa394a0646ba5995da0.jpg",
    rating: 3.7,
    reviewCount: 634,
    originalPrice: 16900,
    salePrice: 14500,
    wowPrice: 13500,
    weight: 4500,
  },
  {
    name: "곰곰 국내산 배 1입, 1팩",
    imageUrl:
      "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/7456412074733413-dbcbab67-dbf6-4a43-b9c5-843864829b55.jpg",
    rocketType: "fresh",
    rating: 4.23,
    reviewCount: 121,
    originalPrice: 7990,
    salePrice: 6980,
  },
  {
    name: "하이프루츠 저탄소 인증 초록 사과, 1kg(특, 4입), 1팩",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2019/07/11/11/0/04dba802-c84a-415f-b7c9-8e0b57239fb7.jpg",
    rocketType: "fresh",
    rating: 4.01,
    reviewCount: 1723,
    originalPrice: 10900,
    weight: 1000,
  },
  {
    name: "곰곰 아오리사과, 1.5kg, 1봉",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1417676458557037-2dfbe038-25aa-4c69-bb2e-080318d182dc.jpg",
    rocketType: "fresh",
    rating: 4.24,
    reviewCount: 136,
    originalPrice: 11240,
    weight: 1500,
  },
  {
    name: "22년 햇 홍로사과 안심세척사과 안심포장 안동사과 2.5kg, 홍로 세척사과소2.5kg(13~18과)",
    imageUrl:
      "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7dc5/9e9a151d61f209b0e76214f6dc08e0161c9cee47a585c75815f6888bc5da.png",
    rating: 4.91,
    reviewCount: 73,
    originalPrice: 20000,
    salePrice: 15500,
  },
  {
    name: "정성담은 아삭한 사과, 가정용 사과 10kg 중대과",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c27f/b772b8250de270f14ff2d3e5aec8ed099cc22990f5aa5e05cd92623bfd97.png",
    rating: 4.33,
    reviewCount: 1733,
    originalPrice: 37800,
  },
  {
    name: "산지직송 경북 청송 꿀 사과 부사 가정용 중대과 9kg",
    imageUrl:
      "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/6ff6/12832a50df3aaa2fff8fc9390190a3329a471e127659168a1bb0200390d9.png",
    rating: 2.5,
    reviewCount: 103,
    originalPrice: 23860,
  },
  {
    name: "늘품 가정용 껍질채먹는 흠집 아오리 사과 안동 청송사과 못난이 경북사과 5kg 10kg, 꿀맛 햇 아오리 꼬마 5kg (31-35과)",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/62a3/93baca2975a48a5fa4e5777373e28ccbf938748c57b6c29008a0b899d173.jpg",
    rating: 1.3,
    reviewCount: 3945,
    originalPrice: 11900,
  },
  {
    name: "[영주마실] 아오리 새콤달콤 한입사과 5KG 여름의 왕",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/62a3/93baca2975a48a5fa4e5777373e28ccbf938748c57b6c29008a0b899d173.jpg",
    rating: 2.2,
    reviewCount: 226,
    originalPrice: 18330,
  },

  {
    name: "껍질째먹는 훈이네 경북 부사 청송 꿀사과, 혼합3KG",
    imageUrl:
      "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/fee1/72dc9f71ff2582823db20d486e6bf46de6dc6c313f079ea1a8261cd9e8d0.jpg",
    rating: 3.11,
    reviewCount: 2260,
    originalPrice: 15900,
  },
  {
    name: "푸드베이스 산지직송 초록사과, 4kg(19~24입), 1개",
    imageUrl:
      "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2022/07/19/16/7/b728b92e-f1f0-4cb0-879e-ac2bbffdeed6.jpg",
    rocketType: "fresh",
    rating: 2.99,
    reviewCount: 1353,
    originalPrice: 14600,
  },
  {
    name: "과일꾼 나주배 가정용 / 특품 / 과일선물세트, 1box, 가정용 5kg 12과내",
    imageUrl:
      "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/cfcc/3c446a854c7089f4d5c43c963a86561255e8abd73a6cef16c79af125e511.jpg",
    rating: 3.12,
    reviewCount: 1234,
    originalPrice: 15200,
  },
  {
    name: "[햇살가득] 경북 가정용 햇 사과 2.5kg (18~15과), 상세 설명 참조",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3a43/4f4283aa1b625ca16fc525ccbe5986a22fd4d74849314cacb6ef879721d2.jpg",
    rating: 4.19,
    reviewCount: 4123,
    originalPrice: 22900,
    salePrice: 17860,
  },
  {
    name: "산지직송 경북 꿀 사과 꿀 부사 청송 가정용 중과 대과 특과 10kg",
    imageUrl:
      "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/8c44/fcb6e70a451490c239cc6378ea0563f3101e95d66c11488e38877c5ffa06.png",
    rating: 4.212,
    reviewCount: 226,
    originalPrice: 18800,
    salePrice: 14800,
  },
  {
    name: "[은하수농장] 가정용 꿀사과 특가판매, 1박스, 03.가정용흠과 사과 2KG/ 소과",
    imageUrl:
      "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7d5f/76f5419acf9a738a059791d043dbcf6ed4f963a8d2556eaf281bfa153f57.JPG",
    rating: 4.388,
    reviewCount: 3321,
    originalPrice: 40000,
    salePrice: 29900,
  },
  {
    name: "옥이네청과 주스용 사과 부사 10kg 실중량 가정용 못난이 기스 흠과, 10키로 주스용(혼합)실중량",
    imageUrl:
      "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/5cf3/7d9a1aac40e2e113879a587258c52c049d97b08d64f17a1493403fdb0324.jpg",
    rating: 4.113,
    reviewCount: 2212,
    originalPrice: 30000,
    salePrice: 16900,
  },
  {
    name: "풋풋한 아오리사과, 가정용 아오리사과 10kg 꼬마소과 40-60과내외",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c0b5/58d433ef3370320de859e24aa547c26ef5698a664f815570ef70cd51910d.png",
    rating: 4.9912,
    reviewCount: 553,
    originalPrice: 18800,
    salePrice: 14800,
  },
  {
    name: "껍질째먹는 훈이네 경북 부사 청송 가정용 선물용 꿀사과 3kg 5kg 10kg, 소과(아침대용)5KG",
    imageUrl:
      "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/fee1/72dc9f71ff2582823db20d486e6bf46de6dc6c313f079ea1a8261cd9e8d0.jpg",
    rating: 4.6412,
    reviewCount: 891,
    originalPrice: 22900,
    salePrice: 17830,
  },
  {
    name: "맛콤과일 22년 햇 나주배 (가정용/특품/선물세트) 산지직송, 가정용 5kg (12과내)",
    imageUrl:
      "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a096/e5648e5d2c81a63491c02c761fab867088e7693ea7183bed272c38bb2ffa.jpg",
    rating: 4.1236,
    reviewCount: 45523,
    originalPrice: 15900,
  },
  {
    name: "아오리사과 4kg 정말 맛있는 사과 농원직송, 1박스, 4kg(아오리사과/26-29과)",
    imageUrl:
      "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/0186/e5d9648d9a888d0c9b1a008bf65ea124bf72df2032319b60436882e590a0.png",
    rating: 3.1235,
    reviewCount: 1237,
    originalPrice: 29900,
    salePrice: 23860,
  },
  {
    name: "사과사랑 아삭아삭 사과, 가정용 사과 8kg 꼬마소과",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/8a9c/5b6a0e0a45eaab200be8d791a30104aa7b6d4235e9ee17927d7d8164d2d2.jpg",
    rating: 3.8797,
    reviewCount: 12,
    originalPrice: 25900,
    weight: 8000,
  },
  {
    name: "아침이슬사과 [별담농]아침이슬사과 계절 주스용 사과 10kg, 겨울 주스용10kg",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/f694/017e6a48c8b79ec81672604774e16a5ccfa369050b30c3ed71ece9101adb.jpg",
    rating: 2.3489,
    reviewCount: 2,
    originalPrice: 15420,
  },
  {
    name: "맛있는 사과 가정용 흠집사과 못난이 당도보장, 1박스, 5kg(소과-꼬마과) 작은사이즈",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/6b0c/5fe723ccc7b7127b7e935c12f626d55251b1e14af690e35d7ffc83e896f5.jpg",
    rating: 1.213,
    reviewCount: 226,
    originalPrice: 18700,
  },
  {
    name: "사과사랑 아삭아삭 사과, 가정용 사과 8kg 중대과",
    imageUrl:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/8a9c/5b6a0e0a45eaab200be8d791a30104aa7b6d4235e9ee17927d7d8164d2d2.jpg",
    rating: 3.89914,
    reviewCount: 8,
    originalPrice: 16700,
  },
  {
    name: "경북 부사 사과 가정용(흠과) 5kg 29-33과",
    imageUrl:
      "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/526b/73dd4546058bcc6cb478cd36d6752698e8b53757f74f88f2a5e00623ac6e.jpg",
    rating: 4.89892,
    reviewCount: 1235,
    originalPrice: 24900,
    salePrice: 14900,
  },
  {
    name: "[농장직송] 22년 첫 출하 경북 햇 홍로 사과 (당일수확출고), 정품 홍로사과 2kg 한입과(14-16과내외)",
    imageUrl:
      "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/9bbe/6dbc7bcc401ec6e52f9146609a7ab4a64d75bcb57c5496f0bf01e4b10bab.jpg",
    rating: 4.12352,
    reviewCount: 712,
    originalPrice: 10900,
    salePrice: 8900,
    isMdRecommended: true,
  },
  {
    name: "주스용 거창사과10kg, (미리주문)주스용 거창사과10kg",
    imageUrl:
      "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7a21/de53fac6caed37780ce518861f244e9e9c00b1ab1d383b5309b67d6a1a82.jpg",
    rating: 4.66632,
    reviewCount: 327,
    originalPrice: 11910,
  },
  {
    name: "애플리데이 아오리 썸머킹 세척사과 2kg 8-12과 당도높은 껍질채먹는 꼬마사과",
    imageUrl:
      "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/1289/7efdf9d69ca61d11c0ff49896259f4f907cd32f26a1e05255be7b01a8b80.jpg",
    rating: 4.12369,
    reviewCount: 8345,
    originalPrice: 84000,
    salePrice: 62900,
  },
  {
    name: "꿀 경북사과 햇 홍로사과 사과 가정용 흠과 10kg(소과) 고당도 아삭한 사과",
    imageUrl:
      "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/576d/7b3f7a82a05fe98f0db6a193cda02e02216d83bb2431c5212827d9c37daf.jpg",
    rating: 4.7321,
    reviewCount: 3456,
    originalPrice: 42000,
    salePrice: 26900,
  },
  {
    name: "여름 수확하는 초록 사과 신품종 썸머킹 아오리 사과, 세척 초록 사과 2.5kg",
    imageUrl:
      "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/5fa6/623515404c2ab7f58408f0fd09e03ce1de1be9e2cc47aed93854e7ec5e9c.jpg",
    rating: 4.12361,
    reviewCount: 424,
    originalPrice: 30000,
    salePrice: 23800,
  },
  {
    name: "과일꾼 나주배 가정용 / 특품 / 과일선물세트, 1box, 가정용 3kg 8과내",
    imageUrl:
      "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/cfcc/3c446a854c7089f4d5c43c963a86561255e8abd73a6cef16c79af125e511.jpg",
    rating: 4.1111,
    reviewCount: 22,
    originalPrice: 21000,
    salePrice: 12900,
  },
  {
    name: "산지직송 경북 사과 개별포장 껍질째먹는 고당도 부사 꿀 세척사과 1박스 2.5kg",
    imageUrl:
      "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a527/987375542f674a43c3fb1ce77ef969bfa11c34213d67826bfeb495bbec20.png",
    rating: 4.0012,
    reviewCount: 865,
    originalPrice: 15900,
    salePrice: 14900,
  },
];

const PRODUCTS: Product[] = PRODUCT_DATAS.map((data, index) => {
  return Product.from({ ...data, id: index + 1 });
});
