import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.query";
import BoardListUI from "./BoardList.presenter";
import { IQuery } from "../../../../commons/types/generated/types";
import React, { MouseEvent, useState } from "react";

export default function BoardListContainer() {
  const router = useRouter();

  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);
  const { data: dataBoardCount } = useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);

  const lastPage = dataBoardCount ? Math.ceil(dataBoardCount?.fetchBoardsCount / 10) : 0;
  const GoWritePage = () => {
    void router.push("/boards/new");
  };

  const GoDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) void router.push(`/boards/${event.target.id}`);
  };

  const onClickPrevBtn = () => {
    if (startPage === 1) return;
    setStartPage((prev: number) => prev - 10);
    void refetch({ page: Number(startPage - 10) });
  };

  const onClickNextBtn = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev: number) => prev + 10);
    }
    void refetch({ page: Number(startPage + 10) });
  };
  const onClickPageBtn = (event: MouseEvent<HTMLDivElement>) => {};

  return (
    <BoardListUI
      data={data}
      startPage={startPage}
      GoWritePage={GoWritePage}
      GoDetailPage={GoDetailPage}
      onClickPrevBtn={onClickPrevBtn}
      onClickNextBtn={onClickNextBtn}
      onClickPageBtn={onClickPageBtn}
    />
  );
}
