// components/FileUpload.js
"use client";
import { supabase } from "@/utils/supabase/client";
import Button from "@mui/material/Button";
import React, { useState, useRef } from 'react';

const FileUpload = ({ email }) => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (event) => {
    try {
      setUploading(true);

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = email.split("@")[0];
      const filePath = `${fileName+getCurrentDateTimeStringWithSeconds()}`;

      let { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data, error } = await supabase
        .from("profiles")
        .update([
          {
            imageUrl: `https://yieqkayhbhrcqmsfzjiu.supabase.co/storage/v1/object/public/images/${filePath}`,
          },
        ])
        .eq("email", email)
        .select();
      alert("File uploaded successfully!");
      location.reload()
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const hiddenFileInput = useRef(null);

  return (
    <div>
      <Button variant="contained" onClick={handleClick} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Image'}
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleUpload}
        style={{display: 'none'}}
        accept="image/*"
      />
    </div>

  );
};

export default FileUpload;

function getCurrentDateTimeStringWithSeconds() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더해줍니다.
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  const dateTimeString = `${year}${month}${day}${hour}${minute}${second}`;
  return dateTimeString;
}
