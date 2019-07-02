/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NavBar from './components/NavBar';
import BottomNav from './components/BottomNav';
import Settings from './components/Settings';
import GradientBox from './components/GradientBox';
import VanillaTilt from 'vanilla-tilt';
import day from './static/svg/day.svg';
import night from './static/svg/night_time.svg';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      colors: [],
      count: 2,
      activeOption : 'About',
      type: "linear-gradient",
      style: "",
      dayFlag: true,
    }
    this.firstCall.bind(this);
    this.handleChange.bind(this);
    this.componentDidMount.bind(this);
  
    
  }

  firstCall() {
    fetch(`https://api.noopschallenge.com/hexbot?count=${this.state.count}`, {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        let values = data.colors;
        let colors=values.map((value)=>value["value"]);
        this.setState({
          colors
        })
        return colors;
      })
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
      
  }
  
  componentDidMount() {
    this.firstCall();
    VanillaTilt.init(document.querySelectorAll(".dynamic-shadow"),{
      max:25,
      speed:500,
      glare:true,
      scale: 1.2,
      'max-glare':0.5
    });
  }

  handleChange(e) {
    this.setState({
      count: e.target.value
    })
  }

  handleSelect(e) {
    this.setState({
      type: e.target.value
    })
  }

  handleActiveOption(e) {
    this.setState({
    activeOption : e.target.outerText
    })
  }

  render() {
    return (
  <section className={!this.state.dayFlag?'hero is-black is-fullheight':'hero is-white is-fullheight'}>
  {/* <!-- Hero head: will stick at the top --> */}
  <div className="hero-head">
  <NavBar timeFlag={this.state.dayFlag?"fas fa-lightbulb":"far fa-lightbulb"} onclick={()=>this.setState({dayFlag:!this.state.dayFlag})}/>
  </div>
  {/* <!-- Hero content: will be in the middle --> */}
  <div className="hero-body">
    <div className="container has-text-centered grid-centering">
      {this.state.activeOption==='Home' ?
       <GradientBox
        type={this.state.type} 
        colors={this.state.colors} 
        change={()=>this.firstCall()}/>
      : this.state.activeOption==='Settings' ?
      <Settings 
      colors={this.state.colors} 
      count={this.state.count} 
      handleChange={(e) => this.handleChange(e)} 
      handleSelect={(e) => this.handleSelect(e)} 
      submitCount={() => this.firstCall()}
      currentType={this.state.type}
      />: <section>
        <h1 className="is-size-1 is-family-sans-serif has-text-weight-bold">Love Gradients?</h1>
        <img src={this.state.dayFlag?day:night} width="300xp" height="300px" alt="This shows day or night!" className="dynamic-shadow"/>
        <p>If you want to learn about different type of gradients and experiment with them, then you are right place.</p>
        <p>Happy Experimenting!</p>
      </section>
      }
    </div>
  </div>

  {/* <!-- Hero footer: will stick at the bottom --> */}
  <BottomNav activeOption={this.state.activeOption} handleActiveOption={(e)=>this.handleActiveOption(e)}/>
</section>
    )
  }
}
