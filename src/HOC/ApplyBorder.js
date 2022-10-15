import React from 'react'
import "./style.css"
const EnhanceBorder = OriginalComponent =>{
    function NewComponent(){
        return(
            <div className="border">
                <OriginalComponent/>
            </div>
        )
    }
    return NewComponent
}

export default EnhanceBorder;