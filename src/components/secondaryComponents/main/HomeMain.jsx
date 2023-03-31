import { Component } from "react";
import SingleGallery from "./SingleGallery";
import { Last } from "react-bootstrap/esm/PageItem";

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
  };

  myFetch = (typeFetch, nameFatch) => {
    fetch(`http://www.omdbapi.com/?apikey=91c06893&s=${nameFatch}`)
      .then((risp) => risp.json())
      .then((dato) => {
        console.log(dato);
        return this.setState({
          [typeFetch]: {
            obj: dato.Search,
            name: nameFatch,
          },
        });
      });
    // console.log(risp);

    // ;

    console.log(this.state);
  };
  componentDidMount() {
    this.myFetch("first", "harry potter");
    this.myFetch("second", "john wick");
    this.myFetch("last", "Lord of the Rings");
  }

  render() {
    return (
      <>
        <main className="pb-3">
          <div class=" d-flex justify-content-between py-3 pb-5">
            <div class="d-flex gap-5">
              <h2 class="fw-bold ">TV Shows</h2>
              <div class="dropdown">
                <button
                  class="btn btn-nero-puro rounded-0 btn-outline-nero-puro border-white dropdown-toggle text-white"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Generes
                </button>
                <ul class="dropdown-menu  bg-prova border-white py-0 rounded-0">
                  <li>
                    <button
                      class="border-0 rounded-0 w-100 btn btn-outline-light"
                      type="button"
                    >
                      Horror
                    </button>
                  </li>
                  <li>
                    <button
                      class="border-0 rounded-0 w-100 btn btn-outline-light"
                      type="button"
                    >
                      Triller
                    </button>
                  </li>
                  <li>
                    <button
                      class="border-0 rounded-0 w-100 btn btn-outline-light"
                      type="button"
                    >
                      Fantasy
                    </button>
                  </li>
                  <li>
                    <button
                      class="border-0 rounded-0 w-100 btn btn-outline-light"
                      type="button"
                    >
                      Comico
                    </button>
                  </li>
                  <li>
                    <button
                      class="border-0 rounded-0 w-100 btn btn-outline-light"
                      type="button"
                    >
                      Giallo
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="btn-group align-items-center "
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                class="btn btn-outline-light rounded-0 py-1 px-3"
              >
                <i class="bi bi-text-left"></i>
              </button>
              <button
                type="button"
                class="btn btn-outline-light rounded-0 py-1 px-3"
              >
                <i class="bi bi-grid-fill "></i>
              </button>
            </div>
          </div>

          <section className="d-flex flex-column gap-5">
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
        </main>
      </>
    );
  }
}

export default HomeMain;
