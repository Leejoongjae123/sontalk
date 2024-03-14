"use client";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";
import redirect from "next/navigation";
import { useRouter } from "next/navigation";

export default function Forms({ email }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category1, setCategory1] = useState("");
  const [keyword1, setKeyword1] = useState("");
  const [keyword2, setKeyword2] = useState("");
  const [keyword3, setKeyword3] = useState("");

  const router = useRouter();

  const handleChange1 = (event) => {
    setTitle(event.target.value);
  };
  const handleChange2 = (event) => {
    setDescription(event.target.value);
  };
  const handleChange3 = (event) => {
    setCategory1(event.target.value);
  };
  const handleChange4 = (event) => {
    setKeyword1(event.target.value);
  };
  const handleChange5 = (event) => {
    setKeyword2(event.target.value);
  };
  const handleChange6 = (event) => {
    setKeyword3(event.target.value);
  };
  const handleClick = async () => {
    let { data: profiles, error: error1 } = await supabase
      .from("profiles")
      .select("*")
      .eq("email", email)
      .single();

    console.log(profiles);

    const { data, error } = await supabase
      .from("talk")
      .insert([
        {
          title: title,
          description: description,
          expertNo: profiles.expertNo,
          expertName: profiles.name,
          field1: category1,
          keyword1: keyword1,
          keyword2: keyword2,
          keyword3: keyword3,
        },
      ])
      .select();
    if (!error) {
      router.push("/master/talk");
    } else {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h4>제목</h4>
      </div>

      <TextField
        id="outlined-multiline-flexible"
        multiline
        fullWidth // 폭을 꽉 차게 설정
        value={title}
        onChange={handleChange1}
      />
      <div>
        <h4>내용</h4>
      </div>

      <TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        fullWidth // 폭을 꽉 차게 설정
        value={description}
        onChange={handleChange2}
      />

      <FormControl fullWidth required>
        <h4>분야1</h4>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category1}
          onChange={handleChange3}
        >
          <MenuItem value={"F01"}>진단비</MenuItem>
          <MenuItem value={"F02"}>암 입원비 / 실손 의료비</MenuItem>
          <MenuItem value={"F03"}>질병·상해 사망 및 후유장해</MenuItem>
          <MenuItem value={"F04"}>치아 보험</MenuItem>
          <MenuItem value={"F05"}>자동차보험, 운전자보험</MenuItem>
          <MenuItem value={"F06"}>
            배상 책임, 근로자재해보험, 학교안전공제, 여행자보험
          </MenuItem>
          <MenuItem value={"F07"}>도난, 화재, 누수, 침수, 재난사고</MenuItem>
          <MenuItem value={"F08"}>여성전용 및 태아</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth required>
        <h4>키워드1</h4>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={keyword1}
          onChange={handleChange4}
        >
          <MenuItem value={"K01"}>교통사고</MenuItem>
          <MenuItem value={"K02"}>충치</MenuItem>
          <MenuItem value={"K03"}>손해배상</MenuItem>
          <MenuItem value={"K04"}>산재</MenuItem>
          <MenuItem value={"K05"}>운전자보험</MenuItem>
          <MenuItem value={"K06"}>자동차보험</MenuItem>
          <MenuItem value={"K07"}>암</MenuItem>
          <MenuItem value={"K08"}>질병</MenuItem>
          <MenuItem value={"K09"}>상해</MenuItem>
          <MenuItem value={"K10"}>사망보험</MenuItem>
          <MenuItem value={"K11"}>의료보험</MenuItem>
          <MenuItem value={"K11"}>자동차보험</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth required>
        <h4>키워드2</h4>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={keyword2}
          onChange={handleChange5}
        >
          <MenuItem value={"K01"}>교통사고</MenuItem>
          <MenuItem value={"K02"}>충치</MenuItem>
          <MenuItem value={"K03"}>손해배상</MenuItem>
          <MenuItem value={"K04"}>산재</MenuItem>
          <MenuItem value={"K05"}>운전자보험</MenuItem>
          <MenuItem value={"K06"}>자동차보험</MenuItem>
          <MenuItem value={"K07"}>암</MenuItem>
          <MenuItem value={"K08"}>질병</MenuItem>
          <MenuItem value={"K09"}>상해</MenuItem>
          <MenuItem value={"K10"}>사망보험</MenuItem>
          <MenuItem value={"K11"}>의료보험</MenuItem>
          <MenuItem value={"K11"}>자동차보험</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth required>
        <h4>키워드3</h4>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={keyword3}
          onChange={handleChange6}
        >
          <MenuItem value={"K01"}>교통사고</MenuItem>
          <MenuItem value={"K02"}>충치</MenuItem>
          <MenuItem value={"K03"}>손해배상</MenuItem>
          <MenuItem value={"K04"}>산재</MenuItem>
          <MenuItem value={"K05"}>운전자보험</MenuItem>
          <MenuItem value={"K06"}>자동차보험</MenuItem>
          <MenuItem value={"K07"}>암</MenuItem>
          <MenuItem value={"K08"}>질병</MenuItem>
          <MenuItem value={"K09"}>상해</MenuItem>
          <MenuItem value={"K10"}>사망보험</MenuItem>
          <MenuItem value={"K11"}>의료보험</MenuItem>
          <MenuItem value={"K11"}>자동차보험</MenuItem>
        </Select>
      </FormControl>
      <Button
        style={{ marginTop: "2vw", width: "30%" }}
        variant="contained"
        onClick={handleClick}
      >
        작성하기
      </Button>
    </div>
  );
}
