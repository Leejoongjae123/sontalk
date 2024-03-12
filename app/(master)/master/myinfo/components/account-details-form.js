"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

const states = [
  { value: "alabama", label: "Alabama" },
  { value: "new-york", label: "New York" },
  { value: "san-francisco", label: "San Francisco" },
  { value: "los-angeles", label: "Los Angeles" },
] 

export function AccountDetailsForm(){

  const [region, setRegion] = useState('');
  const [category1, setCategory1] = useState('');
  const [category2, setCategory2] = useState('');
  const [category3, setCategory3] = useState('');
  
  const handleChange = (event) => {
    setRegion(event.target.value);
  };
  const handleChange1 = (event) => {
    setCategory1(event.target.value);
  };
  const handleChange2 = (event) => {
    setCategory2(event.target.value);
  };
  const handleChange3 = (event) => {
    setCategory3(event.target.value);
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader title="프로필 정보" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>이름</InputLabel>
                <OutlinedInput
                  defaultValue=""
                  label="First name"
                  name="firstName"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>설명</InputLabel>
                <OutlinedInput
                  defaultValue=""
                  label="Last name"
                  name="lastName"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>경력1</InputLabel>
                <OutlinedInput
                  defaultValue=""
                  label="Email address"
                  name="email"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>경력2</InputLabel>
                <OutlinedInput
                  defaultValue=""
                  label="Email address"
                  name="email"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>경력3</InputLabel>
                <OutlinedInput
                  defaultValue=""
                  label="Email address"
                  name="email"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">지역</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={region}
                  label="지역"
                  onChange={handleChange}
                >
                  <MenuItem value={"R08"}>수도권</MenuItem>
                  <MenuItem value={"R07"}>원주/강릉/강원</MenuItem>
                  <MenuItem value={"R01"}>대전/세종/충남</MenuItem>
                  <MenuItem value={"R06"}>청주/충북</MenuItem>
                  <MenuItem value={"R04"}>대구/경북</MenuItem>
                  <MenuItem value={"R05"}>전주/전북</MenuItem>
                  <MenuItem value={"R03"}>부산/울산/경남</MenuItem>
                  <MenuItem value={"R09"}>광주/전남</MenuItem>
                  <MenuItem value={"R09"}>제주</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">분야1</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category1}
                  label="분야1"
                  onChange={handleChange1}
                >
                  <MenuItem value={"F01"}>진단비</MenuItem>
                  <MenuItem value={"F02"}>암 입원비 / 실손 의료비</MenuItem>
                  <MenuItem value={"F03"}>질병·상해 사망 및 후유장해</MenuItem>
                  <MenuItem value={"F04"}>치아 보험</MenuItem>
                  <MenuItem value={"F05"}>자동차보험, 운전자보험</MenuItem>
                  <MenuItem value={"F06"}>배상 책임, 근로자재해보험, 학교안전공제, 여행자보험</MenuItem>
                  <MenuItem value={"F07"}>도난, 화재, 누수, 침수, 재난사고</MenuItem>
                  <MenuItem value={"F08"}>여성전용 및 태아</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">분야2</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category2}
                  label="분야2"
                  onChange={handleChange2}
                >
                  <MenuItem value={"F01"}>진단비</MenuItem>
                  <MenuItem value={"F02"}>암 입원비 / 실손 의료비</MenuItem>
                  <MenuItem value={"F03"}>질병·상해 사망 및 후유장해</MenuItem>
                  <MenuItem value={"F04"}>치아 보험</MenuItem>
                  <MenuItem value={"F05"}>자동차보험, 운전자보험</MenuItem>
                  <MenuItem value={"F06"}>배상 책임, 근로자재해보험, 학교안전공제, 여행자보험</MenuItem>
                  <MenuItem value={"F07"}>도난, 화재, 누수, 침수, 재난사고</MenuItem>
                  <MenuItem value={"F08"}>여성전용 및 태아</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">분야3</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category3}
                  label="분야3"
                  onChange={handleChange3}
                >
                  <MenuItem value={"F01"}>진단비</MenuItem>
                  <MenuItem value={"F02"}>암 입원비 / 실손 의료비</MenuItem>
                  <MenuItem value={"F03"}>질병·상해 사망 및 후유장해</MenuItem>
                  <MenuItem value={"F04"}>치아 보험</MenuItem>
                  <MenuItem value={"F05"}>자동차보험, 운전자보험</MenuItem>
                  <MenuItem value={"F06"}>배상 책임, 근로자재해보험, 학교안전공제, 여행자보험</MenuItem>
                  <MenuItem value={"F07"}>도난, 화재, 누수, 침수, 재난사고</MenuItem>
                  <MenuItem value={"F08"}>여성전용 및 태아</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">정보 저장하기</Button>
        </CardActions>
      </Card>
    </form>
  );
}
