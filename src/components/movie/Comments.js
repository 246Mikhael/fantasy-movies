import React from "react";

function Comments({activitiesOfMovie}){

    let style;
    let style1;

    const result = activitiesOfMovie.map((activity, index) => {

        if(activity.innerRating <= 4){
            style = {
                border: '5px solid #E63244'
            }
            style1 = {
                backgroundColor: "red"
            }
        } if(activity.innerRating > 4 && activity.innerRating < 8){
            style = {
                border: '5px solid orange'
            }
            style1 = {
                backgroundColor: "orange"
            }
        } if(activity.innerRating >= 8){
            style = {
                border: '5px solid green'
            }
            style1 = {
                backgroundColor: "green"
            }
        }
        

        return <div key={index} className="comment-man" style={style}>
                  <div className="name-comment-man">{activity.nameOfUser}</div>
                  <div className="inner-rating-man" style={style1}>{activity.innerRating}</div>
                  <div className="comment-text">{activity.text}</div>
                 
               </div>
    })

    return <div className="comments">
        {result}
    </div>
}

export default Comments;