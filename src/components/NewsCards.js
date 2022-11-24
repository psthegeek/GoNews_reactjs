import React, { Component } from 'react'

export default class NewsCards extends Component {
 
  render() {
    let {title,description,imageUrl, newsUrl} = this.props;
    return (
     <>
            <div className="card m-3" style={{width: "18rem"}}>
            <img className="card-img-top " src={!imageUrl?"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg":imageUrl} alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
     </>
    )
  }
}
