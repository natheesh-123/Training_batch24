import bird from '../assets/Images/bird.jpg';
import butterfly from '../assets/Images/butterfly.jpg';
import commonData from '../shared/constant/constantData';

const MyImageComp = () => {
    return (

        <div>

            <h2>This is my Image Component</h2>
            <img src={bird} alt='bs' height="200px" width="200px" />
            <img src={butterfly} alt='bly' height="200px" width="200px" />
            <hr />
            <img src={commonData.bird}alt='img1'height="200px" width="200px"/>
            <img src={commonData.butterfly} alt='img2'height="200px" width="200px"/>

        </div>
    )
}
export default MyImageComp