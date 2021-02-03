import React from 'react';

const ImageCard = ({myImage}) => {
    console.log(myImage);
    return (
        <div className="col-md-4 col-sm-6 text-center">

           
         { 
            myImage.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${myImage.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://secret-plateau-98168.herokuapp.com/${myImage.img}`} alt=""/>
        }
            <h4>{myImage.name}</h4>
           
        
        </div>  
    );
};

export default ImageCard;