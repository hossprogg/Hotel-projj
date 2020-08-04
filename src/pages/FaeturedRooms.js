import React,{useContext} from 'react'
import { RoomContext } from '../Context'
import { Loading } from '../components/loading'
import { Room } from '../components/Room'
import {Title} from '../components/Title'

export const FaeturedRooms = () =>{//we can make it outside of the return in the class base compo
    let {featuredRooms :roms,loading} = useContext(RoomContext)//we used let so we can t reassign room when it s constant  
    roms = roms.map(rom=>{
        return <Room key={rom.id} room={rom}/>
    })
    
    return (//loading inside the featured room and when i only wrap feturedroo inside the context provider it applies for loading as well
        <section className="featured-rooms">
            <Title title="featured Rooms"/>{/* the passing value pbject name should be the same one of the props name on the component */}
            <div className="featured-rooms-center">
                {loading ? <Loading/> : roms}
            </div>
        </section>
    )
}