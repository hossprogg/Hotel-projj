import React from 'react'
import { RoomFIlter } from './RoomFIlter'
import { RoomList } from './RoomList'
import {WithRoomConsumer} from '../Context'
import { Loading } from './loading'


function RoomContainer({context}){
    const {loading,sortedRooms,rooms} = context;

    if(loading){
        return <Loading/>
    }
    else{
        return(
            <div>
            slm from room comtainer
                <RoomFIlter rooms={rooms}/>
                <RoomList rooms={sortedRooms}/>
            </div>
        )
    }
}

export default WithRoomConsumer(RoomContainer)












/* import React from 'react'
import { RoomFIlter } from './RoomFIlter'
import { RoomList } from './RoomList'
import {RoomConsumer} from '../Context'
import { Loading } from './loading'
export const RoomContainer = () => {
    return (
        <RoomConsumer>
        {   value =>{
                const {loading,sortedRooms,rooms } = value
                if(loading) {
                    return <Loading/>
                }
                else {
                    return(
                        <div>
                        slm from room comtainer
                            <RoomFIlter rooms={rooms}/>
                            <RoomList rooms={sortedRooms}/>
                        </div>
                    )
                }   
            }
        }
        </RoomConsumer>
    )
}
 */