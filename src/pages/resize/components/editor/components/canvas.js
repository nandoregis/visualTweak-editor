import { useEffect, useState } from "react";
import { styled } from "styled-components";


const Img = styled.img`
    /* transform: scale(1); */
`;

export default ( {imgUrl, widthImg, heightImg}) => {
    const [imageUrl, setImageUrl] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    useEffect( () => {
        setWidth(widthImg);
        setHeight(heightImg);
    }, [widthImg,heightImg]);

    const handleResize = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        
        const img = new Image();
        img.src = imgUrl;
        
        ctx.drawImage(img, 0, 0, width, height);
    
        img.onload = () => {
    
          const resizedImageUrl = canvas.toDataURL(); // Obter a URL da imagem redimensionada
    
          // Atualizar a visualização da imagem redimensionada
          setImageUrl(resizedImageUrl);
        };
      };

      handleResize();

    return(
        <>  
            {
               width && height && <Img src={imageUrl} alt="Carregando..." />
            }
        </>
    );
}