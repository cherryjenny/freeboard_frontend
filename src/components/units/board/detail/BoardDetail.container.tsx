import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import BoardDetailPageUI from "./BoardDetail.presenter";
import { DELETE_BOARD, DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from "./BoardDetail.queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import React, { MouseEvent, useState } from "react";

export default function BoardDetailPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: String(router.query._Id) },
  });
  const [isModal, setIsModal] = useState(false);
  const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(
    DELETE_BOARD
  );
  const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">>(LIKE_BOARD);
  const [dislikeBoard] = useMutation<Pick<IMutation, "dislikeBoard">>(DISLIKE_BOARD);

  const LikeCounter = async (event: MouseEvent<HTMLDivElement>) => {
    try {
      await likeBoard({
        variables: { boardId: String(router.query._Id) },
        refetchQueries: [{ query: FETCH_BOARD, variables: { boardId: String(router.query._Id) } }],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const DislikeCounter = async (event: MouseEvent<HTMLDivElement>) => {
    try {
      await dislikeBoard({
        variables: { boardId: String(router.query._Id) },
        refetchQueries: [{ query: FETCH_BOARD, variables: { boardId: String(router.query._Id) } }],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const onClickDeleteBtn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    toggleModal();
    if (event.target instanceof Element)
      try {
        await deleteBoard({
          variables: { boardId: String(event.target.id) },
        });
        // router.push(`http://localhost:3000/boards`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
  };

  const ModalOnOk = async () => {
    toggleModal();
    await router.push(`http://localhost:3000/boards`);
  };

  const onClickEditBtn = async () => {
    // console.log(router.query._Id);
    await router.push(`http://localhost:3000/boards/${String(router.query._Id)}/edit`);
  };

  return (
    <BoardDetailPageUI
      data={data}
      onClickDeleteBtn={onClickDeleteBtn}
      onClickEditBtn={onClickEditBtn}
      isModal={isModal}
      toggleModal={toggleModal}
      ModalOnOk={ModalOnOk}
      LikeCounter={LikeCounter}
      DislikeCounter={DislikeCounter}
    />
  );
}
