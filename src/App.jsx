import React, { Component } from 'react';
import api from './api';
import styles from './style.css'

class App extends Component {
  state = {
    cats: [],
  };

  componentDidMount() {
    api.getCats().then(cats => this.setState({ cats }));
  }

  handleSubmit = (cat) => {
    cat.preventDefault();

    const { name, img } = cat.target;

    api.addCat({
      name: name.value,
      img: img.value,
    })
      .then(cats => this.setState({ cats }));
  };

  render() {
    return (
      <div className="container">
        <div className="App">
          <div className="jumbotron">

            <div className="display-3">
              <h2>Contact Manager</h2>
            </div>

              <form className="form" onSubmit={this.handleSubmit}>
                <fieldset>
                  <legend className="lead">Add a Cat</legend>
                  <ul id="catNameListItem">
                    <li>
                      <label className="catName" htmlFor="name">Name</label>
                      <input className="catInput" name="name" id="name" />
                    </li>
                    <li>
                      <label className="catName" htmlFor="img">Url to Image</label>
                      <input className="catInput" name="img" id="img" />
                    </li>
                    <li>
                      <button>Add Cat</button>
                    </li>
                  </ul>
                </fieldset>
              </form>
            </div>

            <div className="row marketing">
              <div className="col-lg-6">
              {
                this.state.cats &&
                <div className="row">
                  <ul className="catListItem">
                    {this.state.cats.map(cat => (
                      <li key={cat.id}>
                        Name: {cat.name}
                        Image: <img className="catImage" src={cat.img} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
              }
              </div>
              <div className="col-lg-6">
              </div>
            </div>

            <div className="footer">
            </div>
        </div>
      </div>  
    );
  }
}

export default App;
