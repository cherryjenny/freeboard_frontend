import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "myFont";
  }
  @font-face {
    font-family: "myFont";
    font-size: 15px;
    src: url("/fonts/NotoSansKR-regular.otf");
  }
`;
