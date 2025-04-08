import { Component } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import libriFantasy from '../books/fantasy.json'
import Welcome from "./Welcome"


const styles = {
    card: {
        backgroundColor: '#4fbd8c',
        padding: '1rem'
    },
    cardImage: {
        objectFit: 'cover',
        width: '50vw',
        height: '50vh'
    },
    cardBody: {
        height: 250,
    }

}

class AllTheBooks extends Component {

    render() {
        return (
                <Container className="text-center p-3">
                    <Welcome />
                <h1 className="text-light p-5">Fantasy Books!</h1>
                    <Row className="justify-content-center g-3">                     

                        {
                            libriFantasy.map((libro) => {
                                return (
                                    <Col xs={12} md={8} lg={4} className="text-center" key={libro.asin}>
                                        <Card style={styles.card}>
                                            <Card.Img variant="top" src={libro.img} className="w-100" style={styles.cardImage} />
                                            <Card.Body style={styles.cardBody} className="d-flex flex-column align-items-center">
                                                <Card.Title className="flex-grow-1">{libro.title}</Card.Title>
                                                <Card.Text>{libro.category}</Card.Text>
                                                <Card.Text>{libro.price}€</Card.Text>
                                                <Button variant="dark" className="w-25">Buy me</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }

                        
                    </Row>
                </Container>


        )
    }
}

export default AllTheBooks