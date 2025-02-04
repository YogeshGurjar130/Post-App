import React from "react";
import "../css/common.css"
import { useDispatch } from "react-redux";
import { REMOVE_POST } from "../redux/action";

const RectangleCard = ({ post }) => {

    const dispatch = useDispatch();
    return (
        <div className="rectangle-container">
            <div className="rectangle-inner-container">
                <div className="rectangle-content">
                    <div className="rectangle-post-img">
                    </div>
                    <div className="txt-container">
                        <span className="post-title">{post.title}</span>
                        <span className="post-body">{post.body}</span>
                        <span className="post-date">{new Date().toString()}</span>
                    </div>
                </div>
            </div>
            <div className="cancel-container" onClick={() => dispatch(REMOVE_POST(post.id))}>
                <div className="cancel-btn">
                    <img src="cancel.png" height={25} width={25}></img>
                </div>
            </div>
        </div>
    )
}

export default RectangleCard;