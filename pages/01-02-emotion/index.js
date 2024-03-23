import { useState } from "react";
import {
  Wrapper,
  Title,
  HeaderWrapper,
  InputWrapper,
  Label,
  Writer,
  Password,
  Subject,
  LongInput,
  Contents,
  ZipWrapper,
  PostWrapper,
  PostNumber,
  PostNmSearch,
  PicWrapper,
  Picture,
  PicContent,
  Vector,
  RadioWrapper,
  RadioBtn,
  JoinWrapper,
  JoinBtn,
  InputError,
} from "../../styles/emotion";

export default function EmotionPage() {
  //여기는 자바스크립트 쓰는 곳

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [alert, setAlert] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onChangeSubject = (event) => {
    setSubject(event.target.value);
    if (event.target.value !== "") {
      setSubjectError("");
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  };

  const onClickSubmit = () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!subject) {
      setSubjectError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && subject && contents) {
      alert("게시물 등록이 완료되었습니다!");
    }
  };

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <HeaderWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={onChangeWriter}
          />
          <InputError>{writerError}</InputError>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangePassword}
          />
          <InputError>{passwordError}</InputError>
        </InputWrapper>
      </HeaderWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeSubject}
        />
        <InputError>{subjectError}</InputError>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          type="text"
          placeholder="내용을 작성해주세요."
          onChange={onChangeContents}
        />
        <InputError>{contentsError}</InputError>
      </InputWrapper>
      <ZipWrapper>
        <Label>주소</Label>
        <PostWrapper>
          <PostNumber type="text" placeholder="07250" />
          <PostNmSearch>우편번호 검색</PostNmSearch>
        </PostWrapper>
        <LongInput />
        <LongInput />
      </ZipWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <LongInput type="text" placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label>사진 첨부</Label>
        <PicWrapper>
          <Picture>
            <Vector>+</Vector>
            <PicContent>Upload</PicContent>
          </Picture>
          <Picture>
            <Vector>+</Vector>
            <PicContent>Upload</PicContent>
          </Picture>
          <Picture>
            <Vector>+</Vector>
            <PicContent>Upload</PicContent>
          </Picture>
        </PicWrapper>
      </InputWrapper>
      <InputWrapper>
        <Label>메인 설정</Label>
        <RadioWrapper>
          <RadioBtn type="radio" id="youtube" name="type" /> 유튜브
          <RadioBtn type="radio" id="picture" name="image" /> 사진
        </RadioWrapper>
      </InputWrapper>
      <JoinWrapper>
        <JoinBtn onClick={onClickSubmit}>등록하기</JoinBtn>
      </JoinWrapper>
    </Wrapper>
  );
}
