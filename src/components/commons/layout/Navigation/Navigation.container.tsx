import { useRouter } from "next/router";
import NavigationUI from "./Navigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    // console.log(event.target.id);
    void router.push(event.target.id);
  };

  //   const onClickMenuBoard = () => {
  //     void router.push("/board");
  //   };
  //   const onClickMenuMarket = () => {
  //     void router.push("/market");
  //   };
  //   const onClickMenuMyPage = () => {
  //     void router.push("/mypage");
  //   };

  return (
    <NavigationUI
      onClickMenu={onClickMenu}
      //   onClickMarket={onClickMarket}
    />
  );
}
