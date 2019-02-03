import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import FirstScreen from './FirstScreen.js';
import './Index.css';

let timer = null;

class Index extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      rightNav: true
    }
  }

  componentDidMount() {
    let itnone = document.querySelectorAll(".itnone");
    setTimeout(function () {
      for (let i = 0; i < itnone.length; i++) {
        itnone[i].className = itnone[i].className.replace(/itnone/, "");
      }
    }, 100);

    window.addEventListener('scroll', (e)=> {
      if (document.documentElement.scrollTop > 0 && this.state.rightNav == true) {
        this.showRightBar();
      }
    });
  }

  componentWillUnmount() {
    clearTimeout(timer);
    timer = null;
  }

  showRightBar() {
    if (this.state.rightNav === true) {
      clearTimeout(timer);
      document.querySelector('.leftContent').className = "leftContent leftContent2";
      document.querySelector('.blogname').className = "blogname blogname2";
      document.querySelector('.credo').className = "credo credo2";
      document.querySelector('.showBar').className = "showBar showbarin";
      document.querySelector('.showMain').className = "showMain showMain2";
      document.querySelector('.NavBar').className = "NavBar NavBarin";
      document.querySelector('.Main').className = "Main MainLeft";
      timer = setTimeout(() => {
        document.querySelector('.showMain').className = "showMain showMainwave1";
        clearTimeout(timer);
      }, 1000);
      this.setState({
        rightNav: false
      })
    } else if (this.state.rightNav === false) {
      clearTimeout(timer);
      document.querySelector('.leftContent').className = "leftContent leftContent3";
      document.querySelector('.blogname').className = "blogname blogname3";
      document.querySelector('.credo').className = "credo credo3";
      document.querySelector('.showBar').className = "showBar showbarout";
      document.querySelector('.showMain').className = "showMain showMain3";
      document.querySelector('.NavBar').className = "NavBar NavBarout";
      document.querySelector('.Main').className = "Main";
      timer = setTimeout(() => {
        document.querySelector('.showMain').className = "showMain showMainwave2";
        clearTimeout(timer);
      }, 1000);
      this.setState({
        rightNav: true
      })
    }
  }

  render() {
    return (
      <div className="Index">
        <Header showRightBar={this.showRightBar.bind(this)} />
        <NavBar />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Index;
