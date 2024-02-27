import React from "react";
import { createClient } from "../../../utils/supabase/server";
import { headers, cookies } from "next/headers";
import keywordList from "../../../components/keywordList";

export default async function page({ params }) {
  const cookieStore = cookies();
  const questionNo = params.questionNo;
  const supabase = createClient(cookieStore);
  let { data: query, error } = await supabase
    .from("query")
    .select("*")
    .eq("questionNo", questionNo.toString())
  
  
  const currentClick=query[0].count
  console.log(currentClick)

  
  const { data, updateError } = await supabase
  .from('query')
  .update({ 'count': currentClick+1})
  .eq('questionNo',questionNo.toString())
  .select()
        
  console.log(data,updateError)


  return (
    <div className="body">
      <div className="counsel_detail">
        <div className="bh_wrap">
          <div className="board_header po-r">
            <div className="catagory">
              <div className="ds-f">
                {query[0].field1 ? (
                  <span>#{findNameByCat(query[0].field1)}</span>
                ) : (
                  <></>
                )}
                {query[0].field2 ? (
                  <span>#{findNameByCat(query[0].field2)}</span>
                ) : (
                  <></>
                )}
                {query[0].field3 ? (
                  <span>#{findNameByCat(query[0].field3)}</span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="title">
              {query[0].title}
            </div>
            <div className="info">
              <div className="ds-f">
                <span>조회수 {query[0].count}</span>
                <span>{daysAgoFormatted(query[0].created_at)}</span>
              </div>
            </div>
            {/* <div className="tool_box">
              <div className="ds-f">
                <a href="#" className="ds-b">
                  <i className="ri-heart-3-line"></i>
                </a>
                <a href="#" className="ds-b">
                  <i className="ri-share-line"></i>
                </a>
              </div>
            </div> */}
          </div>
          <div className="content_body">
            <div className="content" style={{ whiteSpace: 'pre-wrap' }}>
              {query[0].description}
            </div>
          </div>
          <div className="content_tool_box">
            <div className="bh_row no-gutters jc-b ai-c">

              <div className="col-lg-auto col-12">
                <div className="tools">
                  <div className="bh_row gutters-5">
                    {/* <div className="col-auto">
                      <a href="#" className="ds-b active">
                        <div className="ds-f ai-c">
                          <i className="ri-heart-3-line"></i>
                          <p>관심글</p>
                        </div>
                      </a>
                    </div> */}
                    {/* <div className="col-auto">
                      <a href="#" className="ds-b">
                        <div className="ds-f ai-c">
                          <i className="ri-notification-3-line"></i>
                          <p>답변 알림받기</p>
                        </div>
                      </a>
                    </div> */}
                    <div className="col-auto">
                      <a href="/counsel" className="ds-b">
                        <div className="ds-f ai-c">
                          <i className="ri-share-line"></i>
                          <p>공유하기</p>
                        </div>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="/counsel" className="ds-b">
                        <div className="ds-f ai-c">
                          <i className="ri-list-check"></i>
                          <p>목록</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment_area">
            <span>
              다른 전문가 답변 <b>6</b>건
            </span>
            <div className="comment_box">
              <div className="info_box">
                <div className="bh_row no-gutters ai-c jc-b">
                  <div className="col-lg-auto col-12">
                    <div className="profile">
                      <div className="ds-f ai-c">
                        <div className="img_box">
                          <img src="images/main/profile_img1.png" alt="img" />
                        </div>
                        <div className="txt_box">
                          <h3>손TOP 서울 강남구</h3>
                          <p>홍길동 손해사정사</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-auto col-12">
                    <div className="ds-f bh-flex-flex-wrap">
                      <div className="other_btn">
                        <a href="#" className="ds-b">
                          전문가의 다른 간편 상담답변 보기 <b>56건</b>
                        </a>
                      </div>
                      <div className="other_btn type2">
                        <a href="counsel_inquiry.html" className="ds-b">
                          <b>상담 예약</b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment_content">
                전국민 자동차 보유율 및 운전면허 취득률이 높아지는 추세에 따라,
                운전 미숙으로 인한 크고 작은 사고도 많이 발생하고 있습니다.
                <br />
                이에 최근 한 운전자분의 변압기 추돌 사고에 대한 손해배상에
                보험금을 적용할 수 있는지의 의뢰를 해결한 사례에 대해 소개하고자
                합니다.
                <br />
                <br />
                1. 사건 개요: 사고는 A도로에서 발생한 B의 승합차가 운전 미숙으로
                인해 변압기에 추돌하는 사건으로, 기업상대 손해배상이 필요한
                상황이었습니다.
                <br />
                이를 위해 보험사에 대한 보험료 청구를 수행하게 되었습니다.
                <br />
                2. 업무 진행과정: 청구서 작성 단계에서는 사고 상황을 명확하게
                서술하고 피해 항목을 세밀하게 나누어 손해액을 정확하게 계산하는
                것이 중요했습니다.
                <br />
                특히, 자동차 수리비 및 기업상대 손해배상 비용을 각각
                <br />
                상세하게 기술함으로써 보험사에 정당한 청구를 제시할 수
                있었습니다.
              </div>
              <div className="comment_date">2024.01.10</div>
            </div>
            <div className="comment_box">
              <div className="info_box">
                <div className="bh_row no-gutters ai-c jc-b">
                  <div className="col-lg-auto col-12">
                    <div className="profile">
                      <div className="ds-f ai-c">
                        <div className="img_box">
                          <img src="images/main/profile_img2.png" alt="img" />
                        </div>
                        <div className="txt_box">
                          <h3>손TOP 서울 강남구</h3>
                          <p>홍길동 손해사정사</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-auto col-12">
                    <div className="ds-f bh-flex-flex-wrap">
                      <div className="other_btn">
                        <a href="#" className="ds-b">
                          전문가의 다른 간편 상담답변 보기 <b>56건</b>
                        </a>
                      </div>
                      <div className="other_btn type2">
                        <a href="counsel_inquiry.html" className="ds-b">
                          <b>상담 예약</b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment_content">
                전국민 자동차 보유율 및 운전면허 취득률이 높아지는 추세에 따라,
                운전 미숙으로 인한 크고 작은 사고도 많이 발생하고 있습니다.
                <br />
                이에 최근 한 운전자분의 변압기 추돌 사고에 대한 손해배상에
                보험금을 적용할 수 있는지의 의뢰를 해결한 사례에 대해 소개하고자
                합니다.
                <br />
                <br />
                1. 사건 개요: 사고는 A도로에서 발생한 B의 승합차가 운전 미숙으로
                인해 변압기에 추돌하는 사건으로, 기업상대 손해배상이 필요한
                상황이었습니다.
                <br />
                이를 위해 보험사에 대한 보험료 청구를 수행하게 되었습니다.
                <br />
                2. 업무 진행과정: 청구서 작성 단계에서는 사고 상황을 명확하게
                서술하고 피해 항목을 세밀하게 나누어 손해액을 정확하게 계산하는
                것이 중요했습니다.
                <br />
                특히, 자동차 수리비 및 기업상대 손해배상 비용을 각각
                <br />
                상세하게 기술함으로써 보험사에 정당한 청구를 제시할 수
                있었습니다.
              </div>
              <div className="comment_date">2024.01.10</div>
            </div>
            <div className="comment_box">
              <div className="info_box">
                <div className="bh_row no-gutters ai-c jc-b">
                  <div className="col-lg-auto col-12">
                    <div className="profile">
                      <div className="ds-f ai-c">
                        <div className="img_box">
                          <img src="images/main/profile_img3.png" alt="img" />
                        </div>
                        <div className="txt_box">
                          <h3>손TOP 서울 강남구</h3>
                          <p>홍길동 손해사정사</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-auto col-12">
                    <div className="ds-f bh-flex-flex-wrap">
                      <div className="other_btn">
                        <a href="#" className="ds-b">
                          전문가의 다른 간편 상담답변 보기 <b>56건</b>
                        </a>
                      </div>
                      <div className="other_btn type2">
                        <a href="counsel_inquiry.html" className="ds-b">
                          <b>상담 예약</b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment_content">
                전국민 자동차 보유율 및 운전면허 취득률이 높아지는 추세에 따라,
                운전 미숙으로 인한 크고 작은 사고도 많이 발생하고 있습니다.
                <br />
                이에 최근 한 운전자분의 변압기 추돌 사고에 대한 손해배상에
                보험금을 적용할 수 있는지의 의뢰를 해결한 사례에 대해 소개하고자
                합니다.
                <br />
                <br />
                1. 사건 개요: 사고는 A도로에서 발생한 B의 승합차가 운전 미숙으로
                인해 변압기에 추돌하는 사건으로, 기업상대 손해배상이 필요한
                상황이었습니다.
                <br />
                이를 위해 보험사에 대한 보험료 청구를 수행하게 되었습니다.
                <br />
                2. 업무 진행과정: 청구서 작성 단계에서는 사고 상황을 명확하게
                서술하고 피해 항목을 세밀하게 나누어 손해액을 정확하게 계산하는
                것이 중요했습니다.
                <br />
                특히, 자동차 수리비 및 기업상대 손해배상 비용을 각각
                <br />
                상세하게 기술함으로써 보험사에 정당한 청구를 제시할 수
                있었습니다.
              </div>
              <div className="comment_date">2024.01.10</div>
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
