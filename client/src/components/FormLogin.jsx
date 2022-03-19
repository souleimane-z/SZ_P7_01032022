import logo_text_white from '../images/logo_text_white.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import url from '../utils/api';

function Login() {
  const methods = useForm({
    mode: 'onTouched',
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    axios
      .post(`${url}auth/signin`, data)
      .then((response) => {
        localStorage.setItem('User', JSON.stringify(response.data));
        localStorage.setItem('Token', response.data.accessToken);
        CheckStorage();
      })
      .catch((error) => {
        setErrorResponse(error.response.data.error);
      });
  };

  const [errorResponse, setErrorResponse] = useState(null);

  let navigate = useNavigate();

  function CheckStorage() {
    const tokenInStrorage = localStorage.getItem('Token');

    if (tokenInStrorage === null) {
      console.log('No Token');
    } else {
      navigate('/');
    }
  }

  return (
    <div className="background">
      <div className="box marge">
        <img src={logo_text_white} alt="Logo Groupomania" className="marge" />
        <div className="card marge center flex-col">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <h1 className="myFont border-2 border-primary text-black bg-grey radius20 center">
              Connexion
            </h1>
            <div className="flex flex-col">
              <label htmlFor="email" className="label">Email</label>
              <input
                id='email'
                className="input"
                type="text"
                {...register('email', {
                  required: 'Un email est obligatoire',
                })}
                placeholder="Email..."
                autoComplete="off"
              ></input>
              {errors?.email && (
                <p className="textError">{errors?.email.message}</p>
              )}
            </div>
            <div className="mt-[0px] flex flex-col">
              <label htmlFor="password" className="label">Mot de passe</label>
              <input
                id='password'
                className="input"
                type="password"
                {...register('password', {
                  required: 'Un mot de passe est obligatoire',
                })}
                placeholder="Mot de passe..."
              ></input>
              {errors?.password && (
                <p className="textError">{errors?.password.message}</p>
              )}
            </div>
            <p className="textError">{errorResponse}</p>
            <button className="button myFont font-black text-black m-auto center bg-green">
              Connexion
            </button>
            <button className="button myFont center m-auto">
              <Link to="/">Retour</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
