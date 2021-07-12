import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import "./totalCount.scss";

type Props = {
  account: number;
  block: number;
  contract: number;
  transaction: number;
  transfer: number;
};

// eslint-disable-next-line react/prefer-stateless-function
class TotalCount extends React.Component<Props> {
  render() {
    const { block, transaction, transfer, contract, account } = this.props;
    return (
      <Container className="count-container">
        <Row>
          <Col sm xs>
            <Card>
              <Card.Body>
                <Card.Title># Blocks </Card.Title>
                <Card.Subtitle>{block}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col sm xs>
            <Card>
              <Card.Body>
                <Card.Title># Txs</Card.Title>
                <Card.Subtitle>{transaction}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col sm xs>
            <Card>
              <Card.Body>
                <Card.Title># Transfers</Card.Title>
                <Card.Subtitle>{transfer}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col sm xs>
            <Card>
              <Card.Body>
                <Card.Title># Contracts</Card.Title>
                <Card.Subtitle>{contract}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col sm xs>
            <Card>
              <Card.Body>
                <Card.Title># Addresses</Card.Title>
                <Card.Subtitle>{account}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TotalCount;
