import "../../SCSS/main.css";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import products from "../../data/Products";

const ListingDetails = (props) => {
  const { id } = useParams();

  const [listing, setListing] = useState({});

  useEffect(() => {
    const product = products.find(function (e) {
      return e.id == id;
    });
    setListing(product);
  }, [id]);

  return (
    <div>
      <div className="container">
        <div className="listing-details">
          <Row>
            <Col lg={6}>
              <img
                className="listing-details__img--main"
                alt="logo"
                src={listing.image}
              ></img>
            </Col>
            <Col lg={3}>
              <img
                className="listing-details__img"
                alt="logo"
                src={listing.image}
              ></img>

              <img
                className="listing-details__img--2"
                alt="logo"
                src={listing.image}
              ></img>
            </Col>
            <Col lg={3}>
              <img
                className="listing-details__img"
                alt="logo"
                src={listing.image}
              ></img>

              <img
                className="listing-details__img--2"
                alt="logo"
                src={listing.image}
              ></img>
            </Col>
          </Row>
          <div className="full-card" key={listing.id}>
            <h2>{listing.product_name}</h2>
            <h2>£{listing.product_price}</h2>
            <p className="listing-details__description">
              {listing.product_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
