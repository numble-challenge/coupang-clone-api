import { NextApiRequest, NextApiResponse } from "next";

import { cors } from "@/lib";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(result);
});

const result = `<div>
    <ul id="breadcrumb">
	<li><a href="/" class="breadcrumb-link">쿠팡 홈</a> &nbsp;&gt;</li>
	
		<li>
			<a href="/np/categories/178255" class="breadcrumb-link"
         title="가전디지털"
         data-gaclick='{"hitType":"event", "eventCategory":"breadcrumb", "eventAction":"click", "eventLabel":"", "eventValue":0}'>
            가전디지털
            </a>
			&nbsp;&gt;
		</li>
	
		<li>
			<a href="/np/categories/429603" class="breadcrumb-link"
         title="1인방송 전문관"
         data-gaclick='{"hitType":"event", "eventCategory":"breadcrumb", "eventAction":"click", "eventLabel":"", "eventValue":0}'>
            1인방송 전문관
            </a>
			&nbsp;&gt;
		</li>
	
		<li>
			<a href="/np/categories/429604" class="breadcrumb-link"
         title="카메라"
         data-gaclick='{"hitType":"event", "eventCategory":"breadcrumb", "eventAction":"click", "eventLabel":"", "eventValue":0}'>
            카메라
            </a>
			&nbsp;&gt;
		</li>
	
		<li>
			<a href="/np/categories/429617" class="breadcrumb-link"
         title="휴대폰"
         data-gaclick='{"hitType":"event", "eventCategory":"breadcrumb", "eventAction":"click", "eventLabel":"", "eventValue":0}'>
            휴대폰
            </a>
			
		</li>
	
</ul>

    <ul class="gnb-menu clearFix">
    
        <li class="rocket-delivery">
            <a href="https://www.coupang.com/np/campaigns/82"
               class="rocket-delivery "
               data-log-props='{ "id":"gnb_menu_item", "param":{"sectionId":"rocketdelivery"} }'>
                로켓배송</a>
          
        </li>
    
        <li class="rocket-fresh">
            <a href="https://www.coupang.com/np/categories/393760"
               class="rocket-fresh "
               data-log-props='{ "id":"gnb_menu_item", "param":{"sectionId":"rocketfresh"} }'>
                로켓프레시</a>
          
                <i class="ic-new"></i>
          
        </li>
    
        <li class="business-mall-landing">
            <a href="https://login.coupang.com/corporation/member/landing-page"
               class="business-mall-landing "
               data-log-props='{ "id":"gnb_menu_item", "param":{"sectionId":"businessmall_landing"} }'>
                쿠팡비즈</a>
          
                <i class="ic-new"></i>
          
        </li>
    
        <li class="coupang-global">
            <a href="https://www.coupang.com/np/coupangglobal"
               class="coupang-global "
               data-log-props='{ "id":"gnb_menu_item", "param":{"sectionId":"coupangglobal"} }'>
                로켓직구</a>
          
        </li>
    
        <li class="">
            <a href="https://www.coupang.com/np/goldbox"
               class=" "
               data-log-props='{ "id":"gnb_menu_item", "param":{"sectionId":"gold_box"} }'>
                골드박스</a>
          
        </li>
    
        <li class="subscription">
            <a href="https://www.coupang.com/np/campaigns/83"
               class="subscription "
               data-log-props='{ "id":"gnb_menu_item", "param":{"sectionId":"subscription"} }'>
                와우회원할인</a>
          
        </li>
    
        <li class="gnb-coupangbenefit">
            <a href="https://www.coupang.com/np/coupangbenefit"
               class="gnb-coupangbenefit "
               data-log-props='{ "id":"gnb_menu_item", "param":{"sectionId":"coupangbenefit"} }'>
                이벤트/쿠폰</a>
          
        </li>
    
        <li class="gnb-exhibition">
            <a href="https://pages.coupang.com/p/bep"
               class="gnb-exhibition "
               data-log-props='{ "id":"gnb_menu_item", "param":{"sectionId":"exhibition"} }'>
                기획전</a>
          
        </li>
    
    
        <li>
            <a href="https://trip.coupang.com?channel=gnb" class="travel">여행/티켓</a>
        </li>
    
</ul>

    <select id="searchCategories" class="search_category_filter" data-name="">
    <option value="-1">전체</option>
    
        <option value="/np/categories/186764" data-category-id="186664">여성패션</option>
    
        <option value="/np/categories/187069" data-category-id="186969">남성패션</option>
    
        <option value="/np/categories/502993" data-category-id="502893">남녀 공용 의류</option>
    
        <option value="/np/categories/213201" data-category-id="213101">유아동패션</option>
    
        <option value="/np/categories/176522" data-category-id="176422">뷰티</option>
    
        <option value="/np/categories/221934" data-category-id="221834">출산/유아동</option>
    
        <option value="/np/categories/194276" data-category-id="194176">식품</option>
    
        <option value="/np/categories/185669" data-category-id="185569">주방용품</option>
    
        <option value="/np/categories/115673" data-category-id="115573">생활용품</option>
    
        <option value="/np/categories/184555" data-category-id="184455">홈인테리어</option>
    
        <option value="/np/categories/178255" data-category-id="178155">가전디지털</option>
    
        <option value="/np/categories/317778" data-category-id="317678">스포츠/레저</option>
    
        <option value="/np/categories/184060" data-category-id="183960">자동차용품</option>
    
        <option value="/np/categories/317777" data-category-id="317677">도서/음반/DVD</option>
    
        <option value="/np/categories/317779" data-category-id="317679">완구/취미</option>
    
        <option value="/np/categories/177295" data-category-id="177195">문구/오피스</option>
    
        <option value="/np/categories/115674" data-category-id="115574">반려동물용품</option>
    
        <option value="/np/categories/305798" data-category-id="305698">헬스/건강식품</option>
    
    
        <option value="/np/categories/396463" data-category-id="396363">국내여행</option>
    
        <option value="/np/categories/396464" data-category-id="396364">해외여행</option>
    
    
    
        <option value="/np/campaigns/11280" data-category-id="503286">장마 준비</option>
    
        <option value="/np/campaigns/6733" data-category-id="462089">로켓설치</option>
    
        <option value="/np/campaigns/2318" data-category-id="429673">공간별 집꾸미기</option>
    
        <option value="/np/campaigns/13570" data-category-id="508108">헬스케어 전문관</option>
    
        <option value="/np/campaigns/1440" data-category-id="414285">쿠팡 Only</option>
    
        <option value="/np/categories/433784" data-category-id="433684">싱글라이프</option>
    
        <option value="/np/campaigns/11354" data-category-id="507973">악기전문관</option>
    
        <option value="/np/categories/416130" data-category-id="416030">결혼준비</option>
    
        <option value="/np/categories/410273" data-category-id="410173">아트/공예</option>
    
        <option value="/np/categories/316168" data-category-id="316068">홈카페</option>
    
        <option value="/np/categories/383370" data-category-id="383270">실버스토어</option>
    
</select>

</div>
`;
