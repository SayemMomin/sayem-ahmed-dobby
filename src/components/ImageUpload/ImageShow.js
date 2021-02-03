import React from 'react';
import ImageCard from './ImageCard';
import loader from '../img/loader.gif';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const ImageShow = () => {
    const [imageCard, setImageCard] = useState([]);
    const [userLoggin] = useContext(UserContext)

    useEffect(() => {
        fetch('https://secret-plateau-98168.herokuapp.com/myImages?email=' + userLoggin.email, 
        )
        .then(res => res.json())
        .then(data => {
            setImageCard(data)
            console.log(data);
        })
    }, [])
    return (
        <div className="row">
            { imageCard.length > 0 ?
                imageCard.map(list => <ImageCard myImage={list} key={list._id}></ImageCard>
            ): <img style={{width: '50%', margin:"auto"}} src={loader} alt=""/>  
            }
        </div>
    );
};

export default ImageShow;