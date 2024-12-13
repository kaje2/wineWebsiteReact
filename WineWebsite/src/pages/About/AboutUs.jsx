import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import AboutUsImg from '../../assets/About_Us.png';
import HistoryImg from '../../assets/Our_History.png';

export function AboutUs(){
    return(
        <Container fluid="md" className="justify-content-md-center">
            <Row className="m-2">
                <Col sm >
                    <h1>Company Brief</h1>
                <p> Welcome to Win Winery, where Australian excellence meets the art of winemaking. Located in the heart of Sydney, our family-owned winery celebrates the rich soils, sun-kissed vineyards, and traditions that define Australian wines.
Every bottle at Win Winery tells a story of passion and craftsmanship. From our crisp whites to robust reds, we blend innovation with a deep respect for nature to create wines that capture the essence of our region. Alongside our premium wines, we offer a curated selection of accessories to enhance your wine experience, whether you’re a seasoned connoisseur or a curious newcomer.
Sustainability is at the core of our mission. We are committed to environmentally friendly practices that protect and preserve our beautiful landscapes for generations to come. By choosing Win Winery, you support a legacy of quality and care.
Raise a glass to life’s moments, big and small, with Win Winery. Explore our collection online and discover the Australian spirit in every sip.</p>
                </Col>
                <Col sm md={5} className="m-2">
                    <Image
                        src={AboutUsImg}
                        fluid
                        thumbnail
                        
                    />
                </Col>
            </Row>
            <Row className="m-2">
                <Col sm>
                <h1>Our History</h1>
                    <p>Founded in 1995, Win Winery set out to craft wines that celebrate the unique terroir of our region. By 1998, our first vintage gained critical acclaim, establishing us as a promising name in Australian winemaking. In 2005, we expanded our vineyards, integrating sustainable practices to protect our natural heritage.
Our premium collection, launched in 2010, showcases bold reds and refined whites, embodying our commitment to quality. In 2015, we introduced a curated range of wine accessories to elevate the wine experience for our customers. By 2020, we achieved carbon-neutral production, reflecting our dedication to sustainability.
In 2024, we expanded online with a robust e-commerce platform, bringing the Win Winery experience to wine enthusiasts worldwide. Each milestone reflects our passion for innovation, quality, and the Australian spirit.
Explore our collection and join us in raising a glass to life’s memorable moments. Win Winery is more than a winery—it’s a celebration of excellence, community, and care.</p>
                </Col>
                <Col sm md={5} className="m-2">
                    <Image
                        src={HistoryImg}
                        fluid
                        thumbnail
                    />
                </Col>
            </Row>
        </Container>
    )
}