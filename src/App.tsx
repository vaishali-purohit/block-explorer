/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import dotenv from "dotenv";
import Header from "./pages/Header";
import Router from "./routes";
import Footer from "./pages/Footer";
import { setLoading } from "./actions/app.actions";
import { ActionCall } from "./interfaces/actions.interface";
import { State } from "./interfaces/state.interface";
import LoaderDialog from "./components/Loader";

dotenv.config();

class App extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
      isApiCall: true
    };
  }

  componentDidMount() {
    // if (process.env.NODE_ENV !== "development") {
    const { isApiCall } = this.state;
    //   const { getToken } = this.props;
    const { setLoading } = this.props;
    if (isApiCall) {
      //     getToken(
      //       process.env.REACT_APP_USERNAME,
      //       process.env.REACT_APP_PASSWORD
      //     );
      setLoading(true);
      this.setState({ isApiCall: false });
    }
  }

  render() {
    const { loader } = this.props;
    return (
      <>
        <Header />
        <Router />
        <LoaderDialog {...loader} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    loader: state.app.loader
  };
};

const mapDispatchToProps: ActionCall = {
  setLoading
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
