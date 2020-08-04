import React from 'react'
import {Room} from './Room'

export const RoomList = ({rooms}) => {
    if(rooms.length === 0){//why thrree exactly 
        return (
            <div className="empty-search">
            <h3>unfortunately no room matched your search parameters </h3>
            </div>
        )
    }
    return(
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item =>{
                        return <Room key={item.id} room={item}/>
                    })
                }
            </div>
        </section>
    )

    
}