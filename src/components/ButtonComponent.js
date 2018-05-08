import React, { Component } from "react";
import { Button } from "react-md";

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.button = null;
  }

  render() {
    return (
      <div className="signBtn">
        <Button
          className="signBtn"
          ref={this.props.buttonRef}
          raised
          primary
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdmL1taoWmodmaEas5dzSH2tPi9hyQxdon5Js_ol_b9W8YV5A/viewform",
              "_new"
            )
          }
        >
          Sign agreement ->
        </Button>{" "}
      </div>
    );
  }
}

export default ButtonComponent;
