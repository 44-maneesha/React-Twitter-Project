import navImage from "../assets/Round (4).svg"
import navImage2 from "../assets/Vector.svg"
import navImage3 from "../assets/More-2.svg"
const NavSideBar = ({ data }) => {
    return (<div>
        {
            data && data.sideNavigationButtons.map((item) => (
                <div className="nav-bar-position">
                    <img className="nav-icon" src={item.icon.url} height='50px' width='50px' />
                    <label className="nav-label">{item.buttonText}</label>
                </div>
            ))

        }
        <button className='nav-var-tweet-button'><spn className='tweet-text'>{data.tweetButton.buttonText}</spn><span class="plus-sign">+</span></button>
        <div className="nav-logged-in-user">
            <div>
                <img className="user-icon" src={data?.loggedInUser?.imageData?.url} />
            </div>
            <div className="user-basic-details">
                <span>
                    <span>{data?.loggedInUser?.userName}</span>&nbsp;&nbsp;
                    <img src={navImage2} height="20px" width="20px" /><br />
                    <span>{data?.loggedInUser?.userId}</span>
                </span>
            </div>
            <div className="three-dot-icon">
                <img src={navImage3} />
            </div>
        </div>
    </div>
    );
};





export default NavSideBar