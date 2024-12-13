import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Cover from '../assets/Blog_Cover.png'

export function Blog(){

    const converStyle = {
        backgroundImage: `url(${Cover})`,
        backgroundPosition: "center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"300px"
    };

    return(
        <Stack gap={3}>
            <div style={converStyle}>
                <h1 className="text-center text-white text-bg-dark" >The Art of Wine: A Journey Through Flavor and Tradition</h1>
            </div>
            <div>
                <p>Wine is more than a beverage; it’s a celebration of history, craftsmanship, and the land it comes from. Each bottle tells a unique story, reflecting the care and expertise of the winemaker and the character of the region where the grapes are grown.

The journey begins in the vineyard, where soil, climate, and grape variety come together to create a distinctive terroir. From the rolling hills of Tuscany to the sun-kissed valleys of Australia, every wine region offers its own palette of flavors. Red wines like Cabernet Sauvignon and Pinot Noir provide rich, bold notes, while whites like Chardonnay and Sauvignon Blanc offer crisp and refreshing profiles.
Crafting wine is a delicate balance of science and art. Winemakers carefully monitor fermentation, aging, and blending to achieve the perfect taste. The use of oak barrels, for instance, adds complex notes of vanilla and spice, while stainless steel tanks preserve the wine’s natural fruitiness.
Beyond its taste, wine has a magical way of bringing people together. Whether paired with a meal, shared at a celebration, or enjoyed during quiet reflection, wine creates memorable experiences.
For enthusiasts and novices alike, wine invites exploration and discovery. Every sip is an opportunity to savor the artistry of nature and human skill, making wine a timeless pleasure that continues to captivate the senses.
Cheers to the world of wine – where tradition meets innovation, and every glass is an invitation to enjoy life’s finest moments!</p>
            </div>
            <div >
                <h1 className="text-center text-white text-bg-dark" >Let us know what you think</h1>
                <Form className="m-3">
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Comment:</Form.Label>
                        <Form.Control as="textarea" row={10}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Comment!
                    </Button>
                </Form>
            </div>
        </Stack>
    )
}