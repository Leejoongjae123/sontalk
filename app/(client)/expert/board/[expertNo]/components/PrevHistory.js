"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import moment from 'moment';
import { useRouter } from "next/navigation";

const theme = createTheme({
  palette: {
    // primary 색상을 회색 계열로 설정
    primary: {
      main: "#171C60", // 회색 계열의 색상 코드
    },
  },
});

function PrevHistory({ expertNo }) {
  const [history, setHistory] = useState([]);
  const [historyCount, setHistoryCount] = useState(0);
  const [pageCount, setPageCount] = useState(3);
  const fetchData = async () => {
    let { data: prevProject, error2 } = await supabase
      .from("prevProject")
      .select("*")
      .eq("expertNo", expertNo.toString());
    setHistoryCount(prevProject.length);
    prevProject = prevProject.slice(0, pageCount);
    setHistory(prevProject);
  };

  useEffect(() => {
    fetchData();
  }, [pageCount]);

  const showMore1 = () => {
    setPageCount((prevPageCount) => prevPageCount + 3);
  };


  return (
    <div className="option2">
      <ThemeProvider theme={theme}>
        <div className="subject">
          <div className="ds-f jc-b ai-c">
            <h3>
              선임사례 <em>{historyCount}건</em>
            </h3>
            {/* <div className="effect_btn">
            <a onClick={showMore1} className="ds-f ai-c">
              <span>더보기</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div> */}
            <Button
              style={{ fontSize: "1rem", fontWeight: "bold" }}
              onClick={showMore1}
              variant="outlined"
            >
              더보기+
            </Button>
          </div>
        </div>
        <div className="bh_row op1 gutters-10">
          {history.map((elem, index) => {
            return (
              <div key={index} className="col-lg-4 col-12 m-mb-20 mb-10">
                <div className="inner">
                  <div className="category">{elem.category}</div>
                  <p style={{ borderBottom: "1px solid #eee" }}>
                    일자 : {moment(elem.regiDate).format('YYYY년M월D일')}
                  </p>
                  <p style={{ borderBottom: "1px solid #eee" }}>
                    보험사 : {elem.company}
                  </p>
                  <p
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 5,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      borderBottom: "1px solid #eee",
                    }}
                    className="ellipsis"
                  >
                    사건개요 : {elem.description}
                  </p>
                  <p
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 5,
                      overflow: "hidden",

                      borderBottom: "1px solid #eee",
                    }}
                    className="ellipsis"
                  >
                    결과 : {elem.result}
                  </p>
                  {/* <div className="result ta-c">
                <i className="ri-auction-line"></i> 보험금 지급
              </div> */}
                </div>
              </div>
            );
          })}
          {/* <div className="col-lg-4 col-12 mb-0 m-mb-20">
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
        </div> */}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default PrevHistory;
