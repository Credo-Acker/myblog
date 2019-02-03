import React, { Component } from 'react';
import './Main.css';
import store from '../store/store.js';
import loading from "../imgs/loading.gif";
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      articles: store.getState().FEArticles.concat(store.getState().WXArticles)
    }
  }

  componentDidMount() {
    //懒加载
    let imgs = document.querySelectorAll('.tagimg');
    store.subscribe(() => {
      this.setState({
        articles: store.getState().FEArticles.concat(store.getState().WXArticles)
      })
    });

    window.onscroll = () => {
      imgs = document.querySelectorAll('.tagimg');
      this.loadImg(imgs);
    }
  }

  loadImg(arr) {
    let totleHeight = document.documentElement.scrollTop + document.documentElement.clientHeight;
    for (let i = 0; i < arr.length; i++) {
      if (this.getElementToPageTop(arr[i]) < totleHeight && !arr[i].isLoad) {
        arr[i].isLoad = true;
        ((i) => {
          setTimeout(() => {
            if(arr[i].dataset) { //兼容不支持data的浏览器
              this.aftLoadImg(arr[i], arr[i].dataset.src, i);
            } else {
              this.aftLoadImg(arr[i], arr[i].getAttribute("data-src"), i);
            }
          }, 200);
        })(i);
      }
    }
  }

  getElementToPageTop(el) {
    if (el.parentElement) {
      return this.getElementToPageTop(el.parentElement) + el.offsetTop;
    }
    return el.offsetTop;
  }

  aftLoadImg(obj, url, num) {
    let oImg = new Image();
    oImg.onload = function() {
      obj.src = oImg.src; //下载完成后将该图片赋给目标obj目标对象
    }
    oImg.src = url; //oImg对象先下载该图像
  }

  render() {
    return (
      <main className="Main itnone">
        <ul className="artcleList">
          {this.state.articles.map((item, index) => {
            return (
              <Link to={`/detail/${item.key}`} className="listLink" key={index}>
                <li className="listLi">
                  <img src={loading} data-src={item.tagImg} className="tagimg" />
                  <h3 className="articleName">{item.articleName}</h3>
                  <p className="digest">{item.digest}</p>
                  <p className="tag">分类：{item.tag.join(" ")}</p>
                  <p className="createTime">{item.createTime}</p>
                </li>
              </Link>
            )
          })}
        </ul>
      </main>
    );
  }
}

export default Main;
