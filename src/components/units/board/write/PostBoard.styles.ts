import styled from "@emotion/styled";
import { IPostBoardStyles } from "./PostBoard.types";

export const Wrapper = styled.div`
  width: 1200px;
  height: 1847px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin: 100px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 102px 100px 102px;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 16px;
  margin-top: 40px;
`;

export const Writer = styled.input`
  width: 466px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const Password = styled.input`
  width: 466px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const searchAddress = styled.div`
  width: 996px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 400;
  padding: 15px;
`;

export const LongInput = styled.input`
  width: 996px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 400;
  padding: 15px;
`;

export const Contents = styled.textarea`
  font-family: Arial, Helvetica, sans-serif;
  padding: 16px;
  width: 996px;
  height: 480px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
`;

export const InputError = styled.div`
  height: 1rem;
  color: red;
  font-size: 14px;
  padding-top: 5px;
`;

export const ZipWrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PostNumber = styled.div`
  width: 77px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  text-align: center;
  padding: 14px 0px;
  color: #bdbdbd;
`;

export const PostNmSearch = styled.button`
  width: 124px;
  height: 52px;
  background: #000000;
  color: white;
  margin-left: 16px;
  text-align: center;
  cursor: pointer;
`;

export const PicWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
`;

export const Picture = styled.div`
  width: 78px;
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #bdbdbd;
  margin-right: 24px;
  cursor: pointer;
`;

export const Vector = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #4f4f4f;
  padding-top: 7px;
`;

export const PicContent = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #4f4f4f;
`;

export const RadioWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
`;

export const RadioBtn = styled.input`
  width: 50px;
`;

export const JoinWrapper = styled.div`
  height: 8%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const JoinBtn = styled.button`
  width: 179px;
  height: 52px;
  background: ${(props: IPostBoardStyles) => (props.activeBtn ? "#ffd600" : "default")};
  /* background: #ffd600; */
  color: #000000;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
