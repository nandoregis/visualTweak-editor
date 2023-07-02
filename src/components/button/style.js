import { styled } from 'styled-components';
import Btn from './index';

export const Button = styled(Btn)`
    width: 200px;
    height: 40px;
    background-color: blue;
    color: ${ ({theme}) => theme.colors.text};
`;