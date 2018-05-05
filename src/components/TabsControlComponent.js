import React, { Component } from "react";
import { SelectField } from "react-md";
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
          className="md-cell"
          menuItems={pads}
        />
      </div>
    );
  }
}

export default TabsControlComponent;
