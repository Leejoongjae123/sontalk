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
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";

export function AccountDetailsForm({ email }) {
  const [region, setRegion] = useState("");
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const [category3, setCategory3] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [career, setCareer] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("email", email)
      .single();
    setUserData(data);
    setRegion(data.region);
    setCategory1(data.field1);
    setCategory2(data.field2);
    setCategory3(data.field3);
    setName(data.name);
    setDescription(data.description);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange1 = (event) => {
    setName(event.target.value);
  };
  const handleChange2 = (event) => {
    setDescription(event.target.value);
  };
  const handleChange3 = (event) => {
    setCareer(event.target.value);
  };

  const handleChange4 = (event) => {
    setRegion(event.target.value);
  };
  const handleChange5 = (event) => {
    setCategory1(event.target.value);
  };
  const handleChange6 = (event) => {
    setCategory2(event.target.value);
  };
  const handleChange7 = (event) => {
    setCategory3(event.target.value);
  };

  const handleClick = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .update([
        {
          name: name,
          description: description,
          region: region,
          field1: category1,
          field2: category2,
          field3: category3,
          career: career
        },
      ])
      .eq("email", email)
      .select();
    if (!error) {
      location.reload();
    }
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
                <h4>이름</h4>
                <TextField
                  value={name}
                  variant="outlined"
                  name="firstName"
                  onChange={handleChange1}
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <h4>설명</h4>
                <OutlinedInput
                  value={description}
                  name="lastName"
                  onChange={handleChange2}
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <h4>경력</h4>
                <OutlinedInput
                  defaultValue={userData?.career}
                  name="email"
                  multiline
                  placeholder={`대학교졸업\n중학교졸업\n1년근무`}
                  onChange={handleChange3}
                />
                <h4>(쉼표 입력 시 줄바꿈이 됩니다)</h4>
              </FormControl>
            </Grid>

            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <h4>지역</h4>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={region}
                  onChange={handleChange4}
                >
                  <MenuItem value={"R08"}>수도권</MenuItem>
                  <MenuItem value={"R07"}>원주/강릉/강원</MenuItem>
                  <MenuItem value={"R01"}>대전/세종/충남</MenuItem>
                  <MenuItem value={"R06"}>청주/충북</MenuItem>
                  <MenuItem value={"R04"}>대구/경북</MenuItem>
                  <MenuItem value={"R05"}>전주/전북</MenuItem>
                  <MenuItem value={"R03"}>부산/울산/경남</MenuItem>
                  <MenuItem value={"R09"}>광주/전남</MenuItem>
                  <MenuItem value={"R02"}>제주</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <h4>분야1</h4>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category1}
                  onChange={handleChange5}
                >
                  <MenuItem value={"F01"}>진단비</MenuItem>
                  <MenuItem value={"F02"}>암 입원비 / 실손 의료비</MenuItem>
                  <MenuItem value={"F03"}>질병·상해 사망 및 후유장해</MenuItem>
                  <MenuItem value={"F04"}>치아 보험</MenuItem>
                  <MenuItem value={"F05"}>자동차보험, 운전자보험</MenuItem>
                  <MenuItem value={"F06"}>
                    배상 책임, 근로자재해보험, 학교안전공제, 여행자보험
                  </MenuItem>
                  <MenuItem value={"F07"}>
                    도난, 화재, 누수, 침수, 재난사고
                  </MenuItem>
                  <MenuItem value={"F08"}>여성전용 및 태아</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <h4>분야2</h4>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category2}
                  onChange={handleChange6}
                >
                  <MenuItem value={"F01"}>진단비</MenuItem>
                  <MenuItem value={"F02"}>암 입원비 / 실손 의료비</MenuItem>
                  <MenuItem value={"F03"}>질병·상해 사망 및 후유장해</MenuItem>
                  <MenuItem value={"F04"}>치아 보험</MenuItem>
                  <MenuItem value={"F05"}>자동차보험, 운전자보험</MenuItem>
                  <MenuItem value={"F06"}>
                    배상 책임, 근로자재해보험, 학교안전공제, 여행자보험
                  </MenuItem>
                  <MenuItem value={"F07"}>
                    도난, 화재, 누수, 침수, 재난사고
                  </MenuItem>
                  <MenuItem value={"F08"}>여성전용 및 태아</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <h4>분야3</h4>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category3}
                  onChange={handleChange7}
                >
                  <MenuItem value={"F01"}>진단비</MenuItem>
                  <MenuItem value={"F02"}>암 입원비 / 실손 의료비</MenuItem>
                  <MenuItem value={"F03"}>질병·상해 사망 및 후유장해</MenuItem>
                  <MenuItem value={"F04"}>치아 보험</MenuItem>
                  <MenuItem value={"F05"}>자동차보험, 운전자보험</MenuItem>
                  <MenuItem value={"F06"}>
                    배상 책임, 근로자재해보험, 학교안전공제, 여행자보험
                  </MenuItem>
                  <MenuItem value={"F07"}>
                    도난, 화재, 누수, 침수, 재난사고
                  </MenuItem>
                  <MenuItem value={"F08"}>여성전용 및 태아</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button onClick={handleClick} variant="contained">
            정보 저장하기
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
