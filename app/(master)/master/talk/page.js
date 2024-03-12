"use client";
import React from "react";
import { Box } from "@mui/material";
import { Space, Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;
function page() {
  const data = [
    {
      key: "1",
      title: "해냈습니다.",
      description: "완벽해요",
    },
    {
      key: "2",
      title: "이번에는",
      description: "다릅니다.",
    },
    {
      key: "3",
      title: "다음에도",
      description: "잘해요",
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        overflowX: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>손톡</h1>
      <Table dataSource={data}>
        <Column title="title" dataIndex="title" key="title" width="40%" />
        <Column title="description" dataIndex="description" key="description" width="40%" />
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
    </Box>
  );
}

export default page;
