import { styled } from 'styled-components';
import Banner from './banner';

const Header = styled.header`
    background-color: aliceblue;
`;


export default () => {
    return(
        <>
            <Header>
                <Banner/>
            </Header>
        </>
    );
}