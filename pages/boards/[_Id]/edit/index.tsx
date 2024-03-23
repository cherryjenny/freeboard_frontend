import { useQuery, gql } from "@apollo/client";
import PostBoardPage from "../../../../src/components/units/board/write/PostBoard.container";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      writer
    }
  }
`;

export default function postEditPage() {
  const router = useRouter();

  // if(typeof router.query._Id !== "string"){
  //   router.push("/")
  //   return<></>
  // }

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: String(router.query._Id) },
  });

  return <PostBoardPage isEdit={true} data={data} />;
}
