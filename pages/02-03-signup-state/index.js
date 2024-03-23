import { useState } from "react";
import {
  Wrapper,
  Title,
  Label,
  InputWrapper,
  InputBox,
  ErrorText,
  JoinBtn,
} from "../../styles/signup";

export default function SignUpStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangeEmail(event) {
    // console.log(event); //나의 행동
    // console.log(event.target); //작동된 태그
    // console.log(event.target.value); //작동된 태그에 입력된 값
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignUp() {
    //진짜 포장이 잘 됐는지 확인하기
    console.log(email);
    console.log(password);

    setEmailError("");
    setPasswordError("");

    //검증하기
    if (email.includes("@") === false) {
      //   alert("이메일이 올바르지 않습니다. @가 없음!");
      //   document.getElementById('error').innerText = "이메일이 올바르지 않습니다."
      setEmailError("이메일이 올바르지 않습니다!");
    } else if (password.length <= 9) {
      setPasswordError("비밀번호를 확인해주세요");
    } else {
      //메세지 알림 이전, Backend 컴퓨터에 있는 API(함수) 요청하기
      alert("회원가입을 축하합니다!");
    }
  }

  return (
    <>
      <Wrapper>
        <Title>로그인</Title>
        <InputWrapper>
          <Label>이메일</Label>
          <InputBox type="text" onChange={onChangeEmail} />
          <ErrorText>{emailError}</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <InputBox type="password" onChange={onChangePassword} />
          <ErrorText>{passwordError}</ErrorText>
        </InputWrapper>
        <JoinBtn onClick={onClickSignUp}>로그인</JoinBtn>
      </Wrapper>
    </>
  );
}
