"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

export default function TableData({ expertNo, questionNo }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const [query, setQuery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchData = async () => {
    let { data: query, error } = await supabase
      .from("query")
      .select("*")
      .eq("questionNo", parseInt(questionNo))
      .single();
    setQuery(query);
  };

  const fetchData2 = async () => {
    let { data: queryAnswer, error } = await supabase
      .from("queryAnswer")
      .select("*,expertNo(*)")
      .eq("questionNo", parseInt(questionNo));
    setComments(queryAnswer);
  };

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  const handleCommentSubmit = async () => {
    const { data, error } = await supabase
      .from("queryAnswer")
      .insert([
        {
          description: commentText,
          questionNo: questionNo,
          expertNo: expertNo,
        },
      ])
      .select();
    const timeNow = new Date(); // 현재 시간의 타임스탬프를 직접 얻기

    const { data: data2, error: error2 } = await supabase
      .from("query")
      .update({ updated_at: timeNow })
      .eq("questionNo", questionNo)
      .select();
    console.log(error2);
    location.reload();
  };
  const handleDelete = async (answerNo) => {
    console.log(answerNo);
    const { error } = await supabase
      .from("queryAnswer")
      .delete()
      .eq("answerNo", answerNo);
    console.log(error);
    location.reload();
  };

  return (
    <Card sx={{ width: "100%", mx: "auto", mt: 5, boxShadow: "none" }}>
      <CardContent>
        <Typography
          sx={{ fontWeight: "bold" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          <p>제목</p>
          {query.title}
        </Typography>
        <Divider></Divider>
        <Typography
          sx={{ fontSize: "1rem" }}
          variant="h4"
          color="text.secondary"
        >
          <p>내용</p>
          {query.description}
        </Typography>
        <Divider></Divider>
        <Typography
          sx={{ fontSize: "1rem" }}
          variant="h4"
          color="text.secondary"
        >
          <p>분류</p>
          {query.secret ? (
            <>
              {" "}
              <p style={{ color: "red" }}>비밀글</p>
              <p style={{ color: "red" }}>
                ※비밀글은 하단의 개별 이메일을 통해서 답변해주세요
              </p>
            </>
          ) : (
            <p style={{ color: "blue" }}>일반글</p>
          )}
        </Typography>
        <Divider></Divider>
        <Typography
          sx={{ fontSize: "1rem" }}
          variant="h4"
          color="text.secondary"
        >
          <p>메일주소</p>
          {query.email ? <p>{query.email}</p> : <></>}
        </Typography>
        <Divider></Divider>
      </CardContent>
      <CardContent>
        <TextField
          fullWidth
          variant="outlined"
          label={query.secret ? "비밀글 답변달기 불가" : "답변 달기"}
          multiline
          rows={4}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          disabled={query.secret}
        />
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          onClick={handleCommentSubmit}
          disabled={query.secret}
        >
          답변하기
        </Button>
      </CardContent>
      <div style={{ overflowX: "auto", width: "100%" }}>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            overflow: "auto",
            width: "100%",
          }}
          subheader={
            <ListSubheader
              sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
              component="div"
              id="nested-list-subheader"
            >
              답변 목록
            </ListSubheader>
          }
        >
          {/* 댓글 목록 헤더 */}
          {/* <ListItem>
            <Grid container >
              <Grid item xs={4} style={{ whiteSpace: "nowrap" }}>
                <ListItemText primary="내용" />
              </Grid>
              <Grid item xs={4} style={{ whiteSpace: "nowrap" }}>
                <ListItemText primary="작성일" />
              </Grid>
              <Grid item xs={4}style={{ whiteSpace: "nowrap" }}>
                <ListItemText primary="작성자" />
              </Grid>
            </Grid>
          </ListItem> */}

          {/* 댓글 데이터 목록 */}
          {comments.map((comment, index) => (
            <ListItem key={index} divider style={{ whiteSpace: "nowrap" }}>
              <Grid container >
                <Grid item xs={12} >
                  <ListItemText primary={comment.description} />
                </Grid>
                <Grid item xs={12} >
                  <ListItemText primary={formatDate(comment.created_at)} />
                </Grid>
                <Grid item xs={12} >
                  <div style={{ display: "flex" }}>
                    <ListItemText primary={comment.expertNo.name} />
                    {comment.expertNo.expertNo === expertNo ? (
                      <Button
                        color="error"
                        variant="contained"
                        onClick={() => {
                          handleDelete(comment.answerNo);
                        }}
                      >
                        삭제
                      </Button>
                    ) : (
                      <></>
                    )}
                  </div>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </div>
    </Card>
  );
}
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  // 월과 일은 0부터 시작하므로 1을 더해줍니다. 또한, 10 미만일 경우 앞에 '0'을 붙여줍니다.
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  // 포맷에 맞게 연결하여 최종 문자열을 반환합니다.
  return `${year}년 ${month}월 ${day}일 ${hours}시${minutes}분`;
}
