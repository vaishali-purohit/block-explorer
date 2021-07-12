import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import TableData from "../../../components/Table/TableData";
import { getContractList } from "../../../actions/contract.actions";
import { ActionCall } from "../../../interfaces/actions.interface";
import { State } from "../../../interfaces/state.interface";

const contractHeadings = [
  {
    key: "name",
    label: "Name",
    type: "contract"
  }
];

class Contracts extends React.Component<any> {
  componentDidMount() {
    const { getContractList } = this.props;
    // if (app)
    getContractList(1, false);
  }

  render() {
    const { count, contract } = this.props;
    return (
      <Container className="topSection">
        <h1>All contracts</h1>
        <TableData
          headings={contractHeadings}
          emptyText="There are currently no Contracts."
          type="contract"
          count={count || 0}
          rowData={contract || []}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    // app: state.app.access,
    contract: state.contract.data,
    count: state.contract.count
  };
};

const mapDispatchToProps: ActionCall = {
  getContractList
};

export default connect(mapStateToProps, mapDispatchToProps)(Contracts);
