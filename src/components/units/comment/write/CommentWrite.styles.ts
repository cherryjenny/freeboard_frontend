import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Topper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: bottom;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 42px;
`;

export const commentImage = styled.img`
  margin-right: 18px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

export const Writer = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: 180px;
  height: 52px;
  color: #828282;
  border: 1px solid #bdbdbd;
  padding: 14px 20px;
  font-weight: 500;
  font-size: 16px;
  margin-right: 24px;
  :focus {
    outline: none;
    color: black;
  }
`;

export const password = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: 180px;
  height: 52px;
  color: #828282;
  border: 1px solid #bdbdbd;
  padding: 14px 20px;
  font-weight: 500;
  font-size: 16px;
  :focus {
    outline: none;
    color: black;
  }
`;

export const Star = styled(Rate)`
  margin-right: 4px;
  margin-bottom: 22px;
`;

export const commentWrapper = styled.div`
  width: calc(100% - 2px);
  /* padding: 0 0 0 20px; */
  height: 161px;
  border: 1px solid #bdbdbd;
  background: #ffffff;
  margin-bottom: 40px;
`;

export const contents = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: calc(1200px - 2px);
  height: calc(100% - 55px);
  border: none;
  color: #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  padding: 20px;

  :focus {
    outline: none;
    color: black;
  }
`;

export const bottomWrapper = styled.div`
  border-top: 1px solid #f2f2f2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WordCount = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
  padding-left: 15px;
`;

export const submitBtn = styled.button`
  width: 91px;
  height: 54px;
  border: 0px;
  background-color: #000000;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
`;

export const EditPiece = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  /* border-bottom: 1px solid #bdbdbd; */
`;

export const EditContainer = styled.div`
  height: 117px;
  border: 1px solid #bdbdbd;
  margin-top: 10px;
`;

export const EditContents = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: 63px;
  outline: none;
  border: 0;
  color: #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  padding: 20px;

  :focus {
    color: #000000;
  }
`;

export const EditBottom = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f2f2f2;
`;

export const countWord = styled.div`
  color: #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  padding-left: 20px;
`;

export const confirmEditBtn = styled.button`
  width: 91px;
  height: 100%;
  background: #ffd600;
  border: none;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
`;
