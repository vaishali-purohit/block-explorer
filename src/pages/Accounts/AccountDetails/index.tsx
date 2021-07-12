import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import TableDetails from "../../../components/Table/TableDetails";
import TabData from "../../../components/Tabs";
import {
  getAccountDetail,
  getAccountTransfer
} from "../../../actions/account.actions";
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

class AccountDetails extends React.Component<any, State> {
  componentDidMount() {
    const { match, getAccountDetail, getAccountTransfer } = this.props;
    const { params } = match;
    getAccountDetail(params.id, false);
    getAccountTransfer(params.id, true);
  }

  render() {
    const { accountDetail, accountTransfer } = this.props;
    return (
      <Container className="topSection">
        <h1>Accounts Details</h1>
        <TableDetails
          headings={accountHeadings}
          emptyText="There are no details."
          count={0}
          rowData={accountDetail || []}
        />
        <br />
        <TabData
          tabHead={tabHeading}
          headings={transferHeadings}
          type="transfer"
          code="//----------------------------------------No Code Found--------------------------------------//"
          emptyText="There are currently no Transfers."
          count={0}
          rowData={accountTransfer || []}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    accountDetail: state.account.accountDetail,
    accountTransfer: state.account.accountTransfer
  };
};

const mapDispatchToProps: ActionCall = {
  getAccountDetail,
  getAccountTransfer
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
