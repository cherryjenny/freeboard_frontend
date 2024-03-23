import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const commentPiece = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;
export const Avatar = styled.img`
  width: 47px;
  height: 47px;
  object-fit: cover;
  padding-right: 10px;
`;

export const commentContainer = styled.div`
  width: 100%;
`;

export const commentTopper = styled.div`
  width: 100%;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
`;

export const commentLeft = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const commentRight = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const editBtn = styled(EditOutlined)`
  font-size: 16px;
  object-fit: cover;
  padding-right: 16px;
  color: #bdbdbd;

  :hover {
    cursor: pointer;
  }
`;

export const deleteBtn = styled(CloseOutlined)`
  font-size: 16px;
  object-fit: cover;
  color: #bdbdbd;

  :hover {
    cursor: pointer;
  }
`;

export const checkBtn = styled.img``;

export const user = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  margin-right: 16px;
`;

export const Star = styled(Rate)`
  margin-right: 4px;
`;

export const contents = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
  height: 44px;
`;

export const date = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #bdbdbd;
  margin-bottom: 20px;
`;
