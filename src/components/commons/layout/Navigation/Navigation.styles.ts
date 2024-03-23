import styled from "@emotion/styled";

export const wrapper = styled.div`
  padding: 18px 500px;
  width: 1920px;
  height: 64px;
  background-color: #ffd600;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const option = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #ab9000;

  :hover {
    cursor: pointer;
    color: #514400;
    font-weight: 700px;
  }
`;

export const divider = styled.div`
  height: 20px;
  border: 0.5px solid #ffffff;
  margin: 0px 40px;
`;
