import React from "react";
import { createClient } from "@/utils/supabase/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default async function page() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);

  const register = async (formData) => {
    "use server";
    const title = formData.get("title");
    const name = formData.get("name");
    const description = formData.get("description");
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    console.log(title);

    const { data, error } = await supabase
      .from("query")
      .insert([{ title: title, name: name, description: description }])
      .select();
    console.log(data);
    console.log(error);
    if (!error) {
      return redirect("/counsel");
    }
  };

  return (
    <div className="body">
      <div className="counsel_inquiry po-r">
        <div className="bh_wrap">
          <div className="title" data-aos="fade-down" data-aos-duration="1500">
            <h3>간편 상담</h3>
          </div>
          <form className="form_area" action={register}>
            <div className="info_box">
              <p className="subject">
                상담 제목 <em>*</em>
              </p>
              <div className="input_box">
                <input
                  type="text"
                  placeholder="질문의 제목을 입력해주세요."
                  name="title"
                  required
                />
              </div>
            </div>
            <div className="info_box">
              <p className="subject">
                이름 <em>*</em>
              </p>
              <div className="input_box">
                <input
                  type="text"
                  placeholder="작성자의 이름을 입력해주세요"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="info_box">
              <p className="subject">
                상세내용(100자 이상)<em>*</em>
              </p>
              <div className="input_box">
                <textarea
                  name="description"
                  placeholder="상담받고자 하는 내용을 구체적으로 작성해주세요."
                  required
                ></textarea>
              </div>
            </div>
            {/* <div style={{display:'flex',alignItems:'center'}} className="info_box">
              <Checkbox></Checkbox>
              <p style={{fontSize:'16px'}}>비밀글 작성하기</p>
            </div> */}
            <div style={{paddingLeft:"0px",paddingTop:"0",paddingBottom:"0",backgroundColor:'white',border:'none'}} className="agreement">
              <div className="confirm">
                <input type="checkbox" id="accept_agreement" />
                <label htmlFor="accept_agreement">
                  비밀글 작성하기
                </label>
              </div>
            </div>
            <div className="agreement">
              <div className="txt_box">
                <p>
                  1. 상담글의 제목은 적절한 내용으로 일부 변경될 수 있습니다.
                </p>
                <p>
                  2. 상담글에 답변이 하나 이상 등록되면 글 삭제가 불가합니다.
                </p>
                <p>3. 등록된 글은 타 포털사이트에서 검색될 수 있습니다.</p>
                <p>
                  4. 아래 사항에 해당하는 경우, 등록 불가 및 이후 서비스 이용에
                  제한이 될 수 있습니다.
                </p>
                <ul>
                  <li>
                    • 개인 민감정보(개인 및 법인의 실명, 전화번호, 주민번호,
                    주소 등) 및 외부 링크 포함
                  </li>
                  <li>• 손해사정사 선임 및 상담과 이에 대한 비용 질문 포함</li>
                  <li>• 손해사정 업무와 관련되지 않은 목적의 글</li>
                  <li>• 동일, 유사한 내용의 게시물의 반복 게재</li>
                  <li>• 무의미한 문자 및 비속어 등의 불필요한 문자열 포함</li>
                </ul>
              </div>
              <div className="confirm">
                <input type="checkbox" id="accept_agreement" />
                <label htmlFor="accept_agreement">
                  위 사항을 모두 확인하였으며, 이에 동의합니다.
                </label>
              </div>
            </div>
            <div className="ta-c">
              <button type="submit" className="submit_btn">
                상담하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
