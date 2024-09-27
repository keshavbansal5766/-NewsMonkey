import React, { Component } from "react";

export default class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0}}>
          <span className="badge rounded-pill bg-primary">{source}</span>
          </div>
        
          <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOrn2xftWd62LMUrgjxmQ_uJ0fusWflvZ_g&s" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><b>{title}...  <span className="badge bg-danger">New</span></b></h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {!author ? 'unknown' : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
