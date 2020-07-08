import React,{useState,createContext, useEffect} from 'react'
import items from './data'//there is no name of object there but anonyme object exported so it takes the name that u give it to it in the requirement

export const RoomContext = createContext()//can t export defaultly befor it 
 const ContextProvider = (props) => {

        const [cont, setcont] = useState({
        name : 'bro',
        rooms :[],
        sortedRooms : [],
        featuredRooms : [],
        loading : true
    })
//consolelog here fires befor the one of the home component 
//it has rendered 
//then it 
    useEffect(() =>{
        let rooms = formatData(items)//i collected all the infos about all rooms 
        let featuredRooms = rooms.filter(room => room.featured === true )
        let name = "hoss" //RQ have to make a new variable here to replace the older state object even it has the same name  
        setcont({
            name,
            rooms,
            featuredRooms :featuredRooms,
            sortedRooms : rooms,
            loading :  false
        })
    },[])//this runs only one time and don t depends on anything
    


    function formatData(items){
        let tempItems = items.map(item=>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)//what is this 
            let room = {...item.fields,images,id}
            return room
        })
        return tempItems
    }
    return (
    <RoomContext.Provider value={{...cont}}>
            {props.children} 
        </RoomContext.Provider>
    )
}

export default ContextProvider