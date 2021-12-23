import React from "react";
import styles from "../components/Cards.module.scss";
import { Link } from "react-router-dom";

const Cards = ({ results, page }) => {
  let display;

  if (results) {
    display = results.map((item) => {
      let { id, name, image, location, status } = item;

      return (
        <Link
          style={{textDecoration: "none"}}
          to={`${page}${id}`}
          className="col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark"
          key={id}
        >
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt={name} className={`img-fluid ${styles.img}`} />
            <div className="content" style={{ padding: "10px" }}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = <h1>No Characters Found</h1>;
  }

  return <>{display}</>;
};

export default Cards;
