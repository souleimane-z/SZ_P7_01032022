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

    const regex = /\.(jpe?g|png|gif)$/i;
    const checkType = imageUrl.type.match('image/', regex);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    if (checkType !== null) {
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
    } else {
      alert('Veuillez renseigner un fichier de type image.');
    }
  };

  return (
    <div className="border-2 border-secondary radius20 p-5 flex responsiveSmall:flex-col responsiveSmall:p-3 responsiveSmall:justify-center">
      <form onSubmit={handlePost} method="post" className=" flex-1 flex-col">
        <input
          type="text"
          className=" myFont center radius20 p-3 leading-tight w-[50%] border-primary m-auto 
                      responsiveSmall:w-[100%] responsiveSmall:justify-center responsiveSmall:p-0"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          placeholder="Partager avec tout le monde.."
        ></input>
        <div className="flex justify-end mt-3 responsiveSmall:m-0 responsiveSmall:justify-center">
          <label className="center m-auto flex-col text-lg">
            choisir une image :
            <input
              required
              id="file"
              type="file"
              accept="image/*"
              name="imageUrl"
              className='responsiveSmall:pl-4 responsiveXS:w-[60%]'
              onChange={(e) => setImageUrl(e.target.files[0])}
            />
          </label>
        </div>
        <div className="flex center mt-5">
          <button className="radius20 p-5 center bg-primary text-grey myFont h-[3rem] hover:scale-110 responsiveSmall:m-auto">
            publier!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Publish;
