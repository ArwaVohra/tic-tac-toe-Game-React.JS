import React from 'react';

function Win(winner){
    return(
        <div style={{ backgroundColor:'#282c34' ,color: '#2979ff'}} >
            <h1>You {winner}</h1>
        </div>
    )
}
export default Win;