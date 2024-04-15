"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useSearchParams} from 'next/navigation'
export default function LoginResultToast() {
  
  const params=useSearchParams()
  useEffect(() => {
    const loginResult=params.get("loginsuccess")
    if (loginResult==='true'){
      toast.success("로그인 성공")
    }else if(loginResult==='false'){
      toast.error("로그인 실패")
    }else if(loginResult==="reset"){
      toast.success("가입 이메일을 확인해주세요")
    }
  }, [])

  return <ToastContainer position="top-center" autoClose={2000}/>
}
