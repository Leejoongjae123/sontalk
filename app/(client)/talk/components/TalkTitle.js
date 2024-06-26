"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
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
  const [totalCount, setTotalCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchComplete, setSearchComplete] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  // 디바운스를 위한 상태
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const fetchData = async () => {
    let {
      data: talk,
      error,
      count,
    } = await supabase
      .from("talk")
      .select("*,expertNo(*)", { count: "exact" })
      .like("title", "%" + searchKeyword + "%")
      .range((currentPage - 1) * 10, currentPage * 10 - 1); // 수정된 부분

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      const totalPages =
        count % 10 === 0 ? count / 10 : Math.floor(count / 10) + 1;

      setTalks(talk);
      setTotalCount(totalPages); // 전체 항목 수를 정확히 설정
      setIsComplete(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, searchComplete]);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage); // 페이지 변경 시 currentPage 상태 업데이트
  };

  // input 값이 변경될 때마다 searchKeyword 상태를 업데이트합니다.
  const handleInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };
  // 버튼 클릭 시 실행할 함수입니다.
  const handleSearch = () => {
    setSearchComplete((prevState) => prevState + 1);
  };

  useEffect(() => {
    // 입력값이 변경되고 일정 시간(예: 500ms) 동안 변경되지 않으면 검색을 실행
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    // 컴포넌트가 언마운트되거나 입력값이 변경될 때마다 타이머를 초기화
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    // debouncedSearchTerm이 변경될 때 검색 실행
    if (debouncedSearchTerm) {
      // 검색 로직
      setSearchComplete((prevState) => prevState + 1);
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <div
        className="board_title_area"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <span style={{ fontSize: "2rem" }}>손사 Talk</span>
        <h3>
          분야별 손해사정
          <br />
          <span className="bh_color_main">지식 및 정보</span>를 찾아보세요
        </h3>
        <form className="search_area">
          <div className="ds-f">
            <input
              type="text"
              placeholder="제목, 내용을 입력해주세요."
              value={searchKeyword}
              onChange={(e) => {
                handleInputChange(e), handleSearch(e);
              }} // input 값이 변경될 때 함수를 호출합니다.
            />
            <button type="button" onClick={handleSearch}>
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
                        <p className="fw-m">손TOP {elem.expertNo.branch} {elem.expertNo.name} </p>
                      </div>
                      <div className="title">{elem.title}</div>
                      <div className="content ellipsis">
                        {/* <p>{elem.description}</p> */}
                        <div
                        dangerouslySetInnerHTML={createMarkup(elem.description)}>
                        </div>
                      </div>
                      <div className="keyword">
                        {elem.keyword1 && (
                          <span>#{findNameByKey(elem.keyword1)}</span>
                        )}
                        {elem.keyword2 && (
                          <span>#{findNameByKey(elem.keyword2)}</span>
                        )}
                        {elem.keyword3 && (
                          <span>#{findNameByKey(elem.keyword3)}</span>
                        )}
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
        </div>
      </div>
      {totalCount != 0 && (
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Stack spacing={2} direction="row" style={{ overflowX: "auto" }}>
            <Pagination
              count={totalCount}
              page={currentPage}
              onChange={handleChangePage}
              sx={{
                "& .MuiPaginationItem-root": {
                  // Targeting the root item of Pagination
                  fontSize: "14px", // Setting font size to 16px
                  minWidth: "auto",
                },
                ".MuiPagination-ul": {
                  flexWrap: "nowrap", // Preventing the pagination from wrapping onto multiple lines
                },
              }}
            />
          </Stack>
        </div>
      )}
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

function createMarkup(description) {
  // img 태그를 찾아서 제거하는 정규식
  const cleanedDescription = description.replace(/<img[^>]*>/g, "");
  return { __html: cleanedDescription };
}