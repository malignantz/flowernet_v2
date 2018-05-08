import React, { Component } from "react";
import { SelectField, Divider } from "react-md";
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
          onChage={this.props.selectPad}
          defaultValue="Sunny Tulip"
        />
        <Divider />
      </div>
    );
  }
}

export default TabsControlComponent;
