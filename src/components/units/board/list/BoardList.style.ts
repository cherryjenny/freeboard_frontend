import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const ListWrapper = styled.div`
  width: 1200px;
  border: 1px solid red;
`;

export const categoriesWrapper = styled.div`
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;

export const categories = styled.div`
  font-weight: 500;
  font-size: 18px;
  width: 20%;
  display: flex;
  justify-content: center;
`;

export const boardRow = styled.div`
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;

  :hover {
    background-color: #f2f2f2;
  }
`;

export const BoardColumn = styled.div`
  font-weight: 400;
  font-size: 16px;
  width: 20%;
  display: flex;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;

export const ListBottom = styled.div`
  padding-top: 54px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextBtn = styled.div`
  font-size: 16px;
  margin-left: 20px;

  :hover {
    cursor: pointer;
  }
`;

export const PageBtn = styled.div`
  font-size: 16px;
  margin-left: 5px;

  :hover {
    cursor: pointer;
  }
`;

export const PrevBtn = styled.div`
  font-size: 16px;
  margin-right: 20px;

  :hover {
    cursor: pointer;
  }
`;

export const NewButton = styled.button`
  width: 171px;
  height: 52px;
  font-weight: 500;
  font-size: 16px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  margin-top: 40px;

  :hover {
    cursor: pointer;
    background-color: #ffd600;
  }
`;
