import * as S from "./CommentList.styles";
import { getDate } from "../../../../common/utils/utils";
import { ICommentListItemUI } from "./CommentList.types";
import { useState } from "react";
import CommentWriteComponent from "../write/CommentWrite.container";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function CommentListItemUI(props: ICommentListItemUI) {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const onToggleModal = () => {
    setToggleModal((prev) => !prev);
  };

  const OnClickEditIcon = () => {
    // console.log(event.target.id);
    setIsEdit(!isEdit);
    onToggleModal();
  };

  const onClickDeleteIcon = (event: React.MouseEvent<HTMLImageElement>) => {
    setIsDelete((prev) => !prev);
  };

  return (
    <>
      {!isEdit && (
        <S.commentPiece>
          <div style={{ padding: "10px" }}>
            <Avatar size={46.67} icon={<UserOutlined />} />
          </div>
          <S.commentContainer>
            <S.commentTopper>
              <S.commentLeft>
                <S.user>{props.el?.writer}</S.user>
                <S.Star allowHalf disabled={true} value={props.el?.rating} />
              </S.commentLeft>
              <S.commentRight>
                <S.editBtn onClick={OnClickEditIcon} />
                <S.deleteBtn onClick={onClickDeleteIcon} />
              </S.commentRight>
            </S.commentTopper>
            <S.contents id={props.el?.contents}>{props.el?.contents}</S.contents>
            <S.date>{getDate(props.el?.createdAt)}</S.date>
          </S.commentContainer>
        </S.commentPiece>
      )}
      {(isEdit || isDelete) && (
        <CommentWriteComponent
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          toggleModal={toggleModal}
          onToggleModal={onToggleModal}
          el={props.el}
        />
      )}
    </>
  );
}
