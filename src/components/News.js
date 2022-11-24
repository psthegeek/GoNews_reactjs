import React, { Component } from 'react'
import NewsCards from './NewsCards'
// import Slider from './slider/Slider'


export default class News extends Component {

  constructor(){
    super();
    console.log("Hello I am a Construtor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  

    async componentDidMount(){
        console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0f310e74bf714a99ab616f4f0f838516`;
        let data = await fetch(url);
        console.log(data)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({articles:parseData.articles,totalResults: parseData.totalResults}) 
    }

  handleNextClick = async () => {
      console.log("Next");
      if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      }
      else {
          let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0f310e74bf714a99ab616f4f0f838516`;
          let data = await fetch(url);
          let parsedData = await data.json()
          console.log(parsedData);
          this.setState({
              page: this.state.page + 1,
              articles: parsedData.articles,
          })
      }
  }

   handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0f310e74bf714a99ab616f4f0f838516`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
    })
}
   
  render() {
    return (
      <>
        <div className="container my-3">
          <h1>GoNEWS - Top Headlines</h1>
            <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsCards title={element.title?element.title.slice(0,35):""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
            </div>
        </div>
    </>
    )
  }
}
