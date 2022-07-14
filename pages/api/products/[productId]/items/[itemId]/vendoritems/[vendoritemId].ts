import { NextApiRequest, NextApiResponse } from "next";

import { cors } from "@/lib";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(result);
});

const result = {
  rollbackInterstellar: false,
  productId: 6091199461,
  itemId: 11356856853,
  vendorItemId: 78633225153,
  vendorItemCertifications: [
    {
      vendorItemId: null,
      popupUrl: "",
      name: "KC인증 전기용품 공급자적합성확인",
      imageUrl: "//image7.coupangcdn.com/image/certification/KC-black.jpg",
      description:
        "구조 또는 사용 방법 등으로 인하여 화재·감전 등의 위해가 발생할 가능성이 있는 전기용품으로서 해당 제품의 안전기준에 적합한 것임을 스스로 확인",
      certificationNo: "",
    },
  ],
  returnPolicyVo: {
    vendorItemReturnPolicyLayoutType: "RETAIL",
    vendorItemReturnNotice: {
      returnCharge:
        "ㆍ와우멤버십 회원: 무료로 반품/교환 가능<br/>ㆍ와우멤버십 회원 아닌 경우:<br/>1) [총 주문금액] - [반품 상품금액] = 19,800원 미만인 경우 반품비 5,000원<br/>2) [총 주문금액] - [반품 상품금액] = 19,800원 이상인 경우 반품비 2,500원",
    },
    vendorItemDeliveryNotice: {
      supportSameDayFresh: true,
      rocketInstall: false,
      rocketFresh: false,
      deliveryMethod: "순차배송",
      deliveryCompany: "",
      deliveryCharge:
        "무료배송<br/>- 로켓배송 상품 중 19,800원 이상 구매 시 무료배송<br/>- 도서산간 지역 추가비용 없음",
      batchShipment: "가능",
      shippingPeriod: null,
    },
    sellerDetailInfo: {
      vendorName: null,
      threePM: false,
      threePC: false,
      sellerWithRepPersonName: null,
      retail: true,
      repPhoneNum: null,
      repPersonName: null,
      repEmail: null,
      repAddress2: null,
      repAddress1: null,
      repAddress: null,
      ecommReportNum: null,
      bizNum: null,
    },
  },
  productSellingPoints: [],
  exemption: null,
  essentials: [
    {
      title: "품명 및 모델명",
      description:
        "Apple 정품 아이폰  13 mini 자급제 256GB 스타라이트  (MLK63KH/A)",
    },
    {
      title: "KC 인증 필 유무",
      description: "추후 등록 예정",
    },
    {
      title: "출시년월",
      description: "알 수 없음(업체미제공)",
    },
    {
      title: "제조자(수입자)",
      description: "애플 / 애플",
    },
    {
      title: "제조국",
      description: "중국",
    },
    {
      title: "크기",
      description: "(박스포함)149*82*32mm",
    },
    {
      title: "무게",
      description: "(박스포함) 275g",
    },
    {
      title: "이동통신 가입조건",
      description: "해당없음(공기계)",
    },
    {
      title: "이동통신사",
      description: "해당없음 (공기계)",
    },
    {
      title: "가입절차",
      description: "해당없음(공기계)",
    },
    {
      title: "소비자의 추가 부담사항",
      description: "해당없음",
    },
    {
      title: "주요 사양",
      description: "컨텐츠 참조",
    },
    {
      title: "품질보증기준",
      description:
        "제품 이상 시 공정거래위원회 고시 소비자분쟁해결기준에 의거 보상합니다.",
    },
    {
      title: "A/S 책임자와 전화번호",
      description: "Apple 고객센터 080-333-4000",
    },
  ],
  details: [
    {
      vendorItemContentDescriptions: [
        {
          detailType: "IMAGE",
          imageType: true,
          cssClass: "subType-IMAGE",
          content:
            "//thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/retail/images/2021/10/06/9/7/738a1723-fca8-41b0-9ac2-cf4e3aa8dcdf.jpg",
        },
      ],
      cssClass: "type-IMAGE_NO_SPACE",
      contentType: "IMAGE_NO_SPACE",
    },
    {
      vendorItemContentDescriptions: [
        {
          detailType: "IMAGE",
          imageType: true,
          cssClass: "subType-IMAGE",
          content:
            "//thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/retail/images/8926692605350468-bfd64b99-c05c-4b8a-8edd-c0ebc881c1fb.jpg",
        },
      ],
      cssClass: "type-IMAGE_NO_SPACE",
      contentType: "IMAGE_NO_SPACE",
    },
    {
      vendorItemContentDescriptions: [
        {
          detailType: "IMAGE",
          imageType: true,
          cssClass: "subType-IMAGE",
          content:
            "//thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/retail/images/2361663490413631-329fb197-25ad-41c7-bb69-abeb4d9a95cd.jpg",
        },
      ],
      cssClass: "type-IMAGE_NO_SPACE",
      contentType: "IMAGE_NO_SPACE",
    },
  ],
  forceHide3pWarningBanner: false,
  abTests: {
    customDutyABTest: "NOT_APPLICABLE",
  },
};
