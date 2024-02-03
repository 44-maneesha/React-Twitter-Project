import TweetContent from "./TweetContent"
import searchImage from '../assets/white-search-icon-png-18.jpg'
import './style.css'
const TweetSearch = ({ data }) => {
    const newData = data?.trendingData
    return (
        <div className="tweet-search" style={{ display: 'flex', alignItem: 'center', flexDirection: 'column' }}>
            <div >
                {/* <span><i>Search</i></span> */}
                {/* <img src={searchImage} style={{
                    width: "42px",
                    height: "42px",
                    padding: "12px",
                    borderRadius: "42px"
                }}
                /> */}
                <input className="lastFormInput"
                    // style={{
                    //     background: `url('${searchImage}') no-repeat left`

                    // }}
                    placeholder="Search Twitter" type="text" />
            </div>
            <div className="tweet-content">
                <h3 className="lastFormh3">{data && data.trendingData.title}</h3>
                {
                    data && newData.trends.map((trend, index) => (
                        <div key={index}>
                            <p>
                                <span style={{
                                    color: "#6E767D"
                                }}>{trend.category ? trend.category + " . Trending" : 'Trending in ' + trend.country}</span><br />
                                <span>{trend.text}</span><br />
                                <span style={{
                                    color: " #6E767D"
                                }}>
                                    {trend.tweets && (trend.tweets) / 1000 + " " + "k"}
                                </span>

                                {trend.hashTags && trend.hashTags.map((tag, key) => <span style={{
                                    color: "#1D9BF0"
                                }} key={key}>{tag}</span>)}

                            </p>

                        </div>
                    ))
                }
                <h4 style={{ color: "#489BE9" }}>Show more</h4>
            </div>
            <div>
                <TweetContent data={data} />
            </div>

        </div>)
}
export default TweetSearch