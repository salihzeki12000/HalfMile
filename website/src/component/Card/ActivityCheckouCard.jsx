import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button, IconButton } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import { buildStars } from "./util/buildStars";
import "./index.sass";

class ActivityCheckoutCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }
    render() {
        const name = this.props.name;
        // const price = this.props.price;
        const image = this.props.img;
        const id = this.props.id;
        const latLong = this.props.latLong;
        const rateStars = this.props.stars;
        const timeCost = this.props.timeCost;
        const info = this.props.info;
        const address = this.props.address;
        function addToList() {
            console.log(id);
        }
        function showLocation() {
            console.log(latLong);
        }
        const starGroup = buildStars(rateStars);

        return (
            <Card className="activity-card card ml-1">
                <Card.Img className="activity-card-img" variant="top" src={image} />
                <div
                    className="activity-card-shade-wrapper"
                    onMouseEnter={this.openInfo}
                    onMouseLeave={this.closeInfo}
                >
                    {this.state.hover && <div className="activity-card-shade"></div>}
                </div>

                <Card.Body className="activity-card-body pl-0 pt-2 pb-1">
                    <div className="activity-card-body-title">
                        <Card.Title className="activity-card-body-title-text">
                            {name}
                        </Card.Title>
                        <div className="activity-card-body-title-icon">
                            <LocationOnIcon />
                            {address}
                        </div>
                    </div>
                    <div className="activity-card-body-rate">
                        <div>{starGroup}</div>
                        <div>Est. Time&nbsp;&nbsp;{timeCost}</div>
                    </div>
                    {/* <div className="activity-card-option">
                        <Button onClick={addToList}>Add to my list</Button>
                    </div> */}
                </Card.Body>
            </Card>
        );
    }
    openInfo = event => {
        event.preventDefault();
        if (!this.state.hover) {
            this.setState({ hover: true });
        }
    };
    closeInfo = event => {
        event.preventDefault();
        if (this.state.hover) {
            this.setState({ hover: false });
        }
    };
}

export default ActivityCheckoutCard;
