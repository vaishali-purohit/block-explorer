import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import TableDetails from "../../../components/Table/TableDetails";
import TabData from "../../../components/Tabs";

import {
  getTransactionDetail,
  getTransactionTransfer
} from "../../../actions/transaction.actions";
import { ActionCall } from "../../../interfaces/actions.interface";
import { State } from "../../../interfaces/state.interface";

const transactionHeadings = [
  {
    key: "status",
    label: "Status",
    type: "transaction"
  },
  {
    key: "contract",
    label: "Contract",
    type: "transaction"
  },
  {
    key: "digest",
    label: "Hash",
    type: "transaction"
  },
  {
    key: "block_number",
    label: "Block",
    type: "transaction"
  },
  {
    key: "created_date",
    label: "Time",
    type: "transaction"
  },
  {
    key: "charge_rate",
    label: "Charge Rate",
    type: "transaction"
  },
  {
    key: "charge_limit",
    label: "Charge Limit",
    type: "transaction"
  }
];

const transferHeadings = [
  {
    key: "from_address",
    label: "From",
    type: "transfer"
  },
  {
    key: "to_address",
    label: "To",
    type: "transfer"
  },
  {
    key: "amount",
    label: "Amount",
    type: "transfer"
  }
];

const tabHeading = [
  {
    key: "FET Transfers",
    label: "FET Transfers",
    type: "tabs"
  }
];

class TransactionDetails extends React.Component<any, State> {
  componentDidMount() {
    const { match, getTransactionDetail, getTransactionTransfer } = this.props;
    const { params } = match;
    getTransactionDetail(params.id, false);
    getTransactionTransfer(params.id, true);
  }

  componentDidUpdate(prevProps) {
    const { match, getTransactionDetail, getTransactionTransfer } = this.props;
    if (match.params.id !== prevProps.match.params.id) {
      const { params } = match;
      getTransactionDetail(params.id, false);
      getTransactionTransfer(params.id, true);
    }
  }

  render() {
    const { transactionDetail, transactionTransfer } = this.props;
    return (
      <Container className="topSection">
        <h1>Transaction Details</h1>
        <TableDetails
          headings={transactionHeadings}
          emptyText="There are no details."
          count={0}
          rowData={transactionDetail || []}
        />
        <br />
        <TabData
          tabHead={tabHeading}
          headings={transferHeadings}
          code="//----------------------------------------No Code Found--------------------------------------//"
          emptyText="There are currently no Transfers."
          type="transfer"
          count={0}
          rowData={transactionTransfer || []}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    transactionDetail: state.transaction.transactionDetail,
    prevDetail: state.transaction.prevDetail,
    transactionTransfer: state.transaction.transactionTransfer
  };
};

const mapDispatchToProps: ActionCall = {
  getTransactionDetail,
  getTransactionTransfer
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionDetails);
