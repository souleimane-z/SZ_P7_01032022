import axios from 'axios';
import { useState } from 'react';
import url from '../../utils/api';

const Comment = (props) => {
  const id = JSON.parse(localStorage.getItem('User')).idUser;
  const token = localStorage.getItem('Token');
  const handleComment = () => {
    axios
      .post(
        `${url}comment/${id}`,
        { comment, idPost: props.idPost },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const [comment, setComment] = useState('');

  return (
    <div className="w-full mt-5">
      <div className="w-[100%] center mr-0 mt-3">
        <form className="w-[70%] center flex-col">
          <label htmlFor="comment"></label>
          <input
            id='comment'
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="input w-[100%]"
            type="text"
            placeholder="Commenter..."
          ></input>
          <div className="flex justify-end mt-5">
            <button
              onClick={handleComment}
              className="radius20 p-4 center bg-primary text-grey myFont h-[3rem] hover:scale-110 hover: responsiveSmall:m-auto responsiveSmall:mb-2"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
