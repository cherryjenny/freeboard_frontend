import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { getDate } from "../../../../common/utils/utils";
import { IBoard } from "../../../../commons/types/generated/types";
import * as S from "./BoardList.style";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.ListWrapper>
          <S.categoriesWrapper>
            <S.categories>번호</S.categories>
            <S.categories>제목</S.categories>
            <S.categories>작성자</S.categories>
            <S.categories>날짜</S.categories>
          </S.categoriesWrapper>
          {props.data?.fetchBoards.map((el: IBoard, index: number) => (
            <S.boardRow key={el?._id}>
              <S.BoardColumn>{index + 1}</S.BoardColumn>
              <S.BoardColumn onClick={props.GoDetailPage} id={el?._id}>
                {el?.title}
              </S.BoardColumn>
              <S.BoardColumn>{el?.writer}</S.BoardColumn>
              <S.BoardColumn>{getDate(el?.createdAt)}</S.BoardColumn>
            </S.boardRow>
          ))}
          <S.ListBottom>
            <S.PrevBtn onClick={props.onClickPrevBtn}>
              <LeftOutlined />
            </S.PrevBtn>
            {new Array(10).fill(1).map((_, index) => (
              <S.PageBtn
                key={props.startPage + index}
                id={"props.startPage + index"}
                onClick={props.onClickPageBtn}>
                {index + props.startPage}
              </S.PageBtn>
            ))}
            <S.NextBtn onClick={props.onClickNextBtn}>
              <RightOutlined />
            </S.NextBtn>
          </S.ListBottom>
        </S.ListWrapper>
        <S.NewButton onClick={props.GoWritePage}>게시물 등록하기</S.NewButton>
      </S.Wrapper>
    </>
  );
}
