import React from 'react';
import './App.css';


const Newsitems =(props)=> {
    

    

        let { title, description, url, urlToImage, author, date ,source} = props;

        return (
            <div className="my-3">
                <div className="card" >
                    <img src={urlToImage} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{title}
                            <span className = "position-absolute top-0 start-100 translate-middle badge rounded-pill " style={{zIndex:1,margin: "-1px 0 9px -50%",padding:"10px",background:"#419E66"}}>
                               {source}
                                <span className = "visually-hidden">unread messages</span>  </span>

                        </h5>
                        <p className="card-text">{description}</p>
                        <p className = "card-text"><small className = "text-body-primary" style={{color:"wheat"}}>By {author}</small></p>
                        <p className = "card-text"><small className = "text-body-primary" style={{color:"wheat"}} >{new Date(date).toGMTString()}</small></p>
                        <a href={url} rel="noreferrer" target='_blank' className="btn btn-sm " style={{background:"#419E66",color:"white"}}>Read more</a>
                    </div>
                </div>
            </div>
        )
    
}
export default Newsitems;
