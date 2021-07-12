import React from "react";
import { Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import { connect } from "react-redux";
import { BlockInterface } from "../../../interfaces/blocks.interface";
import { TransactionInterface } from "../../../interfaces/transaction.interface";
import { HeadingInterface } from "../../../interfaces/heading.interface";
import { ContractInterface } from "../../../interfaces/contract.interface";
import { AccountInterface } from "../../../interfaces/accounts.interface";
import { TransferInterface } from "../../../interfaces/transfer.interface";
import PaginationComponent from "../../Pagination";
import FETConversion from "../../../util/fetConversion";
import {
  getTransactionCount,
  getBlockDetail
} from "../../../actions/block.actions";
import { State } from "../../../interfaces/state.interface";

import "./tableData.scss";

interface ComponentDispatchProps {
  getTransactionCount: typeof getTransactionCount;
  getBlockDetail: typeof getBlockDetail;
}

interface ComponentStateProps {
  transactionCount: number;
  blockDetail: BlockInterface;
}

interface ComponentOwnProps {
  headings: HeadingInterface[];
  emptyText: string;
  rowData:
    | BlockInterface[]
    | TransactionInterface[]
    | ContractInterface[]
    | AccountInterface[]
    | TransferInterface[];
  count: number;
  type: string;
}

type ComponentProps = ComponentStateProps &
  ComponentDispatchProps &
  ComponentOwnProps;

interface CurrentState {
  currentPage: number;
}

class TableData extends React.Component<ComponentProps, CurrentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  compileState = (index: number, pagesCount: number) => {
    if (pagesCount !== 0)
      this.setState({
        currentPage: index
      });
  };

  compileHeader = (headings: any) => (
    <thead style={{ backgroundColor: "#eee" }}>
      <tr>
        {headings.map(heading => (
          <th
            key={heading.label}
            style={
              // eslint-disable-next-line no-nested-ternary
              heading.key === "transactions"
                ? { textAlign: "center" }
                : heading.type === "account"
                ? { width: "50%", textAlign: "left" }
                : { textAlign: "left" }
            }
          >
            {heading.label}
          </th>
        ))}
      </tr>
    </thead>
  );

  renderData = (data: any, heading: HeadingInterface, name: string) => {
    if (heading.key === "block_number" && heading.type === "transaction")
      return (
        <td key={heading.key} className={name}>
          <Link to={{ pathname: `/blocks/${data.block}` }} className="pd-0">
            {" "}
            {data[heading.key]}{" "}
          </Link>
        </td>
      );

    if (heading.key === "block_number" && heading.type === "block")
      return (
        <td key={heading.key} className={name}>
          <Link to={{ pathname: `/blocks/${data.digest}` }} className="pd-0">
            {" "}
            {data[heading.key]}{" "}
          </Link>
        </td>
      );

    if (heading.key === "transactions" && heading.type === "block")
      return (
        <td key={heading.key} className={name}>
          {data.transaction_count}
        </td>
      );

    if (
      (heading.key === "digest" && heading.type === "block") ||
      heading.key === "block"
    )
      return (
        <td key={heading.key} className={name}>
          <Link to={{ pathname: `/blocks/${data.digest}` }} className="pd-0">
            {" "}
            {data[heading.key].substr(0, 25)}...
          </Link>
        </td>
      );

    if (heading.key === "miner" || heading.key === "sender")
      return (
        <td key={heading.key} className={name}>
          <Link
            to={{ pathname: `/accounts/${data[heading.key]}` }}
            className="pd-0"
          >
            {" "}
            {data[heading.key].substr(0, 25)}...{" "}
          </Link>
        </td>
      );

    if (
      heading.key === "to_address" ||
      heading.key === "from_address" ||
      heading.key === "address"
    )
      return (
        <td key={heading.key} className={name}>
          <Link
            to={{ pathname: `/accounts/${data[heading.key]}` }}
            className="pd-0"
            style={{ fontSize: 14.4 }}
          >
            {" "}
            {data[heading.key].substr(0, 47)}...{" "}
          </Link>
        </td>
      );

    if (heading.type === "transaction")
      if (heading.key === "digest")
        return (
          <td key={heading.key} className={name}>
            <Link
              to={{ pathname: `/transactions/${data[heading.key]}` }}
              className="pd-0"
            >
              {" "}
              {data[heading.key].substr(0, 47)}...
            </Link>
          </td>
        );
      else if (heading.key === "block")
        return (
          <td key={heading.key} className={name}>
            <Link
              to={{ pathname: `/blocks/${data[heading.key]}` }}
              className="pd-0"
            >
              {" "}
              0
            </Link>
          </td>
        );
      else if (heading.key === "contract")
        return (
          <td key={heading.key} className={name}>
            <Link
              to={{ pathname: `/contract/${data[heading.key]}` }}
              className="pd-0"
            >
              {" "}
              {data[heading.key]}{" "}
            </Link>
          </td>
        );

    if (heading.type === "contract")
      if (heading.key === "name")
        return (
          <td key={heading.key} className={name}>
            <Link
              to={{ pathname: `/contract/${data[heading.key]}` }}
              className="pd-0"
            >
              {" "}
              {data[heading.key]}{" "}
            </Link>
          </td>
        );
      else if (heading.key === "digest")
        return (
          <td key={heading.key} className={name}>
            <Link
              to={{ pathname: `/transactions/${data[heading.key]}` }}
              className="pd-0"
            >
              {" "}
              {data[heading.key].substr(0, 47)}...
            </Link>
          </td>
        );

    if (heading.key === "amount")
      return (
        <td key={heading.key} className={name}>
          <Link to={{ pathname: `/transfers/${data.id}` }} className="pd-0">
            {" "}
            {FETConversion(data[heading.key])} FET
          </Link>
        </td>
      );

    if (heading.key === "created_date")
      return (
        <td key={heading.key} className={name}>
          <TimeAgo date={data[heading.key]} minPeriod="10000" />
        </td>
      );

    if (heading.key === "balance")
      return (
        <td key={heading.key} className={name}>
          {FETConversion(data[heading.key])} FET
        </td>
      );

    return (
      <td key={heading.key} className={name}>
        {data[heading.key]}
      </td>
    );
  };

  renderCell = (data: any, heading: HeadingInterface) => {
    if (heading.key === "transactions")
      return this.renderData(data, heading, "color-align");

    if (heading.key === "created_date" || heading.key === "balance")
      return this.renderData(data, heading, "color");

    return this.renderData(data, heading, "");
  };

  renderRow = (
    row:
      | BlockInterface
      | TransactionInterface
      | ContractInterface
      | AccountInterface
      | TransferInterface,
    index: number
  ) => {
    const { headings } = this.props;
    return (
      <tr key={index}>
        {headings.map(heading => {
          return this.renderCell(row, heading);
        })}
      </tr>
    );
  };

  compileBody = (currentPage: number, pageSize: number) => {
    const { rowData, emptyText } = this.props;
    return (
      <tbody>
        {!rowData.length && (
          <tr key="no content">
            <td style={{ fontWeight: "bold" }}>{emptyText}</td>
          </tr>
        )}
        {rowData.length <= pageSize
          ? (rowData as Array<
              | BlockInterface
              | TransactionInterface
              | ContractInterface
              | AccountInterface
              | TransferInterface
            >).map(this.renderRow)
          : (rowData as Array<
              | BlockInterface
              | TransactionInterface
              | ContractInterface
              | AccountInterface
            >)
              .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
              .map(this.renderRow)}
      </tbody>
    );
  };

  render() {
    const { currentPage } = this.state;
    const { count, type, headings } = this.props;
    const pageSize = 10;
    const pagesCount: number = Math.ceil(count / pageSize);
    return (
      <>
        <PaginationComponent
          currentPage={currentPage}
          pagesCount={pagesCount}
          type={type}
          handleClick={this.compileState}
        />
        <Card className="table-responsive">
          <Table className="table-container">
            {this.compileHeader(headings)}
            {this.compileBody(currentPage, pageSize)}
          </Table>
        </Card>
        <br />
        <PaginationComponent
          currentPage={currentPage}
          pagesCount={pagesCount}
          type={type}
          handleClick={this.compileState}
        />
      </>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    transactionCount: state.block.transactionCount,
    blockDetail: state.block.blockDetail
  };
};

const mapDispatchToProps = {
  getTransactionCount,
  getBlockDetail
};

export default connect<
  ComponentStateProps,
  ComponentDispatchProps,
  ComponentOwnProps
>(
  mapStateToProps,
  mapDispatchToProps
)(TableData);
