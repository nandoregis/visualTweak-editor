import { styled } from "styled-components";
import  { useNavigate } from 'react-router-dom';

import IconLeft from '../../assets/icon_left.svg';
import VisualTweak from '../../assets/visualTweak.svg';
import ButtonCustomColor from '../button';
import IconCustom from '../../assets/icons_custom.svg';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding: 0 20px;
    background-color: ${ ({theme}) => theme.colors.header};
`;

const ButtonBack = styled.img`
    
    transition: 0.5s all;
    &:hover {
        cursor: pointer;
        transition: 0.5s all;
        transform: scale(1.05);
    }
`;

const Logo = styled.img`
    &:hover {
        cursor: pointer;
    }
`;

export default () => {

    const navigate = useNavigate();
    
    const back = () => {
        navigate('/');
    }

    return(
        <>
            <Header>
                <ButtonBack src={IconLeft} onClick={back}/>
                <Logo src={VisualTweak}/>
                <ButtonCustomColor icon={IconCustom} text="Customizar cores"/>
            </Header>
        </>
    );
}