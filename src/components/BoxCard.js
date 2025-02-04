import React from "react";
import "../css/common.css"
import { useDispatch } from "react-redux";
import { REMOVE_POST } from "../redux/action";

const BoxCard = ({ post }) => {

    const dispatch = useDispatch();
    return (
        <div className="box-container">
            <div className="top" onClick={() => dispatch(REMOVE_POST(post.id))}><img src="cancel.png" height={20} width={20} ></img></div>
            <div className="box-content">
                <span className="post-title" style={{ width: "250px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{post.title}</span>
                <span className="post-body" style={{ width: "250px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{post.body}</span>
                <span className="post-date" style={{ width: "250px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{new Date().toString()}</span>
                <div className="box-post-img">
                </div>
            </div>
        </div>
    )
}

export default BoxCard;