import { useState } from 'react';
import { styled } from 'styled-components';
import  { useNavigate } from 'react-router-dom';
import rightArrow from '../../../../assets/icon-right.svg';

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: inherit;
`;

const Title = styled.h2`
    font-size: 30px;
    font-weight: normal;
    color: white;
`;

const Wraper = styled.div`
    text-align: center;
`

const Button = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%; 
    background-color: #903ACA;
    transition: 0.7s all;

    &:hover {
        cursor: pointer;
        transition: 0.7s all;
        background-color: #682396;
        
    }
`

export default ({ to }) => {
    const navigate = useNavigate();

    // const [path, usePath] = useState(to);

    const handleClick = () => {
        navigate(to);
    }

    return(
        <Wraper>
            <Title>Redimesione sua imagem usando o VisualTweak</Title>
            <Center>
                <Button onClick={handleClick}>
                    <Center>
                        <img src={rightArrow}/>
                    </Center>
                </Button>
            </Center>
        </Wraper>
    );
}