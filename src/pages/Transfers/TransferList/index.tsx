import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import TableData from "../../../components/Table/TableData";
import { getTransferList } from "../../../actions/transfer.actions";
import { ActionCall } from "../../../interfaces/actions.interface";
import { State } from "../../../interfaces/state.interface";

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

class Transfers extends React.Component<any> {
  componentDidMount() {
    const { getTransferList } = this.props;
    // if (app)
    getTransferList(1, false);
  }

  render() {
    const { count, transfer } = this.props;
    return (
      <Container className="topSection">
        <h1>All transfers</h1>
        <TableData
          headings={transferHeadings}
          emptyText="There are currently no Transfers."
          type="transfer"
          count={count || 0}
          rowData={transfer || []}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    // app: state.app.access,
    transfer: state.transfer.data,
    count: state.transfer.count
  };
};

const mapDispatchToProps: ActionCall = {
  getTransferList
};

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);
