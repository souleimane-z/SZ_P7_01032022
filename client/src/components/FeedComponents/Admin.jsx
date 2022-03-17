import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import url from '../../utils/api';

const AdminComment = (props) => {
  const [isAuthor, setIsAuthor] = useState(null);
  const id = parseInt(JSON.parse(localStorage.getItem('User')).idUser);
  const [isAdmin, setIsAdmin] = useState(null);
  const token = localStorage.getItem('Token');

  useEffect(() => {
    axios
      .get(`${url}user/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setIsAdmin(response.data.isAdmin);
      })
      .catch((error) => {
        console.error(error);
      });

    function check() {
      if (id === props.comment.idUser || isAdmin === true) {
        setIsAuthor(true);
      }
    }
    if (isAuthor === null) {
      check();
    }
  }, [id, isAdmin, isAuthor, props.comment.idUser, token]);

  const idComment = props.comment.idComment;

  const handleDelete = () => {
    axios
      .delete(`${url}comment/${idComment}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        window.location.reload(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {isAuthor ? (
        <div>
          <FontAwesomeIcon
            onClick={handleDelete}
            className="text-secondary cursor-pointer text-3xl hover:scale-125 responsive:flex"
            icon={faTimes}
          ></FontAwesomeIcon>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default AdminComment;
