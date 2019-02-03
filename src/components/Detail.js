import React, { Component } from 'react';
import './Detail.css';
import NavBar from '../components/NavBar.js';
import marked from 'marked';
import highlight from 'highlight.js';
import store from '../store/store.js';
import { Link } from 'react-router-dom';

class Detail extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      content: "",
      key: ""
    }
  }

  componentWillMount() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight: function(code) {
          return highlight.highlightAuto(code).value;
      }
    });

    fetch(`https://blog.credog.top/blog/detail`, {
      method: "post",
      mode: 'cors',
      body: JSON.stringify({key:this.props.match.params.key})
    }).then(res => {
        res.json().then(data => {
          this.setState({
            content: data.body,
            title: data.articleName
          })
        });
      }).catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <main className="Detail">
        <link href="https://cdn.bootcss.com/highlight.js/9.14.1/styles/atom-one-dark.min.css" rel="stylesheet" />
        <header className="header">
          <Link to="/" className="headimg"></Link>
          <div className="titilname">
            {this.state.title}
          </div>
        </header>
        <div id="article" dangerouslySetInnerHTML={{ __html: marked(this.state.content) }}>

        </div>
        <NavBar nav="true" />
      </main>
    );
  }
}

export default Detail;
