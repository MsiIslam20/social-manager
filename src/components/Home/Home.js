import React, { useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../Redux/actions/posts';
import Form from '../Forms/Form';
import Posts from '../Posts/Posts';

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts); 
    }, [dispatch])

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