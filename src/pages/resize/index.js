import { useState } from "react";
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

    const [ width, setWidth ] = useState('');
    const [ height, setHeight ] = useState('');

    const handleChildStates = ( widthImg, heightImg) => {
        setWidth(widthImg);
        setHeight(heightImg);
    }

    return(
        <>
            <Header/>
            <FlexItems>
                <Editor onChildStateChange={handleChildStates} widthImg={width} heightImg={height} />
                <Menu onChildStateChange={handleChildStates} widthImg={width} heightImg={height} />
            </FlexItems>
        </>
    );
}