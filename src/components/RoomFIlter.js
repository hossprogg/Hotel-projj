import React,{useContext} from 'react'
import {RoomContext} from '../Context'
import {Title} from './Title'

/* WE CAN MAKE A FUNCTION HERE EVEN OUTSIDE OF THE BOXOF FUNCTION */
const getUnique =(items,value)=>{
    return [...new Set(items.map(item => item[value]))]
}//fazet T[x]++

export const RoomFIlter = ({rooms}) => {

    const {type,capacity,maxPrice,MinPrice,price,maxSize ,minSize ,breakfast,pets,handlechange} = useContext(RoomContext)

    let types = getUnique(rooms,"type")
    types = ["all",...types]

    types = types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms,'capacity')

    people = people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })


    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
            {/* slect type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select //U CAN CATCH THOSE PROPERTIES BY event.target in handleChange 
                        name="type"
                        id="type"
                        className="form-control"
                        onChange={handlechange}
                        value={type}
                    >
                        {types}
                    </select>
                </div>
                {/* end select type */}

                {/* slect guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select //U CAN CATCH THOSE PROPERTIES BY event.target in handleChange 
                        name="capacity"
                        id="capacity"
                        className="form-control"
                        onChange={handlechange}
                        value={capacity}
                    >
                        {people}
                    </select>
                </div>
                {/* end guest */}

                {/* Price filter  */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price : ${price}
                    </label>
                    <input className="form-control" type="range" name="price" max={maxPrice} min={MinPrice} id="price" value={price} onChange={handlechange}/>{/* the name attribut here is so important in which keep the touch on the input updated  */}
                    {/* Please Check that selection of input in that handlechange  */}
                </div>
                {/* end of  Price filter  */}

                {/* Size */}
                    <div className="form-group">
                        <label htmlFor="size">Room size</label>
                        <div className="size-inputs">
                            <input type="number" name="minSize" id="size" value={minSize} onChange={handlechange} className="size-inputs" />
                            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handlechange} className="size-inputs"/>
                        </div>
                    </div>
                {/* End of Size */}

                {/* checkBox*/}
                <div className="form-groupe">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast}  onChange={handlechange}/>
                        <label htmlFor="breakfast">
                        breakfast
                        </label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets}  onChange={handlechange}/>
                        <label htmlFor="pets">
                        pets
                        </label>
                    </div>
                </div>



                {/* End checkBox */}

            </form>   
        </section>
    )
}
