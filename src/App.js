import React, { Component } from 'react';
import './App.css';
import Index from './components/Index.js';
import Catalog from './components/Catalog.js';
import Detail from './components/Detail.js';
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom';
import store from './store/store.js';

class App extends Component {
  constructor(...args) {
    super(...args);

    fetch(`https://blog.credog.top/blog/articles`, {
      method: "post",
      mode: 'cors'
    }).then(res => {
        res.json().then(data => {
          for (let item of data.WXArticles) {
            item.tag = item.tag.substring(1, (item.tag.length - 1)).split(", ");
          }
          for (let item of data.FEArticles) {
            item.tag = item.tag.substring(1, (item.tag.length - 1)).split(", ");
          }
          store.dispatch({
            type: "CHANGE_ARTICLES",
            WXArticles: data.WXArticles,
            FEArticles: data.FEArticles
          })
        });
      }).catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <Router className="App">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/catalog/:name" component={Catalog} />
            <Route path="/detail/:key" component={Detail} />
          </Switch>
      </Router>
    );
  }
}

export default App;
