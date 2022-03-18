import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from '../images/icon.png';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import url from '../utils/api';

const ProfileCmpnt = () => {
  const token = localStorage.getItem('Token');
  const [userData, setUserData] = useState('');
  const id = JSON.parse(localStorage.getItem('User')).idUser;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setUserData({
        username: response.data.username,
        password: response.data.password,
        profilePicture: response.data.profilePicture,
      });
    };
    fetchData();
  }, [id, token]);

  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/Home');
  };

  const [username, setUsername] = useState('');
  const handleModify = () => {
    axios
      .put(
        `${url}user/${id}`,
        { username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // update Image

  const [profilePicture, setProfilePicture] = useState(null);
  const handleModifyImage = () => {
    const formData = new FormData();
    formData.append('imageUrl', profilePicture);
    formData.append('idUser', id);

    const regex = /\.(jpe?g|png|gif)$/i;
    const checkType = profilePicture.type.match('image/', regex);

    if (checkType !== null) {
      axios
        .put(`${url}user`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert('Veuillez renseigner un fichier de type image.');
    }
  };

  const handleDelete = () => {
    axios
      .delete(`${url}user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        localStorage.clear();
        navigate('/Home');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="bg-grey box m-auto p-8 pb-0 radius20 responsiveSmall:p-1">
      <div className="flex">
        <Link to="/">
          <FontAwesomeIcon
            className=" cursor-pointer text-3xl hover:scale-110 mb-5"
            icon={faArrowLeft}
          ></FontAwesomeIcon>
        </Link>
      </div>

      <div className="center flex-col">
        <p className="myFont  ">Modifier ma photo</p>

        {userData.profilePicture ? (
          <img
            className="thumbnail w-[200px] h-[200px] mb-5 "
            alt="post"
            src={userData.profilePicture}
          ></img>
        ) : (
          <img
            className="thumbnail w-[200px] h-[200px] mb-5"
            alt="post"
            src={icon}
          ></img>
        )}
        <form onSubmit={handleModifyImage} className="flex flex-col center">
          <label className="center flex-col">
            Ma photo :
            <input
              type="file"
              accept=".png, .jpg, .jpeg, .gif"
              name="imageUrl"
              onChange={(e) => setProfilePicture(e.target.files[0])}
            ></input>
          </label>
          <button className="button myFont text-xl text-grey bg-primary hover:text-black">
            Enregistrer
          </button>
        </form>
        <div className="border text-secondary w-full"></div>
        <p className="myFont  ">Modifier mon pseudo</p>
        <form onSubmit={handleModify} className="center flex-col w-[294px]">
          <input
            maxLength={15}
            className="input"
            placeholder="moins de 15 caractères"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
          <button className="button myFont text-xl text-grey bg-primary hover:text-black">
            Enregistrer
          </button>
        </form>
        <div className="border text-secondary w-full"></div>
        <div className="w-[294px] center flex-col">
          <button
            className="button myFont text-xl text-grey bg-primary hover:text-black hover:scale-105 "
            onClick={handleLogout}
          >
            Déconnexion
          </button>
          <button
            onClick={handleDelete}
            className="button myFont text-xl text-grey bg-primary mt-0 hover:text-black hover:scale-105"
          >
            Supprimer le compte
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileCmpnt;
