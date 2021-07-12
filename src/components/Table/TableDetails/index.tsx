import React from "react";
import { Table, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { HeadingInterface } from "../../../interfaces/heading.interface";
import "./tableDetails.scss";
import FETConversion from "../../../util/fetConversion";

type Props = {
  headings: HeadingInterface[];
  emptyText: string;
  rowData: any;
  count: number;
};

class TableData extends React.Component<Props> {
  renderHeading = (heading: string) => {
    return (
      <td style={{ width: 200, fontWeight: 500, padding: "15px 0" }}>
        {" "}
        {heading}:
      </td>
    );
  };

  renderRow = (rowData: any, heading: HeadingInterface, index: number) => {
    return (
      <tr key={`${index}_${rowData[heading.key]}`} className="detail-link">
        {this.renderHeading(heading.label)}
        {this.renderCell(rowData, heading)}
      </tr>
    );
  };

  renderCell = (rowData: any, heading: any) => {
    const { count } = this.props;
    if (heading.key === "balance")
      return <td>{FETConversion(rowData[heading.key])} FET</td>;

    if (heading.key === "calls") return <td> {count} </td>;

    if (heading.key === "transactions" && heading.type === "block")
      return <td> {rowData.transaction_count} </td>;

    if (heading.key === "timestamp")
      return (
        <td>
          <Moment>{rowData[heading.key]}</Moment>{" "}
        </td>
      );

    if (heading.key === "created_date")
      return (
        <td>
          <Moment format="D MMM YYYY, HH:MM">{rowData[heading.key]}</Moment>{" "}
        </td>
      );

    if (
      heading.key === "parent_digest" ||
      (heading.key === "block" && heading.type === "transfer")
    )
      return (
        <td>
          <Link to={{ pathname: `/blocks/${rowData[heading.key]}` }}>
            {" "}
            {rowData[heading.key]}
          </Link>{" "}
        </td>
      );

    if (heading.key === "miner")
      return (
        <td>
          <Link to={{ pathname: `/accounts/${rowData[heading.key]}` }}>
            {" "}
            {rowData[heading.key]}
          </Link>{" "}
        </td>
      );

    if (heading.key === "contract")
      return (
        <td>
          <Link to={{ pathname: `/contract/${rowData[heading.key]}` }}>
            {rowData[heading.key]}{" "}
          </Link>{" "}
        </td>
      );

    if (heading.key === "transactions" || heading.key === "tx")
      return (
        <td>
          <Link to={{ pathname: `/transactions/${rowData[heading.key]}` }}>
            {rowData[heading.key]}{" "}
          </Link>{" "}
        </td>
      );

    if (heading.key === "from_address" || heading.key === "to_address")
      return (
        <td>
          <Link to={{ pathname: `/transfers/${rowData.id}` }}>
            {rowData[heading.key]}{" "}
          </Link>{" "}
        </td>
      );

    if (heading.key === "status")
      return (
        <td>
          <Badge
            variant="secondary"
            className={`upperCase ${rowData[heading.key]}`}
          >
            {rowData[heading.key]}
          </Badge>
        </td>
      );

    if (heading.key === "charge_limit")
      return <td>{rowData[heading.key]} ops</td>;

    if (heading.key === "charge_rate" || heading.key === "amount")
      return <td>{FETConversion(rowData[heading.key])} FET</td>;

    if (heading.key === "block_number" && heading.type === "transaction")
      return (
        <td>
          <Link to={{ pathname: `/blocks/${rowData.block}` }}>
            {" "}
            {rowData[heading.key]}
          </Link>{" "}
        </td>
      );

    return <td>{rowData[heading.key]}</td>;
  };

  render() {
    const { rowData, headings } = this.props;
    return (
      <Card className="border-top table-responsive">
        <Table>
          <tbody>
            {headings.map((heading: HeadingInterface, index: number) =>
              this.renderRow(rowData, heading, index)
            )}
          </tbody>
        </Table>
      </Card>
    );
  }
}

export default TableData;
