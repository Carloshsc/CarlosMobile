import styled from 'styled-components/native';
import { css } from 'styled-components';
import Colors from '../../constants/colors';
import Pressable from '../pressable';

const ButtonOuterContainer = styled.View`
  display: flex;
  margin: 4px;
`;

const ButtonInnerContainer = styled(Pressable).attrs(() => ({
  pressStyle: {
    opacity: 0.8,
  },
}))`
  ${() => css`
    justify-content: center;
    display: flex;
    border-radius: 40px;
    min-height: 40px;
    background-color: ${Colors.blue}
  `}
`;

const ButtonText = styled.Text`
  color: ${Colors.white};
  text-align: center;
  font-size: 18px;
`;

export default {
  ButtonOuterContainer,
  ButtonInnerContainer,
  ButtonText,
};
