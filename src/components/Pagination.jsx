import React from 'react'

const Pagination = ({setPageNumber, pageNumber}) => {
    const next = () => {
        setPageNumber((x) => x + 1);
    };

    const prev = () => {
        if(pageNumber === 1) return
        setPageNumber((x) => x - 1);
    };

    return (
        <div  className='container d-flex justify-content-center gap-5 my-5'>
            <button className="btn btn-primary" onClick={prev}>
                Prev
            </button>
            <button className="btn btn-primary" onClick={next}>
                Next
            </button>
        </div>
    )
}

export default Pagination
