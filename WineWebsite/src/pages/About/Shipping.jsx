import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './shiping.css';


export function Shipping(){

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return(
        <Form className="m-4" noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                    />
                    <Form.Control.Feedback>Well Done!!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                    />
                    <Form.Control.Feedback>Well Done!!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control required as="Select" type="select">
                        <option value="" >Select your Gender</option>
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                        <option value="3">Non-binary</option>
                        <option value="4">Prefere not inform</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">Please select at least one option</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>Phone</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="inputGroupPrepend02">&#9742;</InputGroup.Text>
                        <Form.Control
                            required
                            type="phone"
                            placeholder="Phone number"
                        />
                        <Form.Control.Feedback>Well Done!!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-4">

                <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustomPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                        type="password"
                        placeholder="Password"
                        aria-describedby="password"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Please insert a valid password.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustomPasswordConfirmation">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                        type="password"
                        placeholder="Type your password again"
                        aria-describedby="password"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        The password must match.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustomEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                        type="email"
                        placeholder="Provide a valid email"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Please set a valid email.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>Street</Form.Label>
                    <Form.Control type="text" placeholder="Street with number" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid street.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustom03">
                    <Form.Label>Suburb</Form.Label>
                    <Form.Control type="text" placeholder="Suburb" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid street.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control required as="Select" type="select">
                        <option value="">Select one state</option>
                        <option value="NSW">New South Wales (NSW)</option>
                        <option value="VIC">Victoria (VIC)</option>
                        <option value="QLD">Queensland (QLD)</option>
                        <option value="SA">South Australia (SA)</option>
                        <option value="WA">Western Australia (WA)</option>
                        <option value="TAS">Tasmania (TAS)</option>
                        <option value="ACT">Australian Capital Territory (ACT)</option>
                        <option value="NT">Northern Territory (NT)</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">Please select at least one option</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustom05">
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control type="text" placeholder="Postcode" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid postcode.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
        </Form>
    )
}