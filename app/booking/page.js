import React from "react";
import BookingTitle from './components/BookingTitle'
function Inquiry() {
  return (
    <div className="body">
      <div className="inquiry_wrap po-r">
        <div className="bh_wrap">
          <BookingTitle></BookingTitle>
          <form className="form_area">
            <div className="bh_row">
              <div className="col-lg-6 col-12">
                <div className="info_box mb-50 m-mb-30">
                  <p className="subject">
                    이름 <em>*</em>
                  </p>
                  <div className="input_box">
                    <input type="text" required className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="info_box mb-50 m-mb-30">
                  <p className="subject">
                    연락처 <em>*</em>
                  </p>
                  <div className="input_box">
                    <input type="text" required className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="info_box">
                  <p className="subject">
                    상세내용 <em>*</em>
                  </p>
                  <div className="input_box">
                    <textarea required className="w-100"></textarea>
                  </div>
                </div>
              </div>
              {/* <div className="col-12">
                <div className="file_area">
                  <div className="file_btn po-r ds-ib">
                    <span>사진 및 파일 첨부</span>
                    <input type="file" />
                  </div>
                </div>
              </div> */}
            </div>
            <p className="agreement_title">
              개인정보 수집 <em>*</em>
            </p>
            <div className="agreement">
              <div className="agreement_notice">
                <span>개인정보 수집 및 이용에 대해서 동의합니다.</span>
                <a href="#" target="_blank">
                  [자세히보기]
                </a>
              </div>
              <div className="agreement_btn_wrap">
                <div className="btn_agree">
                  <input
                    type="radio"
                    name="accept_agreement"
                    value="Y"
                    id="accept_agreement"
                  />
                  <label htmlFor="accept_agreement">동의</label>
                </div>
                <div className="btn_disagree">
                  <input
                    type="radio"
                    name="accept_agreement"
                    value="N"
                    id="accept_disagreement"
                  />
                  <label htmlFor="accept_disagreement">비동의</label>
                </div>
              </div>
            </div>
            <div className="ta-c">
              <button type="submit" className="submit_btn">
                예약하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inquiry;
