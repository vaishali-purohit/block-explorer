import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import TableDetails from "../../../components/Table/TableDetails";
import TabData from "../../../components/Tabs";
import {
  getBlockDetail,
  getTransactionCount
} from "../../../actions/block.actions";
import { ActionCall } from "../../../interfaces/actions.interface";
import { State } from "../../../interfaces/state.interface";

const blockHeadings = [
  {
    key: "digest",
    label: "Digest",
    type: "block"
  },
  {
    key: "parent_digest",
    label: "Previous",
    type: "block"
  },
  {
    key: "timestamp",
    label: "Timestamp",
    type: "block"
  },
  {
    key: "block_number",
    label: "Block Number",
    type: "block"
  },
  {
    key: "transactions",
    label: "Transactions",
    type: "block"
  },
  {
    key: "merkle_hash",
    label: "Hash",
    type: "block"
  },
  {
    key: "miner",
    label: "Mined By",
    type: "block"
  }
];

const transactionHeadings = [
  {
    key: "digest",
    label: "Hash",
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

const tabHeading = [
  {
    key: "transactions",
    label: "Transactions",
    type: "tabs"
  }
];

class BlockDetails extends React.Component<any, State> {
  componentDidMount() {
    const { match, getBlockDetail, getTransactionCount } = this.props;
    const { params } = match;
    getBlockDetail(params.id, false);
    getTransactionCount(params.id, true);
  }

  componentDidUpdate(prevProps) {
    const { match, getBlockDetail, getTransactionCount } = this.props;
    const { params } = match;
    if (params.id !== prevProps.match.params.id) {
      getBlockDetail(params.id, false);
      getTransactionCount(params.id, true);
    }
  }

  render() {
    const { blockDetail, transactionCount, transactionData } = this.props;
    return (
      <Container className="topSection">
        <h1>Block Details</h1>
        <TableDetails
          headings={blockHeadings}
          emptyText="There are no details."
          count={transactionCount || 0}
          rowData={blockDetail || []}
        />
        <br />
        <TabData
          tabHead={tabHeading}
          headings={transactionHeadings}
          code="//----------------------------------------No Code Found--------------------------------------//"
          emptyText="There are currently no Transactions."
          type="transaction"
          count={transactionCount || 0}
          rowData={transactionData || []}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    blockDetail: state.block.blockDetail,
    transactionCount: state.block.transactionCount,
    transactionData: state.block.transactionData,
    prevDetail: state.block.prevDetail
  };
};

const mapDispatchToProps: ActionCall = {
  getBlockDetail,
  getTransactionCount
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockDetails);
