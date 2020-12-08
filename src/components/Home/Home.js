import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Form from '../Forms/Form';
import Posts from '../Posts/Posts';

const Home = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={7}>
                    <Posts></Posts>
                </Col>
                <Col md={5}>
                    <Form></Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;