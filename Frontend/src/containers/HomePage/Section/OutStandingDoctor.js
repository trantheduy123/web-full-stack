import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Bác sĩ nổi bật tuần qua</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="customize-boder">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div className="bg-image-text">
                      Giáo sư, tiến sĩ Trần Thế Duy
                    </div>
                    <div className="bg-image-text">Răng Hàm Mặt</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-boder">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div className="bg-image-text">
                      Giáo sư, tiến sĩ Trần Thế Duy 2
                    </div>
                    <div className="bg-image-text">Răng Hàm Mặt</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-boder">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div className="bg-image-text">
                      Giáo sư, tiến sĩ Trần Thế Duy 3
                    </div>
                    <div className="bg-image-text">Răng Hàm Mặt</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-boder">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div className="bg-image-text">
                      Giáo sư, tiến sĩ Trần Thế Duy 4
                    </div>
                    <div className="bg-image-text">Răng Hàm Mặt</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-boder">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div className="bg-image-text">
                      Giáo sư, tiến sĩ Trần Thế Duy 5
                    </div>
                    <div className="bg-image-text">Răng Hàm Mặt</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-boder">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div className="bg-image-text">
                      Giáo sư, tiến sĩ Trần Thế Duy 6
                    </div>
                    <div className="bg-image-text">Răng Hàm Mặt</div>
                  </div>
                </div>
              </div>
            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
