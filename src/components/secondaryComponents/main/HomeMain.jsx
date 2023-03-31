import { Component } from "react";
import SingleGallery from "./SingleGallery";
import {
  Button,
  ButtonGroup,
  Container,
  Dropdown,
  Spinner,
} from "react-bootstrap";

class HomeMain extends Component {
  state = {
    first: {
      obj: null,
      name: null,
    },
    second: {
      obj: null,
      name: null,
    },
    last: {
      obj: null,
      name: null,
    },
    search: {
      obj: null,
      name: null,
    },
    setSearchImput: "d-none",
    nomeDigitato: "",
    loading: true,
  };

  myFetch = (typeFetch, nameFatch) => {
    fetch(`http://www.omdbapi.com/?apikey=91c06893&s=${nameFatch}`)
      .then((risp) => risp.json())
      .then((dato) => {
        this.setState({ loading: false });
        return this.setState({
          [typeFetch]: {
            obj: dato.Search,
            name: nameFatch,
          },
        });
      });
  };
  componentDidMount() {
    this.myFetch("first", "harry potter");
    this.myFetch("second", "john wick");
    this.myFetch("last", "Lord of the Rings");
  }

  ricercaFilm = (e) => {
    this.myFetch("search", e.target.value);
    this.setState({ nomeDigitato: e.target.value });
  };

  render() {
    return (
      <>
        <main className="pb-3">
          <div className=" d-flex justify-content-between py-3 pb-5">
            <div class="d-flex gap-5">
              <h2 class="fw-bold ">TV Shows</h2>
              <Dropdown>
                <Dropdown.Toggle
                  variant="nero-puro"
                  id="dropdown-basic"
                  className="text-white rounded-0 border-white"
                >
                  Generes
                </Dropdown.Toggle>
                <Dropdown.Menu className=" bg-prova border-white  py-0 rounded-0">
                  <Dropdown.Item className="border-0 rounded-0 text-white w-100 btn btn-outline-light">
                    Horror
                  </Dropdown.Item>
                  <Dropdown.Item className="border-0 text-white rounded-0 w-100 btn btn-outline-light">
                    Triller
                  </Dropdown.Item>
                  <Dropdown.Item className="border-0 rounded-0 text-white w-100 btn btn-outline-light">
                    Fantasy
                  </Dropdown.Item>
                  <Dropdown.Item className="border-0 rounded-0 text-white w-100 btn btn-outline-light">
                    Comico
                  </Dropdown.Item>
                  <Dropdown.Item className="border-0 rounded-0 text-white w-100 btn btn-outline-light">
                    Giallo
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <ButtonGroup
              aria-label="esempio"
              className="align-items-center d-none d-sm-block"
            >
              <Button variant="outline-light" className="rounded-0 py-1 px-3">
                <i className="bi bi-search fs-6 "></i>
              </Button>
              <Button variant="outline-light" className="rounded-0 py-1 px-3">
                <i class="bi bi-text-left"></i>
              </Button>
              <Button variant="outline-light" className="rounded-0 py-1 px-3">
                <i class="bi bi-grid-fill "></i>
              </Button>
            </ButtonGroup>
          </div>
          <Container fluid className="justify-content-center d-flex">
            <input
              type="text"
              placeholder="cerca il tuo film"
              className="input-film"
              onChange={this.ricercaFilm}
            />
          </Container>
          <section className="d-flex flex-column gap-5">
            {this.state.nomeDigitato && (
              <SingleGallery
                name={this.state.search.name}
                risp={this.state.search.obj}
              />
            )}

            <SingleGallery
              name={this.state.first.name}
              risp={this.state.first.obj}
            />
            <SingleGallery
              name={this.state.second.name}
              risp={this.state.second.obj}
            />
            <SingleGallery
              name={this.state.last.name}
              risp={this.state.last.obj}
            />
          </section>
          {this.state.loading && (
            <div className="position-fixed top-0 start-0 bottom-0 end-0 loading-div">
              <Spinner animation="grow" variant="success" />
            </div>
          )}
        </main>
      </>
    );
  }
}

export default HomeMain;
