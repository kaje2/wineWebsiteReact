import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useState, useEffect } from 'react';

export function Home( props ){
    document.title = "The best drinks in the town";
    
    const [ data, setData ] = useState([]);
    const [ loaded, setLoaded ] = useState( false );

    const getData = async () => {
        const result = await props.db.listDocuments(
            '6746c675001d974a4436', // database id
            '6746c7290022dad01dcc', // collection id
            []
        )
        console.log(result.documents );
        setData( result.documents )
        setLoaded( true )
    }

    useEffect( () => { getData() }, [data] );

    const ProductCollection = data.map( (p) => {
        // return each product as a Col
            // get preview of image
        // const imgURL = storage.getFileView(
        //     '6746d5f900370c213333', // your bucket ID
        //     p.image // file ID in database document
        // )    
        return (
        <Col md={3}>
            {/* <img className="img-fluid" src={ imgURL } /> */}
            <h3>{ p.name }</h3>
            <h5>{ p.price }</h5>
            <p>{ p.description }</p>
        </Col>
        )
    } );

    return(
        <Container>
            <Row>
                <Col>
                    <h2>Home</h2>
                </Col>
            </Row>
            <Row>{ ProductCollection }</Row>
        </Container>
    )
}
 