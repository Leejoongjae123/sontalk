"use client";
import React, { useState } from "react";

export default function Policy() {
  // 모달 표시 상태를 관리하는 상태 변수와 setter 함수
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 클릭 이벤트 핸들러: 모달 표시 상태를 토글함
  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <a onClick={handleClick}>[자세히보기]</a>

      {isModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ fontSize: "20px", textAlign: "center" }}>약관</h2>
            <p style={{ fontSize: "16px",whiteSpace:'pre-wrap' }}>
            {`서비스 이용약관

[제1장] 총칙
제1조 (목적)
본 약관은 ㈜MR병원서류발급(이하 ‘회사’)가 제공하는 손탑 서비스(이하 ‘서비스’) 를 이용함에 있어 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 한다.

제2조 (용어의 정의)
① 손탑 서비스 (이하 '서비스'): 회사가 운영하는 인터넷 또는 모바일 인터페이스에서 구현되는 단말기(PC, 모바일, 태블릿 PC 등의 각종 유무선 장치를 포함)와 상관없이 이용자가 선택적으로 이용할 수 있는 손해사정사 소개 관련 다음 각 목의 다양한 솔루션 및 서비스를 의미한다.
1. 일반회원 서비스
가. 온라인상담 서비스
일반회원이 남긴 질문(상담글)에 대해서 손해사정사 회원이 답변을 하고 해당 질문과 답변을 모든 이에게 공개하는 서비스를 의미한다.
나. 유료상담 서비스
일반회원이 회사가 운영하는 서비스에서 손해사정사 회원을 검색하고 일반회원의 선택에 의해 전화상담, 방문상담, 영상상담 등이 이루어지는 서비스를 의미한다.
2. 손해사정사 회원 서비스
가. 광고솔루션 서비스
광고 솔루션 서비스란 분야광고 등 회사가 정한 방식에 따라 손해사정사 회원이 신청한 광고를 광고매체 이용자에게 보여주는 방식의 인터넷 광고 서비스를 의미한다.
나. 유료상담 솔루션 서비스
일반회원의 선택을 받은 손해사정사 회원에게 전화상담, 방문상담, 영상상담 등이 이루어질 수 있는 기능이 담긴 솔루션을 제공해주는 서비스를 의미한다.
다. 기타 회사가 정한 서비스
오프라인 광고 서비스, 프로필 사진촬영 서비스 등 회사가 손해사정사 회원에게 온 오프라인을 통해 제공하는 유/무형의 서비스를 의미한다.
② 이용자: 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 의미한다.
③ 이용계약: 회사가 제공하는 서비스의 이용과 관련하여 회사와 이용자 간에 체결하는 계약을 의미한다.
④ 손해사정사 계정: 이용자가 손탑 서비스를 사용하기 위하여 필요한 이메일 주소 및 아이디·패스워드 기반의 로그인 계정을 의미한다.
⑤ 회원: 본 약관에 동의함으로써 회사와 이용계약을 체결하고 손탑계정을 등록한 만 14세 이상의 자로서, 회사가 제공하는 정보와 서비스를 지속적으로 이용할 수 있으며 일반회원과 손해사정사회원을 포함한다.
⑥ 비회원 : 회원에 가입하지 않고 회사가 제공하는 서비스를 이용하는 자를 의미한다.
⑦ 일반회원: 회사의 약관에 동의하고 일반회원의 양식에 따라 손탑 계정을 등록한 자를 의미한다.
⑧ 손해사정사 회원: 대한민국 손해사정사 자격을 취득한 자로서 회사의 약관에 동의하고 손해사정사 회원의 양식에 따라 손탑 계정을 등록한 자를 의미한다.
⑨ 아이디(ID): 회원의 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 회사가 승인하는 문자 또는 숫자의 조합을 의미한다.
⑩ 비밀번호(Password): 회원이 부여받은 아이디와 일치하는 회원임을 확인하고 회원의 권익을 보호하기 위하여 회원이 선정한 문자와 숫자의 조합을 의미한다.
⑪ 전자우편(Email): 인터넷을 통한 우편 혹은 전기적 매체를 이용한 우편을 의미한다.
⑫ 콘텐츠(Contents): 회사가 제공하는 각종 정보 및 회원이 입력 또는 게시하는 모든 정보(게시물)를 의미한다.
⑬ 해지(또는 탈퇴): 회사 또는 회원이 이용계약을 해약하는 것을 말한다.
⑭ 손해사정사 유료상담 서비스 : 일반회원이 손해사정사회원에게 일정한 대가를 지급하고 손해사정사회원으로부터 받는 모든 서비스를 말한다.
⑮ 솔루션 이용계약 : 손해사정사회원이 회사에 솔루션의 설치와 이용에 대해 요청하면 회사는 손해사정사회원에게 솔루션사용을 제공하고 손해사정사회원은 회사에 솔루션 사용료를 지급하는 것을 내용으로 하는 계약(광고솔루션과 서비스솔루션 모두를 포함)을 말한다.

제3조 (회사 정보의 제공)
회사는 회사의 상호, 대표자 성명, 주소, 전화번호, 전자우편주소, 사업자등록번호 및 개인정보관리책임자 등을 이용자가 쉽게 알 수 있도록 온라인 서비스 초기화면에 게시한다.

제4조 (약관의 게시와 개정)
① 회사는 이용자가 별도의 연결화면을 통하여 약관을 확인할 수 있도록 웹사이트에 게시하며, 약관의 전문을 출력할 수 있도록 한다.
② 회사는 약관의 중요한 내용을 굵은 문자 등으로 명확하게 표시하여 이용자가 알아보기 쉽도록 한다.
③ 회사는 관계법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있다. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여, 개정 전 약관과 함께 적용일 7일 전부터 회사 웹사이트에서 확인할 수 있도록 게시하며, 기존 회원에게는 본 약관 제8조의 방법을 통하여 약관 개정사실을 통지한다. 다만, 회원에게 불리하게 약관내용을 변경하는 경우에는 30일 이상의 사전 유예기간을 두고 공지한다.
④ 기존 회원이 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하고 회원탈퇴를 할 수 있다.

제5조 (약관 및 운영정책 등의 해석)
① 회사가 운영하는 서비스에 기본적으로 본 약관이 적용되며, 다양한 개별 서비스에 대해서 별도의 서비스 이용약관 및 운영정책을 둘 수 있다.
② 개별 서비스의 제공에 관하여는 해당 이용약관 및 운영정책이 본 약관에 우선하여 적용되며, 본 약관은 개별 이용약관 및 운영정책에 반하지 않는 범위 내에서 개별 서비스에 관하여도 적용된다.
③ 개별 서비스에 관한 별도 이용약관 및 운영정책 또는 본 약관에서 정하지 아니한 사항이 있거나 본 약관의 해석에 다툼이 있는 경우 대한민국 법률 및 관계 법령이 있는 경우 이에 따르고 그렇지 아니한 경우 상관례에 따른다.

제6조 (약관의 효력)
① 본 약관은 이용자가 약관의 내용에 동의하며 회원가입을 신청하고, 회사가 그 신청에 대하여 승낙함으로써 효력이 발생한다.
② 회사는 기존 회원이 본 약관 제4조 제3항에 따른 공지 또는 통지에도 불구하고, 변경된 약관의 효력발생일로부터 7일 내에(본 약관 제4조 제3항에서 정한 회원에게 불리하게 약관을 변경하는 경우에는 30일 내) 이의를 제기하지 않는 경우에는 변경된 약관을 승인한 것으로 본다.

제7조 (약관 외 준칙)
본 약관 및 개인정보취급방침에 명시되지 않은 사항에 대해서는 회사가 정한 서비스 이용안내 및 세부규칙, "약관의 규제에 관한 법률", "개인정보 보호법", "정보통신망 이용촉진 및 정보보호 등에 관한 법률", "변호사사법", "보험업법" 등 관련법령 또는 상관습에 따른다.

제8조 (회원에 대한 통지)
① 회사는 회원의 결제정보, 공지사항, 서비스와 관련된 프로모션 또는 이벤트, 약관 및 운영정책 변경 등의 내용을 회원가입 시 회원이 공개한 전자우편주소 또는 쪽지, 팝업창, 유ㆍ무선 등의 방법으로 회원에게 통지할 수 있다.
② 회사는 회원 전체에 대한 통지의 경우 7일 이상 회사 웹사이트 게시판에 게시함으로서 전항의 통지에 갈음할 수 있다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 전항의 방법 중 전자우편, 유ㆍ무선의 방법으로 별도 통지한다.

[제2장] 서비스 이용 계약
제9조 (회원가입, 서비스 이용계약의 성립 등)
① 서비스 이용계약은 회원이 되려고 하는 자가 회사가 정한 이용약관 및 개인정보 수집 및 이용 동의서에 대하여 “동의”를 선택하고, 온라인 신청 양식을 작성하여 서비스 이용을 신청한 후 이용 신청에 대하여 회사가 이를 승낙함으로써 회원가입이 완료됨과 동시에 성립한다.
② 회사가 제공하는 서비스를 이용하고자 하는 손해사정사는 손해사정사 회원 양식을 작성해야 하고, 일반인은 일반회원 양식을 작성해야 한다.
③ 회원이 되려고 하는 자가 약관에서 정하는 바에 따라 정당히 이용신청을 한 경우, 상당한 이유가 없는 한 회사는 이용신청을 승낙하여 회원으로 가입하게 한다. 단, 다음 각 호의 경우에는 회원의 서비스 이용 신청의 승낙을 유보할 수 있다.
1. 서비스 관련 설비의 여유가 없거나 기술상 또는 업무상 문제가 있는 경우
2. 기타 회사의 불가피한 사유로 이용 신청의 승낙이 곤란한 경우
3. 손해사정사 회원 가입 승인을 위한 필수 서류에 문제가 있거나 제출하지 않은 경우
④ 회사가 본조 제3항에 따라 회원가입신청의 승낙을 유보한 경우에는 전자우편, 팝업창, 유ㆍ무선 등의 방법으로 즉시 이용 신청자에게 알린다. 단, 회사의 귀책사유 없이 이용자에게 알릴 수 없는 경우에는 예외로 한다.
⑤ 손해사정사 유료 상담 서비스 이용계약은 일반회원이 손해사정사를 검색해 선택하여 체결한다.
⑥ 유료솔루션 이용계약은 회사와 손해사정사회원 간에 체결한다.

제10조 (회원정보의 변경)
① 회원은 언제든지 자신의 개인정보를 열람하고 수정할 수 있다. 다만, 서비스 관리를 위해 필요한 아이디, 사업자등록번호 등은 직접 수정할 수 없다.
② 회원이 전항의 변경사항을 수정하지 않아 발생한 불이익에 대하여 회사는 책임지지 않는다.

제11조 (회원의 아이디 및 비밀번호의 관리에 대한 의무)
① 회원은 아이디와 비밀번호에 대한 모든 관리책임이 있으며, 이를 제3자에게 제공 또는 공유, 공개하여 제3자가 이용하도록 하여서는 안 된다.
② 회사는 전항의 경우 회원의 자격을 박탈할 수 있다.
③ 회원은 자신의 아이디 및 비밀번호가 유출되어 제3자에 의해 사용되고 있음을 인지한 경우, 즉시 회사에 알려야 한다.
④ 회사는 전항의 경우 회원의 개인정보보호 및 기타 서비스 부정이용행위 방지 등을 위하여 회원에게 비밀번호의 변경 등 필요한 조치를 요구할 수 있으며, 회원은 회사의 요구가 있는 즉시 회사의 요청에 성실히 응해야 한다.
⑤ 회사는 회원이 본조 제2항 및 제3항에 따른 의무를 성실히 이행하지 않아 발생한 불이익에 대하여 책임지지 않는다.

제12조 (회원가입의 취소, 이용계약의 해지)
① 회원이 이용계약의 해지를 원할 경우에는 서비스 내의 회원 탈퇴 기능을 통하여 언제든지 회원탈퇴를 신청할 수 있다. 이 경우 회사는 불가피한 사정이 없는 한 회원의 탈퇴 요청을 지체 없이 처리한다. 다만, 손해사정사회원이 솔루션 이용계약을 해지하는 경우에는 동 계약내용에 따른다.
② 본조 제1항에 따라 회원가입을 취소하거나 이용계약을 해지한 경우에는 전자우편, 팝업창, 유ㆍ무선 등의 방법으로 처리결과를 이용 신청자에게 알린다. 단, 회사의 귀책사유 없이 이용자에게 알릴 수 없는 경우에는 예외로 한다.

[제3장] 서비스의 이용
제13조 (서비스의 제공 및 변경)
① 회사는 이용자의 서비스 이용 신청을 승낙한 때부터 회원에게 서비스를 제공한다. 다만, 유료서비스는 일반회원 및 비회원이 손해사정사회원에게 이용료를 전액 지급한 때부터 서비스를 제공하는 것을 원칙으로 한다.
② 서비스의 이용은 연중무휴 1일 24시간을 원칙으로 한다. 다만, 시스템 점검, 증설과 교체 및 고장 등의 이유로 회사가 정한 기간에는 서비스가 일시 중지될 수 있다. 이 경우 회사는 사전에 사이트에 해당 사실을 공지한다.
③ 회사는 안정적인 서비스 제공을 위한 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 서비스의 전부 또는 일부를 변경할 수 있다.
④ 회사는 서비스가 변경되는 경우 변경되는 서비스 내용 및 제공 일자가 예측되는 경우 사전에 사이트를 통하여 공지하거나 이용자에게 통지한다. 단, 회사가 통제할 수 없거나 예측할 수 없는 사유로 인하여 사전 공지 또는 통지가 불가능한 경우에는 사후 공지로 갈음할 수 있다.

제14조 (일반회원 및 비회원의 권한 및 의무)
① 일반회원 및 비회원이 회사가 제공하는 서비스를 이용함에 있어서 회사는 이에 대해 대가를 받지 않는다.
② 일반회원 및 비회원은 손해사정사회원의 유료서비스를 이용할 경우 손해사정사회원을 계약당사자로 하여 손해사정사회원이 책정한 대가를 손해사정사회원에게 직접 지급하여야 한다. 다만, 결제대행과 관련된 업무는 회사의 지원 하에 결제대행회사가 처리하도록 할 수 있다.
③ 유료서비스를 이용하는 일반회원 및 비회원은 손해사정사회원에게 대가를 지급 및 결제하는 데에 있어서 필요한 경우 회사의 결제대행지원업무에 적극 협조할 의무가 있다.
④ 일반회원 및 비회원은 관계법령, 본 약관의 규정, 이용안내 및 서비스 상에 공지한 주의사항, 회사가 통지한 사항을 준수해야 하며, 기타 회사의 업무를 방해하는 행위를 하여서는 안 된다.
⑤ 일반회원 및 비회원은 법률적인 문제로 곤란에 처한 경우 법률상담을 받기 위한 목적으로만 서비스를 이용하여야 하며, 학술적 의문의 해소, 광고, 브로커제안, 장난 등의 목적으로 서비스를 이용하여서는 안 된다.
⑥ 일반회원 및 비회원은 상담글의 작성 시 상담에 필요한 최소한의 구체적인 정보를 제공하여야 하며, 제공한 정보가 부족한 경우 서비스의 이용에 제한을 받을 수 있다. 단, 타인의 개인정보 등을 포함하는 방법 등으로 타인의 명예를 훼손하거나 기타권리를 침해해서는 아니된다.
⑦ 일반회원 및 비회원은 손해사정사 회원으로부터 받은 상담의 내용을 회사 및 손해사정사 회원의 사전 승낙 없이 복제ㆍ편집ㆍ전시ㆍ전송ㆍ배포ㆍ판매ㆍ방송ㆍ공연하는 등의 행위를 하여서는 안 된다.
⑧ 일반회원 및 비회원은 회사의 임직원(고객 응대 직원 포함)에게 욕설, 폭언, 모욕, 협박, 폭행, 성희롱, 성추행 등을 포함한 신체적ㆍ정신적 고통을 유발하는 행위, 서비스 이용 과정에서 이유 없는 잦은 연락, 소란, 협박, 인과관계가 입증되지 않은 피해에 대한 보상(환급, 쿠폰 등) 요구 등을 통해 고의로 서비스 운영을 방해하는 행위를 하여서는 안 된다.
⑨ 다량의 계정 생성 및 서비스 가입ㆍ탈퇴의 반복 및 이와 유사한 활동 등 서비스의 정상적인 이용 방법과 다른 방법으로 회사의 정상적인 서비스 제공을 방해하는 행위를 하여서는 안 된다.

제15조 (손해사정사회원의 권리)
① 손해사정사회원은 일반회원 및 비회원에게 무료 또는 유료서비스를 제공할 수 있다.
② 손해사정사회원은 광고, 브로커제안, 장난 등 손탑 서비스의 취지에 부합하지 않는 목적으로 상담글을 게시하는 일반회원 및 비회원에 대하여 신고를 할 수 있으며 회사는 적절한 조치를 취해야 한다.
③ 손해사정사회원은 일반회원 및 비회원이 서비스에서 검색한 결과물에 링크된 손해사정사회원의 홈페이지에 대해서 사실과 다르지 않은 범위 내에서 자신의 프로필 및 정보를 작성할 수 있다.
④ 손해사정사회원은 일반회원 및 비회원이 서비스에서 검색한 결과물에 링크된 손해사정사회원의 홈페이지에서 본인이 계약당사자인 서비스를 일반회원 및 비회원에게 제공할 수 있다.

제16조 (손해사정사회원의 의무)
① 손해사정사회원은 일반회원 및 비회원을 위하여 자격시험종류 및 기수, 주요학력 및 경력, 소속 법인, 지역 등 의 정보를 공개하여야 한다.
② 손해사정사회원은 회사에게 전항의 정보를 전달함에 있어 진실에 부합하게 하여야 하고, 회사가 관련 증명서류를 요청할 경우 이에 응하여야 한다.
③ 손해사정사회원은 회사가 제공하는 서비스의 지적재산권을 침해하는 행위를 하여서는 아니된다.
④ 손해사정사회원은 일반회원 및 비회원과의 상담 내용에 대하여 비밀준수의무를 진다.

제17조 (이용자의 의무 위반에 대한 제재)
① 이용자가 제14조, 제16조의 의무를 위반한 경우에 회사는 사안의 중요성과 다른 이용자, 제3자, 회사 등이 입은 손해를 고려하여 이용자에게 다음과 같은 제재를 할 수 있다.
1. 서면경고
회사는 제14조, 제16조의 의무를 위반한 이용자에게 의무 위반의 내용, 위반 시기 등을 기재하여 서면으로 경고할 수 있다.
2. 이용의 제한
회사는 일정한 기간을 정하여 상담 등록 및 지원, 기타 서비스 이용과 로그인 등을 제한할 수 있다.
3. 영구 정지
회사는 이용자의 계정을 영구적으로 정지할 수 있다.
② 회사는 제14조, 제16조의 의무를 위반하여 제재 대상이 된 이용자들에게 이메일 등을 통하여 제재 내용을 고지해야 한다

제18조 (회사의 권리)
① 회사는 서비스의 신뢰도를 위하여 이용자에게 온라인 상의 본인인증 절차를 거치도록 요구할 수 있다.
② 회사가 제공하는 서비스 및 콘텐츠에 대한 지적재산권은 회사에 귀속된다.
③ 회원의 게시물 및 제휴계약에 따라 제공된 콘텐츠는 게시와 동시에 회사가 이용권을 취득하며 이용권의 범위에 관해서는 저작권 정책(제4장 제22조 제4항)의 내용에 따른다. 회사가 취득한 이용권의 이용기간은 특별한 사유가 없는 한 영구로 한다.
④ 회사는 서비스의 향상을 위하여 손해사정사회원의 전문분야 선택정보와 일반회원의 상담분야 정보, 일반회원의 상담요청 카테고리, 손해사정사회원의 답변 내용, 일반회원과 손해사정사회원의 댓글 내용을 가명처리하여 통계, 과학적 연구, 공익적 기록보존 등에 활용할 수 있다.
⑤ 회사는 일반회원이 받는 서비스 질의 향상과 손해사정사 회원의 서비스참여에 대한 동기를 고취시키기 위하여 서비스에서 작성된 상담글 등의 컨텐츠를 익명처리한 뒤 뉴스, 포털사이트 등과의 제휴와 협약 등을 통해 전송하거나 게시되도록 할 수 있다.
⑥ 회사는 서비스 제공의 편의 등을 위하여 회원이 서비스 내에 게시한 게시물의 내용을 외부 API 서비스에 일시적으로 송신 및 복제되도록 할 수 있다.

제19조 (회사의 의무)
① 회사는 본 약관 및 관계법령에 따라 서비스를 제공하여야 하며, 다음 각 호의 사유가 발생한 경우를 제외하고 계속적, 안정적으로 서비스를 제공하기 위하여 최선의 노력을 다한다.
1. 서비스용 설비의 보수, 정기점검 또는 공사로 인한 부득이한 경우
2. 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지한 경우
3. 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우
4. 설비장애 또는 이용 폭주 등으로 인하여 서비스 이용에 지장이 있는 경우
② 회사는 회원으로부터 제기되는 의견이나 불만이 정당하다고 객관적으로 인정될 경우에는 적절한 절차를 거쳐 즉시 처리하여야 한다. 다만 즉시 처리가 곤란한 경우에는 회원에게 그 사유와 처리일정을 통보하여야 한다.
③ 회사는 유료서비스와 관련하여 일반회원 및 비회원과 손해사정사회원이 양 당사자간 계약에 따라 서비스를 이용할 수 있도록 대가의 지급 및 결제 등 필요한 지원에 협조할 의무가 있다.

제20조 (이용자의 개인정보보호)
① 회사는 개인정보보호와 관련된 자세한 사항을 개인정보처리방침으로 정하고 이를 전자적 표시형태로 제공하여야 한다.
② 회사는 이용자의 개인정보에 대하여 철저한 보안을 유지하여야 하며 서비스 운영 및 개선에만 사용하여야 하고, 이용자의 동의 없이 목적 외로 이용하거나 제3자에게 제공하지 않는다. 다만 다음 각 호에 해당하는 경우에는 그렇지 않다.
1. 개인정보보호법에 따라 가명정보 처리를 통해 활용하는 경우
2. 관계법령에 의해 수사상의 목적으로 관계기관으로부터 요청이 있는 경우
3. 방송통신심의위원회의 요청이 있는 경우
4. 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우
③ 회사는 이용자의 개인정보 관리를 위하여 이용자의 개인정보를 제3자에게 위탁할 수 있다.
④ 회사는 이용자의 귀책사유로 인하여 노출된 개인정보에 대하여서는 일체의 책임을 지지 않는다.

[제4장] 게시물 관리 및 저작권 정책
제21조 (서비스 게시물의 등록 및 관리)
① 회원은 본 약관에서 정하는 범위 내에서 자율적으로 게시물을 작성할 수 있다.
② 회원의 게시물이 정보통신망법 및 저작권법 등 법령에 위반되는 내용을 포함하는 경우, 권리자는 법령이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을 요청할 수 있으며, 회사는 법령에 따라 조치를 취하여야 한다.
③ 회사는 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및 관련법에 위반되는 경우에는 관련법에 따라 해당 게시물에 대해 임시조치 등을 취할 수 있다.
④ 본 조에 따른 세부절차는 정보통신망법 및 저작권법이 규정한 범위 내에서 회사가 정한 운영정책에 따른다.

제22조 (서비스 게시물의 저작권)
① 손탑 서비스에서 회원이 작성한 모든 게시물 중에 저작물의 경우 저작권의 보호 대상이 된다.
② 타인의 지적재산권에 속하는 대상물을 로톡 내에서 이용할 경우에는 반드시 해당 권리자의 사전 동의를 받아야 한다.
③ 회원이 서비스 내에 게시한 게시물의 저작권은 해당 게시물의 저작자에게 귀속된다.
④ 회원이 서비스 내에 공개한 게시물의 내용은 포털사이트 등 인터넷의 검색 결과 내지 서비스 프로모션, 뉴스 콘텐츠 등 기타 서비스에 인용되거나 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 편집되어 게시될 수 있다. 또한 본 약관 제18조 제5항의 내용에 의해 포털사이트 등에서 운영하는 타 서비스 등에 전송되거나 게시될 수 있다. 다만 이 경우, 회원은 언제든지 회사에 전화, 팩스, 전자우편 등을 통해 연락하거나 또는 서비스 내 관리기능을 통해 해당 게시물에 대해 삭제, 수정 등의 조치를 취할 수 있다.
⑤ 회원이 서비스 내에 게시한 게시물의 내용은 본 약관 제18조 제6항의 내용에 의해 외부 API 서비스에 일시적으로 송신 및 복제될 수 있다.
⑥ 회사는 본조 제4항 및 제5항 이외의 방법으로 회원의 게시물을 이용하고자 하는 경우에는 전화, 팩스, 전자우편 등을 통해 사전에 회원의 동의를 얻어야 한다. 회원의 비공개 게시물도 마찬가지이다.

제23조 (회원 및 제3자의 권리 보호)
① 회원은 타인의 저작권을 포함한 지적 재산권 및 인격권 등 기타 권리를 침해해서는 안 된다. 만일 이와 같은 내용의 게시물로 인해 발생하는 결과에 대한 모든 책임은 회원 본인에게 있다.
1. 저작권자의 명시적 동의 없이 타인의 저작물의 전부 또는 일부를 복제, 배포, 전송 등의 방법으로 이용하는 것은 저작권자의 권리를 침해하는 행위이므로 복제 등의 방법으로 타인의 저작권을 침해한 게시물을 서비스에 게재 또는 등록하여서는 안 된다.
2. 회원은 공표된 저작물의 보도·비평·교육·연구 등을 위하여 정당한 범위 안에서 공정한 관행에 합치되게 이를 인용할 수 있으며, 반드시 출처를 명시해야 한다. 하지만 인용이 저작자의 저작 인격권을 침해하는 것이어서는 안 되며 이러한 경우 출처를 밝히더라도 저작권 침해에 해당될 수 있다.
② 회원의 게시물에 대하여 제3자로부터 저작권 및 기타 권리의 침해로 소송 및 기타 법률적 이의가 제기된 경우 해당 회원은 변호사 비용을 포함하여 권리침해로 야기된 제반법률문제를 해결하기 위한 비용을 부담하는 등 기타 조치로 회사를 보호할 의무가 있다.
③ 회원의 게시물에 대하여 제3자로부터 저작권 및 기타 권리의 침해로 이의가 제기된 경우 회사는 당해 게시물을 임시 삭제할 수 있으며, 이의를 제기한 자와 게시물 등록자 간에 소송, 합의 등을 통해 당해 게시물에 관한 법적 문제가 종결된 후 이를 근거로 회사에 신청이 있는 경우에만 상기 임시 삭제된 게시물은 다시 등록될 수 있다.
④ 회원은 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 전송, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나, 목적에 관계없이 제3자에게 이용하게 해서는 안 된다.
⑤ 회사의 서비스에 게재 또는 등록된 회원의 게시물을 제3자가 사용하고자 할 경우에는 반드시 해당 회원의 명시적 동의를 얻은 뒤 사용해야 한다. 단, 본 약관 제18조 제5항에 따라 상담글 등의 콘텐츠가 뉴스, 네이버, 다음 등의 포털사이트 등에 전송, 게시되는 경우에는 그러하지 아니하다.
⑥ 서비스 상의 게시물은 회원 간의 자율적인 응답으로 회사는 게시물에 대한 정확성에 대해서는 보증을 하지 않는다.
⑦ 회사는 회원들의 게시물 이용에 따른 동의 절차를 중개하거나 그 과정에 개입하지 않는다.

제24조 (저작권 침해 게시물의 게시중단 요청)
회원은 저작권 침해에 대해 더 궁금한 내용이 있거나 권리자 본인의 저작권을 침해한 게시물을 신고하려는 경우 전화, 팩스, 전자우편 등을 통해 문의 또는 신고할 수 있다. 회사는 게시중단 요청된 게시물에 대해서는 최대 24시간 이내에 게시중단 처리를 완료하고 그 결과를 통보한다.

[제5장] 회원자격 박탈 및 분쟁의 조정
제25조 (회원자격의 박탈)
① 회사는 다음 각 호의 경우 일반회원의 서비스 이용기간을 제한하거나 회원자격을 예고 없이 박탈할 수 있다.
1. 회원의 개인신상정보가 사실과 다를 경우(온라인 신청 양식의 기재사항에 허위, 기재누락, 도용, 오기가 있는 경우)
2. 타인에게 아이디를 양도, 대여한 경우
3. 다른 이용자의 아이디를 부정 사용한 경우
4. 서비스를 통하여 취득한 다른 회원의 정보를 수집, 저장, 양도하거나 중개에 이용한 경우
5. 불법정보, 유해정보 또는 회사로부터 허가받지 않은 광고, 브로커제안, 장난글 등을 게시한 경우
6. 손해사정사회원으로부터 받은 상담의 내용을 회사 및 손해사정사회원의 사전 승낙 없이 복제ㆍ편집ㆍ전시ㆍ전송ㆍ배포ㆍ판매ㆍ방송ㆍ공연하는 등의 행위를 한 경우
7. 회사 직원, 운영자 등을 포함한 타인을 사칭한 경우
8. 서비스의 운영에 상당한 지장을 주거나 줄 우려가 있는 행위를 한 경우
9. 본 약관을 포함하여 회원에게 안내된 기타 회사가 정한 규정 또는 이용조건을 위반한 경우 및 이용 신청자가 본 약관등에 의하여 이전에 회원자격을 상실한 사실이 있는 경우(다만 회원자격 상실 후 6개월이 경과한 자로서 회사로부터 회원 재가입 승낙을 얻은 경우는 예외로 한다)
10. 스토킹 등 다른 회원을 괴롭히는 행위를 한 경우
11. 컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해, 파괴할 목적으로 고안된 컴퓨터 바이러스, 기타 다른 컴퓨터코드, 파일, 프로그램을 포함하고 있는 자료를 게시하거나 전자우편으로 배포하는 행위를 한 경우
12. 법정연령이 만 14세 미만의 자인 경우
13. 기타 법령에 위배되는 행위를 한 경우
② 회사는 다음 각 호의 경우 손해사정사회원의 서비스 이용기간을 제한하거나 회원자격을 박탈할 수 있다.
1. 회원의 개인신상정보가 사실과 다를 경우
2. 타인에게 아이디를 양도, 대여한 경우
3. 다른 이용자의 아이디를 부정 사용한 경우
4. 불법정보, 유해정보 또는 회사로부터 허가 받지 않은 광고, 브로커제안, 장난글 등을 게시한 경우
5. 회사 직원, 운영자 등을 포함한 타인을 사칭한 경우
6. 서비스의 운영에 지장을 주거나 줄 우려가 있는 행위를 한 경우
7. 본 약관을 포함하여 기타 회사가 정한 규정 또는 이용조건을 위반한 경우
8. 컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해, 파괴할 목적으로 고안된 컴퓨터 바이러스, 기타 다른 컴퓨터코드, 파일, 프로그램을 포함하고 있는 자료를 게시하거나 전자우편으로 배포하는 행위를 한 경우
9. 기타 법령에 위배되는 행위를 한 경우
③ 회사는 회원이 본 약관 또는 관계법령 등을 위반하는 경우, 회원에게 이를 통지하고 14일 이상의 기간을 정하여 소명할 기회를 부여한 뒤 적절한 소명이 이루어지지 않는 경우에 이용계약을 해지할 수 있다. 단, 약관 또는 관계법령 등의 중대한 위반의 경우에는 즉시 이용계약을 해지할 수 있다.
④ 본조 제1 내지 3항에 따라 회원가입을 취소하거나 이용계약을 해지한 경우에는 전자우편, 팝업창, 유ㆍ무선 등의 방법으로 즉시 이용 신청자에게 알린다. 단, 회사의 귀책사유 없이 이용자에게 알릴 수 없는 경우에는 예외로 한다.

제26조 (면책조항)
① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없거나 제공이 지연된 경우에는 서비스 제공에 관한 책임이 면제된다.
② 회사는 회원의 귀책사유로 인하여 발생한 서비스 이용의 장애에 대해서는 책임을 지지 않는다.
③ 회사는 일반회원이 서비스와 관련하여 게시 또는 제공한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 대해서는 책임을 지지 않는다.
④ 회사는 손해사정사회원이 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여 손해사정사회원이 기존에 회사에 제출한 서면자료가 위조, 변조되거나 기타 사유로 회사가 손해사정사회원의 정보가 허위임을 인지하지 못한 경우에 대하여는 책임을 지지 않는다.
⑤ 회사는 회원에게 플랫폼을 제공하는 역할만을 담당하며, 일반회원과 손해사정사회원간의 상담을 진행하는 과정에서 발생한 분쟁에 대해서는 개입할 수 없고 이로 인한 손해를 배상할 책임이 없다.
⑥ 회사는 손해사정사회원에게 솔루션을 제공하는데 그치며 일반회원과 손해사정사회원 간의 상담 선택, 상담 내용, 그 밖의 연락이나 거래, 결제에 일절 관여하지 않고 분쟁에 개입할 수 없으며 이로 인한 손해를 배상할 책임이 없다.
⑦ 회사는 회원 상호간 또는 회원과 제3자 간에 콘텐츠를 매개로 하여 발생한 분쟁 등에 대하여 책임을 지지 않는다.
⑧ 본 약관의 규정을 위반함으로 인하여 회사에 손해가 발생하는 경우, 해당 위반자는 회사에 발생하는 모든 손해를 배상하여야 하며, 동 손해로부터 회사를 면책시켜야 한다.

제27조 (분쟁의 해결)
① 회사와 이용자는 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 서로 성실하게 노력하여야 한다.
② 회사가 제공하는 서비스는 합법적인 목적으로만 사용되어야 하며, 대한민국 법령에 반하는 형태의 사용은 금지된다. 이용자의 금지된 형태의 사용으로 인하여 손해가 발생할 경우 회사는 이에 대하여 책임을 지지 않는다.
③ 회사와 이용자 사이에 발생한 소송의 관할법원은 법령이 정한 절차에 따른 법원을 관할 법원으로 한다.
④ 회사와 이용자 사이에 발생한 소송에는 대한민국 법령을 적용한다.

제28조 (링크)
회사는 이용자에게 타인의 웹사이트 또는 자료에 대한 링크를 제공할 수 있다. 회사는 해당 웹사이트나 자료의 내용 등에 대하여 책임이 없으며, 이용자가 자발적으로 이를 이용하거나 신뢰함으로 인하여 야기된 손해에 대하여 책임을 지지 않는다.

[부칙]
본 약관은 2024년 3월 20일부터 30일간 공지하고, 2024년 4월 10일부터 시행한다.`}
            </p>
            <div style={buttonContainerStyle}>
              <button
                style={{ width: "5rem", height: "2rem" }}
                className="submit_btn"
                onClick={() => setIsModalOpen(false)}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


// 모달 스타일
const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
};

// 모달 내용 스타일
const modalContentStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "5px",
  maxWidth: "70%", // 최대 폭을 화면의 70%로 제한
  overflowY: "auto", // 내용이 넘치면 Y축으로 스크롤 생성
  height: "80vh", // 모달 창의 최대 높이를 화면 높이의 80%로 설정
  whiteSpace: 'pre-wrap', // 텍스트가 넘칠 때 자동으로 줄바꿈 처리
};
// 버튼 컨테이너 스타일
const buttonContainerStyle = {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center', // 버튼을 수평으로 중앙 정렬
};