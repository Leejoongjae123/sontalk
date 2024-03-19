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

export default function TableData({ user,questionNo }) {
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
    console.log(user)
    const { data, error } = await supabase
      .from("queryAnswer")
      .insert([{ description: commentText, questionNo: questionNo,expertNo:user.expertNo}])
      .select();
    console.log(data)
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
          {query.title}
        </Typography>
        <Typography
          sx={{ fontSize: "1rem" }}
          variant="h4"
          color="text.secondary"
        >
          {query.description}
        </Typography>
      </CardContent>
      <CardContent>
        <TextField
          fullWidth
          variant="outlined"
          label="답변 달기..."
          multiline
          rows={4}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          onClick={handleCommentSubmit}
        >
          답변 달기
        </Button>
      </CardContent>

      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
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
        <ListItem>
          <Grid container>
            <Grid item xs={6}>
              <ListItemText primary="내용" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText primary="작성자" />
            </Grid>
          </Grid>
        </ListItem>

        {/* 댓글 데이터 목록 */}
        {comments.map((comment, index) => (
          <ListItem key={index} divider>
            <Grid container>
              <Grid item xs={6}>
                <ListItemText primary={comment.description} />
              </Grid>
              <Grid item xs={6}>
                <ListItemText primary={comment.expertNo.name} />
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
