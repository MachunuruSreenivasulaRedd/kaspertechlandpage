import './index.css'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import arrowIcon from '../../images/arrowIcon.png'

const Team = () => {
  return (
    <div className="teamContainer">
      <h2 className="teamHighlight">
        <span>Get direct</span> <br /> knowledge and insights
      </h2>
      <div className="team">
        <img src={img1} alt="member" className="teamMember" />
        <img src={img2} alt="member" className="teamMember" />
        <img src={img3} alt="member" className="teamMember" />
      </div>
      <div className="stats">
        <div className="teamStat">
          <h2 className="statsHighlight">300</h2>
          <p>creators</p>
        </div>
        <div className="teamStat">
          <h2 className="statsHighlight">14.4k</h2>
          <p>users</p>
        </div>
        <div className="teamStat">
          <h2 className="statsHighlight">9.11k</h2>
          <p>session</p>
        </div>
        <div className="teamStat">
          <p>Explore the marketplace</p>
          <img src={arrowIcon} alt="arrow" className="arrowImg" />
        </div>
      </div>
    </div>
  )
}

export default Team
