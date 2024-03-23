import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation/Navigation.container";

const HIDDEN_HEADERS = [
  "/12-02-library-star",
  "/12-04-modal-custom",
  // ...
  // ...
  // ...
];

interface IProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  /* height: 500px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout(props: IProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      <Wrapper>
        {!isHiddenHeader && <Header />}
        <Banner />
        <Navigation />
        <Body>
          <div>{props.children}</div>
        </Body>
        <Footer />
      </Wrapper>
    </>
  );
}
