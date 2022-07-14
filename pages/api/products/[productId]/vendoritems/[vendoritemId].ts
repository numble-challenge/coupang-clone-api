import { cors } from "@/lib";
import { NextApiRequest, NextApiResponse } from "next";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(result);
});

const result = {
  almostSoldOut: false,
  apiUrlMap: {
    addToCartUrl:
      "coupang://addCart?itemId=11356856853&productId=6091199461&vendorItemId=78633225153&sourceType=offerDetail&price=1027200&sdpVisitKey=&isLoser=false&offerStatus=NEW",
    shippingConsolidationUrl: null,
  },
  authors: null,
  badgeMap: {
    USAGE_BADGE: {
      helpLink:
        "coupang://popupWebView?hidden=N&url=https%3A%2F%2Fm.coupang.com%2Fvm%2Fproducts%2Fused-status-description",
      iconUrl: null,
      text: null,
      type: "TEXT",
    },
    OFFER_BADGE: {
      helpLink:
        "coupang://popupWebView?hidden=N&url=https%3A%2F%2Fm.coupang.com%2Fvm%2Fproducts%2Fused-status-description",
      iconUrl: null,
      text: null,
      type: "TEXT",
    },
  },
  bizBadge: null,
  blockInfo: null,
  bundleOption: {
    optionDetails: null,
    options: [
      {
        icon: "https://image10.coupangcdn.com/image/retail/images/2518241338152941-adbc437b-0313-4736-9538-4ad6d7d915ca.png",
        infoPageContent:
          "우선적 기술 지원과 추가 하드웨어 서비스를 받아보세요.",
        items: [
          {
            buyableQuantity: 1,
            description: "우발적인 손상에 대한 보상을 받아보세요.",
            enabled: true,
            name: "AppleCare+",
            price: "179,000원",
            vendorItemId: 78710401765,
          },
        ],
        optionId: "APPLE_CARE_PLUS",
        seeMoreLink: "https://www.coupang.com/np/promotion/58388",
        subTitle: "우발적인 손상에도 걱정없는",
        title: "AppleCare+",
      },
    ],
    viewType: null,
  },
  buyableQuantity: 1,
  cashBackSummary: {
    basicCashBackList: [
      {
        amount: 10000,
        benefit: "쿠페이 머니 결제 시 1% 적립",
        expired: false,
        i18nAmount: {
          amount: 10000,
          currency: "KRW",
          fractionDigits: 0,
          rawAmount: 10000,
        },
        leftDays: null,
        rate: "1",
        type: "BASIC",
        validity: "월 최대 1만원",
      },
    ],
    basicRocketPayCashAmt: 10000,
    basicRocketPayRate: "1",
    cashBackTitle: "캐시적립 혜택",
    cashIconUrl:
      "//image6.coupangcdn.com/image/badges/cashback/web/list-cash-icon@2x.png",
    cashWidgetIconUrl:
      "//image6.coupangcdn.com/image/badges/sdp/cashback/web/cash-icon@2x.png",
    clubMemberCashAmt: null,
    clubMemberRate: null,
    clubMemberRewardExpires: null,
    clubMemberRewardExpiryTime: null,
    clubMemberRewardLeftDays: null,
    couPayBankAmt: 20000,
    couPayBankExpires: false,
    couPayBankLeftDays: 3150,
    couPayBankRate: "2",
    couPayMoneyAmt: 40000,
    couPayMoneyExpires: false,
    couPayMoneyLeftDays: 3150,
    couPayMoneyRate: "4",
    extraCashBackList: [
      {
        amount: 20000,
        benefit: "[로켓와우 + 쿠페이 계좌이체] 결제 시 2% 적립",
        expired: false,
        i18nAmount: {
          amount: 20000,
          currency: "KRW",
          fractionDigits: 0,
          rawAmount: 20000,
        },
        leftDays: 3150,
        rate: "2",
        type: "COU_BANK",
        validity: "이벤트 기간 30일, 최대 2만원",
      },
      {
        amount: 40000,
        benefit: "[로켓와우 + 쿠페이 머니] 결제 시 4% 추가적립",
        expired: false,
        i18nAmount: {
          amount: 40000,
          currency: "KRW",
          fractionDigits: 0,
          rawAmount: 40000,
        },
        leftDays: 3150,
        rate: "4",
        type: "COU_MONEY",
        validity: "이벤트 기간 30일, 최대 4만원",
      },
    ],
    finalCashBackAmt: 50000,
    i18nBasicRocketPayCashAmt: {
      amount: 10000,
      currency: "KRW",
      fractionDigits: 0,
      rawAmount: 10000,
    },
    i18nClubMemberCashAmt: null,
    i18nCouPayBankAmt: {
      amount: 20000,
      currency: "KRW",
      fractionDigits: 0,
      rawAmount: 20000,
    },
    i18nCouPayMoneyAmt: {
      amount: 40000,
      currency: "KRW",
      fractionDigits: 0,
      rawAmount: 40000,
    },
    i18nFinalCashBackAmt: {
      amount: 50000,
      currency: "KRW",
      fractionDigits: 0,
      rawAmount: 50000,
    },
    targetedPromotionBanner: null,
  },
  ccidEligible: true,
  ccidInfo: {
    detailInfo: {
      badgeLabelText: "카드 혜택",
      badgeUrl:
        "//image10.coupangcdn.com/image/badges/ccid/sdp/web/card_icon@2x.png",
      ccidIds: null,
      detailBenefit: null,
    },
    highestWowOnlyCcidDiscountRate: 5,
    promotionIds: [
      "9aa86f9f-0914-4f3b-a547-f004ce73e348",
      "35a898f1-75b4-416e-87ae-3bafb06af972",
      "e0516e7a-1f8b-43d3-b6e9-9df89fb97390",
      "ad663633-02ca-4887-924b-519fbd77b6e0",
      "f5322aaa-34c6-4586-ac06-beb8b68310ae",
      "02cd1abb-5ecb-4bdb-a003-80994f7f2b6d",
      "9aa86f9f-0914-4f3b-a547-f004ce73e348",
      "35a898f1-75b4-416e-87ae-3bafb06af972",
      "e0516e7a-1f8b-43d3-b6e9-9df89fb97390",
      "ad663633-02ca-4887-924b-519fbd77b6e0",
      "f5322aaa-34c6-4586-ac06-beb8b68310ae",
      "02cd1abb-5ecb-4bdb-a003-80994f7f2b6d",
    ],
    simpleInfo: {
      ccidText: "최대 5% 카드 즉시할인",
      iconUrl:
        "//image9.coupangcdn.com/image/badges/ccid/list/web/card_icon@2x.png",
    },
    wowOnlyCcidInfoWebVoList: [
      {
        ccidText: "최대 <b>5%</b> 즉시할인",
        iconUrl: [
          "//image7.coupangcdn.com/image/badges/ccid/card-company/web/shinhan@2x.png",
          "//image6.coupangcdn.com/image/mobile_app/v3/badges/logo/pc/woori.png",
          "//image6.coupangcdn.com/image/badges/ccid/card-company/web/lotte@2x.png",
          "//image8.coupangcdn.com/image/badges/ccid/card-company/web/kb@2x.png",
          "//image10.coupangcdn.com/image/badges/ccid/card-company/web/hana-sk@2x.png",
          "//image8.coupangcdn.com/image/badges/ccid/card-company/web/samsung@2x.png",
        ],
      },
    ],
  },
  couponList: [],
  dawnOnly: false,
  deliveryAttribute: false,
  freshEligible: false,
  giftcard: false,
  images: [
    {
      detailImage:
        "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2756707512187407-a0a12381-b08f-45c6-9465-858e7804e33e.jpg",
      origin:
        "//image8.coupangcdn.com/image/retail/images/2756707512187407-a0a12381-b08f-45c6-9465-858e7804e33e.jpg",
      preloadImage:
        "//thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2756707512187407-a0a12381-b08f-45c6-9465-858e7804e33e.jpg",
      thumbnailImage:
        "//thumbnail8.coupangcdn.com/thumbnails/remote/48x48ex/image/retail/images/2756707512187407-a0a12381-b08f-45c6-9465-858e7804e33e.jpg",
    },
    {
      detailImage:
        "//thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2032861444991681-0bcdc715-46db-4ee6-b4a5-0675fb7a990e.jpg",
      origin:
        "//image9.coupangcdn.com/image/retail/images/2032861444991681-0bcdc715-46db-4ee6-b4a5-0675fb7a990e.jpg",
      preloadImage:
        "//thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2032861444991681-0bcdc715-46db-4ee6-b4a5-0675fb7a990e.jpg",
      thumbnailImage:
        "//thumbnail9.coupangcdn.com/thumbnails/remote/48x48ex/image/retail/images/2032861444991681-0bcdc715-46db-4ee6-b4a5-0675fb7a990e.jpg",
    },
    {
      detailImage:
        "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/4004469922135765-f62c5d27-20cd-4cb2-bdfe-7ba67f32cd75.jpg",
      origin:
        "//image8.coupangcdn.com/image/retail/images/4004469922135765-f62c5d27-20cd-4cb2-bdfe-7ba67f32cd75.jpg",
      preloadImage:
        "//thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4004469922135765-f62c5d27-20cd-4cb2-bdfe-7ba67f32cd75.jpg",
      thumbnailImage:
        "//thumbnail8.coupangcdn.com/thumbnails/remote/48x48ex/image/retail/images/4004469922135765-f62c5d27-20cd-4cb2-bdfe-7ba67f32cd75.jpg",
    },
    {
      detailImage:
        "//thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/3455756452042770-dc96bd4b-4512-421f-b657-01ad765961d8.jpg",
      origin:
        "//image9.coupangcdn.com/image/retail/images/3455756452042770-dc96bd4b-4512-421f-b657-01ad765961d8.jpg",
      preloadImage:
        "//thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3455756452042770-dc96bd4b-4512-421f-b657-01ad765961d8.jpg",
      thumbnailImage:
        "//thumbnail9.coupangcdn.com/thumbnails/remote/48x48ex/image/retail/images/3455756452042770-dc96bd4b-4512-421f-b657-01ad765961d8.jpg",
    },
    {
      detailImage:
        "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/4004469617450389-9de8e600-d0f4-48d8-9b8a-4c8ceb968752.jpg",
      origin:
        "//image8.coupangcdn.com/image/retail/images/4004469617450389-9de8e600-d0f4-48d8-9b8a-4c8ceb968752.jpg",
      preloadImage:
        "//thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4004469617450389-9de8e600-d0f4-48d8-9b8a-4c8ceb968752.jpg",
      thumbnailImage:
        "//thumbnail8.coupangcdn.com/thumbnails/remote/48x48ex/image/retail/images/4004469617450389-9de8e600-d0f4-48d8-9b8a-4c8ceb968752.jpg",
    },
    {
      detailImage:
        "//thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2133593078788539-69c1a9f1-5ded-4052-b313-c44298fc4b8c.jpg",
      origin:
        "//image6.coupangcdn.com/image/retail/images/2133593078788539-69c1a9f1-5ded-4052-b313-c44298fc4b8c.jpg",
      preloadImage:
        "//thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2133593078788539-69c1a9f1-5ded-4052-b313-c44298fc4b8c.jpg",
      thumbnailImage:
        "//thumbnail6.coupangcdn.com/thumbnails/remote/48x48ex/image/retail/images/2133593078788539-69c1a9f1-5ded-4052-b313-c44298fc4b8c.jpg",
    },
    {
      detailImage:
        "//thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2133592531697649-df0d689a-b503-400c-9ec4-a131f29f4968.jpg",
      origin:
        "//image9.coupangcdn.com/image/retail/images/2133592531697649-df0d689a-b503-400c-9ec4-a131f29f4968.jpg",
      preloadImage:
        "//thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2133592531697649-df0d689a-b503-400c-9ec4-a131f29f4968.jpg",
      thumbnailImage:
        "//thumbnail9.coupangcdn.com/thumbnails/remote/48x48ex/image/retail/images/2133592531697649-df0d689a-b503-400c-9ec4-a131f29f4968.jpg",
    },
    {
      detailImage:
        "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/4004470048525780-8df68397-3b2e-45b7-9423-8d23f922a044.jpg",
      origin:
        "//image8.coupangcdn.com/image/retail/images/4004470048525780-8df68397-3b2e-45b7-9423-8d23f922a044.jpg",
      preloadImage:
        "//thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4004470048525780-8df68397-3b2e-45b7-9423-8d23f922a044.jpg",
      thumbnailImage:
        "//thumbnail8.coupangcdn.com/thumbnails/remote/48x48ex/image/retail/images/4004470048525780-8df68397-3b2e-45b7-9423-8d23f922a044.jpg",
    },
    {
      detailImage:
        "//thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2756712964119128-77344076-3699-4a2e-bbe6-e02c2c02f718.jpg",
      origin:
        "//image10.coupangcdn.com/image/retail/images/2756712964119128-77344076-3699-4a2e-bbe6-e02c2c02f718.jpg",
      preloadImage:
        "//thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2756712964119128-77344076-3699-4a2e-bbe6-e02c2c02f718.jpg",
      thumbnailImage:
        "//thumbnail10.coupangcdn.com/thumbnails/remote/48x48ex/image/retail/images/2756712964119128-77344076-3699-4a2e-bbe6-e02c2c02f718.jpg",
    },
    {
      detailImage:
        "//thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2032862030646162-fae13f98-b3ab-43a9-8d9a-0bc21bdc5ca2.jpg",
      origin:
        "//image6.coupangcdn.com/image/retail/images/2032862030646162-fae13f98-b3ab-43a9-8d9a-0bc21bdc5ca2.jpg",
      preloadImage:
        "//thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2032862030646162-fae13f98-b3ab-43a9-8d9a-0bc21bdc5ca2.jpg",
      thumbnailImage:
        "//thumbnail6.coupangcdn.com/thumbnails/remote/48x48ex/image/retail/images/2032862030646162-fae13f98-b3ab-43a9-8d9a-0bc21bdc5ca2.jpg",
    },
  ],
  invalid: false,
  inventory: null,
  itemId: 11356856853,
  itemName: "Apple 아이폰 13 mini 자급제, 256GB, 스타라이트",
  limitNoticeVo: null,
  linkedVendorItemInfo: null,
  memberInfo: {
    eligibleAddress: true,
    loyaltyMember: false,
    loyaltyMemberExcludePseudoMember: false,
    memberName: null,
    pseudoMember: false,
    withdraw: false,
  },
  offerBanner: null,
  offerDescription: "",
  otherSellerCount: 2,
  preOrderVo: null,
  quantityBase: [
    {
      appliedCoupon: null,
      benefitDisplayType: null,
      bundleOption: {
        optionDetails: null,
        options: [
          {
            icon: "https://image10.coupangcdn.com/image/retail/images/2518241338152941-adbc437b-0313-4736-9538-4ad6d7d915ca.png",
            infoPageContent:
              "우선적 기술 지원과 추가 하드웨어 서비스를 받아보세요.",
            items: [
              {
                buyableQuantity: 1,
                description: "우발적인 손상에 대한 보상을 받아보세요.",
                enabled: true,
                name: "AppleCare+",
                price: "179,000원",
                vendorItemId: 78710401765,
              },
            ],
            optionId: "APPLE_CARE_PLUS",
            seeMoreLink: "https://www.coupang.com/np/promotion/58388",
            subTitle: "우발적인 손상에도 걱정없는",
            title: "AppleCare+",
          },
        ],
        viewType: null,
      },
      cashBackSummary: {
        basicCashBackList: [
          {
            amount: 10000,
            benefit: "쿠페이 머니 결제 시 1% 적립",
            expired: false,
            i18nAmount: {
              amount: 10000,
              currency: "KRW",
              fractionDigits: 0,
              rawAmount: 10000,
            },
            leftDays: null,
            rate: "1",
            type: "BASIC",
            validity: "월 최대 1만원",
          },
        ],
        basicRocketPayCashAmt: 10000,
        basicRocketPayRate: "1",
        cashBackTitle: "캐시적립 혜택",
        cashIconUrl:
          "//image6.coupangcdn.com/image/badges/cashback/web/list-cash-icon@2x.png",
        cashWidgetIconUrl:
          "//image6.coupangcdn.com/image/badges/sdp/cashback/web/cash-icon@2x.png",
        clubMemberCashAmt: null,
        clubMemberRate: null,
        clubMemberRewardExpires: null,
        clubMemberRewardExpiryTime: null,
        clubMemberRewardLeftDays: null,
        couPayBankAmt: 20000,
        couPayBankExpires: false,
        couPayBankLeftDays: 3150,
        couPayBankRate: "2",
        couPayMoneyAmt: 40000,
        couPayMoneyExpires: false,
        couPayMoneyLeftDays: 3150,
        couPayMoneyRate: "4",
        extraCashBackList: [
          {
            amount: 20000,
            benefit: "[로켓와우 + 쿠페이 계좌이체] 결제 시 2% 적립",
            expired: false,
            i18nAmount: {
              amount: 20000,
              currency: "KRW",
              fractionDigits: 0,
              rawAmount: 20000,
            },
            leftDays: 3150,
            rate: "2",
            type: "COU_BANK",
            validity: "이벤트 기간 30일, 최대 2만원",
          },
          {
            amount: 40000,
            benefit: "[로켓와우 + 쿠페이 머니] 결제 시 4% 추가적립",
            expired: false,
            i18nAmount: {
              amount: 40000,
              currency: "KRW",
              fractionDigits: 0,
              rawAmount: 40000,
            },
            leftDays: 3150,
            rate: "4",
            type: "COU_MONEY",
            validity: "이벤트 기간 30일, 최대 4만원",
          },
        ],
        finalCashBackAmt: 50000,
        i18nBasicRocketPayCashAmt: {
          amount: 10000,
          currency: "KRW",
          fractionDigits: 0,
          rawAmount: 10000,
        },
        i18nClubMemberCashAmt: null,
        i18nCouPayBankAmt: {
          amount: 20000,
          currency: "KRW",
          fractionDigits: 0,
          rawAmount: 20000,
        },
        i18nCouPayMoneyAmt: {
          amount: 40000,
          currency: "KRW",
          fractionDigits: 0,
          rawAmount: 40000,
        },
        i18nFinalCashBackAmt: {
          amount: 50000,
          currency: "KRW",
          fractionDigits: 0,
          rawAmount: 50000,
        },
        targetedPromotionBanner: null,
      },
      delivery: {
        badgeUrl:
          "//image10.coupangcdn.com/image/badges/rocket/rocket_logo.png",
        company: null,
        countDownMessage: null,
        countDownMillisecond: null,
        delayMessage: "",
        deliveryExtraInfo: null,
        deliveryNotice: null,
        deliveryReminderMessage: null,
        descriptionBadge: null,
        descriptions:
          "<em class='prod-txt-onyx prod-txt-green-2'>내일(토) 7/16</em><em class='prod-txt-onyx  prod-txt-green-normal'> 도착 보장</em><em class='prod-txt-onyx'> (</em><em class='prod-txt-onyx'>22시간 51분</em><em class='prod-txt-onyx'>  내 주문 시</em><em class='prod-txt-onyx'> / 서울⋅경기 기준</em><em class='prod-txt-onyx'>)</em>",
        logistics: true,
        loyaltyButtonText: null,
        rocketWowQuestionMark: false,
        speedType: "STANDARD",
        type: "ROCKET_DELIVERY",
      },
      deliveryList: [
        {
          badgeUrl:
            "//image10.coupangcdn.com/image/badges/rocket/rocket_logo.png",
          company: null,
          countDownMessage: null,
          countDownMillisecond: null,
          delayMessage: "",
          deliveryExtraInfo: null,
          deliveryNotice: null,
          deliveryReminderMessage: null,
          descriptionBadge: null,
          descriptions:
            "<em class='prod-txt-onyx prod-txt-green-2'>내일(토) 7/16</em><em class='prod-txt-onyx  prod-txt-green-normal'> 도착 보장</em><em class='prod-txt-onyx'> (</em><em class='prod-txt-onyx'>22시간 51분</em><em class='prod-txt-onyx'>  내 주문 시</em><em class='prod-txt-onyx'> / 서울⋅경기 기준</em><em class='prod-txt-onyx'>)</em>",
          logistics: true,
          loyaltyButtonText: null,
          rocketWowQuestionMark: false,
          speedType: "STANDARD",
          type: "ROCKET_DELIVERY",
        },
        {
          badgeUrl:
            "//image10.coupangcdn.com/image/mobile_app/v3/brandsdp/loyalty/pc/rocketwowBi16@2x.png",
          company: null,
          countDownMessage:
            "<em class='prod-txt-onyx'>오후 4시 30분 전 주문 시</em>",
          countDownMillisecond: null,
          delayMessage: null,
          deliveryExtraInfo: [
            {
              alpha: null,
              bold: null,
              color: "",
              expectedLineBreak: null,
              helpUrl: null,
              size: 0,
              strikethrough: null,
              text: "서울⋅경기 기준",
            },
          ],
          deliveryNotice: null,
          deliveryReminderMessage: null,
          descriptionBadge: null,
          descriptions:
            "<em class='prod-txt-onyx prod-txt-green-2'>내일(토) 7/16 새벽 7시 전 </em><em class='prod-txt-onyx  prod-txt-green-normal'>도착 보장</em>",
          logistics: true,
          loyaltyButtonText: "로켓와우 무료 체험하기",
          rocketWowQuestionMark: false,
          speedType: "OVERNIGHT",
          type: "ROCKET_DELIVERY",
        },
      ],
      price: {
        cashPromotionMessage: null,
        couponDiscountAmount: null,
        couponPrice: null,
        couponPriceTitle: null,
        couponUnitPrice: null,
        description: null,
        discountRate: "5",
        gppuPricePolicy: [
          {
            description:
              "브랜드 업체의 권장 소비자가, 공식몰가, 90일 내 판매된 가격 중 최대 할인 혜택을 제공하는 가격입니다. 도서의 경우 정가를 제공합니다.",
            priceInfo:
              "<span class='discount-rate'>5%</span><span class='origin-price'>1,090,000원</span>",
          },
        ],
        i18nCouponDiscountAmount: null,
        i18nCouponPrice: null,
        i18nOriginPrice: {
          amount: "1090000",
          currency: "KRW",
          fractionDigits: 0,
          rawAmount: null,
        },
        i18nPriceAmount: null,
        i18nSalePrice: {
          amount: "1027200",
          currency: "KRW",
          fractionDigits: 0,
          rawAmount: null,
        },
        instantDiscount: false,
        instantPriceType: null,
        loyaltyButtonText: null,
        loyaltyRegistrationUrl: null,
        originPrice: "1,090,000",
        originalPriceDesc: null,
        priceAmount: null,
        salePrice: "1,027,200",
        salePriceTitle: "",
        saleUnitPrice: "",
        title: null,
        type: null,
        unitDiscountRate: null,
        unitPrice: null,
        wowCouponDiscount: false,
      },
      priceList: [
        {
          cashPromotionMessage: null,
          couponDiscountAmount: null,
          couponPrice: null,
          couponPriceTitle: null,
          couponUnitPrice: null,
          description: null,
          discountRate: null,
          gppuPricePolicy: null,
          i18nCouponDiscountAmount: null,
          i18nCouponPrice: null,
          i18nOriginPrice: null,
          i18nPriceAmount: {
            amount: "1027200",
            currency: "KRW",
            fractionDigits: 0,
            rawAmount: null,
          },
          i18nSalePrice: null,
          instantDiscount: null,
          instantPriceType: null,
          loyaltyButtonText: null,
          loyaltyRegistrationUrl: null,
          originPrice: null,
          originalPriceDesc: null,
          priceAmount: "1,027,200",
          salePrice: null,
          salePriceTitle: null,
          saleUnitPrice: null,
          title: "쿠팡판매가",
          type: "SALES",
          unitDiscountRate: null,
          unitPrice: "",
          wowCouponDiscount: false,
        },
      ],
      priceUnit: "원",
      quantity: 1,
      shipmentDisplayType: "PDD_NUDGE",
      shippingFee: {
        freeShippingConditionMessage: null,
        message: "<em class='prod-txt-bold'>무료배송</em>",
        returnFeeMessage: null,
        shippingFeeType: "FREE",
      },
      shippingFeeList: [
        {
          freeShippingConditionMessage: null,
          message: "<em class='prod-txt-bold'>무료배송</em>",
          returnFeeMessage: null,
          shippingFeeType: "FREE",
        },
        {
          freeShippingConditionMessage: null,
          message: "<em class='prod-txt-bold'>무료배송</em>",
          returnFeeMessage: null,
          shippingFeeType: "FREE",
        },
      ],
      subscriptionDelivery: null,
      subscriptionDiscountRate: -1,
      subscriptionPrice: null,
      subscriptionPriceList: [],
      wowOnlyInstantDiscountRate: 0,
    },
  ],
  restockNotification: false,
  roleCode: 3,
  sellingInfoVo: {
    countryOfOrigin: null,
    sellingInfo: [
      "모델명/품번: MLK63KH/A",
      "화면크기: 13.76cm",
      "화면크기(인치): 약 5.4인치에 해당함",
      "탈착 방식: 배터리 일체형",
      "RAM용량: 4GB",
      "쿠팡상품번호: 6091199461 - 11356856853",
    ],
  },
  shippingConsolidationLink: null,
  soldOut: false,
  stickBanners: [],
  subscribeInfo: null,
  supplier: null,
  topSellingInfo: null,
  used: false,
  vendor: null,
  vendorItemId: 78633225153,
  wishList: false,
  ratingCount: 13250,
  ratingAverage: 5,
};
