import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Spinner, ListGroup, Alert } from "react-bootstrap";

const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
const APIKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2QzNTFkNDM2ZTAwMTVkYTI3MTkiLCJpYXQiOjE3NDM2ODI4NjksImV4cCI6MTc0NDg5MjQ2OX0.antMXaShZo-QOGkmltLTzqOhABGF7TFwjaHPULTikjI"

const CommentArea = function(props) {
    
    // array di comments vuoto


    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    // fetch

    // URL + book.asin?

    const getArrayOfComments = () => {
        fetch(URL + props.valore, {
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

            setComments(data)
            setIsLoading(false)

        })
        .catch(err => {
            console.log('errore', err)
            
            setIsLoading(false)
            setIsError(true)
        })
    }



    useEffect(()=>{
        getArrayOfComments()
    }, [props.valore])
    
    
    
        return(
            <div>

                {
                    isLoading === true && (
                        <div className="text-center">
                            <Spinner variant="primary" animation="border"  />
                        </div>
                )}

                {
                        isError && (
                            <Alert variant='danger' className="text-center">
                                <i className="bi bi-bug"></i> Errore nella fetch <i className="bi bi-bug"></i>
                            </Alert>
                        )
                }

{
                        (comments.length === 0 && !isLoading) && (
                        <ListGroup.Item className="bg-light rounded">                          
                                Nessuna Recensione!!
                        </ListGroup.Item>

                        )
                    }

                <CommentList arrayOfComments={comments} />

                <AddComment asin={props.valore} />

            </div>
        )
    

}
export default CommentArea


// https://github.com/irvelervel/FS0125-hw-2/blob/main/src/components/SingleComments.jsx