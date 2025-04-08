import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button } from "react-bootstrap"

const Welcome = function() {
    const [show, setShow] = useState(true);
    
    return (
        <>

            <Alert show={show} variant="success" className='p'>
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things
                    nice and tidy.
                </p>
                <Button onClick={() => setShow(false)} variant="outline-success">
                    Close me
                </Button>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    )
}

export default Welcome