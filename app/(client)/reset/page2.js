'use client'
import Link from "next/link";
// import { headers } from "next/headers";
// import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { supabase } from "@/utils/supabase/client";
import "./theme.css";
import "./loopple.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSearchParams } from "next/navigation";
import { useState,useEffect } from "react";

export default function Reset() {
  const [password, setPassword] = useState("")
  const [code, setCode] = useState("")
  const searchParams=useSearchParams()
  const signIn = async (formData) => {
    
    const { error:error1 } = await supabase.auth.exchangeCodeForSession(code);
    const {data,error}=await supabase.auth.getSession()
    const { error:error2 } = await supabase.auth.updateUser({
      password,
    });

    console.log("2:", error2);
    if (!error2){
      return redirect("/?loginsuccess=true")
    }
  };
  useEffect(()=>{
    
    setCode(searchParams.get("code"))
  })

  console.log(code)
  const inputChanged=(event)=>{
    setPassword(event.target.value)
  }
  console.log(password)
  return (
    <div className="login_container">
      <div className="row">
        <div className="">
          <div className="card z-index-0">
            <div className="card-header text-center pt-4 pb-1">
              <h4 className="font-weight-bolder mb-1">비밀번호 변경</h4>
            </div>
            <div className="card-body pb-0">
              <div >
                {/* <div className="mb-3">
                  <input
                    type="email"
                    name='email'
                    className="login_form"
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div> */}
                <div className="login_input">
                  <input
                    type="password"
                    name="password"
                    className="login_form"
                    placeholder="Password"
                    aria-label="Password"
                    value={password}
                    onChange={inputChanged}
                  />
                </div>
                <div className="login_btn_container">
                  <button
                    type="button"
                    className="login_btn"
                    onClick={signIn}
                  >
                    변경
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
