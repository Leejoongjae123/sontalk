"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import keywordList from '@/components/keywordList'

const theme = createTheme({
  palette: {
    // primary 색상을 회색 계열로 설정
    primary: {
      main: "#171C60", // 회색 계열의 색상 코드
    },
  },
});

export default function QueryAnswer({ expertNo }) {
  // const [history, setHistory] = useState([]);
  const [answer, setAnswer] = useState([])
  // const [historyCount, setHistoryCount] = useState(0)
  const [answerCount, setAnswerCount] = useState(0)
  const [pageCount, setPageCount] = useState(3);
  const fetchData = async () => {
    let { data: queryAnswer, error2 } = await supabase
      .from("queryAnswer")
      .select("*")
      .eq("expertNo", expertNo.toString());
    // setHistoryCount(prevProject.length)
    setAnswerCount(queryAnswer.length)
    // prevProject=prevProject.slice(0,pageCount)
    queryAnswer=queryAnswer.slice(0,pageCount)
    // setHistory(prevProject);
    setAnswer(queryAnswer)
    
  };

  useEffect(() => {
    fetchData();
  }, [pageCount]);



  const showMore1=()=>{
    setPageCount(prevPageCount => prevPageCount + 3);
  }

  console.log('pageCount:',pageCount)

  return (
    <div className="option2">
      <ThemeProvider theme={theme}>
        <div className="subject">
          <div className="ds-f jc-b ai-c">
            <h3>
              간편상담 답변 <em>{answerCount}건</em>
            </h3>
            {/* <div className="effect_btn">
            <a onClick={showMore1} className="ds-f ai-c">
              <span>더보기</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div> */}
            <Button
              style={{ fontSize: "1rem",fontWeight:'bold' }}
              onClick={showMore1}
              variant="outlined"
            >
              더보기+
            </Button>
          </div>
        </div>
        <div className="bh_row op2 gutters-10">
          {answer.map((elem, index) => {
            return (
              <div className="col-lg-4 col-12 m-mb-20 mb-10">
                <div className="inner">
                  {elem.field1?(<div className="category">{findNameByCat(elem.field1)}</div>):(<></>)}
                  <h3>{elem.description}</h3>
                  <span className="fw-m">
                    <em className="bh_color_main">{daysAgoFormatted(elem.created_at)}</em> 답변 작성
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </ThemeProvider>
    </div>
  );
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

function findNameByCat(catValue) {

  // keywordList에서 catValue와 일치하는 cat 값을 가진 객체를 찾습니다.
  const matchingKeyword = keywordList.find(keyword => keyword.cat === catValue);

  // 일치하는 객체가 있으면 그 객체의 name 값을 반환합니다.
  return matchingKeyword ? matchingKeyword.name : undefined;
}