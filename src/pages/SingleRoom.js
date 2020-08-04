import React,{useState,useContext} from 'react'
import defaultBcg from '../images/room-1.jpeg'
import {RoomContext} from '../Context'
import {Link} from 'react-router-dom'
import {Hero} from '../components/Hero'
import {Banner} from '../components/Banner'
import StyledHero from '../components/StyledCompo'


export const  SingleRoom = (props) => {
    const [single,setsingle]= useState({
        slug : props.match.params.slug,
        defaultBcg
    })

    const {getRoom} = useContext(RoomContext)
    const room = getRoom(single.slug)

    if(!room){ //else if u referesh u gonna get an error 
        return (
            <div className="error">
            <h3>No such Room could be found</h3> 
            <Link  to="/rooms" className="btn-primary">
                Back to ROoms collection 
            </Link>
            </div>
        )
    }//why ternary operator doesn t work here

    const { name,size,price,extras,breakfast,pets,images,capacity,description } = room  
    const [mainImg , ...defaultimg] = images

    return (//initially it would be undefined when u refresh 
        <>
        <StyledHero img={mainImg || single.defaultBcg}>
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">
                    Back to Rooms
                </Link> 
            </Banner>
       </StyledHero>

       <section className="single-room">{/*both of the divs should be nested inside the same block so we can use divide grid between em  */}

            <div className="single-room-images">
                {
                    defaultimg.map((item,index)=>{
                        return <img key={index} src={item} alt={name} alt={name}/> //in front of it directly
                    })
                }
            </div>

            <div className="single-room-info">

                {<article className="desc">
                    <p>
                        {description}
                    </p>
                </article> }


                <article className="info">
                    <h3>Info</h3>
                    <h6>price : ${price}</h6>
                    <h6>size : ${size} SQFT</h6>
                    <h6>
                        max capacity : {    //here with dollar sign and quotes and there not cause here we r writing also near to the variable
                            capacity > 1 ? `${capacity} people` : `${capacity} person`
                        }
                    </h6>

                    <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                    <h6>{breakfast && "free breakfast included"}</h6>{/* if breakfast is false => nothing would be rendered  */}
                    
                </article>

            </div>
        </section>

        <section className="room-extras">
            <h6>Extras</h6>
            <ul className="extras">
                {extras.map((item,index)=>{
                    return <li key={index}>- {item}</li>
                })}
            </ul>
        </section>

       </>
    )
}
