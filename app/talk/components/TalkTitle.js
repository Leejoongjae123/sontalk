"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase/client";
import keywordList from "@/components/keywordList";
import categoryList from "@/components/categoryList";
import Link from "next/link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import AOS from "aos";

function TalkTitle() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
  }, []);

  const [isComplete, setIsComplete] = useState(false);
  const [talks, setTalks] = useState([]);
  const [totalCount, setTotalCount] = useState(10)
  const [currentPage, setCurrentPage] = useState(1);
  const fetchData = async () => {
    let { data: talk, error } = await supabase.from("talk").select("*").range((currentPage-1)*10,currentPage*10);
    setTalks(talk);
    setIsComplete(true);
    setTotalCount(Math.ceil(talk.length/10))
  };

  



  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage); // 페이지 변경 시 currentPage 상태 업데이트
  };

  return (
    <>
      <div
        className="board_title_area"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <span>손사 Talk</span>
        <h3>
          분야별 손해사정
          <br />
          <span className="bh_color_main">지식 및 정보</span>를 찾아보세요
        </h3>
        <form className="search_area">
          <div className="ds-f">
            <input
              type="text"
              placeholder="키워드 또는 제목, 내용을 입력해주세요."
            />
            <button type="submit">
              <i className="ri-search-line"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="board_wrap">
        <div className="bh_row">
          {talks &&
            talks.map((elem, index) => {
              return (
                <div className="col-lg-6 col-12 mb-30 m-mb-20">
                  <div className="item item1 po-r">
                    <div className="item_inner">
                      <div className="ds-f ai-c name">
                        <i className="ri-account-pin-circle-fill fw-l"></i>
                        <p className="fw-m">{elem.expertName} 손해사정사</p>
                      </div>
                      <div className="title">{elem.title}</div>
                      <div className="content ellipsis">{elem.description}</div>
                      <div className="keyword">
                        <span>#{findNameByKey(elem.keyword1)}</span>
                        <span>#{findNameByKey(elem.keyword2)}</span>
                        <span>#{findNameByKey(elem.keyword3)}</span>
                      </div>
                      <div className="info">
                        <div className="ds-f ai-c jc-b bh-flex-flex-wrap">
                          <div className="category">
                            <div className="ds-f ai-c">
                              <i className="ri-check-line"></i>
                              <p>{findNameByCat(elem.field1)}</p>
                            </div>
                          </div>
                          <div className="date">
                            <div className="ds-f">
                              <span>조회수 {elem.count}</span>
                              <span>{formatDate(elem.created_at)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <a href="talk_detail.html"></a> */}
                    <Link href={`/talk/${elem.talkNo.toString()}`}></Link>
                  </div>
                </div>
              );
            })}

          {/* <div className="col-lg-6 col-12 mb-30 m-mb-20">
            <div className="item item2 po-r">
              <div className="item_inner">
                <div className="ds-f ai-c name">
                  <i className="ri-account-pin-circle-fill fw-l"></i>
                  <p className="fw-m">홍길동 손해사정사</p>
                </div>
                <div className="title">
                  운전 미숙 원인 사고 발생에 대한 보험금 청구
                </div>
                <div className="content">
                  안녕하세요. 법무법인 NHW의 김돌쇠 손해사정사입니다. 전국민
                  자동차 보유율 및 운전면허 취득률이 높아지는 추세에 따라, 운전
                  미숙으로 인...
                </div>
                <div className="keyword">
                  <span>#손해배상</span>
                  <span>#교통사고</span>
                  <span>#운전자보험</span>
                </div>
                <div className="info">
                  <div className="ds-f ai-c jc-b bh-flex-flex-wrap">
                    <div className="category">
                      <div className="ds-f ai-c">
                        <i className="ri-check-line"></i>
                        <p> 운전자보험</p>
                      </div>
                    </div>
                    <div className="date">
                      <div className="ds-f">
                        <span>조회수 326</span>
                        <span>2024.01.10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="talk_detail.html"></a>
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-30 m-mb-20">
            <div className="item item3 po-r">
              <div className="item_inner">
                <div className="ds-f ai-c name">
                  <i className="ri-account-pin-circle-fill fw-l"></i>
                  <p className="fw-m">홍길동 손해사정사</p>
                </div>
                <div className="title">
                  운전 미숙 원인 사고 발생에 대한 보험금 청구
                </div>
                <div className="content">
                  안녕하세요. 법무법인 NHW의 김돌쇠 손해사정사입니다. 전국민
                  자동차 보유율 및 운전면허 취득률이 높아지는 추세에 따라, 운전
                  미숙으로 인...
                </div>
                <div className="keyword">
                  <span>#손해배상</span>
                  <span>#교통사고</span>
                  <span>#운전자보험</span>
                </div>
                <div className="info">
                  <div className="ds-f ai-c jc-b bh-flex-flex-wrap">
                    <div className="category">
                      <div className="ds-f ai-c">
                        <i className="ri-check-line"></i>
                        <p> 운전자보험</p>
                      </div>
                    </div>
                    <div className="date">
                      <div className="ds-f">
                        <span>조회수 326</span>
                        <span>2024.01.10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="talk_detail.html"></a>
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-30 m-mb-20">
            <div className="item item4 po-r">
              <div className="item_inner">
                <div className="ds-f ai-c name">
                  <i className="ri-account-pin-circle-fill fw-l"></i>
                  <p className="fw-m">홍길동 손해사정사</p>
                </div>
                <div className="title">
                  운전 미숙 원인 사고 발생에 대한 보험금 청구
                </div>
                <div className="content">
                  안녕하세요. 법무법인 NHW의 김돌쇠 손해사정사입니다. 전국민
                  자동차 보유율 및 운전면허 취득률이 높아지는 추세에 따라, 운전
                  미숙으로 인...
                </div>
                <div className="keyword">
                  <span>#손해배상</span>
                  <span>#교통사고</span>
                  <span>#운전자보험</span>
                </div>
                <div className="info">
                  <div className="ds-f ai-c jc-b bh-flex-flex-wrap">
                    <div className="category">
                      <div className="ds-f ai-c">
                        <i className="ri-check-line"></i>
                        <p> 운전자보험</p>
                      </div>
                    </div>
                    <div className="date">
                      <div className="ds-f">
                        <span>조회수 326</span>
                        <span>2024.01.10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="talk_detail.html"></a>
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-30 m-mb-20">
            <div className="item item3 po-r">
              <div className="item_inner">
                <div className="ds-f ai-c name">
                  <i className="ri-account-pin-circle-fill fw-l"></i>
                  <p className="fw-m">홍길동 손해사정사</p>
                </div>
                <div className="title">
                  운전 미숙 원인 사고 발생에 대한 보험금 청구
                </div>
                <div className="content">
                  안녕하세요. 법무법인 NHW의 김돌쇠 손해사정사입니다. 전국민
                  자동차 보유율 및 운전면허 취득률이 높아지는 추세에 따라, 운전
                  미숙으로 인...
                </div>
                <div className="keyword">
                  <span>#손해배상</span>
                  <span>#교통사고</span>
                  <span>#운전자보험</span>
                </div>
                <div className="info">
                  <div className="ds-f ai-c jc-b bh-flex-flex-wrap">
                    <div className="category">
                      <div className="ds-f ai-c">
                        <i className="ri-check-line"></i>
                        <p> 운전자보험</p>
                      </div>
                    </div>
                    <div className="date">
                      <div className="ds-f">
                        <span>조회수 326</span>
                        <span>2024.01.10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="talk_detail.html"></a>
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-30 m-mb-20">
            <div className="item item4 po-r">
              <div className="item_inner">
                <div className="ds-f ai-c name">
                  <i className="ri-account-pin-circle-fill fw-l"></i>
                  <p className="fw-m">홍길동 손해사정사</p>
                </div>
                <div className="title">
                  운전 미숙 원인 사고 발생에 대한 보험금 청구
                </div>
                <div className="content">
                  안녕하세요. 법무법인 NHW의 김돌쇠 손해사정사입니다. 전국민
                  자동차 보유율 및 운전면허 취득률이 높아지는 추세에 따라, 운전
                  미숙으로 인...
                </div>
                <div className="keyword">
                  <span>#손해배상</span>
                  <span>#교통사고</span>
                  <span>#운전자보험</span>
                </div>
                <div className="info">
                  <div className="ds-f ai-c jc-b bh-flex-flex-wrap">
                    <div className="category">
                      <div className="ds-f ai-c">
                        <i className="ri-check-line"></i>
                        <p> 운전자보험</p>
                      </div>
                    </div>
                    <div className="date">
                      <div className="ds-f">
                        <span>조회수 326</span>
                        <span>2024.01.10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="talk_detail.html"></a>
            </div>
          </div> */}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center",width:"100%" }}>
        <Stack spacing={2} direction="row" style={{overflowX:'auto'}}>
          <Pagination
            count={totalCount}
            page={currentPage}
            onChange={handleChangePage}
            sx={{
              "& .MuiPaginationItem-root": {
                // Targeting the root item of Pagination
                fontSize: "14px", // Setting font size to 16px
                minWidth:'auto',
              },
              '.MuiPagination-ul': {
                flexWrap: 'nowrap', // Preventing the pagination from wrapping onto multiple lines
              }
            }}
          />
        </Stack>
      </div>
    </>
  );
}

export default TalkTitle;

function findNameByCat(catValue) {
  const item = categoryList?.find((item) => item.cat === catValue);
  return item ? item.name : "해당하는 카테고리가 없습니다.";
}

function findNameByKey(catValue) {
  // keywordList에서 catValue와 일치하는 cat 값을 가진 객체를 찾습니다.
  const matchingKeyword = keywordList.find(
    (keyword) => keyword.cat === catValue
  );

  // 일치하는 객체가 있으면 그 객체의 name 값을 반환합니다.
  return matchingKeyword ? matchingKeyword.name : undefined;
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
