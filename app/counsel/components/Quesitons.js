"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase/client";
import keywordList from "../../../components/keywordList";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import Link from 'next/link'

export default function Quesitons() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
  }, []);

  const [isComplete, setIsComplete] = useState(false);
  const [questions, setQuestions] = useState([]);
  const fetchData = async () => {
    let { data: query, error } = await supabase.from("query").select("*,queryAnswer(*,introduction(*))");
    setQuestions(query);
    setIsComplete(true);
  };

  useEffect(() => {
    fetchData();
  }, [isComplete]);

  console.log(questions)
  return (
    <>
      <div
        className="board_title_area"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <span>간편 상담</span>
        <h3>
          간편 상담을 통해
          <br />
          <span className="bh_color_main">궁금증을 해결해보세요.</span>
        </h3>
        <form className="search_area">
          <div className="ds-f">
            <input
              type="text"
              placeholder="제목, 내용을 입력해주세요."
            />
            <button type="submit">
              <i className="ri-search-line"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="keyword_area">
        <h4>키워드</h4>
        <div className="ds-f bh-flex-flex-wrap">
          <p>#교통사고</p>
          <p>#충치</p>
          <p>#손해배상</p>
          <p>#산재</p>
          <p>#운전자보험</p>
          <p>#자동차보험</p>
          <p>#암</p>
          <p>#질병</p>
          <p>#상해</p>
          <p>#사망보험</p>
          <p>#의료보험</p>
        </div>
      </div>
      <div className="top_tool">
        <div className="bh_row no-gutters jc-b ai-c">
          <div className="col-lg-auto col-12">
            <div className="sorting">
              <div className="ds-f">
                <a href="#" className="ds-b active">
                  최신 질문순
                </a>
                <a href="#" className="ds-b">
                  최신 답변순
                </a>
                <a href="#" className="ds-b">
                  조회순
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-auto col-12">
            <a href="#" className="write_btn ds-b">
              <i className="ri-pencil-line"></i>글쓰기
            </a>
          </div>
        </div>
      </div>
      <div className="board_wrap">
        {questions&&questions.map((elem,index) => {
          return (
            <div className={`item item${index+1}`} key={index}>
              <div className="item_inner">
                <div className="catagory">
                  <div className="ds-f">
                    
                    
                    {elem.field1?(<span>#{findNameByCat(elem.field1)}</span>):(<></>)}
                    {elem.field2?(<span>#{findNameByCat(elem.field2)}</span>):(<></>)}
                    {elem.field3?(<span>#{findNameByCat(elem.field3)}</span>):(<></>)}
                  </div>
                </div>
                <div className="title">
                  <Link href={`/counsel/${elem.questionNo.toString()}`}>
                    {elem.title}
                  </Link>
                </div>
                <div className="content" style={{ whiteSpace: 'pre-wrap' }}>
                  {elem.description}
                </div>
                <div className="anser">
                  <div className="ds-f name">
                    <span>대표답변</span>
                    <p>{elem.queryAnswer[0].introduction.name} 손해사정사</p>
                  </div>
                  <div className="anser_content">
                    {elem.queryAnswer[0].description}
                  </div>
                </div>
                <div className="info">
                  <div className="bh_row no-gutters ai-c jc-b">
                    <div className="col-auto">
                      <p>
                        다른 전문가 답변 <b className="fw-b">{elem.queryAnswer.length-1}</b>건
                      </p>
                    </div>
                    <div className="col-auto">
                      <div className="ds-f">
                        <span>조회수 {elem.count}</span>
                        <span>{daysAgoFormatted(elem.created_at)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination" style={{ fontSize: "1.5rem" }}>
        <div className="bh_row no-gutters jc-c">
          <div className="prve_btn">
            <div className="ds-f">
              <a href="#" className="ds-b direction">
                <i className="ri-arrow-left-double-line"></i>
              </a>
              <a href="#" className="ds-b direction">
                <i className="ri-arrow-left-s-line"></i>
              </a>
            </div>
          </div>
          <div className="page_no_wrap">
            <a href="#" className="ds-b direction active">
              1
            </a>
          </div>
          <div className="next_btn">
            <div className="ds-f">
              <a href="#" className="ds-b direction">
                <i className="ri-arrow-right-s-line"></i>
              </a>
              <a href="#" className="ds-b direction">
                <i className="ri-arrow-right-double-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



function findNameByCat(catValue) {

  // keywordList에서 catValue와 일치하는 cat 값을 가진 객체를 찾습니다.
  const matchingKeyword = keywordList.find(keyword => keyword.cat === catValue);

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