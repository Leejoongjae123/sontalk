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
      toast.success("Login successful!")
    }else{
      toast.error("Login failed. Please try again.")
    }
  }, [])

  return <ToastContainer position="top-center" autoClose={2000}/>
}
