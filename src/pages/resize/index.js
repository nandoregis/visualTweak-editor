import { styled } from "styled-components";

import Header from "../../components/header";
import Menu from './components/menu';
import Editor from './components/editor';

const FlexItems = styled.div`
    display: flex;
    width: 100%;
    height: calc( 100vh - 70px);
    justify-content: space-between;
    border: 2px solid black;
`


export default () => {

    return(
        <>
            <Header/>
            <FlexItems>
                <Editor/>
                <Menu/>
            </FlexItems>
        </>
    );
}