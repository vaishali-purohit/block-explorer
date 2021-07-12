import React from "react";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";
import { ActionCall } from "../../interfaces/actions.interface";
import { getBlockList } from "../../actions/block.actions";
import { getAccountList } from "../../actions/account.actions";
import { getContractList } from "../../actions/contract.actions";
import { getTransactionList } from "../../actions/transaction.actions";
import { getTransferList } from "../../actions/transfer.actions";

type Props = {
  currentPage: number;
  pagesCount: number;
  type: string;
  handleClick(index: number, pagesCount: number): void;
};

class PaginationComponent extends React.Component<any, Props> {
  paginatedItems = (currentPage: number, pagesCount: number, type: string) => {
    const items: any[] = [];
    for (
      let number = currentPage;
      number <= currentPage + 3 && number <= pagesCount && currentPage !== 0;
      number += 1
    ) {
      items.push(
        <Pagination.Item
          onClick={() => this.handleFunction(number, type)}
          key={number}
          active={number === currentPage}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  handleFunction(index: number, type: string) {
    const {
      handleClick,
      getBlockList,
      getAccountList,
      getContractList,
      getTransactionList,
      getTransferList
    } = this.props;
    if (type === "block") getBlockList(index);
    if (type === "account") getAccountList(index);
    if (type === "contract") getContractList(index);
    if (type === "transaction") getTransactionList(index);
    if (type === "transfer") getTransferList(index);

    handleClick(index);
  }

  render() {
    const { currentPage, pagesCount, type } = this.props;
    if (!pagesCount) return <br />;
    return (
      <Pagination>
        <Pagination.First
          onClick={() => this.handleFunction(1, type)}
          disabled={currentPage <= 1}
        />
        <Pagination.Prev
          onClick={() => this.handleFunction(currentPage - 1, type)}
          disabled={currentPage <= 1}
        />

        {currentPage !== 1 ? (
          <>
            {" "}
            <Pagination.Item onClick={() => this.handleFunction(1, type)}>
              {1}
            </Pagination.Item>{" "}
            <Pagination.Ellipsis />{" "}
          </>
        ) : (
          ""
        )}

        {this.paginatedItems(currentPage, pagesCount, type)}

        {currentPage !== pagesCount ? (
          <>
            {" "}
            <Pagination.Ellipsis />{" "}
            <Pagination.Item
              onClick={() => this.handleFunction(pagesCount, type)}
            >
              {pagesCount}
            </Pagination.Item>{" "}
          </>
        ) : (
          ""
        )}
        <Pagination.Next
          onClick={() => this.handleFunction(currentPage + 1, type)}
          disabled={currentPage >= pagesCount - 1}
        />
        <Pagination.Last
          onClick={() => this.handleFunction(pagesCount - 1, type)}
          disabled={currentPage >= pagesCount - 1}
        />
      </Pagination>
    );
  }
}

const mapDispatchToProps: ActionCall = {
  getBlockList,
  getAccountList,
  getContractList,
  getTransactionList,
  getTransferList
};

export default connect(null, mapDispatchToProps)(PaginationComponent);
