import React from "react";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import { ActionCall } from "../../interfaces/actions.interface";
import { clearState } from "../../actions/app.actions";

type Props = {
  network: Array<object> | null;
  type: string;
  mode?: string;
  token: string;
};

class MenuBar extends React.Component<RouteComponentProps<{}> & any, Props> {
  // componentDidMount() {
  //   const { history } = this.props;

  //   window.addEventListener("popstate", () => {
  //     history.go(1);
  //   });
  // }

  handleClick = value => {
    // const { clearState } = this.props;
    // clearState();
    const envToUrlMap = {
      devnet: process.env.REACT_APP_BACKEND_DEVNET_URL,
      mainnet: process.env.REACT_APP_BACKEND_MAINNET_URL,
      testnet: process.env.REACT_APP_BACKEND_TESTNET_URL
    };

    window.location.assign(envToUrlMap[value]);
  };

  handleNetwork = (value: string) => {
    const { network } = this.props;
    if (network.length > 0) {
      if (process.env.REACT_APP_DEFAULT_NETWORK !== "devnet") {
        network.splice(1, "devnet");
      }
      return (
        <NavDropdown title="NETWORK" id="collasible-nav-dropdown">
          {network.map(row => (
            <NavDropdown.Item
              href=""
              onClick={() => this.handleClick(row.name)}
              className={`text-uppercase ${
                row.name === value ? "disabled" : ""
              }`}
              key={row.name}
            >
              {row.name}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      );
    }
    return "";
  };

  render() {
    const { type, mode, token } = this.props;
    let value;

    if (type) {
      value = type;
    } else value = mode;

    return (
      <Navbar expand="lg" style={{ minHeight: 122 }}>
        <Container className="menu-container">
          <Navbar.Brand>
            <Link to="/">
              <p className="text-uppercase">{value}</p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="menu-nav-link">
            {this.handleNetwork(value)}
            <NavDropdown title="BLOCKCHAIN" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} href="/" to="/blocks">
                BLOCKS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/" to="/transactions">
                TRANSACTIONS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/" to="/transfers">
                TRANSFERS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/" to="/contracts">
              CONTRACTS
            </Nav.Link>
            <NavDropdown title="TOKENS" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} href="/" to="/accounts">
                ACCOUNTS
              </NavDropdown.Item>
              {token && value !== "mainnet" ? (
                <NavDropdown.Item as={Link} href="/" to="/tokentap">
                  TOKEN TAP
                </NavDropdown.Item>
              ) : (
                ""
              )}
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapDispatchToProps: ActionCall = {
  clearState
};

export default withRouter<RouteComponentProps<{}> & Props, any>(
  connect(null, mapDispatchToProps)(MenuBar)
);
