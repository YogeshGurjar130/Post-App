import React, { useEffect, useState } from "react";
import "../css/common.css"
import BoxCard from "./BoxCard";
import RectangleCard from "./RectangleCard";
import Feedback from "./Feedback";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import Loader from "./Loader";

const Home = () => {
    const {list, loader} = useSelector(state => state)
    const [view, setView] = useState("list");
    const [feedback, setFeedback] = useState(false);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    console.log(list, "STORE DATA")

    useEffect(() => {
        calculatePage();
    }, [list]);

    useEffect(() => {
        pageData(currentPage);
    }, [list, currentPage]);

    // create the page wise list of 6 element from larger list
    const pageData = (pageNumber) => {
        const endIndex = pageNumber * 6;
        const startIndex = endIndex - 6;
        const pageData = list.slice(startIndex, endIndex);
        setCurrentData(pageData);
    }

    const calculatePage = () => {
        console.log(list.length, " <---- DATA LENGTH")
        const pages = Math.ceil(list.length / 6);
        console.log(pages, " <---- PAGES")
        const arr = [];
        if (pages === 1) {
        } else {
            for (let i = 1; i <= pages; i++) {
                arr.push(i);
            }
        }
        console.log(arr, " <--- ARRAY")
        setPages(arr)
    }

    const onChangePage = (pageNumber) => {
        console.log(pageNumber, " <--- CURRENT_PAGE")
        if (pageNumber !== pages.length + 1 && pageNumber > 0) {
            setCurrentPage(pageNumber)
        }
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
                    <div className="main">
                        {currentData.map((post) => <RectangleCard post={post} />)}
                    </div>
                    <Pagination pages={pages} currentPage={currentPage} onChangePage={onChangePage} />
                </div>}
                {view === 'box' && <div className="main-box-container">
                    <div className="main-box">
                        {currentData.map((post) => <BoxCard post={post} />)}
                    </div>
                    <Pagination pages={pages} currentPage={currentPage} onChangePage={onChangePage} />
                </div>}
                {feedback && <Feedback />}
                {loader && <Loader />}
            </div>
        </div>
    )
}

export default Home;