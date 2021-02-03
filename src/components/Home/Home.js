import React from 'react';
import ImageUpload from '../ImageUpload/ImageUpload';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <h1>Would you like to upload your Image?</h1>
           
           <Button href="/imageUpload">Sign Up/ Loging for Upload Image</Button>
        </div>
    );
};

export default Home;