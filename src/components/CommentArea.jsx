import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Spinner, ListGroup, Alert } from "react-bootstrap";

const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
const APIKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2QzNTFkNDM2ZTAwMTVkYTI3MTkiLCJpYXQiOjE3NDM2ODI4NjksImV4cCI6MTc0NDg5MjQ2OX0.antMXaShZo-QOGkmltLTzqOhABGF7TFwjaHPULTikjI"

class CommentArea extends Component {
    
    // array di comments vuoto
    state = {
        comments: [],
        isLoading: true,
        isError: false
    }

    // fetch

    // URL + book.asin?

    getArrayOfComments = () => {
        fetch(URL + this.props.valore, {
            headers: {
                "Authorization": APIKey
            }
        })
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error('response not ok')
            }
        })
        .then((data) =>{
            //array dei commenti del libro selezionato
            console.log('array di commenti', data)
            this.setState({
                comments: data,
                isLoading: false
            })

        })
        .catch(err => {
            console.log('errore', err)
            this.setState({
                isLoading: false,
                isError: true
            })
        })
    }

    componentDidMount = () => {

        this.getArrayOfComments()
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.valore !== prevProps.valore) {
            this.getArrayOfComments()
        }
    } 
    
    
    render(){
        return(
            <div>

                {
                    this.state.isLoading === true && (
                        <div className="text-center">
                            <Spinner variant="primary" animation="border"  />
                        </div>
                )}

                {
                        this.state.isError && (
                            <Alert variant='danger' className="text-center">
                                <i className="bi bi-bug"></i> Errore nella fetch <i className="bi bi-bug"></i>
                            </Alert>
                        )
                }

{
                        (this.state.comments.length === 0 && !this.state.isLoading) && (
                        <ListGroup.Item className="bg-light rounded">                          
                                Nessuna Recensione!!
                        </ListGroup.Item>

                        )
                    }

                <CommentList arrayOfComments={this.state.comments} />

                <AddComment asin={this.props.valore} />

            </div>
        )
    }

}
export default CommentArea


// https://github.com/irvelervel/FS0125-hw-2/blob/main/src/components/SingleComments.jsx