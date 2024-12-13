import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { databases } from '/workspaces/wineWebsiteReact/WineWebsite/appwriteConfig'; // Importe o arquivo de configuração
import './home.css'; // Importe o CSS personalizado

export function Home() {
    document.title = "Pellegrini";
    
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getData = async () => {
        const result = await databases.listDocuments(
            '675c2ccf000a880ba0eb', // database id
            '675c2cd6000844fa8983', // collection id
            []
        );
        console.log(result.documents);
        setData(result.documents);
        setLoaded(true);
    };

    useEffect(() => { getData(); }, []);

    const ProductCollection = data.map((p) => {
        return (
            <Col md={3} key={p.$id}>
                <div className="product-card">
                    <img className="img-fluid product-img" src={p.image} alt={p.name} />
                    <h3>{p.name}</h3>
                    <h5>{p.price}</h5>
                    <p>{p.description}</p>
                </div>
            </Col>
        );
    });

    return (
        <Container className="container">
            <Row>
                <Col>
                    <h2>Home</h2>
                </Col>
            </Row>
            <Row>{loaded ? ProductCollection : <p>Loading...</p>}</Row>
        </Container>
    );
}
