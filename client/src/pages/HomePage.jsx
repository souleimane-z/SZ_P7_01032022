import React from 'react';
import logo_text_white from '../images/logo_text_white.svg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="background">
      <div className="box marge">
        <img src={logo_text_white} alt="Logo Groupomania" className="marge" />
        <div className="card marge center flex-col">
          <button className="button myFont text-black ">
            <Link to="/SignUp"> Inscription </Link>
          </button>
          <button className="button myFont text-black ">
            <Link to="/Login"> Connexion </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
