// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  react: require("../assets/react.png"),
  fire: require("../assets/fire.png"),
  homeaway: require("../assets/homeaway.svg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} fit textColor="secondary">React London - BYOP<br/>November 2017</Heading>
          <Image src={images.react} height={300}/>
          <Text textSize={24} textColor="secondary">@DNevesSantos&nbsp;&nbsp;@shaun_wallace</Text>
          <Text textSize={24} textColor="secondary">@mcleo_d</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Wifi Details</Heading>
          <hr/>
          <Text size={6} textColor="secondary"><strong>Name:</strong> HAGuest</Text>
          <Text size={6} textColor="secondary"><strong>Password:</strong> vacations</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.fire} height={600}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit textColor="secondary">Our Hosts and Sponsors</Heading>
          <br/>
          <Image src={images.homeaway} height={160}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Statistics</Heading>
          <Heading size={4} textColor="secondary">React London -  BYOP</Heading>
          <hr/>
          <Text size={6} textColor="secondary"><strong>780 London React Members</strong></Text>
          <Text size={6} textColor="secondary"><strong>87 Additional Members</strong></Text>
          <Text size={6} textColor="secondary"><strong>8 Project Nights</strong></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">Next React London<br/>Bring Your Own Project</Heading>
          <br/>
          <Text size={6} textColor="secondary">Currently Being Planned</Text>
          <Text size={6} textColor="secondary">Always Looking for Lightning Talks</Text>
          <br/>
          <Text textSize={24} textColor="secondary">@DNevesSantos&nbsp;&nbsp;@shaun_wallace</Text>
          <Text textSize={24} textColor="secondary">@mcleo_d</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Lightning Talks</Heading>
          <Heading size={4} textColor="secondary">React London -  BYOP</Heading>
          <hr/>
          <Heading size={5} textColor="secondary"><strong>Joel Almeida, HomeAway</strong></Heading>
          <Heading size={8} textColor="secondary">Joel asks, "What if we just reduced page size?"</Heading>
          <hr/>
          <Heading size={5} textColor="secondary"><strong>Dominic Adams,<br/>Lloyds Banking Group</strong></Heading>
          <Heading size={8} textColor="secondary">How Fastlane's used to automate App Store deployments</Heading>
          <hr/>
          <Heading size={5} textColor="secondary"><strong>Csaba Palfi, HomeAway</strong></Heading>
          <Heading size={8} textColor="secondary">Render blocking and how to avoid it</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} fit textColor="secondary">Find us on GitHub</Heading>
          <Heading size={5} textColor="secondary">github.com/react-london-byop</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} caps fit textColor="secondary">Your<br/>Announcements</Heading>
          <Image src={images.react} height={200}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit textColor="secondary">Lightning Talk</Heading>
          <Heading size={5} textColor="secondary"><strong>Joel Almeida, HomeAway</strong></Heading>
          <Image src={images.react} height={300}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit textColor="secondary">Lightning Talk</Heading>
          <Heading size={5} textColor="secondary"><strong>Dominic Adams,<br/>Lloyds Banking Group</strong></Heading>
          <Image src={images.react} height={300}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit textColor="secondary">Lightning Talk</Heading>
          <Heading size={5} textColor="secondary"><strong>Csaba Palfi, HomeAway</strong></Heading>
          <Image src={images.react} height={300}/>
        </Slide>
      </Deck>
    );
  }
}
