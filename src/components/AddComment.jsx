import { Component } from "react";
import { Form, Button } from "react-bootstrap";


const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
const APIKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2QzNTFkNDM2ZTAwMTVkYTI3MTkiLCJpYXQiOjE3NDM2ODI4NjksImV4cCI6MTc0NDg5MjQ2OX0.antMXaShZo-QOGkmltLTzqOhABGF7TFwjaHPULTikjI"

class AddComment extends Component {

    //state per salvare ogni input
    state = {
        recensione: {
            comment: '',
            rate: '3',
            elementId: this.props.asin, // doveva essere l'asin del libro su cui facciamo il commento

        },
    }


    //fetch

    handleSubmit = (e) => {
        e.preventDefault()

        fetch(URL, { //non ho bisogno dell'id qua?????
            method: 'POST',
            body: JSON.stringify(this.state.recensione),
            headers: {
                "Authorization": APIKey,
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if(response.ok){
                alert('recensione salvata')

                /* this.setState({
                    recensione: {
                        comment: '',
                        rate: '1',
                        elementId: this.props.asin,
                    },
                }) */


            } else {
                throw new Error('chiamata rotta')
            }
        })
        .catch((e) => {
            console.log('errore', e)
        })
    }


    render(){
        return(
            <Form onSubmit={this.handleSubmit}>

                {/* recensione */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Inserisci una recensione:</Form.Label>
                <Form.Control as="textarea" rows={3} required value={this.state.recensione.comment} onChange={(e) => {
                    this.setState({
                        recensione: {
                            ...this.state.recensione,
                            comment: e.target.value
                        }
                    })
                }} />
                </Form.Group>

                {/* voto */}
                <Form.Group className="mb-3">
                                <Form.Label>Vota:</Form.Label>
                                <Form.Select required value={this.state.recensione.rate} onChange={(e) => {
                    this.setState({
                        recensione: {
                            ...this.state.recensione,
                            rate: e.target.value
                        }
                    })
                }} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="2">3</option>
                                <option value="2">4</option>
                                <option value="2">5</option>
                                </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                                Salva
                            </Button>
                
            </Form>
        )
    }
}

export default AddComment


// add comment che permette di aggiungere un comment, contiene un form che fa una richiesta post