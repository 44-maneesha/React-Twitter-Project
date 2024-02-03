import React, { useDebugValue, useEffect, useState } from "react"
import image4 from '../assets/Comment Stroke Icon .svg'
import image5 from '../assets/Heart Stroke Icon .svg'
import image6 from '../assets/Retweet Stroke Icon .svg'

import image7 from '../assets/Share Stroke icon .svg'
// import image3 from '../assets/Tick icon (1).svg'
// import image3 from './'
const MainContent = ({ data }) => {
    const [inputValue, setInputValue] = useState([{ name: "kartkey Sharma", id: "@fjj", date: "20jan" }])
    const [newUpdate, setNewUpdate] = useState("")
    const [userDetails, setUserDetails] = useState(null);


    const changeHandler = (e) => {
        setInputValue(e.target.value)
    }

    const inputHandler = () => {
        const userList = [...userDetails]
        const new_details = [{ ...userList[0][0] }, { ...userList[0][1] }];
        // new_details.push(userList[0][0])
        // new_details.push(userList[0][1])
        new_details[0].textArea = inputValue;
        new_details[1].textArea = inputValue;
        // const result = userDetails;
        // result.unshift(new_details)
        setUserDetails([new_details, ...userDetails])
        // console.log("user details", new_details, userDetails)
        // console.log(inputValue)
        // inputValue(newUpdate)
        // console.log(inputValue)
        // setNewUpdate(newUpdate)
    }
    useEffect(() => {
        setUserDetails(data?.tweetThreads)
    }, [])

    const newDetails = data?.loggedInUser
    const newDetails1 = data?.tweetButton
    // const userDetails = data?.tweetThreads
    // console.log("new", data)
    const updateHandler = (key) => {
        const userJson = [...userDetails];
        const newData = userJson.map((user, id) => {
            if (key == id) {
                user[0].likes = user[0].likes + 1
            }
            // console.log('user', user)
            return user
        })
        // console.log('newData', newData)
        setUserDetails(newData)
        // console.log('userdetails', userDetails)
        // console.log(e.target.value)
        // setValue({ ...value,((likes) && (likes) / 1000 + " " + "k") + 1})
    }
    // console.log("user details", userDetails)
    return (
        <div>
            <div className="formInput">
                <img style={{ borderRadius: 30, }} height={'50px'} width={'50px'} src={newDetails?.imageData?.url} />
                <textarea onChange={changeHandler} placeholder="What's happening?" className="input-tweet" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10, padding: '0px 10px' }}>
                <button onClick={inputHandler} style={{
                    padding: "15px 40px",
                    borderRadius: "36px",
                    color: "white",
                    fontWeight: 'bold',
                    fontSize: 18,
                    backgroundColor: "#1D9BF0",
                    border: 'none'
                }}>{newDetails1?.buttonText}</button>
            </div>
            <hr className='hr-size' />
            {/* </div> */}
            {/* <div style={{ padding: '0px 10px' }}> */}
            {
                userDetails && userDetails.map((item4, key) => (
                    <React.Fragment>
                        <div key={key} className='main-content'>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ marginRight: '15px' }}>
                                    <img style={{ borderRadius: "50px" }} src={item4[1]?.user?.imageData?.url} height="50px" width="50px" />
                                </div>
                                <div style={{ lineHeight: 1.6 }}>
                                    <span style={{ margin: '0px 5px' }}>{item4[1]?.user?.userName}</span>
                                    <span style={{ margin: '0px 5px' }}>
                                        <img style={{ verticalAlign: 'middle' }} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1280px-Twitter_Verified_Badge.svg.png"} height="18.5px" width="18.5px" />
                                    </span>

                                    {/* {newDetails.blueTick} */}
                                    <span style={{ margin: '0px 5px' }}>{item4[1]?.user?.userId}</span>
                                    <span style={{ margin: '0px 5px' }}>{new Date(item4[1]?.user?.joiningDate).toLocaleString('en-US', { year: '2-digit', month: 'short' })}</span>
                                    <br />
                                    {key % 2 !== 0 ? (
                                        <span style={{
                                            color: "#1D9BF0",
                                            margin: '0px 5px'
                                        }}>Replying to@{item4[1].user.userId}<br /></span>
                                    ) : null}
                                    <span style={{ margin: '0px 5px' }}>{item4[0]?.textArea}</span>
                                </div>
                            </div>
                            <div className='lastDiv'>
                                <span ><img src={image4} /> {item4[0].replies && (item4[0].replies) / 1000 + " " + "k"}</span>
                                <span><img src={image6} /> {item4[0].reTweets && (item4[0].reTweets) / 1000 + " " + "k"}</span>
                                <span><img onClick={() => updateHandler(key)} src={image5} /> {item4[0].likes && (item4[0].likes) / 1000 + " " + "k"}</span>

                                <span><img src={image7} /> {item4[0].views && (item4[0].views) / 1000 + " " + "k"}</span>
                            </div>

                        </div>
                        {key % 2 == 0 && <hr className='hr-size' />}
                    </React.Fragment>

                ))
            }
            {/* </div> */}
        </div>)
}

export default MainContent