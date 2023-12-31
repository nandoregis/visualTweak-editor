import { useEffect, useState } from "react";
import { styled } from "styled-components";
import InputFile from "./components/inputFile";
import Canvas from './components/canvas';
import ResizeBoll from "./components/resizeBoll";

const Contents = styled.div`
    width: calc(100% - 250px);
    overflow: auto;
    background-color: ${ ({theme}) => theme.colors.background };
`;

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Group = styled.div`
    position: relative;
`;

export default ({onChildStateChange, widthImg, heightImg}) => {

    const [image, setImage] = useState('');
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect( () => {
        setWidth(widthImg);
        setHeight(heightImg);

    }, [widthImg, heightImg]);

    const handleFile = (e) => {
        const file = e.target.files[0];
        const fReader = new FileReader();

        fReader.readAsDataURL(file);
        fReader.onload = function(event) {
            const img = new Image();
            let imgUrl = event.target.result;
            
            img.src = imgUrl;
    
            img.onload = () => {
                setWidth(img.width);
                setHeight(img.height);
                onChildStateChange(img.width, img.height);
            }

            setImage(imgUrl);
        }
    }

    return(
        <>
            <Contents>
                { 
                    image ? 
                    <>  
                        <Center>
                            <Group>
                                <ResizeBoll width={width} height={height} getChildState={onChildStateChange}/>
                                <Canvas imgUrl={image} widthImg={width} heightImg={height}/>
                            </Group>
                        </Center>
                    </>
                    :
                    <InputFile getFile={handleFile}/>
                }
            </Contents>
        </>
    );
}