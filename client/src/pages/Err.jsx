import logo_text_white from '../images/logo_text_white.svg';
import error from '../images/error.gif';
import { Link } from 'react-router-dom';

/* 
  Si l'url est inconnu alors on tombera sur cette page 
  qui affiche une image d'erreur 
  et permet à l'utilisateur de retourner à la page d'acceuil 
  grâce à un bouton
*/

function Error() {
  return (
    <div className="background">
      <div className="box marge">
        <img src={logo_text_white} alt="Logo Groupomania" className="marge" />
        <div className="card marge center flex-col">
          <img src={error} alt="erreur 404" className='pt-5'></img>
          <p className="myFont">Cette page n'existe pas...</p>
          <button className="button myFont">
            <Link to="/">Retour</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;  //exporter code vers le fichier principal : App.js
