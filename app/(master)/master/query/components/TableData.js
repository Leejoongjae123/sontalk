"use client";
import React, { useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { supabase } from "@/utils/supabase/client";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function TableData({ expertNo }) {
  const { Column, ColumnGroup } = Table;
  const [query, setQuery] = useState([]);
  const [total, setTotal] = useState(0); // 전체 데이터 개수를 저장할 상태
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // 한 페이지에 표시할 데이터 개수

  const fetchData = async () => {
    const startIndex = (currentPage - 1) * pageSize;
    let {
      data: query,
      error,
      count,
    } = await supabase
      .from("query")
      .select("*", { count: "exact" }) // 전체 데이터 개수도 함께 가져옵니다.
      // .eq("expertNo", parseInt(expertNo)) 조건이 필요하면 여기에 추가
      .range(startIndex, startIndex + pageSize - 1);
    if (!error && query) {
      setQuery(query);
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

  console.log(currentPage);
  return (
    <Table
      dataSource={query}
      pagination={{
        current: currentPage,
        onChange: handlePageChange,
        pageSize: 10,
        total: total,
      }}
    >
      {/* <Column title="제목" dataIndex="title" key="title" width="40%" /> */}
      <Column
        title="제목"
        dataIndex="title"
        key="title"
        width="40%"
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
        title="description"
        dataIndex="description"
        key="description"
        width="40%"
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
      {/* <Column title="비밀글여부" dataIndex="secret" key="secret" width="10%" /> */}
      <Column
        title="비밀글여부"
        dataIndex="secret"
        key="secret"
        width="10%"
        render={(secret) => (
          <span style={{ color: secret ? "red" : "blue" }}>
            {secret ? "비밀글" : "일반글"}
          </span>
        )}
      />
      <Column
        title="이메일"
        dataIndex="email"
        key="email"
        width="20%"
        render={(email) => (email ? email : "")}
      />

      <Column
        title="비고"
        key="비고"
        width="10%"
        render={(_, record) => (
          <Space size="middle" key="1">
            <Link
              style={{ zIndex: 50 }}
              href={`/master/query/${record.questionNo}`}
            >
              <Button color="primary" variant="contained">
                이동
              </Button>
            </Link>
          </Space>
        )}
      />
    </Table>
  );
}
