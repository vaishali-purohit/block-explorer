import React from "react";
import { Row, Col } from "react-bootstrap";
import TimeAgo from "react-timeago";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { BlockInterface } from "../../../interfaces/blocks.interface";
import { getLatestDetails } from "../../../actions/app.actions";
import { ActionCall } from "../../../interfaces/actions.interface";
import "./subTable.scss";

type Props = {
  Value: string;
  TableData: BlockInterface[];
};

let interval;

class LatestBlock extends React.Component<any, Props> {
  componentDidMount() {
    const { getLatestDetails } = this.props;
    interval = setInterval(() => getLatestDetails(false), 10000);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    const { TableData } = this.props;
    if (TableData) {
      return TableData.slice(0, 10).map(
        (row: BlockInterface, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <Row className="latest-blocks" key={`${row.block_number}_${index}`}>
            <img src="" alt="blocks" />
            <Col md={6} xs={6} sm={6}>
              <Row>
                <Link to={`/blocks/${row.digest}`}>#{row.block_number}</Link>
              </Row>
              <Row className="dim-color">
                {row.transaction_count} transactions
              </Row>
            </Col>
            <Col className="media_tablet">
              <Row>
                Miner&nbsp;
                <Link to={`/accounts/${row.miner}`}>
                  {row.miner.substr(1, 8)}...
                </Link>
              </Row>
              <Row>
                Time:&nbsp;
                <TimeAgo date={row.created_date} minPeriod="10000" />
              </Row>
            </Col>
          </Row>
        )
      );
    }
    return "";
  }
}

const mapDispatchToProps: ActionCall = {
  getLatestDetails
};

export default connect(null, mapDispatchToProps)(LatestBlock);
