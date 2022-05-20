import React, {useState} from "react";
import styles from "../../Users/Users.module.css";

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let portionCount = Math.ceil(pagesCount/props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber-1)*props.portionSize+1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return <div>
        <button onClick={() => setPortionNumber(1)}>First</button>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber-1)}>Prev</button>}
        {pages.filter(p => p>=leftPortionPageNumber && p<=rightPortionPageNumber)
            .map(p => {
            return <span className={props.currentPage === p && styles.selectedPage}
                         onClick={() => {
                             props.onPageChanged(p)
                         }}>{p + ' '}</span>
        })}
        {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber+1)}>Next</button>}
        <button onClick={() => setPortionNumber(portionCount)}>Last</button>
    </div>
}

export default Pagination;