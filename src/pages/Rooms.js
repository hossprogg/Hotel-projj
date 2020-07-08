import React,{useContext} from 'react'
import {Hero} from '../components/Hero'
import {Banner} from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'

export const Rooms = () => {//why making Hero opening  and closing ??? while it was at first just closing
    const value = useContext(RoomContext)
    console.log(value)

/* const value = useContext(RoomContext)
console.log(value.name) 
 */
return (<Hero hero="roomsHero">
        <Banner title="Our Rooms">
            <Link to="/" className="btn-primary">
                Return Home
            </Link>
        </Banner>
    </Hero>)
}
