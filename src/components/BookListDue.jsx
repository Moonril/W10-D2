
import { Container, Row, Col, Form, Button } from "react-bootstrap"

import SingleBook from "./SingleBook"
import { useState } from "react"
import CommentArea from "./CommentArea"



const styles = {
    card: {
        backgroundColor: '#4fbd8c',
        padding: '1rem'
    },
    cardImage: {
        objectFit: 'cover',
        width: '50vw',
        height: '70vh'
    },
    cardBody: {
        height: 250,
    }

}

const BookListDue = function(props) {



    const [search, setSearch] = useState('')
    const [selectedBookAsin, setSelectedBookAsin] = useState('')


    const getAsin = (nuovoAsin) => {
        //serve a ricevere l'asin del libro selzionato e a salvarlo nello state
        // volevo aggiungere un if che resettasse l'asin quando deseleziono il libro ma fa cose strane
        
            setSelectedBookAsin(nuovoAsin)

    }


     return (
             <Container fluid className="text-center p-3">
                 <Row className="justify-content-center">
                     <Col xs={4}>
                     <Form>
                        <Form.Label className="text-light border border-light p-2">Cerca</Form.Label>
                        <Form.Control type='text' value={search} onChange={(e) => {
                            setSearch({
                                search: e.target.value,
                            })
                        }} />
                        <Button onClick={(e) => {
                            
                            setSearch({search: ''})
                        }}>Reset</Button>
                     </Form>
                     </Col>
                 </Row>
             <h1 className="text-light p-5">Fantasy Books!</h1>
                 <Row className="justify-content-center g-3">  
                    <Col md={8}>
                    <Row>

                                       
    
                     {
                         props.arrayOfBooks.filter((libro) => {
                             
                             
                             if(libro.title.toLowerCase().includes(search)){
                                 return true
                                } else {
                                    return false
                                }
                                
                            }).map((Libro) => {
                                return <SingleBook book={Libro} key={Libro.asin} cambiaValore={getAsin} asinCorrente={selectedBookAsin} /> 
                            })
                        }
    
                        </Row>
                    </Col>
                    <Col md={4}>
                    { selectedBookAsin.length !== 0 && (

                        <CommentArea valore={selectedBookAsin} />

                        
                    )
                    
                }
                </Col>
                   
                 </Row>

             </Container>
    
     )



}

export default BookListDue