import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'LinktoSync.com (Work in Progress)',
        description:` "Building a social media management platform that integrates with 5+ major platforms (Twitter, Facebook, Instagram,
LinkedIn), designed to enhance content management efficiency and user engagement.
Developing features to support 3x faster content posting and scheduling, aiming to significantly improve productivity
for social media managers across multiple platforms"`,
        tools: ["Java","Spring Boot", "PostgreSQL","Jakarta Persistence","Docker"],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
//     {
//         id: 2,
//         name: 'Custom Reverse Proxy (for LinktoSync.com)',
//         description: `'Engineered a reverse proxy server from scratch, optimizing traffic flow between client requests and backend services to
// improve efficiency and security.
// Implemented tailored rate limiting strategies to protect against overUse and DoS attacks, and added basic caching
// mechanisms which led to a 30% improvement in response time and a 20% reduction in server load'`,
//         tools: ["Node.js", "Docker", "node-cache"],
//         role: 'Full Stack Developer',
//         code: '',
//         demo: '',
//         image: travel,
//     },
    // {
    //     id: 3,
    //     name: 'AI Powered Real Estate',
    //     description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
    //     tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
    //     code: '',
    //     role: 'Full Stack Developer',
    //     demo: '',
    //     image: realEstate,
    // },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
