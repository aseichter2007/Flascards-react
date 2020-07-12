import React from 'react';
const Collectionviewer = (props)=>{
    
    return(
        <div>
            <div>{props.id}</div>
            <div>{props.title}</div>
        {props.cards.map((card)=>{
            return(
                <div>
                    <div>
                        {card.id}
                    </div> 
                    <div>
                        {card.word}
                    </div>
                    <div>
                    {card.definition}
                    </div>
                 </div>
            )
        })}
        </div>
    )
}
export default Collectionviewer