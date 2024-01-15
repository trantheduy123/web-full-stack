import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-container">
          <div className="section-about-header">
            Truyền Thông nói về Booking Dental
          </div>
          <div className="section-about-content">
            <div className="content-left">
              <iframe
                width="100%"
                height="400px"
                src="https://www.youtube.com/embed/TMzg1vJBDS0"
                title="Thử thách làm sạch răng: Tăm tre vs Tăm nhựa #nhakhoa #shorts #fyp #vidental"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="content-right">
              <p>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore aliquid amet
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
