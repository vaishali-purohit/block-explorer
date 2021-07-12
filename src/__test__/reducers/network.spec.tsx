import reducer from "../../reducers/network.reducer";
import {
  REQUEST_NETWORKTAP_FAILED,
  REQUEST_NETWORKTAP_REQUEST,
  // REQUEST_NETWORKTAP_SUCCESS,
  SELECTED_NETWORK_SUCCESS
} from "../../actions/networktap.actions";
import localStorage from "../../mockData/localstorage";

const initialState = {
  loading: false,
  networkTap: null,
  selectedNetwork: null
};

describe("Network: reducer", () => {
  test("set initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  describe("fetch block details", () => {
    test("on request", () => {
      const action = { type: REQUEST_NETWORKTAP_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    it("sets the value of an item", () => {
      localStorage.setItem("foo", "bar");
      expect(localStorage.store).toEqual({ foo: "bar" });
    });

    // test("on success", () => {
    //   const action = {
    //     type: REQUEST_NETWORKTAP_SUCCESS,
    //     data: [{ name: "devnet" }]
    //   };
    //   expect(reducer(initialState, action)).toMatchSnapshot();
    // });

    test("on failure", () => {
      const action = { type: REQUEST_NETWORKTAP_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("fetch block list", () => {
    test("on success", () => {
      const action = { type: SELECTED_NETWORK_SUCCESS, name: "testnet" };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });
});
