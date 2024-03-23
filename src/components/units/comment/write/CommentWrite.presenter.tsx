import { Modal } from "antd";
import * as S from "./CommentWrite.styles";
import { ICommentWriteUI } from "./CommentWrite.types";

export default function CommentWriteUI(props: ICommentWriteUI) {
  return (
    <>
      {!props.isEdit && (
        <S.Wrapper>
          <S.Topper>
            <S.commentImage src="/Comment.png" />
            <span>댓글</span>
          </S.Topper>
          <S.Star allowHalf defaultValue={2.5} onChange={props.setRating} />
          <S.InputWrapper>
            <S.Writer onChange={props.onChangeWriterInput} placeholder="작성자" />
            <S.password
              onChange={props.onChangePasswordInput}
              placeholder="비밀번호"
              type="password"
            />
          </S.InputWrapper>
          <S.commentWrapper>
            <S.contents
              onChange={props.onChangeCommentInput}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            />
            <S.bottomWrapper>
              <S.WordCount>0/100</S.WordCount>
              <S.submitBtn onClick={props.onClickSubmitComment}>등록하기</S.submitBtn>
            </S.bottomWrapper>
          </S.commentWrapper>
        </S.Wrapper>
      )}
      {props.isEdit && (
        <S.EditPiece>
          {props.toggleModal && (
            <Modal
              title="비밀번호를 입력해주세요"
              open={true}
              onOk={props.onToggleModal}
              onCancel={props.onToggleModal}>
              <S.password
                onChange={props.onChangePasswordInput}
                placeholder="비밀번호"
                type="password"
              />
            </Modal>
          )}
          <S.EditContainer>
            <S.EditContents
              onChange={props.onChangeCommentInput}
              placeholder="수정할 내용을 입력해주세요."
            />
            <S.EditBottom>
              <S.countWord>0/100</S.countWord>
              <S.confirmEditBtn onClick={props.onClickEditBtn}>수정하기</S.confirmEditBtn>
            </S.EditBottom>
          </S.EditContainer>
        </S.EditPiece>
      )}
      {props.isDelete && (
        <Modal
          title="비밀번호를 입력해주세요"
          open={true}
          onOk={props.onClickDeleteBtn}
          onCancel={props.onToggleModal}>
          <S.password
            onChange={props.onChangePasswordInput}
            placeholder="비밀번호"
            type="password"
          />
        </Modal>
      )}
    </>
  );
}
