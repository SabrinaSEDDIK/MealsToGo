import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Icons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: ${(props) => props.theme.space[2]};
`;
export const Rating = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const OtherIcons = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
