"use client";
import React, { useRef } from "react";
import dynamic from 'next/dynamic';
import { useState,useMemo,useEffect } from "react";
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

export default function TextEditor({initialContent,inputContents,setInputContents}) {
  const editor = useRef(null);
  const [content, setContent] = useState();
  const [result, setResult] = useState("")
  
  useEffect( ()=>{
    if(initialContent){
      setContent(initialContent)
    }

  },[])

  const placeholder='Hello'  
  
  return (
    <div>
      <JoditEditor
        ref={editor}
        value={inputContents}
        onBlur={(newContent) => {
          setInputContents(newContent)
        }
      }
      />
    <div>
    </div>
    </div>
  );
}

