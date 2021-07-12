import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import TableData from "../../../components/Table/TableData";
import { getAccountList } from "../../../actions/account.actions";
import { ActionCall } from "../../../interfaces/actions.interface";
import { State } from "../../../interfaces/state.interface";

const accountHeadings = [
  {
    key: "address",
    label: "Address",
    type: "account"
  },
  {
    key: "balance",
    label: "Balance",
    type: "account"
  }
];

class Accounts extends React.Component<any> {
  componentDidMount() {
    const { count, getAccountList } = this.props;
    const pagesCount: number = count <= 10 ? 1 : Math.ceil(count / 10);
    // if (app) {
    getAccountList(pagesCount, false);
    // }
  }

  render() {
    const { count, account } = this.props;
    return (
      <Container className="topSection">
        <h1>All accounts</h1>
        <TableData
          headings={accountHeadings}
          emptyText="There are currently no Accounts."
          type="account"
          count={count || 0}
          rowData={account || []}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    // app: state.app.access,
    account: state.account.data,
    count: state.account.count
  };
};

const mapDispatchToProps: ActionCall = {
  getAccountList
};

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
