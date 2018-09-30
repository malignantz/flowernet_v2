import React, { Component } from "react";

import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import SelectionControl from "react-md/lib/SelectionControls/SelectionControl";
import Divider from "react-md/lib/Dividers/Divider";

import "./AmenitiesComponent.css";
import ButtonComponent from "./ButtonComponent";

class AmenitiesComponent extends Component {
  render() {
    let amenities = [
      [
        "Cleaning Service",
        "Cleaning services are provided by private maid 3 times per week, Mondays, Wednesdays and Thursdays. The schedule results in a deep clean of the apartment for 2+ hours every 4 to 5 days with a trash collection day in between each deep clean. (include pic of calender to show)"
      ],
      [
        "Pool / Spa",
        "The apartment complex has a large pool, spa and grilling area in the center of the complex great for relaxing or turning up. There's also an additional, smaller pool with grilling area on the south end of the complex."
      ],
      [
        "4K TV & Entertainment",
        "We have a 4K smart TV with many streaming services including our personal "
      ]
    ];

    return (
      <div className="amenities_content">
        <div className="md-headline">
          <strong>Crashpad Amenities</strong>
        </div>
        {amenities.map(section => (
          <Card
            className="md-block-centered margin-card"
            raise
            key={section[1]}
          >
            <CardTitle title={section[0]} className="section_title" />
            <CardText>{section[1]}</CardText>
          </Card>
        ))}
      </div>
    );
  }
}
export default AmenitiesComponent;
