import { View, Text, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  isDoneStyles: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  border-width: 1px;
  border-color: #808080;
  padding: 16px;
  border-radius: 6px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  ${({ isDoneStyles }) =>
    isDoneStyles
      ? css`
          background-color: aqua;
        `
      : css`
          background-color: #fff;
        `}
`;

export const TextProduct = styled(Text)<Props>`
  font-size: 16px;
  ${({ isDoneStyles }) =>
    isDoneStyles
      ? css`
          text-decoration: line-through;
        `
      : css`
          text-decoration: none;
        `}
`;
