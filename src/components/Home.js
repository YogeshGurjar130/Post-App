import React, { useEffect, useState } from "react";
import "../css/common.css"
import BoxCard from "./BoxCard";
import RectangleCard from "./RectangleCard";
import Feedback from "./Feedback";
import { useSelector } from "react-redux";

const Home = () => {


    const data = useSelector(state => state)
    const [count, setCount] = useState(6);
    const [view, setView] = useState("list");
    const [feedback, setFeedback] = useState(false);
    console.log(data, "STORE DATA")

    // create the page wise list of 6 element from larger list
    const createPage = () => {
       
    }

    return (
        <div className="container">
            <div className="inner-container">
                <div className="menu" style={feedback ? { borderTopRightRadius: 0, borderBottomRightRadius: 0 } : {}}>
                    <div className="menu-container">
                        <div className="profile">
                            <div className="profile-img"></div>
                            <div className="profile-txt">
                                <span className="profile-name">Hi Reader</span>
                                <span className="info-txt">Here is your News!</span>
                            </div>
                        </div>
                        {!feedback && <div className="view-toggle">
                            <span className="toggle-title">View Toggle</span>
                            <div className="toggle-btn-container">
                                <div className="toggle-btn" style={view === 'box' ? { backgroundColor: "green" } : {}} onClick={() => setView("box")}>
                                    <img src="box-menu.jpg" height={40} width={40}></img>
                                </div>
                                <div className="toggle-btn" style={view === 'list' ? { backgroundColor: "green" } : {}} onClick={() => setView("list")}>
                                    <img src="list-menu.jpg" height={40} width={40}></img>
                                </div>
                            </div>
                        </div>}
                        <div className="feedback-section">
                            <span className="feedback-section-title">Have a Feedback?</span>
                            <button className="feedback-btn" onClick={() => setFeedback(!feedback)}>We're Listening?</button>
                        </div>
                    </div>
                </div>
                {view === 'list' && <div className="main">
                    {data.map((post) => <RectangleCard post={post} />)}
                </div>}
                {view === 'box' && <div className="main-box">
                    {data.map((post) => <BoxCard post={post} />)}
                </div>}
                {feedback && <Feedback />}
            </div>
        </div>
    )
}

export default Home;