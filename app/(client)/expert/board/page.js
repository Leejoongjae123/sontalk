"use client";
import React from "react";
import Title from "./components/Title";
import axios from "axios";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
import categoryList from "@/components/categoryList";
import { useSearchParams } from "next/navigation";
import Phone from "./components/Phone";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";

export default function ExpertBoard() {
  const searchParams = useSearchParams();
  const search = searchParams.get("cat");
  const page = searchParams.get("page");
  const [totalCount, setTotalCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [experts, setExperts] = useState();

  const fetchData = async () => {
    if (search.includes("R")) {
      let { data: profiles, error } = await supabase
        .from("profiles")
        .select("*,queryAnswer(*)")
        .eq("region", search)
        .range((currentPage - 1) * 10, currentPage * 10);
      setExperts(profiles);
      setTotalCount(Math.ceil(profiles.length / 10));
    } else {
      let { data: profiles, error } = await supabase
        .from("profiles")
        .select("*,queryAnswer(*)")
        // field1이 search와 같거나, field2가 search와 같거나, field3가 search와 같은 조건
        .or(`field1.eq.${search},field2.eq.${search},field3.eq.${search}`)
        .range((currentPage - 1) * 10, currentPage * 10);
      setExperts(profiles);
      setTotalCount(Math.ceil(profiles.length / 10));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const router = useRouter();

  const navigateToBooking = (expertNo) => {
    router.push(`/booking?expertNo=${expertNo}`);
  };

  const handleClick = (e, phoneNumber) => {
    // 사용자의 환경이 모바일이 아닌 경우
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      e.preventDefault(); // 기본 동작 방지
      // 전화번호 복사, 모달 표시, 또는 다른 동작을 수행
      alert(`전화번호 : ${phoneNumber}`);
    }
    // 모바일 사용자의 경우, 기본적인 tel: 링크 동작 수행
  };

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage); // 페이지 변경 시 currentPage 상태 업데이트
  };

  const handleCardClick = (elem) => {
    router.push(`/expert/board/${elem.expertNo}`);
  };

  return (
    <div className="body">
      <div className="expert_board_wrap">
        <div className="bh_wrap">
          <Title></Title>
          <div className="board_wrap">
            {experts?.map((elem, index) => {
              return (
                <div className="item item1" onClick={()=>{handleCardClick(elem)}} style={{cursor:'pointer'}}>
                  <div className="item_inner po-r">
                    <div className="bh_row no-gutters jc-b">
                      <div
                        className="col-lg-auto col-12"
                        style={{ flex: "0 0 70%" }}
                      >
                        <div
                          className="profile"
                          style={{
                            maxWidth: "100%", // 최대 너비 설정
                            overflow: "hidden", // 내용이 넘칠 경우 숨김
                            whiteSpace: "nowrap", // 텍스트를 한 줄로 처리
                            textOverflow: "ellipsis", // 넘친 텍스트에 말줄임표 적용
                          }}
                        >
                          <div
                            className="ds-f bh-flex-flex-wrap ai-c"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <div className="img_box">
                              <img
                                className="responsive-img2"
                                src={elem.imageUrl}
                                alt="img"
                              />
                            </div>
                            <div className="txt_box">
                              <h3>
                                <a href={`/expert/board/${elem.expertNo}`}>
                                  손TOP {elem.branch}
                                </a>
                              </h3>
                              <div className="ds-f ai-c name">
                                <i className="ri-account-pin-circle-fill"></i>
                                <p className="fw-m">{elem.name}</p>
                              </div>
                              <div
                                className="category"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                {elem.field1 ? (
                                  <div className="ds-f">
                                    <p>{findNameByCat(elem.field1)}</p>
                                  </div>
                                ) : (
                                  <></>
                                )}
                                {elem.field2 ? (
                                  <div className="ds-f">
                                    <p>{findNameByCat(elem.field2)}</p>
                                  </div>
                                ) : (
                                  <></>
                                )}
                                {elem.field3 ? (
                                  <div className="ds-f">
                                    <p>{findNameByCat(elem.field3)}</p>
                                  </div>
                                ) : (
                                  <></>
                                )}

                                {/* <div className="ds-f" style={{marginTop:"1rem"}}>
                                  {elem.field2 ? (
                                    <p>{findNameByCat(elem.field2)}</p>
                                  ) : (
                                    <></>
                                  )}
                                </div> */}
                              </div>
                              <div class="hash">
                                <div class="ds-f">
                                  {elem.character
                                    .split(",")
                                    .filter((elem) => elem.length > 1) // Add this line to filter out elements with a character count of 1 or less
                                    .map((elem, index) => {
                                      return <p style={{fontWeight:'bold',fontSize:'1rem'}}>#{elem.trim()}</p>; // Added .trim() to remove any leading or trailing whitespace
                                    })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-auto col-12"
                        style={{ flex: "0 0 30%" }}
                      >
                        <div className="info">
                          <div className="star "></div>
                          <div className="review mb-10">
                            <div className="ds-f ai-c jc-b">
                              <p>상담 답변</p>
                              <span>{elem.queryAnswer.length} 건</span>
                            </div>
                          </div>
                          <div className="phone mb-10">
                            <Phone elem={elem}></Phone>
                          </div>
                          <div className="reservation">
                            <a
                              onClick={() => navigateToBooking(elem.expertNo)}
                              className="ds-b"
                            >
                              <div className="ds-f ai-c jc-b">
                                <p>
                                  <i className="ri-home-4-fill"></i>상담 예약
                                </p>
                                <span>바로가기</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {totalCount != 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Stack
                spacing={2}
                direction="row"
                style={{ overflowX: "auto", marginTop: "2rem" }}
              >
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
        </div>
      </div>
    </div>
  );
}

function findNameByCat(catValue) {
  const item = categoryList.find((item) => item.cat === catValue);
  return item ? item.name : "해당하는 카테고리가 없습니다.";
}
