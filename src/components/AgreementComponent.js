import React, { Component } from "react";

import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import SelectionControl from "react-md/lib/SelectionControls/SelectionControl";
import Divider from "react-md/lib/Dividers/Divider";

import "./AgreementComponent.css";
import ButtonComponent from "./ButtonComponent";

class AgreementComponent extends Component {
  constructor(props) {
    super(props);
    this.handleCheck.bind(this);
    this.button = React.createRef();

    this.state = {
      mail: false,
      deposit: false,
      tldr: false,
      instructions: "Check ALL boxes to acknowledge terms.",
      dangerText: "You must check all boxes to continue"
    };
  }

  typingEffect(str) {
    let time = 0;
    let offset = 110;
    this.timeouts = [];
    this.setState({ instructions: "" }, () => {
      for (let char of str) {
        this.timeouts.push(
          setTimeout(() => {
            this.setState({
              instructions: this.state.instructions + char
            });
          }, time)
        );
        time += offset;
      }
    });
  }

  scrollToButton(ns) {
    if (this.button.current) {
      this.button.current.focus();
    }
  }

  handleCheck(name) {
    const NUM_CHK_BOX = 3;
    let uncheck = this.state[name];
    let val = uncheck ? -1 : 1;

    let rem = Object.keys(this.state).filter(key => !this.state[key]).length;

    let newState = Object.assign({}, this.state);
    newState[name] = !newState[name];
    newState.dangerText = `${rem - val} remaining checkbox${
      rem - 1 > 1 ? "es" : ""
    }`;
    //console.log(Object.keys(newState), this.button);
    // console.log("55" + this.button);

    this.setState(newState, () => this.scrollToButton(newState));
  }

