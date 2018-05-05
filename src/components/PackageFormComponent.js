import React, { Component } from "react";
import ResponsiveEmbed from "react-responsive-embed";

class PackageFormComponent extends Component {
  render() {
    return (
      <ResponsiveEmbed src="https://docs.google.com/forms/d/e/1FAIpQLSdmL1taoWmodmaEas5dzSH2tPi9hyQxdon5Js_ol_b9W8YV5A/viewform?embedded=true" />
    );
  }
}

export default PackageFormComponent;
