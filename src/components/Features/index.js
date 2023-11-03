import engagement from '../../../public/engagement.png'
import autonomy from '../../../public/autonomy.png'
import earn from '../../../public/earn.png'
import free from '../../../public/free.png'
import './index.css'

const Features = () => {
  return (
    <div className="featuresContainer">
      <div className="question">
        <h2>Why become a creator ?</h2>
        <p>
          Engage with your supporter and subscriber to sell your skills,
          knowledge and passions{' '}
        </p>
        <button className="creatorBtn">Become a creator</button>
      </div>
      <div className="features">
        <div className="featureItem">
          <img src={engagement} alt="imag" className="featureImg" />
          <h2>Engagement</h2>
          <p>Engage on a deeper level with the fans that matter most</p>
        </div>
        <div className="featureItem">
          <img src={autonomy} alt="imag" className="featureImg" />
          <h2>Autonomy</h2>
          <p>Full autonomy on when and who you talk to.</p>
        </div>
        <div className="featureItem">
          <img src={free} alt="imag" className="featureImg" />
          <h2>Free</h2>
          <p>No monthly fee or sign-up fee</p>
        </div>
        <div className="featureItem">
          <img src={earn} alt="imag" className="featureImg" />
          <h2>Earn</h2>
          <p>Add a new source of income that you can control</p>
        </div>
      </div>
    </div>
  )
}

export default Features
