import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';

const ImageUpload = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [ userLoggin, setUserLoggin] = useContext(UserContext)
    const handleBlur = (e) => {
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
  }
  let history = useHistory();
  const handleSubmit = (e) => {
    const formData = new FormData()
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('email', info.email);
    const data ={...formData, email: userLoggin.email}
    
      fetch('https://secret-plateau-98168.herokuapp.com/addimages', {
        method: 'POST',
        body: formData
  })
  if (formData) {
    history.push('/myImages')
}
}
    return (
        <div>
            <h1>Upload your Image</h1>
            <div className="">
            
            <form onSubmit={handleSubmit} className="border row border-primary m-5 p-5" action="">
            <div className="col-md-6">
                Name: <input type="text" className="mb-3" placeholder="name" onBlur={handleBlur} required name="name" id=""/>
            </div>
            <div className="col-md-6">
                Image: <input type="file" onChange={handleFileChange} required  name="file" id=""/>
            </div>
            <div className="col-md-6">
                email: <input type="email" onChange={handleBlur} required  name="email" id=""/> <br/>
                <small>Type your same login email</small>
            </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            </div>
        </div>
    );
};

export default ImageUpload;