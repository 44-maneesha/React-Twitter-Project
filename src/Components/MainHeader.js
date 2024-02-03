import React from 'react'
import MainContent from './MainContent';
import image1 from "../assets/Timeline-Prop.svg"

const MainHeader = ({ data }) => {
    const newDetails = data?.headerData;
    return (
        <React.Fragment>
            <div>
                <div className='header'>
                    <h4>{newDetails?.title?.text}</h4>
                    <img src={image1} />
                </div>
                <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around" }}>
                    {newDetails && newDetails.navigationTabs.map((item, key) => (
                        <div key={key} className={'tab-toggle'}>
                            <a className={key == 0 && 'active'} href={item.buttonText}>{item.buttonText}</a>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment >
    )
}
export default MainHeader;