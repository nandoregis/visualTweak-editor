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


export default () => {
    const [width, setWidth ] = useState('');
    const [height, setHeight] = useState('');

    useEffect( () => {
        setWidth('100');
        setHeight('500');
    }, []);
    
    const handleInputWidth = (e) => {
        setWidth(e.target.value);
    }

    const handleInputHeight = (e) => {
        setHeight(e.target.value);
    }

    const handleKeyDown = (e) => {
        let key = e.key;

        if( key === 'Enter') {
            // aparti daqui faz topa operação de alteração da img
            console.log( typeof width);
            console.log( typeof height);
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
                                    value={width}
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
                        <Enter/>
                    </Wraper>
                </Wraper>
                <Wraper>

                </Wraper>
            </Sidebar>
        </>
    );    

}