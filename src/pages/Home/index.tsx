import React from "react";
import { connect } from "react-redux";
import TotalCount from "../../components/Count/TotalCount";
import ViewTable from "./viewTable";
import "./home.scss";
import { State } from "../../interfaces/state.interface";

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component<any> {
  render() {
    const {
      accountCount,
      blockCount,
      contractCount,
      transactionCount,
      transferCount,
      blockData,
      transactionData
    } = this.props;
    return (
      <>
        <TotalCount
          account={accountCount}
          block={blockCount}
          contract={contractCount}
          transaction={transactionCount}
          transfer={transferCount}
        />
        <ViewTable
          blockCount={blockCount}
          block={blockData}
          transactionCount={transactionCount}
          transaction={transactionData}
        />
      </>
    );
  }
}

const mapStateToProp = (state: State) => {
  return {
    accountCount: state.account.count,
    blockCount: state.block.count,
    contractCount: state.contract.count,
    transactionCount: state.transaction.count,
    transferCount: state.transfer.count,
    blockData: state.block.data,
    transactionData: state.transaction.data
  };
};

export default connect(mapStateToProp, null)(Home);
