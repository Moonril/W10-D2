
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import libriFantasy from '../books/fantasy.json'
import SingleBook from "./SingleBook"
import { Component } from "react"
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

class BookListDue extends Component {

    state = {
        search: '',
        selectedBookAsin: '',
    }



    getAsin = (nuovoAsin) => {
        //serve a ricevere l'asin del libro selzionato e a salvarlo nello state
        // volevo aggiungere un if che resettasse l'asin quando deseleziono il libro ma fa cose strane
        
            this.setState({
                selectedBookAsin: nuovoAsin,
            })

    }

 render(){
     return (
             <Container fluid className="text-center p-3">
                 <Row className="justify-content-center">
                     <Col xs={4}>
                     <Form>
                        <Form.Label className="text-light border border-light p-2">Cerca</Form.Label>
                        <Form.Control type='text' value={this.state.search} onChange={(e) => {
                            this.setState({
                                search: e.target.value,
                            })
                        }} />
                        <Button onClick={(e) => {
                            this.setState({search: ''})
                        }}>Reset</Button>
                     </Form>
                     </Col>
                 </Row>
             <h1 className="text-light p-5">Fantasy Books!</h1>
                 <Row className="justify-content-center g-3">  
                    <Col md={8}>
                    <Row>

                                       
    
                     {
                         this.props.arrayOfBooks.filter((libro) => {
                             
                             
                             if(libro.title.toLowerCase().includes(this.state.search)){
                                 return true
                                } else {
                                    return false
                                }
                                
                            }).map((Libro) => {
                                return <SingleBook book={Libro} key={Libro.asin} cambiaValore={this.getAsin} asinCorrente={this.state.selectedBookAsin} /> 
                            })
                        }
    
                        </Row>
                    </Col>
                    <Col md={4}>
                    { this.state.selectedBookAsin.length !== 0 && (

                        <CommentArea valore={this.state.selectedBookAsin} />

                        
                    )
                    
                }
                </Col>
                   
                 </Row>

             </Container>
    
     )

 }

}

export default BookListDue