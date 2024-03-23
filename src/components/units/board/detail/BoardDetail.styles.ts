import styled from "@emotion/styled";
import { EnvironmentOutlined, LinkOutlined, LikeOutlined } from "@ant-design/icons";

export const BoardWrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  height: 1562px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 80px 102px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProfileContainer = styled.div`
  width: 100%;
  height: 81px;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WriterProfile = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Writer = styled.div`
  font-weight: 500;
  font-size: 24px;
`;
export const Date = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #828282;
`;
export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75px;
`;
export const Link = styled(LinkOutlined)`
  color: #ffd600;
  font-size: 32px;
`;
export const Position = styled(EnvironmentOutlined)`
  color: #ffd600;
  font-size: 32px;
`;
export const ContentsContainer = styled.div`
  width: 100%;
  height: calc(100% - (81px + 51px + 160px + 50px));
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  padding-bottom: 40px;
`;

export const Picture = styled.img`
  width: 100%;
  height: 480px;
  border: 1px solid #ededed;
  object-fit: cover;
`;

export const Contents = styled.div`
  width: 100%;
  height: 176px;
  padding: 40px 0px;
  font-weight: 400;
  font-size: 16px;
`;

export const LikeCountContainer = styled.div`
  width: 1200px;
  height: 51px;
  display: flex;
  justify-content: center;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 40px;
`;
export const LikeVector = styled(LikeOutlined)`
  font-size: 30px;
  cursor: pointer;
  color: #ffd600;
`;
export const DislikeVector = styled(LikeOutlined)`
  font-size: 30px;
  cursor: pointer;
`;
export const LikeCount = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #ffd600;
`;
export const DislikeCount = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #828282;
`;

export const BtnWrapper = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 80px;
`;
export const deleteBtn = styled.button`
  width: 179px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  margin: 0px 12px;
`;

export const editBtn = styled.button`
  width: 179px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  margin: 0px 12px;
`;

export const divideLine = styled.hr`
  width: 1200px;
  border: 1px solid #bdbdbd;
  margin-bottom: 40px;
`;
