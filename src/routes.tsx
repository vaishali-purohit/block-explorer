import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ActionCall } from "./interfaces/actions.interface";
import { State } from "./interfaces/state.interface";
import Blocks from "./pages/Blocks/BlockList";
import BlockDetails from "./pages/Blocks/BlockDetails";
import Transactions from "./pages/Transactions/TransactionList";
import TransactionDetails from "./pages/Transactions/TransactionDetails";
import Transfers from "./pages/Transfers/TransferList";
import TransferDetails from "./pages/Transfers/TransferDetails";
import Contracts from "./pages/Contracts/ContractList";
import ContractDetails from "./pages/Contracts/ContractDetails";
import Accounts from "./pages/Accounts/AccountList";
import AccountDetails from "./pages/Accounts/AccountDetails";
import Home from "./pages/Home";
import TokenTap from "./pages/TokenTap";
import { getTokenTap } from "./actions/tokentap.actions";
import { getNetwork } from "./actions/networktap.actions";

class Router extends React.Component<any, State> {
  componentDidMount() {
    const { getNetwork } = this.props;
    // if (app) {
    getTokenTap();
    getNetwork();
    // }
  }

  render() {
    const { tokenTap, selectedNetwork } = this.props;
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blocks" component={Blocks} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/transfers" component={Transfers} />
        <Route exact path="/contracts" component={Contracts} />
        <Route exact path="/accounts" component={Accounts} />
        <Route exact path="/blocks/:id" component={BlockDetails} />
        <Route exact path="/transactions/:id" component={TransactionDetails} />
        <Route exact path="/accounts/:id" component={AccountDetails} />
        <Route exact path="/contract/:id" component={ContractDetails} />
        <Route exact path="/transfers/:id" component={TransferDetails} />
        {tokenTap && selectedNetwork !== "mainnet" ? (
          <Route exact path="/tokentap" component={TokenTap} />
        ) : (
          ""
        )}
      </Switch>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    // app: state.app.acess,
    tokenTap: state.tokentap.tokenTap,
    selectedNetwork: state.network.selectedNetwork
  };
};

const mapDispatchToProps: ActionCall = {
  getTokenTap,
  getNetwork
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
