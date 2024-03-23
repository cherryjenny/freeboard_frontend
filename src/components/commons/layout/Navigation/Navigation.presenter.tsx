import * as S from "./Navigation.styles";
import { ILayoutNavigationUI } from "./Navigation.types";

const qqq = [
  { id: "/boards", name: "자유게시판" },
  { id: "/market", name: "상품" },
  { id: "/mypage", name: "마이페이지" },
];

export default function NavigationUI(props: ILayoutNavigationUI) {
  return (
    <>
      <S.wrapper>
        {qqq.map((el) => (
          <S.option key={el.id} id={el.id} onClick={props.onClickMenu}>
            {el.name}
          </S.option>
        ))}
        {/* <S.option onClick={props.onClickMenu}>자유게시판</S.option>
        <S.divider></S.divider>
        <S.option onClick={props.onClickMenu}>중고마켓</S.option>
        <S.divider></S.divider>
        <S.option onClick={props.onClickMenu}>마이페이지</S.option> */}
      </S.wrapper>
    </>
  );
}
