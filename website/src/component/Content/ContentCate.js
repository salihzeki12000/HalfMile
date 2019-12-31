import React, { Component } from "react";
import CardHolder from "../Card/CardHolder";

class ContentCate extends Component {
  render() {
    return (
      <div className="content-category">
        <div className="content-category-inner">
          <div className="content-category-header">
            <h3>Airbnb Plus places to stay</h3>
            <span>
              A selection of places to stay verified for quality and design
            </span>
          </div>
          <div>
            <CardHolder />
            <CardHolder />
            <CardHolder />
            <CardHolder />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentCate;