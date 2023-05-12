import React from "react";

function Comments({activitiesOfMovie}){

    const result = activitiesOfMovie.map((activity, index) => {

        return <div 
            key={index}
            className="comment-man"
            id={(()=>{
               if(activity.innerRating <= 4){
                    return 'red-border-of-comment'
               } else if(activity.innerRating > 4 && 
                         activity.innerRating < 8){
                    return 'orange-border-of-comment'
               } else {
                    return 'green-border-of-comment'
            }
          })()}>
                <div className="name-comment-man">
                    {activity.nameOfUser}
                </div>
                <div className="inner-rating-man" 
                    id={(()=>{
                           if(activity.innerRating <= 4){
                                return 'red-user-rating'
                            } else if(activity.innerRating > 4 && 
                                 activity.innerRating < 8){
                                return 'orange-user-rating'
                            } else {
                                return 'green-user-rating'
                           }
                         })()}>
                            {activity.innerRating}
                </div>
                <div className="comment-text">
                    {activity.text}
                </div>  
            </div>
    })

    return <div className="comments">
        {result}
    </div>
}

export default Comments;