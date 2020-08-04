import React,{Component,createContext} from 'react'
import items from './data'//there is no name of object there but anonyme object exported so it takes the name that u give it to it in the requirement

export const RoomContext = createContext()//can t export defaultly befor it 
 
 class ContextProvider extends Component {
   
    //consolelog here fires befor the one of the home component 
    //it has rendered
    //then it 

    state = {
        rooms: [],//contain data 
        sortedRooms: [],//in which we can make changes of data 
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity : 1,
        maxPrice : 0,
        MinPrice : 0,
        maxSize : 0,
        minSize : 0,
        breakfast : false,
        pets : false
    }

        //this runs only one time and don t depends on anything

            componentDidMount(){//how you want your state to look after certain variables change.
                let rooms = this.formatData(items)//i collected all the infos about all rooms 
                let featuredRooms = rooms.filter(room => room.featured === true )
                let name = "hoss" //RQ have to make a new variable here to replace the older state object even it has the same name 
                let maxPrice = Math.max(...rooms.map(item => item.price))
                let maxSize = Math.max(...rooms.map(item => item.size))
                this.setState({
                    name,
                    rooms,
                    featuredRooms : featuredRooms,//cause we created a new var so we assing it fully and hard code it   
                    sortedRooms : rooms,
                    loading :  false,//initially true and spinnig appear and once CDM fires ir become false and real data appear instead  
                    price : maxSize,
                    maxPrice,
                    maxSize
                })
            }

             formatData(items){//meha l rii7 !! no "function in front of it"

                let tempItems = items.map(item => {
                    let id = item.sys.id
                    let images = item.fields.images.map(image => image.fields.file.url)//what is this 
                    let room = {...item.fields,images,id}
                    return room
                })
                return tempItems
            }

            getRoom = (slug)=>{
                let tempRooms = [...this.state.rooms]//spread operator to spread all the rooms as an array of objects 
                const room = tempRooms.find(room => room.slug === slug)//.find is different from .filter cause find gives the first match and return an object and can be applied on an objects instead filter applies only on arrrays and gives arrays
                return room
            }

            handlechange = event =>{
                const target = event.target
                const value = target.type === 'checkbox' ? target.checked : target.value
                const name = event.target.name
                this.setState({
                    [name] : value
                },this.filterRooms)
            }
         
            filterRooms = ()=>{
                let{
                    rooms,type,capacity,price,minSize,maxSize,breakfast,pets
                } = this.state 
                let tempRooms = [...rooms]// one only complex object making it an array of sous object
                capacity = parseInt(capacity)//why is these necessary 
                price = parseInt(price)
                //Filter by Type
                if(type !== 'all'){
                    tempRooms = tempRooms.filter(room => room.type  === type) 
                }
                //FIlter by capacity 
                if(capacity !==1){
                    tempRooms = tempRooms.filter(room => room.capacity >= capacity)
                }

                tempRooms = tempRooms.filter(room => room.price <= price)
                tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize )

                if(breakfast){
                    tempRooms = tempRooms.filter(room => room.breakfast === true)
                }

                if(pets){
                    tempRooms = tempRooms.filter(room => room.pets === true)
                }

                this.setState({
                    sortedRooms : tempRooms
                })
            }

        render(){
            return(
                <RoomContext.Provider value={{...this.state,getRoom : this.getRoom,handlechange : this.handlechange }}>
                        {this.props.children} 
                </RoomContext.Provider>
            )
    }
} 

export const RoomConsumer = RoomContext.Consumer

export function WithRoomConsumer(Component){
    return function ConsumerWrapper(props){/* check why it doesn t work if we use ( ) instead of writing directly in front of return statement  */
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
            {/* here without curly braces like the other one */}
        </RoomConsumer>
        
    }
}




export default ContextProvider