import { ChangeEvent, Dispatch, SetStateAction} from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentWriteUI {
  onChangeCommentInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriterInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmitComment: () => void;
  onClickEditBtn: () => void;
  onClickDeleteBtn: () => void;
  isEdit: boolean;
  isDelete: boolean;
  setRating: Dispatch<SetStateAction<number>>;
  toggleModal: boolean;
  onToggleModal: () => void;
}

export interface ICommentWriteComponent {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isDelete: boolean;
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  el: IBoardComment;
  toggleModal: boolean;
  onToggleModal: () => void;
}
