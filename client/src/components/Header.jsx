import logo_text_white from '../images/logo_text_white.svg';
import icon from '../images/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import url from '../utils/api';

const Header = () => {
  const token = localStorage.getItem('Token');
  const id = JSON.parse(localStorage.getItem('User')).idUser;
  useEffect(() => {
    axios
      .get(`${url}user/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserData({
          username: response.data.username,
          profilePicture: response.data.profilePicture,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, token]);

  const [userData, setUserData] = useState('');

  return (
    <div className="background">
      <div className="box marge  flex justify-around responsive:flex-col ">
        <img
          src={logo_text_white}
          alt="logo Groupomania"
          className=" mb-0 mt-0 mr-100 responsive:max-w-[99%] responsive:center responsive:mb-10 responsiveXS:pb-5 responsiveXS:pt-3 responsiveXS:w-[80%]]"
        />
        <div className="flex space-x-5 p-1 center border-2 border-secondary radius20 w-fit">
          <div className="flex center">
            {userData.profilePicture ? (
              <img
                className="thumbnail"
                alt="post"
                src={userData.profilePicture}
              ></img>
            ) : (
              <img className="thumbnail" alt="post" src={icon}></img>
            )}

            <p className="myFont text-white   mr-5">{`${userData.username}`}</p>
            <Link to="/profile">
              <FontAwesomeIcon
                className="text-white cursor-pointer text-3xl hover:scale-110"
                icon={faCog}
              ></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
