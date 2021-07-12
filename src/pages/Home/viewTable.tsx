import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getLatestDetails } from "../../actions/app.actions";
import { ActionCall } from "../../interfaces/actions.interface";
import { State } from "../../interfaces/state.interface";
import LatestTransfers from "../../components/Table/SubTable/latestTransfers";
import LatestBlock from "../../components/Table/SubTable/latestBlock";

class ViewTable extends React.Component<any> {
  componentDidMount() {
    const { getLatestDetails } = this.props;
    // if (app) {
    getLatestDetails(true);
    // }
  }

  render() {
    const { latestBlock, latestTransfers } = this.props;
    return (
      <Container className="home-page">
        <Row>
          <Col className="latest-block" sm={5}>
            <Card.Title className="card-header">
              Latest Blocks
              <Link to="/blocks">View all Blocks</Link>
            </Card.Title>
            <div className="card-text">
              <LatestBlock TableData={latestBlock} Value="blocks" />
            </div>
          </Col>
          <Col className="latest-transfers" sm={7}>
            <Card.Title className="card-header">
              Latest Transfers
              <Link to="/transfers">View all Transfers</Link>
            </Card.Title>
            <div className="card-text">
              <LatestTransfers TableData={latestTransfers} Value="transfers" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    // app: state.app.access,
    latestBlock: state.app.latestBlock,
    latestTransfers: state.app.latestTransfers
  };
};

const mapDispatchToProps: ActionCall = {
  getLatestDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewTable);
