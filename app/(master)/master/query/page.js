"use client";
import React from "react";
import { Box } from "@mui/material";
import { Space, Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;
function page() {
  const data = [
    {
      key: "1",
      title: "너무해요",
      description: "방법이 없을까요?",
      secret: "비밀글",
      email: "ljj337@naver.com",
    },
    {
      key: "2",
      title: "너무해요",
      description: "방법이 없을까요?",
      secret: "공개글",
      email: "",
    },
    {
      key: "3",
      title: "너무해요",
      description: "방법이 없을까요?",
      secret: "공개글",
      email: "",
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        overflowX:'auto'
      }}
    >
      <h1 style={{ textAlign: "center" }}>간편상담</h1>
      <Table dataSource={data}>
        <Column title="title" dataIndex="title" key="title" width="20%" />
        <Column title="description" dataIndex="description" key="description"width="40%" />
        <Column title="secret" dataIndex="secret" key="secret" width="10%"/>
        <Column title="email" dataIndex="email" key="email" width="10%"/>
        <Column
          title="Action"
          key="action"
          width="10%"
          render={(_, record) => (
            <Space size="middle">
              <a>내용보기</a>
            </Space>
          )}
        />
      </Table>
    </Box>
  );
}

export default page;
