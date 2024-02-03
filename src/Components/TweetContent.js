// import "./LastFrom1.css"
// import image4 from '../assets/Tick icon (1).svg'
import './style.css'
const TweetContent = ({ data }) => {
    console.log("lastForm", data)
    let lastFormData = data?.followData
    // console.log("hiii", lastFormData)
    // console.log(user)
    // console.log("new", data.followData.userToFollow)
    return (
        <div className="tweet-content">
            <h3>{data && lastFormData.title}</h3>
            {data && lastFormData.usersToFollow.map((user, idx) => (
                <div className="tweet-content-div" key={idx}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div>
                            <img className="tweet-content-img" src={user.imageData.url} height="50px" width="50px" />
                        </div>
                        <div>
                            <span style={{ lineHeight: 1.5 }}>
                                <span style={{ margin: '0px 5px' }}>{user.userName}</span>
                                {/* <span style={{ margin: '0px 2px' }}> */}
                                <img className="tickIcon" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1280px-Twitter_Verified_Badge.svg.png"} height="17.5px" width="17.5px" />
                                {/* </span> */}
                                <br />
                                <span style={{ margin: '0px 5px', color: "#6E767D" }}>{user.userId}</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <button className="tweet-content-button">Follow</button>
                    </div>
                </div>
                // </div>

            ))
            }
            <h4>show more</h4>


        </div >)
}
export default TweetContent