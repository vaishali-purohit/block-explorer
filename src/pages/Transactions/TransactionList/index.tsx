import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import TableData from "../../../components/Table/TableData";
import { getTransactionList } from "../../../actions/transaction.actions";
import { ActionCall } from "../../../interfaces/actions.interface";
import { State } from "../../../interfaces/state.interface";

const transactionHeadings = [
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
    key: "sender",
    label: "Sender",
    type: "transaction"
  },
  {
    key: "contract",
    label: "Contract",
    type: "transaction"
  }
];

class Transactions extends React.Component<any> {
  componentDidMount() {
    const { getTransactionList } = this.props;
    // if (app)
    getTransactionList(1, false);
  }

  render() {
    const { count, transaction } = this.props;
    return (
      <Container className="topSection">
        <h1>All transactions</h1>
        <TableData
          headings={transactionHeadings}
          emptyText="There are currently no Transactions."
          type="transaction"
          count={count || 0}
          rowData={transaction || []}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    // app: state.app.access,
    transaction: state.transaction.data,
    count: state.transaction.count
  };
};

const mapDispatchToProps: ActionCall = {
  getTransactionList
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
