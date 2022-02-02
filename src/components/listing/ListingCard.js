import * as React from "react";
import { Col } from "react-bootstrap";
import "../../SCSS/main.css";
import { Link } from "react-router-dom";

const ListingCard = (props) => {
  return (
    <Col sm={6} lg={3}>
      <Link to={`/listing/${props.id}`}>
        <div className="c-listing">
          <div className="listing">
            <button className="listing__like"></button>
            <img className="listing__img" src={props.image} alt="horse-img" />
            <div className="backdrop">
              <h1 className="listing__name">{props.name}</h1>
              <span className="listing__price">£{props.price}</span>
              <p className="listing__description">{props.description}</p>

              <p div className="listing__location">
                {props.location} test
              </p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default ListingCard;
