import logo_text_white from '../images/logo_text_white.svg';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import url from '../utils/api';

function SignUp() {
  const methods = useForm({
    mode: 'onTouched',
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    axios
      .post(`${url}auth/signup`, data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        setIsSignup(false);
      })
      .catch((error) => {
        setErrorResponse(error.response.data.message);
      });
  };

  const password = watch('password');

  const [errorResponse, setErrorResponse] = useState(null);

  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="background">
      <div className="box marge">
        <img src={logo_text_white} alt="Logo Groupomania" className="marge" />
        <div className="card marge center flex-col">
          <form onSubmit={handleSubmit(onSubmit)} className="form">

            <h1 className="myFont border-2 border-primary bg-grey radius20 center h-[4rem]">
              Inscription
            </h1>

            <div className=" flex flex-col">
              <label className="label" htmlFor="username">
                Pseudo
              </label>
              <input
              id='username'
                className="input font-bold"
                type="text"
                {...register('username', {
                  required:
                    'Un pseudo de moins de 15 caractères est obligatoire',
                  pattern: {
                    /* Pattern qui permet de définir les champs renseignés dans l'input, 
                       si cela ne correspond pas : message d'erreur */
                    value: /^[a-zA-Z\s0-9]{1,15}$/, 
                    message: `moins de 15 caractères`,
                  },
                  
                })}
                placeholder="Pseudo... "
                autoComplete="off"
              />
              {errors?.username && (
                <p className="textError">{errors?.username.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id='email'
                className="input font-bold"
                type="email"
                {...register('email', {
                  required: 'Un email valide est obligatoire',
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Veuillez entrer un mail valide',
                  },
                })}
                placeholder="Email..."
                autoComplete="off"
              />
              {errors?.email && (
                <p className="textError">{errors?.email.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="label" htmlFor="password">
                Mot de passe
              </label>
              <input
                id='password'
                className="input font-bold"
                type="password"
                {...register('password', {
                  required: 'Un mot de passe est obligatoire',
                  pattern: {
                    value: /^(?=.*\d).{8,15}$/,
                    message:
                      'Entre 8 et 15 caractères avec 1 chiffre minimum',
                  },
                })}
                placeholder="Mot de passe..."
              />
              {errors?.password && (
                <p className="textError">{errors?.password.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="label" htmlFor="passwordVerification">
                Confirmer le mot de passe...
              </label>
              <input
                id='passwordVerification'
                className="input font-bold"
                type="password"
                {...register('confirmPassword', {
                  required: 'Le mot de passe ne correspond pas',
                  validate: (value) =>
                    value === password || 'Le mot de passe ne correspond pas',
                })}
                placeholder="Confirmer le mot de passe..."
              />
              {errors?.confirmPassword && (
                <p className="textError">{errors?.confirmPassword.message}</p>
              )}
            </div>

            {isSignup ? (
              <div>
                <p className="textError">{errorResponse}</p>
                <p className="myFont text-lg">
                  Veuillez remplir tous les champs.
                </p>
                <button className="button myFont font-black text-black m-auto center bg-green">
                  Je valide
                </button>
              </div>
            ) : (
              <div>
                <p className="myFont  text-green center text-3xl">
                  Inscription réussi !
                </p>
                <button className="button myFont text-white m-auto center bg-green ">
                  <Link to="/login">Connexion</Link>
                </button>
              </div>
            )}

            <button className="button myFont center m-auto">
              <Link to="/">Retour</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
