import * as S from "./Header.styles";

export default function Header() {
  return (
    <>
      <S.wrapper>
        <S.wrapperLeft>
          <S.logo src="img/Vector.jpg" />
          <S.logo src="img/Vector_1.jpg" />
          <S.logo src="img/code.camp.png" />
        </S.wrapperLeft>
        <S.wrapperRight>
          <S.login>로그인</S.login>
          <S.join>회원가입</S.join>
        </S.wrapperRight>
      </S.wrapper>
    </>
  );
}
