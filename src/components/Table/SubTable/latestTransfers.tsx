import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";

import latestTransactions from "../../../lib/asstes/latest_transactions.jpg";
import { TransferInterface } from "../../../interfaces/transfer.interface";
import { getLatestDetails } from "../../../actions/app.actions";
import { ActionCall } from "../../../interfaces/actions.interface";
import "./subTable.scss";
import FETConversion from "../../../util/fetConversion";

type Props = {
  Value: string;
  TableData: TransferInterface[];
};

let interval;

class LatestTransfers extends React.Component<any, Props> {
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
        (row: TransferInterface, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <Row className="latest-blocks" key={`${row.id}_${index}`}>
            <img src={latestTransactions} alt="blocks" />
            <Col style={{ paddingRight: 0 }} sm={6} md={6} xl={3} xs={6}>
              <Row>
                Tx:&nbsp;
                <Link to={`/transactions/${row.tx}`}>
                  {row.tx.substr(0, 12)}...
                </Link>
              </Row>
              <Row>
                <TimeAgo date={row.created_date} minPeriod="10000" />
              </Row>
            </Col>
            <Col sm={6} md={6} xl={4} xs={6} className="bt-validate">
              <Row>
                From:&nbsp;
                <Link to={`/accounts/${row.from_address}`}>
                  {row.from_address.substr(0, 12)}...
                </Link>
              </Row>
              <Row>
                To:&nbsp;
                <Link to={`/accounts/${row.to_address}`}>
                  {row.to_address.substr(0, 12)}...
                </Link>
              </Row>
            </Col>
            <Col className="dim-color bt-validate" sm={6} md={6} xl={3} xs={6}>
              <Row>{FETConversion(row.amount)} FET</Row>
              <Row>
                Fee:&nbsp;
                <Button>
                  <Link to={`/accounts/${row.miner}`}>Validator</Link>
                </Button>
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

export default connect(null, mapDispatchToProps)(LatestTransfers);
