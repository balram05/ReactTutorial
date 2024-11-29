import React, { useState } from 'react'
import Welcom from './Welcom';
const Chapterthree = () => {
console.log("you are in the chapterThree")
    // in this example we use the spread operater (...name)
    //  for merging the values of setState bcuz by default the setstate
    // method won't merge and update values or objects 
    const [name, setName] = useState({
        firstName: " ",
        lastName: " "
    })
    const [items, setItems] = useState([]);

    const random = () => {
        //step1 here we creating a copy of items by spread operater
        //step2 and creata a object with the id, value
        //id is used for the oject and key is ued for the props for unique identiter
        setItems([...items, { id: items.length, value: Math.floor(Math.random() * 10) + 1 }])
    }


    return (

        <div className="contaier">
            <div>
                <form>
                    <input type="text" value={name.firstName} onChange={(e) =>
                    //spread oprater for the update and merge the object
                    { setName({ ...name, firstName: e.target.value }) }}></input>

                    <input type="text" value={name.lastName} onChange={(e) => { setName({ ...name, lastName: e.target.value }) }}></input>
                    <h6>user firstName is:{name.firstName}</h6>
                    <h6>user lastName is:{name.lastName}</h6>

                </form>
            </div>
            <div>
                <button onClick={random}>Random Number</button>
                <ul>{items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}</ul>
            </div>
            <Welcom/>
        </div>

    )
}

export default Chapterthree