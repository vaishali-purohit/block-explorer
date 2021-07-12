import React from "react";
import { connect } from "react-redux";
import MenuBar from "./menuBar";
import SearchBar from "./searchBar";
import "./header.scss";
import { State } from "../../interfaces/state.interface";
import { getNetworkTap } from "../../actions/networktap.actions";
import { getTokenTap } from "../../actions/tokentap.actions";
import { ActionCall } from "../../interfaces/actions.interface";

class Header extends React.Component<any, State> {
  componentDidMount() {
    const { getNetworkTap, getTokenTap } = this.props;
    // if (app) {
    getTokenTap();
    getNetworkTap();
    // }
  }

  render() {
    const { selectedNetwork, tokenTap } = this.props;
    return (
      <div className="header">
        <MenuBar
          network={JSON.parse(localStorage.getItem("Networks") || "[]")}
          type={selectedNetwork || false}
          mode={process.env.REACT_APP_DEFAULT_NETWORK || "mainnet"}
          token={tokenTap}
        />
        <SearchBar />
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    // app: state.app.access,
    tokenTap: state.tokentap.tokenTap,
    selectedNetwork: state.network.selectedNetwork
  };
};

const mapDispatchToProps: ActionCall = {
  getTokenTap,
  getNetworkTap
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
