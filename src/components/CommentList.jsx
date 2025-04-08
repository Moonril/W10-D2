import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";



class CommentList extends Component {


    render(){
        return(
            <ListGroup>

                {
                    this.props.arrayOfComments.map((com) => (
                        
                        <SingleComment key={com._id} com={com} />
                           

                    ))
                }
            </ListGroup>
        )
    }
}

export default CommentList


