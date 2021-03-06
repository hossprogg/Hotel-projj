 import React from 'react'
 import defaultImg from '../images/room-1.jpeg'
 import {Link} from 'react-router-dom'
 import propTypes from 'prop-types'
 export const Room = ({room}) => {
     const {images,slug,price,name} = room
     return (
         <article>
            <div className="img-container">
                <img src={images[0]||defaultImg } alt="sigle room"/>
            <div className="price-top">
                <h6>${price}</h6>
                <p>per night</p>
            </div>
            <Link to={`/rooms/${slug}`} className="btn-primary room-link">
            Features
            </Link>
            </div>
            <p className="room-info">{name}</p>
         </article>
     )
 }
 
 React.propTypes ={
    room: propTypes.shape({     
        name:propTypes.string.isrequired,
        slug:propTypes.string.isrequired,
        images:propTypes.string.isrequired,
        name:propTypes.string.isrequired
    }) 
 }