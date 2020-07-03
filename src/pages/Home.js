import React from 'react'
import { Hero } from '../components/Hero'
import { Banner } from '../components/Banner'
import {Link} from 'react-router-dom'

 export const Home = () => {
    return <Hero>
        <Banner title="luxurious rooms" subtitle="Deluxe rooms starting at 299$">
            <Link exact path to="/rooms" className="btn-primary">
                Our Rooms
            </Link>
        </Banner>
    </Hero>//put it at the same ligne
}
