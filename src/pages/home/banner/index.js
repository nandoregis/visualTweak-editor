import { styled } from 'styled-components';
import bannerImg from '../../../assets/banner.jpg';
import  { useNavigate } from 'react-router-dom';
import Call from './components/Call';

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: inherit;
`;

const Banner = styled.div`
    background-image: url(${bannerImg});
    background-size: 100%;
    background-position: center;
    width: auto;
    height: 600px;
    position: relative;
   
`;

export default () => {

    return(
        <>
        <Banner>
            <Center>
                <Call to={'/resize'}/>
            </Center>
        </Banner>
        </>
    );

}