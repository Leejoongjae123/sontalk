"use client";
import React, { useState,useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { supabase } from "@/utils/supabase/client"

export default function TableData({ expertNo }) {
  const { Column, ColumnGroup } = Table;
  const [talks, setTalks] = useState([]);
  const fetchData = async () => {
    let { data: talk, error } = await supabase
      .from("talk")
      .select("*")
      .eq("expertNo", parseInt(expertNo));
    setTalks(talk);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(talks)
  return (
    <Table dataSource={talks}>
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
            <a>삭제</a>
            <a>수정</a>
          </Space>
        )}
      />
    </Table>
  );
}
