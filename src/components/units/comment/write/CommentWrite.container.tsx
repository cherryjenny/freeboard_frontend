import { ICommentWriteComponent } from "./CommentWrite.types";
import CommentWriteUI from "./CommentWrite.presenter";
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export default function CommentWriteComponent(props: ICommentWriteComponent) {
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const router = useRouter();
  const [contents, setContents] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(0);

  const onChangeCommentInput = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onChangeWriterInput = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSubmitComment = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            contents,
            writer,
            password,
            rating,
          },
          boardId: String(router.query._Id),
        },
        refetchQueries: [{ query: FETCH_BOARD_COMMENTS, variables: { boardId: router.query._Id } }],
      });
      setContents("");
      setPassword("");
      setWriter("");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickEditBtn = async () => {
    if (!props.el?._id) return;
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
            rating,
          },
          password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [{ query: FETCH_BOARD_COMMENTS, variables: { boardId: router.query._Id } }],
      });
      props.setIsEdit(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickDeleteBtn = async () => {
    if (!props.el?._id) return;
    try {
      props.setIsDelete((prev) => !prev);
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          { query: FETCH_BOARD_COMMENTS, variables: { boardId: String(router.query._Id) } },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <CommentWriteUI
        onClickSubmitComment={onClickSubmitComment}
        onChangeCommentInput={onChangeCommentInput}
        onChangeWriterInput={onChangeWriterInput}
        onChangePasswordInput={onChangePasswordInput}
        onToggleModal={props.onToggleModal}
        toggleModal={props.toggleModal}
        setRating={setRating}
        isEdit={props.isEdit}
        onClickEditBtn={onClickEditBtn}
        isDelete={props.isDelete}
        onClickDeleteBtn={onClickDeleteBtn}
      />
    </>
  );
}
