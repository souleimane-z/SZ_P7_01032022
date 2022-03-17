import Publish from './Publish';
import Post from './Post';

const FeedGlobal = () => {
  return (
    <div className="flex-wrap responsive:flex-col responsiveXS:pl-1 responsiveXS:justify-center responsiveXS:overflow-hidden">
      <div>
        <Publish />
        <div>
          <p className="myFont mt-2">Fil d'actus</p>
        </div>
        <div className="border-2 center border-secondary radius20 p-5 flex flex-wrap mt-5 responsive:p-0 responsive:border-none">
          <Post />
        </div>
      </div>
    </div>
  );
};

export default FeedGlobal;
