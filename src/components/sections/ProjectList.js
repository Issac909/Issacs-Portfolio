import React, { Component } from "react";

const QuickAccess = [
  {
    image: "image-1",
    category: "Front-End / React.js",
    title: "Minimalist"
  },
  {
    image: "image-2",
    category: "Front-End / React.js",
    title: "Med-Cabinet"
  },
  {
    image: "image-3",
    category: "HTML5 / CSS",
    title: "Trip Split"
  },
  {
    image: "image-4",
    category: "Front-End / Promises",
    title: "Chuck Norris Jokes"
  }
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = QuickAccess.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <a href="/portfolio-details">{value.title}</a>
                  </h4>
                  <div className="portfolio-button">
                    <a className="rn-btn" href="/portfolio-details">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
