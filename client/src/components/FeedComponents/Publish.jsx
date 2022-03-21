import axios from 'axios';
import { useState } from 'react';
import url from '../../utils/api';

const Publish = () => {
  const token = localStorage.getItem('Token');
  const id = JSON.parse(localStorage.getItem('User')).idUser;
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  const handlePost = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('content', content);
    formData.append('imageUrl', imageUrl);
    formData.append('idUser', id);

    //const regex = /\.(jpe?g|png|gif)$/i;
    //const checkType = imageUrl && imageUrl.type.match('image/', regex); 
    
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };
      axios
        .post(`${url}post`, formData, {
          config,
        })

        .then((response) => {
          window.location.reload(false);
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    
  };

  return (
    <div className="border-2 border-secondary radius20 p-5 flex responsiveSmall:flex-col responsiveSmall:p-3 responsiveSmall:justify-center">
      <form onSubmit={handlePost} method="post" className=" flex-1 flex-col">
        <label htmlFor="text" className='myFont underline decoration-secondary decoration-4 underline-offset-2 '> Publier:</label>

        <input
          id='text'
          type="text"
          className="  myFont center inputAdjust radius20 mt-5 p-3 leading-tight w-[70%] border-primary m-auto 
                      responsiveSmall:w-[100%] responsiveSmall:justify-center responsiveSmall:p-0"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          placeholder="Partager avec tout le monde.."
        ></input>
        
        <div className="flex flex-col justify-center mt-3 responsiveSmall:m-0 responsiveSmall:justify-center">
          <label htmlFor="file" className="myFont text-xl center responsive:text-lg flex-col leadingLarge">
            Une image à partager ? 

            <input
              id="file"
              type="file"
              accept="image/*"
              name="imageUrl"
              className='responsiveSmall:pl-4 mt-3
                         responsiveXS:pl-2 responsiveXS:w-[65%]
                         responsiveSMedium:w-[63%]'
              onChange={(e) => setImageUrl(e.target.files[0])}
            />

          </label>
        </div>
        <div className="flex center mt-5">
          <button className="myFont radius20 uppercase text-xl p-5 center bg-primary text-white myFont h-[3rem] hover:scale-110 responsiveSmall:m-auto">
            publier !
          </button>
        </div>
      </form>
    </div>
  );
};

export default Publish;
