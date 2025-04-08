import { Col, Card, Button } from "react-bootstrap"
import { Component } from "react"


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

const SingleBook = function (props) {


    

   

        //const [selected, setSelected] = useState(false)


        return(
            

            <Col xs={12} md={12} lg={6} xl={4} >
                        <Card style={styles.card}>
                            <Card.Img variant="top" src={props.book.img} className="w-100" style={{
                                ...styles.cardImage,
                                border: props.asinCorrente ? '3px solid red' : 'none'
                            }} onClick={() => {
                                // al click qua, io devo salvare l'asin in booklist
                                props.cambiaValore(props.book.asin)
                                console.log('seleziono un libro')
                            }} />
                            <Card.Body style={styles.cardBody} className="d-flex flex-column align-items-center">
                                <Card.Title className="flex-grow-1">{props.book.title}</Card.Title>
                                <Card.Text>{props.book.category}</Card.Text>
                                <Card.Text>{props.book.price}€</Card.Text>
                                <Button variant="dark" className="w-25">Buy me</Button>
                            </Card.Body>
                        </Card>
                </Col>
            
        )

    }


export default SingleBook

//qua in single book comment area deve andare qua, inserita alla fine con short circuit
//comment area componente a classe, che deve fare una fetch delle crecensioni, salvare l'array di recensioni del libro. comment area ha due componenti: comment list addcomment. comment area salva le recensioni e comment list le fa vedere. add comment ha un minuscolo form dentro perchè aggiunge un comment

// elementID = id del libro.
//  single book passa l'asin alla fetch e comment area passa a comment list che fa map dell'array e li mostra

