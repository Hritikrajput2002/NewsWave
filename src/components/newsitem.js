import React from 'react'

const Newsitem=(props)=>  {
  
    let {title,description,author,time,image,newsurl}=props;
    return (
        <div className="d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(time).toGMTString()}</small></p>

                    <a href={newsurl} target="_blank" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
  
}
export default Newsitem;


