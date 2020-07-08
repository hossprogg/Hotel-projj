 import React,{useState} from 'react'
import { Title } from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export const Services = () => {
    const [serv, setserv] = useState({
        services : [
            {
                icon : <FaCocktail/>,//importing icons as tags
                title : "free cocktails",
                info :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon : <FaHiking/>,
                title : "free cocktails",
                info :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon : <FaShuttleVan/>,
                title : "free cocktails",
                info :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon : <FaBeer/>,
                title : "free cocktails",
                info :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"

            },
        ]
    })
    return (
        <section className="services">
            <Title title="services"/>
            <div className="services-center">
                {
                    serv.services.map((item,index) =>{
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
