import icon from '../../images/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Comment from './Comment';
import AdminComponent from './AdminComponent';
import AdminComment from './Admin';
import url from '../../utils/api';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('Token');

  useEffect(() => {
    axios
      .get(`${url}posts`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token]);

  const id = JSON.parse(localStorage.getItem('User')).idUser;
  useEffect(() => {
    axios
      .get(`${url}user/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, token]);

  return (
    <div>
      <ul>
        {posts.map((item) => {
          return (
            <li key={item.idPost}>
              <div className="mb-5 p-5 flex center flex-wrap  border  responsive:flex-wrap responsive:center  responsive:p-0">
                {item['user.profilePicture'] ? (
                  <img
                    className="thumbnail w-[80px] h-[80px] m-3 ml-0  responsiveSmall:w-[50px] responsiveSmall:h-[50px]"
                    src={item['user.profilePicture']}
                    alt="profile"
                  />
                ) : (
                  <img
                    className="thumbnail w-[80px] h-[80px] m-0 mr-3 p-0 responsiveSmall:w-[50px] responsiveSmall:h-[50px]"
                    src={icon}
                    alt="profile"
                  />
                )}

                <div className="mt-4 ">
                  <div className="flex justify-between">
                    <p className=" myFont text-primary pl-0 w-[142px] center">
                      {item['user.username']}
                    </p>
                  </div>
                </div>
                <div
                  className="break-words w-[70%] p-7 border-2 border-primary radius20 shadow-md shadow-primary 
        responsive:w-[95%] responsive:pr-0 responsive:pl-0"
                >
                  <p
                    className="text-center text-primary myFont p-0 pb-2 responsive:text-center"
                  >
                    {item.content}
                  </p>
                  <div>
                    {item.imageUrl ? (
                      <img
                        className="m-auto"
                        alt="post"
                        src={item.imageUrl}
                      ></img>
                    ) : null}
                  </div>
                </div>
                <div className="w-full center justify-evenly mr-0 mt-3 responsive:m-auto responsive:mt-3">
                  <div className="flex center">
                    <FontAwesomeIcon
                      className="text-primary cursor-pointer text-3xl hover:scale-125"
                      icon={faComment}
                    ></FontAwesomeIcon>
                  </div>
                  <AdminComponent data={item} />
                </div>
                <div className="w-[100%] center mr-0 mt-3">
                  <Comment idPost={item.idPost} />
                </div>

                {item.comments?.reverse().map((dataItem) => {
                  return (
                    <div
                      key={dataItem.idComment}
                      className="mt-5 w-full responsive:flex-wrap"
                    >
                      <div className="flex p-5   responsive:flex-wrap">
                        {dataItem['user.profilePicture'] ? (
                          <img
                            className="thumbnail w-[50px] h-[50px] pr-0 mr-0"
                            alt="profil pic"
                            src={dataItem['user.profilePicture']}
                          ></img>
                        ) : (
                          <img
                            className="thumbnail w-[50px] h-[50px] h-[50px] pr-0 mr-0 "
                            alt="post"
                            src={icon}
                          ></img>
                        )}
                        <div
                          className=" m-0 center myFont w-[200px]
                         "
                        >
                          {dataItem['user.username']} :
                        </div>
                      </div>
                      <div className=" flex center responsive:flex-wrap responsive:center responsive:mb-5">
                        <p className=" myFont p-2 w-full border-2 border-primary radius20 shadow-md shadow-primary responsive:w-[50%] ">
                          {dataItem.comment}
                        </p>
                        <div className="ml-5 center ">
                          <AdminComment comment={dataItem} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Post;
