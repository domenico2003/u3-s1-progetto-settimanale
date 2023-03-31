import { Component } from "react";
import { Col, Row } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <>
        <footer className="d-flex flex-column align-items-center pt-6">
          <Row xs={4} className="my-row text-white-50">
            <Col
              xs={12}
              className="icone d-flex fs-4 gap-3 text-white-50  mb-1"
            >
              <a href="#placeholder">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#placeholder">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#placeholder">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#placeholder">
                <i className="bi bi-youtube"></i>
              </a>
            </Col>
            <Col className="d-flex flex-column gap-3 my-col text-white-50 fs-7">
              <a href="#placeholder">Audio and Subtitles</a>
              <a href="#placeholder">Media Center</a>
              <a href="#placeholder">Privacy</a>
              <a href="#placeholder">Contact Us</a>
              <button
                type="button"
                className="btn rounded-0  btn-outline-light w-50 fs-7 px-0 mt-2"
              >
                Service Code
              </button>
            </Col>
            <Col className="d-flex flex-column gap-3 my-col fs-7">
              <a href="#placeholder">Audio Description</a>
              <a href="#placeholder"> Investor Relations</a>
              <a href="#placeholder">Legal notices</a>
            </Col>
            <Col className="d-flex flex-column gap-3 my-col fs-7">
              <a href="#placeholder">Help Center</a>
              <a href="#placeholder">Jobs</a>
              <a href="#placeholder">cooKie Preerences</a>
            </Col>
            <Col className="d-flex flex-column gap-3 my-col fs-7">
              <a href="#placeholder">Gift Cards</a>
              <a href="#placeholder">Terms of Use</a>
              <a href="#placeholder">Corporate Information</a>
            </Col>
            <Col xs={12} className="mt-3">
              <p className="fs-7">
                <i className="bi bi-c-circle"></i> 1997-2019 Netflix, Inc.
                (i-0d00fcda2fdf9c0de)
              </p>
            </Col>
          </Row>
        </footer>
      </>
    );
  }
}

export default MyFooter;
