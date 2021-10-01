import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Karan Gajjar',
  subtitle: 'React Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1YsvrnXzxQeyX56gUtxMts1aTrqgLaJBj/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'BugHound',
    info: 'BugHound is a Web based bug recording and tracking system. Implemented GitHub OAuth to get data from user’s repositories',
    info2: 'Developed the Server in PHP and the Client in Javascript. Used MySQL for Database Management.',
    url: 'https://github.com/gajjarkaran/bughound-1',
    repo: 'https://github.com/gajjarkaran/bughound-1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Verification of Academic records using Blockchain',
    info: 'A web application that serves as a tool to validate the academic records of students by using Ethereum blockchain. The primary motive behind this project is to provide a facility for the organizations to validate the academic records of the job- seeking applicants.',
    info2: 'Performed intense research on blockchain and ethereum decentralized applications Used Web3js library of Ethereum to interact with local and remote nodes using HTTP and WebSocket',
    url: 'https://github.com/gajjarkaran/record_validation',
    repo: 'https://github.com/gajjarkaran/record_validation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Habit Tracker (Android)',
    info: 'Built an Android app designed to keep a track of user habits or develop new habits. Implemented GitHub OAuth to get data from user’s repositories. Implemented user authentication, profile setup, saved preferences.',
    info2: 'Used Firebase to store the real-time data and implemented Google API for location precision Features included: adding a habit, maintaining habit streak, delete a habit and a habit checkbox.',
    // url: '',
    // repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kgajjar001@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/karangajjar_',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gajjarkaran/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gajjarkaran',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
