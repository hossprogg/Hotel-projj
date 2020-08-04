import React,{useContext} from 'react'
import {Hero} from '../components/Hero'
import {Banner} from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import RoomContainer from '../components/RoomContainer'

export const Rooms = () => {//why making Hero opening  and closing ??? while it was at first just closing

     /* const value = useContext(RoomContext)
    console.log(value) */  /* !!! this action applies onl when w ego to the route of room !! which is /rooms and only "/"*/
return (
<>
    <Hero hero="roomsHero">
        <Banner title="Our Rooms">
            <Link to="/" className="btn-primary">
                Return Home
            </Link>
        </Banner>
    </Hero>
    <RoomContainer/>
</>
    )
}
