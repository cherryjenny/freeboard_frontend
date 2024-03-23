import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../common/utils/utils";
import { IBoardDetailPageUI } from "./BoardDetail.types";
import { Avatar, Modal, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function BoardDetailPageUI(props: IBoardDetailPageUI) {
  return (
    <>
      <S.BoardWrapper>
        <S.ProfileContainer>
          <S.ProfileContainerWrapper>
            <div style={{ padding: "10px" }}>
              <Avatar size={46.67} icon={<UserOutlined />} />
            </div>
            <S.WriterProfile>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.Date>Date : {getDate(props.data?.fetchBoard.createdAt)}</S.Date>
            </S.WriterProfile>
          </S.ProfileContainerWrapper>
          <S.Option>
            <div>
              <Popover content={"content"} title="Title" trigger="hover">
                <S.Link />
              </Popover>
            </div>
            <div>
              <Popover
                title={props.data?.fetchBoard.boardAddress?.address}
                content={props.data?.fetchBoard.boardAddress?.addressDetail}
                trigger="hover">
                <S.Position />
              </Popover>
            </div>
          </S.Option>
        </S.ProfileContainer>
        <S.ContentsContainer>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.Picture />
          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
        </S.ContentsContainer>
        <S.LikeCountContainer>
          <S.LikeWrapper>
            <div id="like" onClick={props.LikeCounter}>
              <S.LikeVector />
            </div>
            <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
          </S.LikeWrapper>
          <S.LikeWrapper>
            <div id="dislike" onClick={props.DislikeCounter}>
              <S.DislikeVector rotate={180} />
            </div>
            <S.DislikeCount>{props.data?.fetchBoard.dislikeCount}</S.DislikeCount>
          </S.LikeWrapper>
        </S.LikeCountContainer>
      </S.BoardWrapper>
      <S.BtnWrapper>
        <S.deleteBtn id={props.data?.fetchBoard._id} onClick={props.onClickDeleteBtn}>
          삭제하기
        </S.deleteBtn>
        {props.isModal && (
          <Modal open={props.isModal} onOk={props.ModalOnOk} onCancel={props.toggleModal}>
            게시물을 삭제하였습니다.
          </Modal>
        )}
        <S.editBtn onClick={props.onClickEditBtn}>수정하기</S.editBtn>
      </S.BtnWrapper>
      <S.divideLine />
    </>
  );
}
