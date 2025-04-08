import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";

const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
const APIKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2QzNTFkNDM2ZTAwMTVkYTI3MTkiLCJpYXQiOjE3NDM2ODI4NjksImV4cCI6MTc0NDg5MjQ2OX0.antMXaShZo-QOGkmltLTzqOhABGF7TFwjaHPULTikjI"

class SingleComment extends Component {

    deleteComment = () => {
        fetch(URL + this.props.com._id, {
            method: 'DELETE',
            headers: {
                "Authorization": APIKey,
            },
        })
        .then(response => {
            if(response.ok){
                alert('recensione eliminata')
                //richiamare
            } else {
                throw new Error('errore qua')
            }
        })
        .catch((err => {
            console.log('errore nella eliminazione', err)
        }))
    }


    render () {
        return(
            <ListGroup.Item className="d-flex justify-content-between">
                <div>
                {this.props.com.comment} | {this.props.com.rate}/5
                </div>
                <div>
                <Button variant='danger'><i className="bi bi-trash3" onClick={this.deleteComment}></i></Button>
                </div>
                </ListGroup.Item>
        )
    }
}

export default SingleComment