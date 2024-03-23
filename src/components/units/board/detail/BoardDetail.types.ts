import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardDetailPageUI {
  data?: Pick<IQuery, "fetchBoard">;
  onClickDeleteBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEditBtn: () => void;
  isModal: boolean;
  toggleModal: () => void;
  ModalOnOk: () => void;
  LikeCounter: (event: MouseEvent<HTMLDivElement>) => void;
  DislikeCounter: (event: MouseEvent<HTMLDivElement>) => void;
}
