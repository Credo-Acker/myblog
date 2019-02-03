import React, { Component } from 'react';
import './Catalog.css';
import NavBar from '../components/NavBar.js';
import { Link } from 'react-router-dom';
import store from '../store/store.js';
import loading from "../imgs/loading.gif";

class Catalog extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      articles: []
    }
  }

  componentWillMount() {
    this.changeArticles(this.props.match.params.name);

    store.subscribe(() => {
      this.changeArticles(this.props.match.params.name);
    })
  }

  changeArticles(name) {
    let realArticles = [];

    switch (name) {
      case "fe":
        this.setState({
          articles: store.getState().FEArticles,
          title: "技术相关"
        })
        break;
      case "html5":
        for (let item of store.getState().FEArticles) {
          if (item.tag.includes("HTML5")) realArticles.push(item);
        }
        this.setState({
          articles: realArticles,
          title: "技术相关"
        })
        break;
      case "css3":
        for (let item of store.getState().FEArticles) {
          if (item.tag.includes("CSS3")) realArticles.push(item);
        }
        this.setState({
          articles: realArticles,
          title: "技术相关"
        })
        break;
      case "javascript":
        for (let item of store.getState().FEArticles) {
          if (item.tag.includes("JavaScript")) realArticles.push(item);
        }
        this.setState({
          articles: realArticles,
          title: "技术相关"
        })
        break;
      case "nodejs":
        for (let item of store.getState().FEArticles) {
          if (item.tag.includes("Node.js")) realArticles.push(item);
        }
        this.setState({
          articles: realArticles,
          title: "技术相关"
        })
        break;
      case "jsframe":
        for (let item of store.getState().FEArticles) {
          if (item.tag.includes("JS框架")) realArticles.push(item);
        }
        this.setState({
          articles: realArticles,
          title: "技术相关"
        })
        break;
      case "febeyond":
        for (let item of store.getState().FEArticles) {
          if (item.tag.includes("前端之外")) realArticles.push(item);
        }
        this.setState({
          articles: realArticles,
          title: "技术相关"
        })
        break;
      case "wx":
        this.setState({
          articles: store.getState().WXArticles,
          title: "我的武侠"
        })
        break;
      default:
        this.setState({
          title: "技术相关"
        })
        break;
    }
  }

  componentWillReceiveProps(nextProps) {
    this.changeArticles(nextProps.match.params.name);
  }

  render() {
    return (
      <div className="Catalog">
        <header className="header">
          <Link to="/" className="headimg"></Link>
          <div className="titilname">
            {this.state.title}
          </div>
        </header>
        <ul className="catalogList">
          {this.state.articles.map((item, index) => {
            return (
              <Link to={`/detail/${item.key}`} className="listLink" key={index}>
                <li className="listItem">
                  <img src={item.tagImg} data-src={item.tagImg} className="itemImg" />
                  <h3 className="itemName">{item.articleName}</h3>
                  <p className="itemDigest">{item.digest}</p>
                  <p className="itemTag">分类：{item.tag.join(" ")}</p>
                  <p className="itemTime">{item.createTime}</p>
                </li>
              </Link>
            )
          })}
        </ul>
        <NavBar nav="true" />
      </div>
    );
  }
}

export default Catalog;
