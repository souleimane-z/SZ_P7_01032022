import logo_text_white from '../images/logo_text_white.svg';
import error from '../images/error.gif';
import { Link } from 'react-router-dom';

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

export default Error;
