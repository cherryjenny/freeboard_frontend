import BoardDetailPage from "../../../src/components/units/board/detail/BoardDetail.container";
import CommentListComponent from "../../../src/components/units/comment/list/CommentList.container";
import CommentWriteComponent from "../../../src/components/units/comment/write/CommentWrite.container";

export default function postDetailPage() {
  return (
    <>
      <BoardDetailPage />
      <CommentWriteComponent />
      <CommentListComponent />
    </>
  );
}
