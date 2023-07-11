import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Input from "./components/Input";

const Sidebar = styled.div`
    width: 250px;
    height: 100%;
    background-color: ${ ({theme}) => theme.colors.menu};
    padding: 20px;
`

const Wraper = styled.div``;
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;

const Title = styled.h3`
    color: ${ ({theme}) => theme.colors.text};
    margin-bottom: 10px;
    font-size: 17px;
`
const Text = styled.p`
    color: ${ ({theme}) => theme.colors.text};
    font-size: 15px;
`

export default ({ widthImg, heightImg, onChildStateChange}) => {
    const [width, setWidth ] = useState('');
    const [height, setHeight] = useState('');

    useEffect( () => {
        setWidth(widthImg);
        setHeight(heightImg);
    }, [ widthImg, heightImg]);
    
    const handleInputWidth = (e) => {
        let pixelWidth = e.target.value;
        setWidth(pixelWidth);
    }

    const handleInputHeight = (e) => {
        let pixelHeight = e.target.value
        setHeight(pixelHeight);
        
    }
    
    const handleKeyDown = (e) => {
        let key = e.key;
        
        if( key === 'Enter') {
            // aparti daqui faz topa operação de alteração da img
            onChildStateChange(width, height);
            
        }
    }

    return(
        <>
            <Sidebar>
                <Wraper>
                    <Title>Imagem atual</Title>
                    <Wraper>
                        <Box>
                            <Box>
                                <Text>width:</Text>
                                <Input
                                    enter={handleKeyDown} 
                                    onChange={handleInputWidth}
                                    value={ width}
                                />
                            </Box>
                            
                            <Text>pixel</Text>
                        </Box>
                        <Box>
                            <Box>
                                <Text>height: </Text>
                                <Input
                                    enter={handleKeyDown}  
                                    onChange={handleInputHeight}
                                    value={height}
                                />
                            </Box>
                            <Text>pixel</Text>
                        </Box>
                    
                    </Wraper>
                </Wraper>
                <Wraper>

                </Wraper>
            </Sidebar>
        </>
    );    

}