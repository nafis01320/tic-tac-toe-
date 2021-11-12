import React, { useState, useReducer } from 'react'
import './style.css'

const Todo = () => {
    const [screenData, setScreenData] = useState('');
    const [newData, setNewData] = useState([]);
    let bool = true;
    
    const change = (event) => {
        let inputValue = document.querySelector('.fofo').value;
        setScreenData(inputValue);
    }
    const click = () => {
        if(screenData === ''){
            alert('fill the field');
        } else{

            let obj = {
                id: new Date().getTime().toString(),
                name: screenData
            }
            setNewData([...newData, obj]);
        }
        //all things saved in newData;

    }
    const Del = (x) => {
        const newDataArray = newData.filter((currentEl) => {
            if (currentEl.id !== x) {
                return currentEl;
            }
        })
        setNewData(newDataArray);
    }
    const clearAll = () => {
       bool = false;
       const elemsValData = newData.filter((elems)=>{
            if(bool === false){
                if(elems.id === true){
                    let elemsVal = elems;
                    return elemsVal;
                }
            }
       })
       setNewData(elemsValData);
    }
    return (
        <>
            <div className='container'>
                <div className='input'>
                    <input type="text" className='fofo' onChange={change} />
                    <button className="btn" onClick={click}>+</button>

                </div>
                <div className="elementBox">
                    {
                        newData.map((curEL) => {
                            return (
                                <div className="elements">{curEL.name}
                                    <div className="buttons">
                                        <button className="btn1" onClick={() => Del(curEL.id)}>del</button>
                                        <button className="btn1">edit</button>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>
                <button className='clearBtn' onClick={clearAll
                                }> clear all</button>



            </div>
        </>
    );
}

export default Todo