import * as React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "../styles/index.css";
// import userProfiles from './SectionWithLoopRendering'

import image1 from "../img/step.jpg"; // profile picture
import image2 from "../img/karan.jpg"; // profile picture
import image3 from "../img/Marvin.png"; // profile picture
import image4 from "../img/josh.jpg"; // profile picture
import image5 from "../img/andrew.png"; // profile picture

export interface IProfilesProps {
  userName: string;
}

export default class Profiles extends React.Component<IProfilesProps> {
  public render() {
    const { userName } = this.props;
    return (
      <React.Fragment>
        <Card>
          <Image src={image1} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{userName} "Loyal To The Soil"</Card.Header>
            <Card.Meta>
              <span className="date">Nitendo Loyalist</span>
            </Card.Meta>
            <Card.Description textAlign="left">
              {userName} is an outstanding citizen living in the South-West of
              Edmonton.
            </Card.Description>

            <Card.Description textAlign="left">
              {userName} was laid off recently, not having much luck with the
              job searching. {userName} signed up for a Full-Stack developer
              certificate program at the University of Alberta provided by
              TechCareer! With whatever limited spare time {userName} has, you
              can find {userName} actively volunteering within the community. If
              you ever need to contact {userName}. Please don't hesitate to
              reach out!
            </Card.Description>

            <Card.Description textAlign="left">
              We're proud to have {userName} on our side! Thank you again for
              your support!
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" />
            2000+ Votes
          </Card.Content>
        </Card>
        <Card>
          <Image src={image2} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Karan "Hustler"</Card.Header>
            <Card.Meta>
              <span className="date">Double XP</span>
            </Card.Meta>
            <Card.Description textAlign="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada nulla quam, ut tempus ex porta ac. Praesent commodo nisl
              nunc, eu condimentum elit convallis non. Nunc elementum lorem in
              pretium accumsan. Mauris eu enim magna. Sed suscipit erat velit,
              eu laoreet magna commodo sit amet. Sed eget ullamcorper purus,
              eget posuere felis. Mauris libero ex, egestas sit amet maximus
              quis, dapibus vitae lectus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Donec enim ipsum, cursus efficitur orci
              vel, tincidunt ornare nisl. Nullam malesuada, neque et elementum
              malesuada, est nulla sagittis odio, aliquam facilisis nisl metus
              tempor turpis. Etiam tincidunt finibus eros, bibendum bibendum est
              porta vitae.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" />
            250+ Votes
          </Card.Content>
        </Card>
        <Card>
          <Image src={image3} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Marvin "Marvin's Room"</Card.Header>
            <Card.Meta>
              <span className="date">Top Quality</span>
            </Card.Meta>
            <Card.Description textAlign="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada nulla quam, ut tempus ex porta ac. Praesent commodo nisl
              nunc, eu condimentum elit convallis non. Nunc elementum lorem in
              pretium accumsan. Mauris eu enim magna. Sed suscipit erat velit,
              eu laoreet magna commodo sit amet. Sed eget ullamcorper purus,
              eget posuere felis. Mauris libero ex, egestas sit amet maximus
              quis, dapibus vitae lectus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Donec enim ipsum, cursus efficitur orci
              vel, tincidunt ornare nisl. Nullam malesuada, neque et elementum
              malesuada, est nulla sagittis odio, aliquam facilisis nisl metus
              tempor turpis. Etiam tincidunt finibus eros, bibendum bibendum est
              porta vitae.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" />
            288+ Votes
          </Card.Content>
        </Card>
        <Card>
          <Image src={image4} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Josh "Da Boss"</Card.Header>
            <Card.Meta>
              <span className="date">W.O.W</span>
            </Card.Meta>
            <Card.Description textAlign="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada nulla quam, ut tempus ex porta ac. Praesent commodo nisl
              nunc, eu condimentum elit convallis non. Nunc elementum lorem in
              pretium accumsan. Mauris eu enim magna. Sed suscipit erat velit,
              eu laoreet magna commodo sit amet. Sed eget ullamcorper purus,
              eget posuere felis. Mauris libero ex, egestas sit amet maximus
              quis, dapibus vitae lectus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Donec enim ipsum, cursus efficitur orci
              vel, tincidunt ornare nisl. Nullam malesuada, neque et elementum
              malesuada, est nulla sagittis odio, aliquam facilisis nisl metus
              tempor turpis. Etiam tincidunt finibus eros, bibendum bibendum est
              porta vitae.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" />
            400+ Votes
          </Card.Content>
        </Card>
        <Card>
          <Image src={image5} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Andrew "Death Wings Please"</Card.Header>
            <Card.Meta>
              <span className="date">Beer O'Clock</span>
            </Card.Meta>
            <Card.Description textAlign="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada nulla quam, ut tempus ex porta ac. Praesent commodo nisl
              nunc, eu condimentum elit convallis non. Nunc elementum lorem in
              pretium accumsan. Mauris eu enim magna. Sed suscipit erat velit,
              eu laoreet magna commodo sit amet. Sed eget ullamcorper purus,
              eget posuere felis. Mauris libero ex, egestas sit amet maximus
              quis, dapibus vitae lectus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Donec enim ipsum, cursus efficitur orci
              vel, tincidunt ornare nisl. Nullam malesuada, neque et elementum
              malesuada, est nulla sagittis odio, aliquam facilisis nisl metus
              tempor turpis. Etiam tincidunt finibus eros, bibendum bibendum est
              porta vitae.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" />
            500+ Votes
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}
