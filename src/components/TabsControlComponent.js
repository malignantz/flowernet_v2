import React, { Component } from "react";
import SelectField from "react-md/lib/SelectFields/SelectField";
import Divider from "react-md/lib/Dividers/Divider";

import "./TabsControlComponent.css";

class TabsControlComponent extends Component {
  render() {
    let pads = this.props.crashpads;
    let selected = this.props.selected;
    return (
      <div>
        <SelectField
          id="select-field-1"
          label="Select Crashpad"
          placeholder={selected}
          className="crashpad_select md-cell"
          menuItems={pads}
          onChange={this.props.selectPad}
          defaultValue="Sunny Tulip"
        />
        <Divider />
      </div>
    );
  }
}

export default TabsControlComponent;
