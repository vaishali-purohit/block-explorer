import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import TableDetails from "../../../components/Table/TableDetails";

import { getTransferDetail } from "../../../actions/transfer.actions";
import { ActionCall } from "../../../interfaces/actions.interface";
import { State } from "../../../interfaces/state.interface";

const transferHeadings = [
  {
    key: "block",
    label: "Block",
    type: "transfer"
  },
  {
    key: "tx",
    label: "Transaction",
    type: "transfer"
  },
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

class TransferDetails extends React.Component<any, State> {
  componentDidMount() {
    const { match, getTransferDetail } = this.props;
    const { params } = match;
    getTransferDetail(params.id, true);
  }

  render() {
    const { transferDetail } = this.props;
    return (
      <Container className="topSection">
        <h1>Transfer Details</h1>
        <TableDetails
          headings={transferHeadings}
          emptyText="There are no details."
          count={0}
          rowData={transferDetail || []}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    transferDetail: state.transfer.transferDetail
  };
};

const mapDispatchToProps: ActionCall = {
  getTransferDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferDetails);
