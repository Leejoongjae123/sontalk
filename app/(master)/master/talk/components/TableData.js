"use client";
import React, { useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { supabase } from "@/utils/supabase/client";
import Button from "@mui/material/Button";
import Link from "next/link";
import moment from "moment";

export default function TableData({ expertNo }) {
  const { Column, ColumnGroup } = Table;
  const [talks, setTalks] = useState([]);
  const [total, setTotal] = useState(0); // 전체 데이터 개수를 저장할 상태
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // 한 페이지에 표시할 데이터 개수

  const fetchData = async () => {
    const startIndex = (currentPage - 1) * pageSize;
    let {
      data: talk,
      error,
      count,
    } = await supabase
      .from("talk")
      .select("*", { count: "exact" }) // 전체 데이터 개수도 함께 가져옵니다.
      // .eq("expertNo", parseInt(expertNo)) 조건이 필요하면 여기에 추가
      .eq('expertNo',expertNo)
      .range(startIndex, startIndex + pageSize - 1)
      .order('created_at', { ascending: false })

    if (!error && talk) {
      setTalks(talk);
      setTotal(count || 0); // 전체 데이터 개수를 상태에 저장
    }
  };
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleDelete = async (event) => {
    const { error } = await supabase.from("talk").delete().eq("talkNo", event);
    if (!error) {
      location.reload();
    }
  };

  // 페이지 번호가 바뀔 때 실행될 함수
  const handlePageChange = (page) => {
    // currentPage 상태 업데이트
    setCurrentPage(page);
  };

  return (
    <Table
      dataSource={talks}
      pagination={{
        current: currentPage,
        onChange: handlePageChange,
        pageSize: 10,
        total: total,
      }}
    >
            <Column
        title="제목"
        dataIndex="title"
        key="title"
        width="20%"
        render={(text) => (
          <div
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 5,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {text}
          </div>
        )}
      />
      <Column
        title="내용"
        dataIndex="description"
        key="내용"
        width="40%"
        render={(text) => (
          <div
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            dangerouslySetInnerHTML={{ __html: text }}
          >
            
          </div>
        )}
      />
            <Column
        title="작성일"
        dataIndex="created_at"
        key="작성일"
        width="10%"
        render={(text) => {
          // Use moment.js to format the date and time
          return moment(text).format('YYYY년M월D일 HH시mm분');
        }}
      />
      <Column
        title="Action"
        key="action"
        width="20%"
        render={(_, record) => (
          <Space size="middle">
            <Button
              onClick={() => handleDelete(record.talkNo)}
              color="error"
              variant="contained"
            >
              삭제
            </Button>

            <Link
              style={{ zIndex: 50 }}
              href={`/master/talk/change/${record.talkNo}`}
            >
              <Button color="primary" variant="contained">
                수정
              </Button>
            </Link>
          </Space>
        )}
      />
    </Table>
  );
}
