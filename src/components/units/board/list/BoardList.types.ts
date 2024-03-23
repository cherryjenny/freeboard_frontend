import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  startPage: number;
  GoWritePage: () => void;
  GoDetailPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickNextBtn: () => void;
  onClickPrevBtn: () => void;
  onClickPageBtn: (event: MouseEvent<HTMLDivElement>) => void;
}
