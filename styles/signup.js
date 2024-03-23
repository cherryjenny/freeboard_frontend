import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 450px;
  height: 700px;
  border: none;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 150px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  padding-bottom: 70px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 35px;
`;

export const Label = styled.div`
  padding-bottom: 16px;
`;

export const InputBox = styled.input`
  height: 50px;
  border: 1px solid #e4e4e4;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
`;

export const JoinBtn = styled.button`
  width: 100%;
  height: 50px;
  text-align: center;
  border: none;
  background-color: blueviolet;
  color: white;
  font-weight: 600;
`;
