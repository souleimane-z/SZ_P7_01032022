import React from 'react';
import FeedGlobal from '../components/FeedComponents/FeedGlobal';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header /> {/* Le header est le haut de la page (Logo + informations sur l'utilisateur connecté) */}
      <section className="bg-grey box m-auto p-8 pb-1 radius20 responsiveSmall:p-1 ">
        <FeedGlobal />  {/* Fil d'actualité */}
      </section>
    </div>
  );
};

export default HomePage;  //exporter code vers le fichier principal : App.js
