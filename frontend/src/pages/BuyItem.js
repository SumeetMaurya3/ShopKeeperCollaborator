import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";
import Navigation from "../components/Navigation";

function BuyItem() {
    return (<>
        <Container>
    <Navigation/>
            <Row>
                <Col md={4}>
                </Col>
                <Col md={8}>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default BuyItem
