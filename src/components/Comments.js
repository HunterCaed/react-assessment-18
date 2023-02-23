import React from "react"
import BodyItem from "./BodyItem"

const Comments = ({comment}) => {
    // Insturction:
    // Use endpoint: https://jsonplaceholder.typicode.com/comments to get a list of comments. 
    // display the comment body on the screen
    // add event listeners to each comment body that when clicked will simply console.log the comment id.

    // you will need to use the useEffect hook. Do this in async / await syntax.


    return(
        comment.map((current) => (
            <BodyItem comment={current} key={current.id} />

        ))
        
    )
}

export default Comments