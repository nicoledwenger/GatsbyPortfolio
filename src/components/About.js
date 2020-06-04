import React from "react"

import SubHeading from './text/SubHeading'
import Paragraph from './text/Paragraph'
import "typeface-muli"

const About = () => (
    <div id="about" style={{marginTop: '20%'}}>
        <SubHeading style={{borderBottom: '8px solid #0077ff'}}>Creative developer and designer</SubHeading>
        <Paragraph>I'm currently student at Purdue University studying web development and strategic communication. I have held various jobs within the web development industry and I'm an incoming intern on the Global Connected Customer Experience team at General Motors.</Paragraph>
        <Paragraph>With training and experience in strategic communication, I'm able to build and maintain web experiences that are more effective for targeted audiences. My specialty lies in front end development where I'm able to constantly keep the end user in mind when developing a product. As a strategic thinker, I can incorporate my background in art forms to create appealing designs that are focused around functionality.</Paragraph>
        <Paragraph>As a budding car enthusiast, I aspire to utilize my skills in front end development and audience analysis to develop user interfaces inside vehicles. Technology is advancing quickly and screens are becoming more popular in vehicles, especially with recent advances in autonomous and electric vehicles. I want to utilize my knowledge of cars, technology, and communication to create better user experiences.</Paragraph>
        <Paragraph>I love to challenge myself and discover the niche overlap between development, design and communication. There are problems to be solved in the world that the overlap of programming and communication can assist in. I hope to be someone that utilizes this knowledge in fields that improve safety and environmental sustainability for everyone. This is the ultimate challenge for myself.</Paragraph>
        <Paragraph>On more personal notes, when I'm not working, I can be found in the wilderness or exercising. I love traveling to hike and camp on nice (and not-so-nice) weekends. When outdoors, I explore landscape photography and discover new places of beauty. To relax and refresh, I practice a vinyasa style of yoga. I believe some of the best ways to cultivate your mind is through the health of your body. <span role="img" aria-label="blue heart emoji">&#128153;</span></Paragraph>
    </div>
)

export default About