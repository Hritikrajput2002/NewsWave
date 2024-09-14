import { useEffect, useState } from 'react';
import React from 'react'
import Newsitem from './newsitem'
import Spinner from './spinner';
import InfiniteScroll from "react-infinite-scroll-component";


 const News=(props)=> {
    // article=[
    //     {
    //     "source": {
    //     "id": "usa-today",
    //     "name": "USA Today"
    //     },
    //     "author": "Jordan Mendoza, Lorenzo Reyes, Cydney Henderson",
    //     "title": "March Madness live scores, updates: NCAA bracket, results, highlights - USA TODAY",
    //     "description": "Top seed North Carolina is back on the court today for the second round while No. 14 Oakland and No. 11 Duquesne try to pull off upsets again.",
    //     "url": "https://www.usatoday.com/story/sports/ncaab/2024/03/23/march-madness-ncaa-tournament-second-round-scores-highlights/73020624007/",
    //     "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/22/USAT/73069953007-usatsi-22827238.jpg?crop=3628,2041,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
    //     "publishedAt": "2024-03-23T18:18:59Z",
    //     "content": "The NCAA tournament for the men continues today with eight second-round March Madness games. Top seed North Carolina takes on No. 9 Michigan State this evening. The team with Thursdays biggest upset … [+16856 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "New York Post"
    //     },
    //     "author": "Dana Kennedy",
    //     "title": "BBC insider denies Kate Middleton cancer announcement video was edited: report - New York Post ",
    //     "description": "A source at BBC Studios insisted to The Mirror that Middleton’s video was not edited, nor did it have any editorial input into her remarks.",
    //     "url": "https://nypost.com/2024/03/23/us-news/bbc-insider-denies-kate-middleton-cancer-reveal-video-was-edited/",
    //     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/03/2024-shows-britains-kate-princess-78874090.jpg?quality=75&strip=all&w=1024",
    //     "publishedAt": "2024-03-23T18:10:00Z",
    //     "content": "An insider denied allegations that the video of Kate Middleton announcing her cancer diagnosis was edited after the princess recently came under fire for doctoring a Mother’s Day photo of herself wit… [+2939 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "espn",
    //     "name": "ESPN"
    //     },
    //     "author": "Adam Teicher",
    //     "title": "What the L'Jarius Sneed trade means for the Kansas City Chiefs - ESPN",
    //     "description": "The Chiefs will receive a 2025 third-round pick and a 2024 seventh-round pick swap for the cornerback.",
    //     "url": "https://www.espn.com/nfl/story/_/id/39794007/what-ljarius-sneed-trade-means-kansas-city-chiefs",
    //     "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0305%2Fr1300492_1296x729_16%2D9.jpg",
    //     "publishedAt": "2024-03-23T18:00:41Z",
    //     "content": "KANSAS CITY, Mo. -- The Kansas City Chiefs began planning for the eventual loss of cornerback L'Jarius Sneed two years ago when they picked Trent McDuffie in the first round and selected three more c… [+2691 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //     },
    //     "author": "Clare Foran",
    //     "title": "Biden signs government funding bill - CNN",
    //     "description": "President Joe Biden on Saturday signed into law the $1.2 trillion legislation that completes the funding of federal agencies through the fiscal year, which ends September 30.",
    //     "url": "https://www.cnn.com/2024/03/23/politics/biden-government-funding-bill-congress/index.html",
    //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-03-19t212923z-984337648-rc29p6amqbbq-rtrmadp-3-usa-election-biden.JPG?c=16x9&q=w_800,c_fill",
    //     "publishedAt": "2024-03-23T17:51:00Z",
    //     "content": "President Joe Biden on Saturday signed into law the $1.2 trillion legislation that completes the funding of federal agencies through the fiscal year, which ends September 30.\r\nThe House passed the pa… [+2171 chars]"
    //     }]


              const[articles,setarticles]= useState([])  ;
              const[pageno,setpageno]= useState(1) ;
              const[pagesize,setpagesize]= useState(6);
              const[totalResults,settotalResults]= useState(0);
              const[loading,setloading]= useState(false);
               

              useEffect(() => {
                const fetchData = async () => {
                  console.log(`component start${pageno}`);
                  props.progress(10);
                  let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=06dd5444d2c3447db170513d9a4541e4&pagesize=${pagesize}&page=${pageno}`;
                  setloading(true);
                  let data = await fetch(URL);
                  props.progress(50);
                  let parseddata = await data.json();
                  props.progress(70);
                  setloading(false);
                  console.log(parseddata);
                  setarticles(parseddata.articles);
                  settotalResults(parseddata.totalResults);
                  props.progress(100);
                };
              
                fetchData();
              }, []);
              
             // https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=06dd5444d2c3447db170513d9a4541e4
 
    // fetchMoreData = async() => {
    //       await this.setState({pageno: this.state.pageno + 1});
    //       console.log(`fetch start${this.state.pageno}`);
    //         let URL=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=06dd5444d2c3447db170513d9a4541e4&page=${this.state.pageno}&pagesize=${this.state.pagesize}`;
    //         this.setState({loading:true});
    //         let data=await fetch(URL);
    //         let parseddata=await data.json();
    //         this.setState({loading:false});
    //         console.log(parseddata);
    //       this.setState({ articles: this.state.articles.concat(parseddata.articles) ,totalResults:parseddata.totalResults})
    // };
    const fetchMoreData = async () => {
      setpageno(pageno + 1);
          let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=06dd5444d2c3447db170513d9a4541e4&page=${pageno+1}&pagesize=${pagesize}`;
          console.log(`${pageno}`);
          setloading(true);
          let data=await fetch(URL);
          let parseddata=await data.json();
          setloading(false);
          console.log(parseddata);
          setarticles(articles.concat(parseddata.articles)) ;
          settotalResults(parseddata.totalResults);
              
    
    };
    // playprevious=async()=>{
    //     let URL=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d69db245ef3646518ade87a3d7b06c9b&pagesize=${this.state.pagesize}&page=${this.state.pageno - 1}`;
    //     this.setState({loading:true});
    //     let data=await fetch(URL);
    //     let parseddata=await data.json();
    //     this.setState({loading:false});
    //     console.log(parseddata);
    //    this.setState({ pageno:this.state.pageno-1,articles: parseddata.articles})
    //    console.log(this.state.pageno);

    // }
    // playnext=async()=>{
    //     let URL=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d69db245ef3646518ade87a3d7b06c9b&pagesize=${this.state.pagesize}&page=${this.state.pageno + 1}`;   
    //     this.setState({loading:true});
    //     let data=await fetch(URL);
    //     let parseddata=await data.json();
    //     this.setState({loading:false});
    //     console.log(parseddata);
    //    this.setState({ pageno:this.state.pageno+1,articles: parseddata.articles,})
    //    console.log(this.state.pageno);
       

    // }

    return (
      <div>
        {/* {this.state.loading && <Spinner/>} */}
        <h1>NEWS Headlines</h1>buisness affairs


        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
              <div className="row ">
                  {
                      articles.map((element,index)=>{
                          return  <div className='col-md-4  my-4' key={index}>  <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}    author={element.author} time={element.publishedAt}   image={element.urlToImage?element.urlToImage:"https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=1024x1024&w=is&k=20&c=-AdIwLn-nIYlgctc95CZuJHnkku_ia-f8A8m2LFwl2A="} newsurl={element.url}/>
                                  </div>

                      })
                  }
              </div>
        </div>
        </InfiniteScroll>


        {/* <div className="d-flex justify-content-between px-4">
                    <button type="button " disabled={this.state.pageno<=1} className="btn btn-info" onClick={this.playprevious}>Previous &larr;</button>
                    <button type="button " disabled={this.state.pageno+1>Math.ceil(this.state.totalResults/this.state.pagesize)} className="btn btn-info" onClick={this.playnext}>Next &rarr;</button>
        </div>
        */}
      </div>
  )
}
      

export default News;