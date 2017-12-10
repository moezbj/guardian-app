import React, { Component } from 'react';
import axios from 'axios'
import './Search.css'
class Serach extends Component {
  constructor(props) {
  super(props);
  this.state = {
    posts: [],
    inputValue:''
  }
}
onGet(event){
  let newValue =event.target.value
  this.setState({
    inputValue: newValue,
  })

}
searchNews() {
  console.log(this.state.inputValue);
   axios.get('https://content.guardianapis.com/search?q='+
      this.state.inputValue +'&api-key=test&show-fields=starRating,headline,thumbnail')
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
    <div>
      <div className="main-div">
        <form className="formSearch">
          <input className="form-control mr-sm-2"  placeholder="Search" onChange={this.onGet.bind(this)}/>
          <button type="button" className="btn btn-success" onClick={this.searchNews.bind(this) } > Search</button>
        </form>
        <div className="results">
          <h2>Last Results:</h2>
            <div >{
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
        </div>
      </div>
    </div>
    );
  }
}
export default Serach;
