import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  height: 1602px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 80px 102px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Profile__container = styled.div`
  width: 100%;
  height: 81px;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Profile__container__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 47px;
  height: 47px;
  object-fit: cover;
  padding-right: 10px;
`;
export const Writer__profile = styled.div`
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
export const Option = styled.div``;
export const Link = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
`;
export const Position = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
`;
export const Contents__container = styled.div`
  width: 100%;
  height: calc(100% - (81px + 51px + 160px));
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

export const LikeCount_container = styled.div`
  height: 51px;
  display: flex;
  justify-content: center;
`;

export const Like__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 40px;
`;
export const Like_vector = styled.img`
  width: 20px;
  height: 18px;
  object-fit: cover;
`;
export const Dislike_vector = styled.img`
  width: 20px;
  height: 18px;
  object-fit: cover;
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
