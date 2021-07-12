/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import "./tokentap.scss";
import { sendToken, sendTokenStatus } from "../../actions/tokentap.actions";
import { getTransactionDetail } from "../../actions/transaction.actions";
import { ActionCall } from "../../interfaces/actions.interface";
import { State } from "../../interfaces/state.interface";
import LoaderDialog from "../../components/Loader";

class TokenTap extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
      isBusy: false
    };
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.setState({ isBusy: true });
    const form = event.target.elements;
    const { sendToken, errorMessage } = this.props;

    sendToken(form.address.value);

    // eslint-disable-next-line no-alert
    if (errorMessage) alert(errorMessage);
    setTimeout(this.callAPI, 2000);
  };

  callAPI = () => {
    const { digest, sendTokenStatus } = this.props;

    const myInterval = setInterval(() => {
      const { status } = this.props;
      if (status === "Executed") {
        clearInterval(myInterval);
        setTimeout(this.transactionCall, 2000);
      } else {
        sendTokenStatus(digest);
      }
    }, 3000);
  };

  transactionCall = () => {
    const { digest, history } = this.props;
    this.setState({ isBusy: false });
    history.push(`/transactions/0x${digest}`);
  };

  render() {
    const { isBusy } = this.state;
    return (
      <Container className="topSection">
        <h1>Token Tap</h1>
        <Card className="border-top">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>
                Enter an address, and tFet will appear (Once the block is
                mined).
              </Form.Label>
              <Form.Control type="text" id="address" name="address" required />
            </Form.Group>

            <Button variant="light" type="submit" className="dispense">
              Dispense
            </Button>
          </Form>
        </Card>
        {isBusy ? <LoaderDialog open title="Dispensing tokens" /> : ""}
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    status: state.tokentap.status,
    digest: state.tokentap.digest,
    errorMessage: state.tokentap.errorMessage
  };
};

const mapDispatchToProps: ActionCall = {
  sendToken,
  sendTokenStatus,
  getTransactionDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(TokenTap);
