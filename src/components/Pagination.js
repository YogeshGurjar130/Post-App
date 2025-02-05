import React from "react";
import "../css/common.css"

const Pagination = ({ pages, currentPage = 1, onChangePage }) => {
    return (
        <div className="pagination">
            <div className="pagination-content">
                {pages.length > 3 && <div style={{ marginLeft: "10px", cursor: "pointer" }} onClick={() => onChangePage(currentPage - 1)}>
                    <img src="left-arrow.png" height={30} width={30}></img>
                </div>}
                {currentPage <= 3 && pages.slice(0, 3).map((page) => <div className="page-container" style={currentPage === page ? { backgroundColor: "rgb(67, 67, 67)" } : {}} onClick={() => onChangePage(page)}>
                    <span className="page-number">{page}</span>
                </div>)}
                {currentPage > 3 && pages.slice(currentPage - 3, currentPage).map((page) => <div className="page-container" style={currentPage === page ? { backgroundColor: "rgb(67, 67, 67)" } : {}} onClick={() => onChangePage(page)}>
                    <span className="page-number">{page}</span>
                </div>)}
                {pages.length > 3 && <div style={{ marginLeft: "10px", cursor: "pointer" }} onClick={() => onChangePage(currentPage + 1)}>
                    <img src="right-arrow.png" height={30} width={30}></img>
                </div>}
            </div>
        </div>
    )
}

export default Pagination;