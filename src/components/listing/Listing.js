import * as React from "react";
import products from "../../data/Products";
import ListingCard from "./ListingCard";
import { Link } from "react-router-dom";

import { Row } from "react-bootstrap";

const Listing = () => {
  return (
    <div>
      <ul className="expenses-list container">
        <p className="listing__name"> Recent Ads </p>
        <Row>
          {products.map((products, i) => (
            <ListingCard
              key={i}
              id={products.id}
              name={products.product_name}
              description={products.product_description}
              price={products.product_price}
              image={products.image}
            />
          ))}
        </Row>
      </ul>
    </div>
  );
};

export default Listing;
