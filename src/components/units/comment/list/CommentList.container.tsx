import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommentListUI from "./CommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";
import { IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";

export default function CommentListComponent() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(
    FETCH_BOARD_COMMENTS,
    {
      variables: { boardId: String(router.query._Id) },
    }
  );

  return <CommentListUI data={data} />;
}
