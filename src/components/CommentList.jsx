import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";



const CommentList = function(props) {


    
        return(
            <ListGroup>

                {
                    props.arrayOfComments.map((com) => (
                        
                        <SingleComment key={com._id} com={com} />
                           

                    ))
                }
            </ListGroup>
        )
    
}

export default CommentList


