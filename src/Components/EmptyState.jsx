import React from "react";

function EmptyState(){
    return (
        <div className="empty-main">
        <div className="empty-state">
        <h1>Your movie list is empty</h1>
        </div>
        <div className="empty-state"> 
         <button >Add a new movie</button>
         </div>
            
          
        </div>
    );
}

export default EmptyState;