import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import TableData from "../../../components/Table/TableData";
import { getBlockList } from "../../../actions/block.actions";
import { ActionCall } from "../../../interfaces/actions.interface";
import { State } from "../../../interfaces/state.interface";

const blockHeadings = [
  {
    key: "block_number",
    label: "Height",
    type: "block"
  },
  {
    key: "created_date",
    label: "Age",
    type: "block"
  },
  {
    key: "digest",
    label: "Hash",
    type: "block"
  },
  {
    key: "transactions",
    label: "Transactions",
    type: "block"
  },
  {
    key: "miner",
    label: "Produced",
    type: "block"
  }
];

class Blocks extends React.Component<any> {
  componentDidMount() {
    const { getBlockList } = this.props;
    // if (app)
    getBlockList(1, false);
  }

  render() {
    const { count, block } = this.props;
    return (
      <Container className="topSection">
        <h1>All blocks</h1>
        <TableData
          headings={blockHeadings}
          emptyText="There are currently no Blocks."
          type="block"
          count={count || 0}
          rowData={block || []}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    // app: state.app.access,
    block: state.block.data,
    count: state.block.count
  };
};

const mapDispatchToProps: ActionCall = {
  getBlockList
};

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);
