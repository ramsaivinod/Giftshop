import '../styles/frame-component.css';
import img1 from '../assets/logo/rectangle-5@2x.png';
import img2 from '../assets/logo/rectangle-6@2x.png';
import img3 from '../assets/logo/rectangle-8@2x.png';
import img4 from '../assets/logo/rectangle-7@2x.png';

const FrameComponent = () => {
  return (
    <div className="categories-parent">
      <div className="categories">Categories</div>
      <div className="head">
        <img className="frame-child" alt="" src={img1} />
        <img className="frame-item" alt="" src={img2} />
        <img className="frame-inner" alt="" src={img3} />
        <img className="rectangle-icon" alt="" src={img4} />
        <div className="rectangle-div" />
        <div className="frame-child1" />
        <div className="frame-child2" />
        <div className="frame-child3" />
        <div className="english-books">English Books</div>
        <div className="bal-mukund-books">Bal Mukund Books</div>
        <div className="swamiji-kirtans">Swamiji Kirtans</div>
        <div className="english-lectures">English Lectures</div>
      </div>
    </div>
  );
};

export default FrameComponent;
