import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import TableDetails from "../../../components/Table/TableDetails";
import TabData from "../../../components/Tabs";
import { ActionCall } from "../../../interfaces/actions.interface";
import { State } from "../../../interfaces/state.interface";
import {
  getContractDetail,
  getContractTransaction
} from "../../../actions/contract.actions";

const contractHeadings = [
  {
    key: "name",
    label: "Name",
    type: "contract"
  },
  {
    key: "balance",
    label: "Balance",
    type: "contract"
  },
  {
    key: "calls",
    label: "Calls",
    type: "contract"
  }
];

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

const tabHeading = [
  {
    key: "transactions",
    label: "Transactions",
    type: "tabs"
  },
  {
    key: "contract_source",
    label: "Contract Source",
    type: "tabs"
  }
];

class ContractDetails extends React.Component<any, State> {
  componentDidMount() {
    const { getContractDetail, getContractTransaction, match } = this.props;
    const { params } = match;
    getContractDetail(params.id, false);
    getContractTransaction(params.id, true);
  }

  render() {
    const {
      contractDetail,
      contractTransactionCount,
      contractTransaction
    } = this.props;
    const { code } = contractDetail;
    return (
      <Container className="topSection">
        <h1>Contract Details</h1>
        <TableDetails
          headings={contractHeadings}
          emptyText="There are no details."
          count={contractTransactionCount || 0}
          rowData={contractDetail || []}
        />
        <br />
        <TabData
          tabHead={tabHeading}
          headings={transactionHeadings}
          emptyText="There are currently no Transactions."
          type="transaction"
          code={
            code ||
            "//----------------------------------------No Code Found--------------------------------------//"
          }
          count={contractTransactionCount || 0}
          rowData={contractTransaction || []}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    contractDetail: state.contract.contractDetail,
    contractTransaction: state.contract.contractTransaction,
    contractTransactionCount: state.contract.contractTransactionCount
  };
};

const mapDispatchToProps: ActionCall = {
  getContractDetail,
  getContractTransaction
};

export default connect(mapStateToProps, mapDispatchToProps)(ContractDetails);
