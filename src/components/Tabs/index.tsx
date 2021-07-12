import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BlockInterface } from "../../interfaces/blocks.interface";
import { TransactionInterface } from "../../interfaces/transaction.interface";
import { HeadingInterface } from "../../interfaces/heading.interface";
import { ContractInterface } from "../../interfaces/contract.interface";
import { State } from "../../interfaces/state.interface";
import { AccountInterface } from "../../interfaces/accounts.interface";
import TableData from "../Table/TableData";

import "./tab.scss";

type Props = {
  headings: HeadingInterface[];
  emptyText: string;
  rowData:
    | BlockInterface[]
    | TransactionInterface[]
    | ContractInterface[]
    | AccountInterface[];
  tabHead: HeadingInterface[];
  count: number;
  type: string;
  code: string;
};

class TabData extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: props.tabHead[0].label || ""
    };
  }

  handleSelect = (selectedTab: string) => {
    this.setState({
      activeTab: selectedTab
    });
  };

  renderTab = (
    headings: HeadingInterface[],
    emptyText: string,
    rowData:
      | BlockInterface[]
      | TransactionInterface[]
      | ContractInterface[]
      | AccountInterface[],
    tab: string,
    count: number,
    type: string,
    code: string
  ) => {
    return (
      <Tab eventKey={tab} title={tab} key={tab}>
        {tab !== "Contract Source" ? (
          <TableData
            headings={headings}
            emptyText={emptyText}
            type={type}
            count={count || 0}
            rowData={rowData || []}
          />
        ) : (
          <pre>{`${code}`}</pre>
        )}
      </Tab>
    );
  };

  render() {
    const { activeTab } = this.state;
    const {
      headings,
      emptyText,
      rowData,
      tabHead,
      count,
      type,
      code
    } = this.props;
    return (
      <Tabs
        activeKey={activeTab}
        onSelect={this.handleSelect}
        id="contract-tab"
      >
        {tabHead.map(tab =>
          this.renderTab(
            headings,
            emptyText,
            rowData,
            tab.label,
            count,
            type,
            code
          )
        )}
      </Tabs>
    );
  }
}

export default TabData;
