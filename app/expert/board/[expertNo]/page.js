import React from "react";
import { headers, cookies } from "next/headers";

export default async function page({ params }) {
  return (
    <div className="body">
      <div className="expert_detail">
        <div className="bh_wrap">
          <div className="bh_row no-gutters">
            <div className="col-lg col-12">
              <div className="info_area">
                <div className="detail_title">
                  <h3>다양한 사고에 대응하는 배상책임의 마술사</h3>
                </div>
                <div className="option1">
                  <div className="ds-f ai-c name">
                    <i className="ri-account-pin-circle-fill fw-l"></i>
                    <p className="fw-b ml-5">홍길동 손해사정사</p>
                  </div>
                  <div className="bh_row gutters-5">
                    {/* <div className="col-lg-2_5 col-6 mb-0 m-mb-20">
                      <div className="inner ta-c">
                        <div className="subject">
                          <i className="ri-user-star-line"></i>
                          <p>별점</p>
                        </div>
                        <div className="result">
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-line"></i>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-lg-2_5 col-6 mb-0 m-mb-20">
                      <div className="inner ta-c">
                        <div className="subject">
                          <i className="ri-file-list-3-line"></i>
                          <p>선임 사례</p>
                        </div>
                        <div className="result fw-b">21</div>
                      </div>
                    </div>
                    <div className="col-lg-2_5 col-6 mb-0 m-mb-20">
                      <div className="inner ta-c">
                        <div className="subject">
                          <i className="ri-chat-smile-2-line"></i>
                          <p>간편상담 답변</p>
                        </div>
                        <div className="result fw-b">6</div>
                      </div>
                    </div>

                    {/* <div className="col-lg-2_5 col-6 mb-0 m-mb-20">
                      <div className="inner ta-c">
                        <div className="subject">
                          <i className="ri-chat-quote-line"></i>
                          <p>상담답변 사례</p>
                        </div>
                        <div className="result fw-b">16</div>
                      </div>
                    </div> */}
                    <div className="col-lg-2_5 col-6">
                      <div className="inner ta-c">
                        <div className="subject">
                          <i className="ri-auction-line"></i>
                          <p>손사 Talk</p>
                        </div>
                        <div className="result fw-b">16</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="option2">
                  <div className="subject">
                    <div className="ds-f jc-b ai-c">
                      <h3>
                        선임사례 <em>21건</em>
                      </h3>
                      <div className="effect_btn">
                        <a href="#" className="ds-f ai-c">
                          <span>더보기</span>
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bh_row op1 gutters-10">
                    <div className="col-lg-4 col-12 mb-0 m-mb-20">
                      <div className="inner">
                        <div className="category">산재사고</div>
                        <p>일자 : 2024.01.10</p>
                        <p>보험사 : DD손보</p>
                        <div className="result ta-c">
                          <i className="ri-auction-line"></i> 보험금 지급
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mb-0 m-mb-20">
                      <div className="inner">
                        <div className="category">산재사고</div>
                        <p>일자 : 2024.01.10</p>
                        <p>보험사 : DD손보</p>
                        <div className="result ta-c">
                          <i className="ri-auction-line"></i> 보험금 지급
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                      <div className="inner">
                        <div className="category">산재사고</div>
                        <p>일자 : 2024.01.10</p>
                        <p>보험사 : DD손보</p>
                        <div className="result ta-c">
                          <i className="ri-auction-line"></i> 보험금 지급
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="option2">
                  <div className="subject">
                    <div className="ds-f jc-b ai-c">
                      <h3>
                        간편상담 답변 <em>21건</em>
                      </h3>
                      <div className="effect_btn">
                        <a href="#" className="ds-f ai-c">
                          <span>더보기</span>
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bh_row op2 gutters-10">
                    <div className="col-lg-4 col-12 mb-0 m-mb-20">
                      <div className="inner">
                        <div className="category">교통사고</div>
                        <h3>
                          제목을 입력해주세요. 제목을 입력해주세요. 제목을 ...
                        </h3>
                        <span className="fw-m">
                          <em className="bh_color_main">3일전</em> 답변 작성
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mb-0 m-mb-20">
                      <div className="inner">
                        <div className="category">교통사고</div>
                        <h3>
                          제목을 입력해주세요. 제목을 입력해주세요. 제목을 ...
                        </h3>
                        <span className="fw-m">
                          <em className="bh_color_main">3일전</em> 답변 작성
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mb-0 m-mb-20">
                      <div className="inner">
                        <div className="category">교통사고</div>
                        <h3>
                          제목을 입력해주세요. 제목을 입력해주세요. 제목을 ...
                        </h3>
                        <span className="fw-m">
                          <em className="bh_color_main">3일전</em> 답변 작성
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="option2 last">
                  <div className="subject">
                    <div className="ds-f jc-b ai-c">
                      <h3>
                        손사 Talk <em>16건</em>
                      </h3>
                      <div className="effect_btn">
                        <a href="#" className="ds-f ai-c">
                          <span>더보기</span>
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bh_row op2 gutters-10">
                    <div className="col-lg-4 col-12 mb-0 m-mb-20">
                      <div className="inner">
                        <div className="ds-f">
                          <div className="category">교통사고</div>
                          <div className="category">손해배상</div>
                        </div>
                        <h3>
                          제목을 입력해주세요. 제목을 입력해주세요. 제목을 ...
                        </h3>
                        <p className="content">
                          국회의원은 국가이익을 우선하여 양심에 따라 직무를
                          행한...
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mb-0 m-mb-20">
                      <div className="inner">
                        <div className="ds-f">
                          <div className="category">교통사고</div>
                          <div className="category">손해배상</div>
                        </div>
                        <h3>
                          제목을 입력해주세요. 제목을 입력해주세요. 제목을 ...
                        </h3>
                        <p className="content">
                          국회의원은 국가이익을 우선하여 양심에 따라 직무를
                          행한...
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                      <div className="inner">
                        <div className="ds-f">
                          <div className="category">교통사고</div>
                          <div className="category">손해배상</div>
                        </div>
                        <h3>
                          제목을 입력해주세요. 제목을 입력해주세요. 제목을 ...
                        </h3>
                        <p className="content">
                          국회의원은 국가이익을 우선하여 양심에 따라 직무를
                          행한...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-auto col-12">
              <div className="right_area">
                <div className="img_box po-r">
                  <img src="/images/sub/board_detali_img.jpg" alt="img" />
                  <div className="profile">
                    <p>손TOP 서울 강남구</p>
                    <div className="ds-f ai-c name">
                      <i className="ri-account-pin-circle-fill fw-l"></i>
                      <p className="fw-m">홍길동 손해사정사</p>
                    </div>
                  </div>
                </div>
                <a href="#" className="ds-b mb-10 ta-c">
                  <i className="ri-phone-fill"></i>전화 상담
                </a>
                <a href="/counsel_inquiry.html" className="ds-b ta-c">
                  <i className="ri-home-4-fill"></i>상담 예약
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function findNameByCat(catValue) {
  // keywordList에서 catValue와 일치하는 cat 값을 가진 객체를 찾습니다.
  const matchingKeyword = keywordList.find(
    (keyword) => keyword.cat === catValue
  );

  // 일치하는 객체가 있으면 그 객체의 name 값을 반환합니다.
  return matchingKeyword ? matchingKeyword.name : undefined;
}

function daysAgoFormatted(dateString) {
  // 주어진 날짜를 Date 객체로 파싱
  const givenDate = new Date(dateString);
  // 현재 날짜와 시간
  const currentDate = new Date();

  // 두 날짜의 차이를 밀리초로 계산
  const differenceInTime = currentDate.getTime() - givenDate.getTime();

  // 밀리초를 일 단위로 변환
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  // 차이가 0일이면 "오늘 작성", 그렇지 않으면 "X일 전 작성" 반환
  if (differenceInDays === 0) {
    return "오늘 작성";
  } else {
    return `${differenceInDays}일 전 작성`;
  }
}
