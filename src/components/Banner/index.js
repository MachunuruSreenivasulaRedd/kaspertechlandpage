import './index.css'
import videocalls from '../../../public/videocalls.png'
import img from '../../../public/img.png'
const Banner = () => {
  return (
    <div className="mainbannerContainer">
      <div className="bannerContainer">
        <div>
          <h1>
            Learn from your favorite creators about{' '}
            <span className="bannerHighlight">fantasy reports</span>
          </h1>
        </div>
        <img src={videocalls} alt="video" className="videoCall" />
      </div>
      <div className="bannerImageContainer">
        <img src={img} alt="banner" className="bannerImage" />
        <div className="bg-color"></div>
      </div>
    </div>
  )
}

export default Banner
