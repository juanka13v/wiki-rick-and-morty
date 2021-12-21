import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss"

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName={`btn btn-primary ${styles.a}`}
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
          setPageNumber(data.selected + 1)
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
