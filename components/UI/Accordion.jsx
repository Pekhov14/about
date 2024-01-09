'use client'

import React from 'react';
import { Collapse } from 'antd';
import {CaretRightOutlined} from "@ant-design/icons";

const Accordion = () => {

    const panelStyle = {
        fontSize: '20px'
    };

    const faqData = [
        {
            label: "How did you get into programming and why did you choose PHP?",
            children: "At school, I didn’t have enough grades in computer science and the teacher asked me to do an assignment for a competition to choose from a list, I decided to try to make a website. Then in 2 weeks I made my first website from HTML and CSS. The teacher said that it was a terrible job for the competition, but he gave a mark. I was interested in this and I began to slowly develop in this. The next year I took second place in the Kharkiv region in the same competition. Then the teacher advised me to continue learning PHP and JS. At university, I tried other languages, but my main one is still PHP.",
            style: panelStyle,
        },
        {
            label: "Do you have pet projects?",
            children: "Oh sure! I developed a PHP Telegram bot to send good morning messages to my friends and random compliments for the day. I made a bot for Tinder using Python + Selenium. I also created a console application for my brother for special formatting of Telegraph posts (Symfony CLI). Additionally, I made an admin panel for my site using EasyAdmin 4. I've also worked on various small projects for training and routine tasks.",
            style: panelStyle,
        },
        {
            label: "What do you not want to work with?",
            children: "I don't like doing a lot of HTML coding. Engage in web page parsing.\n" +
                "I don’t like it when tasks need to be done yesterday.\n" +
                "And work with outdated technologies without a plan to update at a certain time.",
            style: panelStyle,
        },
        {
            label: "In what direction would you like to develop?",
            children: "At the moment, I'm interested in developing in the Symfony and React stack and aiming to reach the position of a senior developer. I don't have anything against using tools like Golang, Node.js, Python, and others, as I believe that languages and frameworks are tools for solving problems. In the future, I would like my position to be called a senior software developer, not tied to a specific language.",
            style: panelStyle,
        },
        {
            label: "What are your weaknesses?",
            children: "I can be overly positive and use too many emojis in text messages 😄.",
            style: panelStyle,
        },
        {
            label: "How do you develop and improve your knowledge?",
            children: "There are enough sources of quality information that I use 🤓🧑‍💻. I watch technical channels on YouTube, read articles on Medium, and read books. I also take courses and listen to podcasts on special sites like DataCamp, Coursera, and SymfonyCasts, among others.",
            style: panelStyle,
        },
        {
            label: "What is your level of English, can you speak fluently?",
            children: "I can engage in written communication, but my current conversational skills don't allow me to express my thoughts freely. 💂",
            style: panelStyle,
        },
        {
            label: "What kind of people do you dislike working with?",
            children: "I don't like it when people dismiss ideas without explaining their reasons. I also prefer not to discuss politics and religion in the workplace.",
            style: panelStyle,
        },
        {
            label: "What operating system are you using?",
            children: "Now I'm working on macOS 💻 with a m1 processor",
            style: panelStyle,
        }
    ];

    return (
        <Collapse
            bordered={false}
            defaultActiveKey={['0']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            items={faqData}
            size="large"
        />
    );
};

export default Accordion;
