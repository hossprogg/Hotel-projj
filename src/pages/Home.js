import React,{useContext} from 'react'
import { Hero } from '../components/Hero'
import { Banner } from '../components/Banner'
import {Link} from 'react-router-dom'
import { Services } from '../components/Services'
import { RoomContext } from '../Context'
import { FaeturedRooms } from './FaeturedRooms'
    //why is it rendering two222 times ?


 export const Home = () => {
    const value = useContext(RoomContext)
    const { loading } = value

    return(
        <>
        {loading ? (
            <div>loading</div>
        ) : (
            <div>
        <Hero>
            <Banner title="luxurious rooms" subtitle="Deluxe rooms starting at 299$">
                <Link to="/rooms" className="btn-primary">
                    Our Rooms
                </Link>
            </Banner>
        </Hero>
      <Services/>
      <FaeturedRooms/>
      </div>
    )}
    </>
)
 }
