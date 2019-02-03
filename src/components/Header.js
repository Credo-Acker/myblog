import React, { Component } from 'react';
import './Header.css';
import store from '../store/store.js';

class Header extends Component {
  constructor(...args) {
    super(...args);
  }

  showMain() {
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    let innerHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let target = 0;
    if (scrollHeight - innerHeight < innerHeight) {
      target = (scrollHeight - innerHeight);
      this.toMain(target);
    } else {
      target = innerHeight;
      this.toMain(target);
    }
  }

  toMain(target) {
    let timer = null;
    let nowTop = document.documentElement.scrollTop;
    let speed = Math.ceil((target - nowTop) / 600);
    timer = setInterval(() => {
      nowTop = document.documentElement.scrollTop;
      if (target - nowTop > 1) {
        document.documentElement.scrollTop += 7;
      } else {
        clearInterval(timer);
        timer = null;
      }
    }, speed);
  }

  render() {
    return (
      <header className="Header">
        <div className="leftContent">
          <div className="headimg">

          </div>
          <div className="blogname blognamein">
            瑾影小轩
          </div>
          <div className="credo credoin">
            世路惯如此 我心尽悠然
          </div>
          <div className="showMain" onClick={this.showMain.bind(this)}>

          </div>
        </div>
        <div className="showBar" onClick={this.props.showRightBar}>
          分类
        </div>
      </header>
    );
  }
}

export default Header;
