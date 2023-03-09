import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

// 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트
// children으로 받아온 내용을 보여주기만 하는 역할
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

function AuthTemplate({ children }) {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">리액터스</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
}

export default AuthTemplate;
