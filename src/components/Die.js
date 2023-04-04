import React from "react";


function Die(props){
    
    function dieSelected(die){

        props.setDice((oldDice) => {

            const newDice = [...oldDice]; // Güncel statedeki zar objelerini kopyalandı.
            newDice[props.index] = {value:newDice[props.index].value, isSelected: !newDice[props.index].isSelected }

            return newDice;
        }
        )


    }
    
    return(
        <>
        <div className="die-face"
            style={{backgroundColor:props.dieObj.isSelected ? "#59E391" : "white"}}
            onClick={() => dieSelected(props.dieObj)}
        >
            <h3 className="die-num">{props.dieObj.value}</h3>
        </div>

        
        
        </>
    )
}

export default Die;