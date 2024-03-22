"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
import keywordList from "@/components/keywordList";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import Link from "next/link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export default function Quesitons() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const [isComplete, setIsComplete] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [activeTab, setActiveTab] = useState("count");
  const [activeSort, setActiveSort] = useState("count");
  const [selectedTag, setSelectedTag] = useState("");
  const [totalCount, setTotalCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchComplete, setSearchComplete] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const fetchData = async (searchKeyword) => {
    let result;
    if (categoryName) {
      console.log("CASE1");
      let { data: query, error } = await supabase
        .from("query")
        .select("*,queryAnswer(*,profiles(*))")
        .like("title", "%" + searchKeyword + "%")
        .order(activeTab, { ascending: false })
        .range((currentPage - 1) * 10, currentPage * 10)
        .or(
          `field1.eq.${categoryName},field2.eq.${categoryName},field3.eq.${categoryName}`
        )
        .eq("secret", "false");
      result = query;
    } else {
      console.log("CASE2");
      let { data: query, error } = await supabase
        .from("query")
        .select("*,queryAnswer(*,profiles(*))")
        .like("title", "%" + searchKeyword + "%")
        .order(activeTab, { ascending: false })
        .range((currentPage - 1) * 10, currentPage * 10)
        .eq("secret", "false");
      result = query;
    }

    setTotalCount(Math.ceil(result.length / 10));

    setQuestions(result);
    setIsComplete(true);
  };

  const fetchTotal = async () => {
    let { data: query, error } = await supabase.from("query").select("*");
    setTotalCount(Math.ceil(query.length / 10));
  };

  useEffect(() => {
    fetchData(searchKeyword);
  }, [currentPage, searchComplete, categoryName,searchKeyword,activeTab]);

  useEffect(() => {
    fetchTotal();
  }, []);

  // 탭을 클릭했을 때 실행될 함수입니다.
  const handleTabClick = (tabName) => {
    // 클릭된 탭의 이름으로 activeTab 상태를 업데이트합니다.
    setActiveTab(tabName);
  };

  // 태그를 클릭했을 때 실행될 함수입니다.
  const handleTagClick = (tag) => {
    // 이미 선택된 태그를 다시 클릭했는지 여부를 확인하고,
    // 해당되면 선택을 취소하고, 그렇지 않으면 새 태그를 선택합니다.
    setSelectedTag(selectedTag === tag ? "" : tag);
  };

  const tags = [
    "#교통사고",
    "#충치",
    "#손해배상",
    "#산재",
    "#운전자보험",
    "#자동차보험",
    "#암",
    "#질병",
    "#상해",
    "#사망보험",
    "#의료보험",
  ];

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage); // 페이지 변경 시 currentPage 상태 업데이트
  };

  // input 값이 변경될 때마다 searchKeyword 상태를 업데이트합니다.
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearchKeyword(event.target.value);
  };
  // 버튼 클릭 시 실행할 함수입니다.
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchComplete((prevState) => prevState + 1);
  };

  const handleCategory = (input) => {
    setCategoryName(input);
  };

  // 디바운스를 위한 상태
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    // 입력값이 변경되고 일정 시간(예: 500ms) 동안 변경되지 않으면 검색을 실행
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

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

  const handleInputChange2 = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div
        className="board_title_area"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <span style={{ fontSize: "2rem" }}>간편 상담</span>
        <h3>
          나와 비슷한 문제의 답변을 찾아보거나, 직접 상담글을 작성하여
          <br />
          <span className="bh_color_main">답변을 받아볼 수 있어요</span>
        </h3>
        <form className="search_area">
          <div className="ds-f">
            <input
              type="text"
              placeholder="제목, 내용을 입력해주세요."
              value={searchKeyword}
              onChange={(e)=>{handleInputChange(e);handleInputChange2(e)}} // input 값이 변경될 때 함수를 호출합니다.
            />
            <button type="button" onClick={handleSearch}>
              <i className="ri-search-line"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="keyword_area">
        <h4>키워드</h4>
        <div className="ds-f bh-flex-flex-wrap">
          {tags.map((tag, index) => (
            <p
              key={index}
              onClick={() => {
                handleTagClick(tag);
                handleCategory(keywordList[index].cat);
              }}
              name={keywordList[index].cat}
              style={
                selectedTag === tag
                  ? { backgroundColor: "#171C60", color: "white" }
                  : {}
              }
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="top_tool">
        <div className="bh_row no-gutters jc-b ai-c">
          <div className="col-lg-auto col-12">
            <div className="sorting">
              <div className="ds-f">
                <a
                  className={`ds-b ${activeTab === "count" ? "active" : ""}`}
                  onClick={() => handleTabClick("count")}
                >
                  조회순
                </a>
                <a
                  className={`ds-b ${
                    activeTab === "created_at" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("created_at")}
                >
                  최신 질문순
                </a>
                <a
                  className={`ds-b ${
                    activeTab === "updated_at" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("updated_at")}
                >
                  최신 답변순
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-auto col-12">
            <Link href="/counsel/inquiry" className="write_btn ds-b">
              <i className="ri-pencil-line"></i>글쓰기
            </Link>
          </div>
        </div>
      </div>
      <div className="board_wrap">
        {questions &&
          questions.map((elem, index) => {
            // isRepresentative가 true인 항목 찾기
            const representativeAnswer = elem.queryAnswer.find(
              (answer) => answer.isRepresentative
            );

            // 없으면 created_at 기준 최신 항목 찾기
            const latestAnswer = [...elem.queryAnswer].sort(
              (a, b) => new Date(b.created_at) - new Date(a.created_at)
            )[0];

            // 사용할 항목 결정
            const selectedAnswer = representativeAnswer || latestAnswer;

            return (
              <div className={`item item${index + 1}`} key={index}>
                <div className="item_inner">
                  <div className="catagory">
                    <div className="ds-f">
                      {elem.field1 ? (
                        <span>#{findNameByCat(elem.field1)}</span>
                      ) : (
                        <></>
                      )}
                      {elem.field2 ? (
                        <span>#{findNameByCat(elem.field2)}</span>
                      ) : (
                        <></>
                      )}
                      {elem.field3 ? (
                        <span>#{findNameByCat(elem.field3)}</span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="title">
                    <Link href={`/counsel/${elem.questionNo.toString()}`}>
                      {elem.title}
                    </Link>
                  </div>
                  <div
                    className="content"
                    style={{
                      whiteSpace: "pre-wrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {elem.description}
                  </div>
                  {elem.queryAnswer.length >= 1 ? (
                    <div className="anser">
                      <div className="ds-f name">
                        <span>대표답변</span>
                        <p>{selectedAnswer.profiles?.name} 손해사정사</p>
                      </div>
                      <div className="anser_content">
                        {selectedAnswer.description}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}

                  <div className="info">
                    <div className="bh_row no-gutters ai-c jc-b">
                      {elem.queryAnswer.length ? (
                        <div className="col-auto">
                          <p>
                            다른 전문가 답변{" "}
                            <b className="fw-b">
                              {elem.queryAnswer.length
                                ? elem.queryAnswer.length - 1
                                : "0"}
                            </b>
                            건
                          </p>
                        </div>
                      ) : (
                        <div></div>
                      )}

                      <div className="col-auto">
                        <div className="ds-f">
                          <span>조회수 {elem.count}</span>
                          <span>{daysAgoFormatted(elem.created_at)}</span>
                          <span>{maskMiddleName(elem.name)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {totalCount !== 0 && (
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
