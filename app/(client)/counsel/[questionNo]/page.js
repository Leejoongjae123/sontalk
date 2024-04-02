import React from "react";
import { createClient } from "@/utils/supabase/server";
import { headers, cookies } from "next/headers";
import keywordList from "@/components/keywordList";

export default async function page({ params }) {
  const cookieStore = cookies();
  const questionNo = params.questionNo;
  const supabase = createClient(cookieStore);
  let { data: query, error } = await supabase
    .from("query")
    .select("*,queryAnswer(*,profiles(*))")
    .eq("questionNo", questionNo.toString());

  const currentClick = query[0].count;

  const { data, updateError } = await supabase
    .from("query")
    .update({ count: currentClick + 1 })
    .eq("questionNo", questionNo.toString())
    .select();

  console.log(query[0].queryAnswer);
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
            <div className="title">{query[0].title}</div>
            <div className="info">
              <div className="ds-f">
                <span>조회수 {query[0].count}</span>
                <span>{daysAgoFormatted(query[0].created_at)}</span>
                <span>{maskMiddleName(query[0].name)}</span>
              </div>
            </div>
          </div>
          <div className="content_body">
            <div className="content" style={{ whiteSpace: "pre-wrap" }}>
              {query[0].description}
            </div>
          </div>
          <div className="content_tool_box">
            <div className="bh_row no-gutters jc-b ai-c">
              <div className="col-lg-auto col-12">
                <div className="tools">
                  <div className="bh_row gutters-5">
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
              전문가 답변 <b>{query[0].queryAnswer.length}</b>건
            </span>
            {query[0].queryAnswer
              .sort((a, b) => {
                // isRepresentative가 true인 항목을 우선하여 앞으로 배치
                if (a.isRepresentative && !b.isRepresentative) return -1;
                if (!a.isRepresentative && b.isRepresentative) return 1;

                // isRepresentative 값이 같을 경우 created_at으로 내림차순 정렬
                return new Date(b.created_at) - new Date(a.created_at);
              })
              .map((elem, index) => {
                return (
                  <div className="comment_box" key={index}>
                    <div className="info_box">
                      <div className="bh_row no-gutters ai-c jc-b">
                        <div className="col-lg-auto col-12">
                          <div className="profile">
                            <div className="ds-f ai-c">
                              <div className="img_box">
                                <img
                                  style={{ borderRadius: "100%" }}
                                  src={elem?.profiles.imageUrl}
                                  alt="img"
                                />
                              </div>
                              <div className="txt_box">
                                <h3>
                                  손TOP {findNameByCat(elem?.profiles?.region)}
                                </h3>
                                <p>{elem?.profiles?.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-auto col-12">
                          <div className="ds-f bh-flex-flex-wrap">
                            <div className="other_btn type2">
                              <a
                                href={`/booking?expertNo=${elem.expertNo}`}
                                className="ds-b"
                              >
                                <b style={{ color: "white" }}>상담 예약</b>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment_content">{elem.description}</div>
                    <div className="comment_date">
                      {formatDate(elem.created_at)}
                    </div>
                  </div>
                );
              })}
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

function formatDate(dateString) {
  // 주어진 날짜를 Date 객체로 파싱
  const givenDate = new Date(dateString);

  // 연, 월, 일을 각각 추출
  const year = givenDate.getFullYear();
  const month = (givenDate.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고, 두 자리수로 맞춤
  const day = givenDate.getDate().toString().padStart(2, "0"); // 일자를 두 자리수로 맞춤

  // "XXXX.XX.XX" 형식으로 반환
  return `${year}.${month}.${day}`;
}

function maskMiddleName(name) {
  // 이름의 길이가 1 이하일 경우 그대로 반환
  if (name.length <= 1) {
    return name;
  }

  // 가운데 글자의 시작 인덱스와 길이 계산
  const middleIndex = Math.floor(name.length / 2);
  let maskLength = name.length % 2 === 0 ? 2 : 1; // 짝수면 2, 홀수면 1

  // 가운데 글자(들)을 별표로 대체
  const maskedName =
    name.substring(0, middleIndex - Math.floor(maskLength / 2)) +
    "*".repeat(maskLength) +
    name.substring(middleIndex + Math.ceil(maskLength / 2));

  return maskedName;
}
