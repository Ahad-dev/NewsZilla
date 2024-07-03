import React,{useEffect,useState} from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
const News=(props)=> {
    // articles  = undefined \
   const [articles, setarticles] = useState([])
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
   const updateNews = async()=> {
    props.setProgress(10);
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b58e8f81a4634b7181b85b0a99573ef3&page=${page}&pageSize=${props.pageSize}`)
    props.setProgress(30)
    setLoading(loading);
    let parseData = await data.json();
    props.setProgress(70);
    setarticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
    
}



    useEffect(()=>{
document.title = ` ${capitalizeFirstLetter(props.category)} - NewsZilla`

        updateNews();
         // eslint-disable-line no-console 
    },[])
    const fetchMoreData = async () => {
        setPage(page + 1 )
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b58e8f81a4634b7181b85b0a99573ef3&page=${page}&pageSize=${props.pageSize}`)
        let parseData = await data.json();
        setarticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
       
    };

        return (
            <>
                <h2 className='my-3' style={{ textAlign: 'center',fontSize: "xxx-large",color: "white"}}><strong>NewsZilla - {capitalizeFirstLetter(props.category)} Top-Headlines</strong></h2>

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !==totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row my-2" >
                            {articles.map((element) => {
                                return <div className="col-md-4 my-2" key={element.url ? element.url : ""}>
                                    <Newsitems title={element.title ? element.title : "India and Pakistan set to resume arguably the biggest rivalry in cricket"} description={element.description ? element.description : "f someone tells you there are bigger rivalries than India vs Pakistan at the 2023 Asia Cup, do not trust themOf."} url={element.url ? element.url : "https://www.espncricinfo.com/series/asia-cup-2023-1388374/india-vs-pakistan-3rd-match-group-a-1388394/match-preview"} urlToImage={element.urlToImage ? element.urlToImage : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960/lsci/db/PICTURES/CMS/329200/329229.3.jpg"} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>


        )
    }

export default News;