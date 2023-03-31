import { Component } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

class SingleGallery extends Component {
  ImageCarousel = (imgForRow) => {
    const imagesRows = [];
    const numberOfRows = Math.ceil(this.props.risp.length / imgForRow);

    // split images into rows of 6
    for (let i = 0; i < numberOfRows; i++) {
      const rowImages = this.props.risp.slice(
        i * imgForRow,
        i * imgForRow + imgForRow
      );
      imagesRows.push(rowImages);
    }
    console.log(imagesRows[0]);
    return imagesRows;
  };
  render() {
    console.log(this.props.name, this.props.risp);
    return (
      <>
        <article>
          <h4 class="mb-3 ">{this.props.name}</h4>
          <Carousel className="d-block d-sm-none">
            {this.props.risp &&
              this.ImageCarousel(1).map((row, index) => (
                <Carousel.Item key={index}>
                  <Row>
                    {row.map((obj) => (
                      <Col xs={12} key={obj.imdbID} className="text-center">
                        <img
                          src={obj.Poster}
                          alt={obj.imdbID}
                          className="img-fluid"
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
          </Carousel>
          <Carousel className="d-none d-sm-block d-md-none">
            {this.props.risp &&
              this.ImageCarousel(2).map((row, index) => (
                <Carousel.Item key={index}>
                  <Row>
                    {row.map((obj) => (
                      <Col sm={6} key={obj.imdbID}>
                        <img
                          src={obj.Poster}
                          alt={obj.imdbID}
                          className="img-fluid"
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
          </Carousel>
          <Carousel className="d-none d-md-block d-xl-none">
            {this.props.risp &&
              this.ImageCarousel(4).map((row, index) => (
                <Carousel.Item key={index}>
                  <Row>
                    {row.map((obj) => (
                      <Col md={3} key={obj.imdbID}>
                        <img
                          src={obj.Poster}
                          alt={obj.imdbID}
                          className="img-fluid"
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
          </Carousel>
          <Carousel className="d-none d-xl-block">
            {this.props.risp &&
              this.ImageCarousel(6).map((row, index) => (
                <Carousel.Item key={index}>
                  <Row>
                    {row.map((obj) => (
                      <Col md={2} key={obj.imdbID}>
                        <img
                          src={obj.Poster}
                          alt={obj.imdbID}
                          className="img-fluid"
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
          </Carousel>
        </article>
      </>
    );
  }
}

export default SingleGallery;

{
  /* <Row xs={2} md={4} xl={6} class="gx-1">
          
            {this.props.risp &&
              this.props.risp.map((elemento) => {
                console.log(elemento);
                return (
                  <Col>
                    <img
                      src={elemento.Poster}
                      class="img-fluid"
                      alt="img-esempio"
                    />
                  </Col>
                );
              })}
          
          </Row> */
}
