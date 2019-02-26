import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    if (this.props.nav == "true") {
      return (
        <div className="realNavBar">
          <ul className="navUl">
            <li className="navLi">
              <span><Link to="/catalog/fe" className="a">我暂知道的技术</Link></span>
              <ul className="innerUl">
                <li className="innerLi"><Link to="/catalog/html5" className="a">HTML5</Link></li>
                <li className="innerLi"><Link to="/catalog/css3" className="a">CSS3</Link></li>
                <li className="innerLi"><Link to="/catalog/javascript" className="a">JavaScript</Link></li>
                <li className="innerLi"><Link to="/catalog/nodejs" className="a">Node.js</Link></li>
                <li className="innerLi"><Link to="/catalog/jsframe" className="a">JS框架</Link></li>
                <li className="innerLi"><Link to="/catalog/febeyond" className="a">前端之外</Link></li>
              </ul>
            </li>
            <li className="navLi">
              <span><Link to="/catalog/wx" className="a">你不知道的江湖</Link></span>
              <ul className="innerUl">
                <li className="innerLi">洞箫声起</li>
                <li className="innerLi">气蒸云梦</li>
                <li className="innerLi">东都惊变</li>
                <li className="innerLi">洞箫声起</li>
                <li className="innerLi">气蒸云梦</li>
                <li className="innerLi">东都惊变</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    } else {
      return (
        <div className="NavBar">
          <ul className="navUl">
            <li className="navLi">
              <span><Link to="/catalog/fe" className="a">我暂知道的技术</Link></span>
              <ul className="innerUl">
                <li className="innerLi"><Link to="/catalog/html5" className="a">HTML5</Link></li>
                <li className="innerLi"><Link to="/catalog/css3" className="a">CSS3</Link></li>
                <li className="innerLi"><Link to="/catalog/javascript" className="a">JavaScript</Link></li>
                <li className="innerLi"><Link to="/catalog/nodejs" className="a">Node.js</Link></li>
                <li className="innerLi"><Link to="/catalog/jsframe" className="a">JS框架</Link></li>
                <li className="innerLi"><Link to="/catalog/febeyond" className="a">前端之外</Link></li>
              </ul>
            </li>
            <li className="navLi">
              <span><Link to="/catalog/wx" className="a">你不知道的江湖</Link></span>
              <ul className="innerUl">
                <li className="innerLi">洞箫声起</li>
                <li className="innerLi">气蒸云梦</li>
                <li className="innerLi">东都惊变</li>
                <li className="innerLi">洞箫声起</li>
                <li className="innerLi">气蒸云梦</li>
                <li className="innerLi">东都惊变</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    }
  }
}

export default NavBar;
