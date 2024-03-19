"use client";
import React, { useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { supabase } from "@/utils/supabase/client";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function TableData({ expertNo }) {
  const { Column, ColumnGroup } = Table;
  const [talks, setTalks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchData = async () => {
    let { data: talk, error } = await supabase
      .from("talk")
      .select("*")
      .eq("expertNo", parseInt(expertNo))
      .range((currentPage - 1) * 10, currentPage * 10);
    setTalks(talk);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      dataSource={talks}
      pagination={{ current: currentPage, onChange: handlePageChange }}
    >
      <Column title="title" dataIndex="title" key="title" width="40%" />
      <Column
        title="description"
        dataIndex="description"
        key="description"
        width="40%"
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
