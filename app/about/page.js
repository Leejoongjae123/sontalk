import React from "react";
import TopText from "../../components/about/TopText";
import Script from "next/script";
import WithCompany from './components/WithCompany.js'

function About() {
  return (
    <>
      <div className="body">
        <div className="about_wrap">
          <div className="cont1">
            <div className="bh_wrap">
              <TopText></TopText>
            </div>
          </div>
          <div className="cont2">
            <div className="banner ta-c">
              <img src="images/sub/about_img1.png" alt="" />
            </div>
            <div className="visual_area po-r">
              <div className="bh_row no-gutters jc-c">
                <div
                  className="col-lg-auto col-12 mb-0 m-mb-20"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="inner">
                    <div className="txt_box ta-c">
                      <i className="ri-lightbulb-flash-line bh_color_sub"></i>
                      <p>
                        탁월한
                        <br />
                        전문 지식 제공
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-auto col-12 mb-0 m-mb-20"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="inner">
                    <div className="txt_box ta-c">
                      <i className="ri-building-line ad_color"></i>
                      <p>
                        혁신을 선도하는
                        <br />
                        기업으로 성장
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-auto col-12 mb-0 m-mb-20"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="inner">
                    <div className="txt_box ta-c">
                      <i className="ri-settings-5-line bh_color_main"></i>
                      <p>
                        새로운 서비스 및<br />
                        솔루션 개발
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <img src="images/sub/about_img2.png" alt="point" className="bg" />
            </div>
          </div>
          <div className="cont3">
            <div className="bh_wrap">
              <div className="txt_box">
                <p className="mb-30 m-mb-20 fw-b">
                  저희 회사는 손해사정 중개분야의 선두주자로,
                  <br />
                  고객들의 보험금 청구 문제를 전문적이고 효과적으로 해결하기
                  위해 설립되었습니다.
                </p>
                <p className="mb-30 m-mb-20">
                  저희는 많은 손해사정사들과 협력하여
                  <span className="bh_color_main">
                    깊은 전문지식과 경험을 바탕으로 최상의 서비스를 제공
                  </span>
                  합니다.
                  <br />
                  고객 여러분이 보험 청구, 손해배상, 보험금 소송 등 다양한
                  상황에서 안정적이고 신속한 손해사정 전문가 선임이 필요한데,
                  <br />
                  이를 위해 우리는 최고 수준의 손해사정사 및 다양한 전문가들과
                  협력하고 있습니다.
                </p>
                <p className="mb-30 m-mb-20">
                  저희는 손해사정 분야의 복잡한 문제를
                  <span className="bh_color_main">
                    신속하게 해결하고, 고객들의 권익을 보호
                  </span>
                  하기 위해 항상 최선을 다하고 있습니다.
                </p>
                <p className="mb-30 m-mb-20">
                  우리의 목표는 고객들에게 탁월한
                  <span className="bh_color_main">전문 지식을 제공</span>하는
                  것뿐만 아니라, 손해사정 분야에서
                  <span className="bh_color_main">혁신을 선도</span>하는
                  기업으로 성장하는 것입니다.
                  <br />
                  혁신을 통해 우리는
                  <span className="bh_color_main">
                    새로운 서비스 및 솔루션을 개발
                  </span>
                  하여 고객들의 다양한 요구에 부응하고, 미래의 손해사정 시장에서
                  선두에 서고자 합니다.
                </p>
                <p className="mb-30 m-mb-20">
                  우리는
                  <span className="bh_color_main">
                    고객 중심의 가치를 지키며,
                  </span>
                  최고 수준의 전문가들과 함께 일하며 고객 여러분에게 가장 적합한
                  솔루션을 제공합니다.
                  <br />
                  언제든지 궁금한 사항이나 상담이 필요하시면 언제든지 연락
                  주시기 바랍니다.
                </p>
                <p className="mb-30 m-mb-0">감사합니다.</p>
              </div>
              <WithCompany></WithCompany>
              {/* <div className="partner_area">
                <div className="ds-f jc-b mb-20">
                  <div className="title">제휴사</div>
                  <div className="nav">
                    <div className="ds-f ai-c">
                      <div className="swiper-button-prev">
                        <i className="ri-arrow-left-s-line"></i>
                      </div>
                      <div className="line"></div>
                      <div className="swiper-button-next">
                        <i className="ri-arrow-right-s-line"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper partner_slide">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide slide1 po-r">
                      <div className="inner">
                        <img src="images/sub/partner_logo.png" alt="logo" />
                      </div>
                    </div>
                    <div className="swiper-slide slide2 po-r">
                      <div className="inner">
                        <img src="images/sub/partner_logo.png" alt="logo" />
                      </div>
                    </div>
                    <div className="swiper-slide slide3 po-r">
                      <div className="inner">
                        <img src="images/sub/partner_logo.png" alt="logo" />
                      </div>
                    </div>
                    <div className="swiper-slide slide4 po-r">
                      <div className="inner">
                        <img src="images/sub/partner_logo.png" alt="logo" />
                      </div>
                    </div>
                    <div className="swiper-slide slide5 po-r">
                      <div className="inner">
                        <img src="images/sub/partner_logo.png" alt="logo" />
                      </div>
                    </div>
                    <div className="swiper-slide slide1 po-r">
                      <div className="inner">
                        <img src="images/sub/partner_logo.png" alt="logo" />
                      </div>
                    </div>
                    <div className="swiper-slide slide2 po-r">
                      <div className="inner">
                        <img src="images/sub/partner_logo.png" alt="logo" />
                      </div>
                    </div>
                    <div className="swiper-slide slide3 po-r">
                      <div className="inner">
                        <img src="images/sub/partner_logo.png" alt="logo" />
                      </div>
                    </div>
                    <div className="swiper-slide slide4 po-r">
                      <div className="inner">
                        <img src="images/sub/partner_logo.png" alt="logo" />
                      </div>
                    </div>
                    <div className="swiper-slide slide5 po-r">
                      <div className="inner">
                        <img src="images/sub/partner_logo.png" alt="logo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Script
        src="/swiper.min.js"
        onLoad={() => {
          var swiper = new Swiper(".partner_slide", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
              delay: 5000,
            },
            spaceBetween: 20,
            breakpoints: {
              0: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 5,
              },
            },
          });
        }}
      ></Script> */}
    </>
  );
}

export default About;
