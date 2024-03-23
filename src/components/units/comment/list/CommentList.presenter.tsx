import { IBoardComment } from "../../../../commons/types/generated/types";
import * as S from "./CommentList.styles";
import { ICommentListUI } from "./CommentList.types";
import CommentListItemUI from "./CommentListItem.presenter";

export default function CommentListUI(props: ICommentListUI) {
  return (
    <S.Wrapper>
      {props.data?.fetchBoardComments.map((el: IBoardComment) => (
        <CommentListItemUI el={el} key={el?._id} />
      ))}
    </S.Wrapper>
  );
}