  render() {
    return (
      <div className="agreement_content">
        <div className="md-headline">
          <strong>Resident Agreement</strong>
        </div>
        <Card raise>
          <CardTitle title="Mail and Packages" className="section_title" />
          <CardText>
            <div>
              <strong>
                <span>
                  {`Please do not send any mail or packages without reviewing the
                package instructions first. `.toUpperCase()}
                </span>
                <br />
                <br />
                <span>
                  {`Remind anyone who may send you gifts in the mail that your
                physical address is not your mailing address.`.toUpperCase()}
                </span>
                <br />
                <br />
                {`Mail with an incorrect address may be delayed, lost or returned.`.toUpperCase()}
              </strong>
              <Divider className="divider" />
              <SelectionControl
                id="mail_checkbox"
                name="acknowledge[]"
                label="I acknowledge that the physical address is different than my mailing address at Flowernet."
                type="checkbox"
                value="YES"
                className="highlight_text"
                tabIndex={0}
                onChange={() => this.handleCheck("mail")}
                checked={this.state.mail}
              />
            </div>
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Deposit" className="section_title" />
          <CardText>
            <p>
              $100 security deposit is used to secure your spot, for incidentals
              or to replace lost keys.
            </p>
            <p>Deposit is nonrefundable if you do not move in.</p>
            <p>
              {" "}
              Deposit is refunded only when 30 days notice is given and keys are
              returned.
            </p>
            <p>The deposit cannot be applied to your final month of rent.</p>
            <Divider className="divider" />
            <SelectionControl
              id="deposit_checkbox"
              name="acknowledge[]"
              label="I acknowledge that my security deposit cannot be applied to rent nor returned if I do not move in."
              type="checkbox"
              value="YES"
              className="highlight_text"
              tabIndex={0}
              onChange={() => this.handleCheck("deposit")}
              checked={this.state.deposit}
            />
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Rent" className="section_title" />
          <CardText>
            <p>
              Rent is $375 and is due on the 1st with a grace period through the
              3rd.
            </p>
            <p>
              Rent received on 4th or beyond will incur a late fee of $5 per
              day.
            </p>
            <p>Rent will be prorated if moving in mid month.</p>
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Keys" className="section_title" />
          <CardText>
            <p>
              You will be issued a large building key and regular pool/gate key.
              Lost building keys are $50 to replace. There is a code for the
              apt. Under no circumstances should you share/copy/lend ANY
              physical key or code. Violation of this policy will jeopardize
              your residency.
            </p>
            <Divider className="divider" />
            <SelectionControl
              id="keys_chk"
              name="acknowledge[]"
              label="I will not share key or door code with anyone."
              type="checkbox"
              value="YES"
              className="highlight_text"
              tabIndex={0}
              onChange={() => this.handleCheck("deposit")}
              checked={this.state.deposit}
            />
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Cold Bed Terms" className="section_title" />
          <CardText>
            <p>
              Your rental rate entitles you to stay in the crashpad for a
              certain number of nights per month, in connection with your work
              schedule. You may stay here while on reserve duty or before and
              after work trips. You agree to be a commuter and leave the
              crashpad on your consecutive days off. This is not permanent
              residency. We understand occasionally you will be there multiple
              days. No worries. Just please be mindful and keep your area clean.
            </p>
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Personal Items" className="section_title" />
          <CardText>
            <p>
              You need to bring your own twin-sized sheets, comforter, pillow
              and bathroom towel. Please bring a limited number of other
              personal items and label what is yours. Try to keep the apartment
              less cluttered by not leaving items in random locations and
              tidying up often. There are designated areas for clothes, food,
              etc. Use your assigned closet area and bins. You will be given the
              following: dry goods bin,refrigerator bin, toiletries bin and
              under-the-bed bin.
            </p>
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Luggage Storage" className="section_title" />
          <CardText>
            <p>
              There are two designated shelves for luggage. These are a first
              come, first serve. Please put lighter purses and totes on higher
              shelves if possible.
            </p>
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Bathrooms" className="section_title" />
          <CardText>
            <p>
              You can use any available bathroom at any time. Please keep your
              personal items in your drawers and on shelves when not in use.
              Please wipe counters and floors after use, especially hair from
              the walls, tub, and drain. Do not leave wet items on the floor.
              Either hang them on an available hook or outside on the balcony.
              Ladies: if you are doing makeup or hair in a restroom, please
              leave the door open in case someone would like to use the
              restroom.
            </p>
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Kitchen" className="section_title" />
          <CardText>
            <p>
              Everything in the kitchen cabinets is for your use with the dining
              table being a “house food/donation area”. Please mark all food
              items in the fridge/freezer and on the counters with your name
              (use a sharpie). Dishes must be washed as soon as possible. It’s
              okay if you want to eat and then clean, but please be courteous to
              others using the space and for sure wash dishes before the end of
              the day. Use the dishwasher too!
            </p>
          </CardText>
        </Card>

        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Food / Eating Area" className="section_title" />
          <CardText>
            <p>
              Absolutely no food in the bedrooms or bathrooms, this includes
              wines and any dark beverages that may stain the carpet. Food
              crumbs can lead to bugs or mold and we don’t want that! Please do
              not eat in the room!
            </p>
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Cleaning" className="section_title" />
          <CardText>
            <p>
              Everyone is responsible for keeping the apartment tidy. We have a
              professional cleaning service, but try to clean up any messes you
              make. We should always have plenty of supplies available. Even
              though we have a cleaning service remove the trash twice per week,
              sometimes it will fill up and we appreicate you taking it out on
              occasion (there’s a trash chute located at the end of the hall on
              the staircase - between floors or ground level).
              <em>Think crashpad, not trashpad.</em>
            </p>
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Living Room Noise" className="section_title" />
          <CardText>
            <p>
              Rest and peace take priority over everything else. Please be
              mindful if it is late OR if anyone is asleep even during the day.
              If someone asks you to be quiet, please respect her needs.
            </p>
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Bedroom Noise" className="section_title" />
          <CardText>
            <p>
              Crew members may need to sleep at odd hours, including the
              daytime. If the bedroom doors are closed, assume that someone is
              sleeping in there. If so, please be quiet in and around the room.
            </p>
            <p>No main lights on (use a cell phone or flashlight).</p>
            <p>Be as quiet as possible when accessing your items.</p>
            <p>
              No phone conversations or talking in bedrooms or near bedroom
              doors. If you have to take an incoming call (as for crew
              scheduling), please whisper. All other calls, please step out (I
              think to the balcony would be best).
            </p>
            <p>
              Try to make the least impact. Close doors gently. Avoid using
              laptop in the bedroom if someone is sleeping (the noise and light
              is disruptive to sleep).
            </p>
            <p>
              Do not snooze your alarm! If you feel tired and want to continue
              to sleep/lay, please do so in the living room.
            </p>
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Day Guests" className="section_title" />
          <CardText>
            <p>
              Please use your discretion. An occasional friend or two over is
              fine, but please do not have them over for a prolonged period of
              time. If possible, inform current occupants your intention to
              bring someone over. No guests ever in the bedrooms.{" "}
              <strong>DO NOT SHARE KEY CODE WITH ANYONE EVER!</strong> Violation
              of this policy may terminate your residency. If you are a resident
              and are uncomfortable with a situation, tell the person and us. No
              one should ever feel uncomfortable in our shared space!
            </p>
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="Overnight Guests" className="section_title" />
          <CardText>
            <p>
              At a rate of $30 per night. An occasional stay of a non-crashpad
              person is permitted if there is an available bed. An overnight
              guest may not share a bed with you. The overnight guest must be
              someone you know well AND you must get prior approval from us. Any
              resident who has a guest sleeping in the crashpad without prior
              approval will be asked to vacate.
            </p>
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle
            title="Suggestions And Comments"
            className="section_title"
          />
          <CardText>
            <p>
              We appreciate all suggestions on how to improve the crashpad and
              we will correct any problems as soon as possible, however we will
              not tolerate drama. Tenants who do, and/or are reported by others
              as exhibiting unacceptable behavior will be given a warning. Not
              adhering to the above house rules will lead to warnings and the
              possibility that we will ask you to look for housing elsewhere. If
              there is anything you need in the crashpad, please do not hesitate
              to text us directly so it can be purchased for the crashpad ASAP.
            </p>
          </CardText>
        </Card>
        <Card className="md-block-centered margin-card" raise>
          <CardTitle title="TL;DR" className="section_title" />
          <CardText>
            <p>
              I understand rent is due the 1st of every month. My refundable
              security deposit will be returned as long as a 30 day notice is
              given and keys are returned. I understand I lose the deposit if I
              do not move in. Further, I must pay rent in full the month I’m
              moving out and cannot apply my refundable deposit towards any rent
              payments. The deposit can only be returned after keys are
              returned, bins are clear and apartment is vacated. I have read and
              understand that not adhering to house rules could lead to warnings
              and possible eviction.
            </p>
            <label htmlFor="checkbox">
              <strong>Select to proceed:</strong>
            </label>
            <div className="highlight_text">
              <SelectionControl
                id="checkbox"
                name="simple-checkboxes[]"
                label="I read and understood this agreement."
                type="checkbox"
                value="YES"
                onChange={() => this.handleCheck("tldr")}
                checked={this.state.tldr}
              />
            </div>
            <Divider className="divider" />
            {Object.keys(this.state).every(prop => this.state[prop]) ? (
              <ButtonComponent buttonRef={this.button} />
            ) : (
              <div>
                <div>
                  <div className="underline">{this.state.instructions}</div>
                  <div className="dangerText">{this.state.dangerText}</div>
                  {this.state.instructions.includes("acknowledge") ? (
                    <div
                      className="pointCursor joke"
                      onClick={() =>
                        this.typingEffect("smdh. read the contract...")
                      }
                    >
                      Sign contract without reading ->
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </CardText>
        </Card>
      </div>
    );
  }
}
export default AgreementComponent;
