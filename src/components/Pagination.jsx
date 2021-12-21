import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss"

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName={`${styles.btna} btn btn-primary `}
      previousClassName={`${styles.btna} btn btn-primary `}
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
