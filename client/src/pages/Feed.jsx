import React from 'react';
import FeedGlobal from '../components/FeedComponents/FeedGlobal';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <section className="bg-grey box m-auto p-8 pb-1 radius20 responsiveSmall:p-1 ">
        <FeedGlobal />
      </section>
    </div>
  );
};

export default HomePage;
