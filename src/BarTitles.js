import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import Sports from "./pages/Sports";
import Politics from "./pages/Politics";
import Music from "./pages/Music";
import Movies from "./pages/Movies";



class BarTitles extends Component {
  constructor(props) {
  super(props);
  this.state = {
    posts: [],
    politcs:'Politics',
    music:'Music',
    movies:'Movies',
    sports:'Sports'
  }
  }

  searchNews1(value) {
    console.log(this.state.Value);
    axios.get('https://content.guardianapis.com/search?q='+
       this.state.value +'&api-key=test&show-fields=starRating,headline,thumbnail')
             .then(response => {
         // console.log(response.data.response.results)
         this.setState({ posts: response.data.response.results });
          console.log(this.state.posts)
       })
       .catch(function (error) {
         console.log(error);
       });
  }

  render() {
      return (
    <Router>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark nav justify-content-center" >

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav navbar justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/pages/Politics"  onClick={() =>this.searchNews1(this.state.politics)} >Politics</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/pages/Sports"onClick={() =>this.searchNews1(this.state.sports)} >Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/Music" onClick={() =>this.searchNews1(this.state.music)} >Music</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/Movies" onClick={() =>this.searchNews1(this.state.movies)} >Movies</Link>
            </li>
          </ul>
        </div>

              <Route path="/pages/Sports" component={Sports} />
              <Route exact path="/pages/Politics" component={Politics} />
              <Route path="/pages/Music" component={Music} />

              <div>
              {
                this.state.posts.map((m,i)=>{
                      return(
                              <div className="card" >
                                <img className="card-img-top" src={m.fields.thumbnail} alt="Card pic cap" />
                                <div className="card-body">
                                  <h4 className="card-title">{m.webTitle}</h4>
                                  <p className="card-text"></p>
                                  <button type="button" className="btn btn-outline-secondary">Show more data</button>
                                </div>
                              </div>
                          )
                })}
              </div>
          </nav>

        </Router>


    )
  }
}
export default BarTitles;
