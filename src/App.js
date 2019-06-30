import React from 'react';
import NavBar from './components/NavBar';
export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      colors: {},
      count: 2
    }
    this.firstCall.bind(this);
    this.handleChange.bind(this);
  }

  firstCall() {
    fetch(`https://api.noopschallenge.com/hexbot?count=${this.state.count}`, {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        var colors = data.colors
        this.setState({
          colors
        })
      })
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }
  componentDidMount() {
    this.firstCall();
  }


  handleChange(e) {
    this.setState({
      count: e.target.value
    })
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <NavBar />
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                GradCam
      </h1>
              <h2 className="subtitle">
                {JSON.stringify(this.state.colors)}
              </h2>
              <input className="input" type="number" placeholder="Text input" onChange={(e) => this.handleChange(e)} />
              <button className="button" onClick={() => this.firstCall()} >Fetch Colors</button>
            </div>
          </div>
        </section>
      </div>

    )
  }
}