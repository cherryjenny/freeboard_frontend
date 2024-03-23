import DaumPostcodeEmbed from "react-daum-postcode";
import * as S from "./PostBoard.styles";
import { IPostBoardPageUI } from "./PostBoard.types";
import { Modal } from "antd";

export default function PostBoardPageUI(props: IPostBoardPageUI) {
  return (
    <S.Wrapper>
      <S.Title>게시물 등록</S.Title>
      <S.HeaderWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
            // defaultValue={props.data?.fetchBoard.writer}
          />
          <S.InputError>{props.writerError}</S.InputError>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          />
          <S.InputError>{props.passwordError}</S.InputError>
        </S.InputWrapper>
      </S.HeaderWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        />
        <S.InputError>{props.titleError}</S.InputError>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <S.InputError>{props.contentsError}</S.InputError>
      </S.InputWrapper>
      <S.ZipWrapper>
        <S.Label>주소</S.Label>
        <S.PostWrapper>
          <S.PostNumber>{props?.zipcode}</S.PostNumber>
          <S.PostNmSearch onClick={props.onToggleModal}>우편번호 검색</S.PostNmSearch>
          {props.toggleModal && (
            <Modal
              title="주소검색"
              open={true}
              onOk={props.onToggleModal}
              onCancel={props.onToggleModal}>
              <DaumPostcodeEmbed onComplete={props.PostSearchComplete} />
            </Modal>
          )}
        </S.PostWrapper>
        <S.searchAddress>{props?.address}</S.searchAddress>
        <S.LongInput type="text" onChange={props.onChangeExtraAddress} />
      </S.ZipWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.LongInput placeholder="링크를 복사해주세요." />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>사진 첨부</S.Label>
        <S.PicWrapper>
          <S.Picture>
            <S.Vector>+</S.Vector>
            <S.PicContent>Upload</S.PicContent>
          </S.Picture>
          <S.Picture>
            <S.Vector>+</S.Vector>
            <S.PicContent>Upload</S.PicContent>
          </S.Picture>
          <S.Picture>
            <S.Vector>+</S.Vector>
            <S.PicContent>Upload</S.PicContent>
          </S.Picture>
        </S.PicWrapper>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>메인 설정</S.Label>
        <S.RadioWrapper>
          <S.RadioBtn type="radio" id="youtube" name="type" /> 유튜브
          <S.RadioBtn type="radio" id="picture" name="image" /> 사진
        </S.RadioWrapper>
      </S.InputWrapper>
      <S.JoinWrapper>
        <S.JoinBtn
          activateBtn={props.activateBtn}
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
          activeBtn={props.isEdit ? true : props.activateBtn}>
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.JoinBtn>
      </S.JoinWrapper>
    </S.Wrapper>
  );
}
