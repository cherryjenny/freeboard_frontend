import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { Address } from "react-daum-postcode/lib/loadPostcode";

export interface IPostBoardPage {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IPostBoardPageUI {
  isEdit: boolean;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  activateBtn: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  onToggleModal: () => void;
  toggleModal: boolean;
  PostSearchComplete: (data: Address) => void;
  onChangeExtraAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  address?: string;
  zipcode?: string;
}

export interface IMyVariables {
  title?: string;
  contents?: string;
}

export interface IPostBoardStyles {
  activeBtn: boolean;
  activateBtn: boolean;
}
