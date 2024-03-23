import { IBoardComment, IQuery } from "../../../../commons/types/generated/types";

export interface ICommentListUI {
  // data: typeof useQuery<Pick<IQuery, "fetchBoardComments">,IQueryFetchBoardCommentsArgs>;
  data?: Pick<IQuery, "fetchBoardComments">;
  OnClickDeleteBtn?: (event: React.MouseEvent<HTMLImageElement>) => void;
}

export interface ICommentListItemUI {
  el: IBoardComment;
}
