import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Varun",
  lastName: "Chodha",
  name: `Varun Chodha`,
  role: "Senior Software Developer",
  avatar: "/images/avatar.jpg",
  email: "varun5chodha@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/var500",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/varunchodha/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Beyond the Browser</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/ai-agile-engineer",
  },
  subline: (
    <>
      I’m Varun, a Senior Full Stack Engineer. I architect high-performance web
      applications and system-level software,
      <br />
      bridging the gap between complex backends and fluid user experiences
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  hobbies: {
    display: true,
    items: [
      {
        name: "Foodie",
        icon: "food",
      },
      {
        name: "Traveling",
        icon: "traveling",
      },
      {
        name: "Trekking",
        icon: "treking",
      },
      {
        name: "Coding",
        icon: "code",
      },
      {
        name: "Sports",
        icon: "sports",
      },
      {
        name: "Stock Market",
        icon: "stocks",
      },
    ],
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Varun is a India-based software engineer with a passion for transforming
        complex challenges into simple, elegant solutions. His work spans
        developing fullstack solutions, interactive experiences, and the
        convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Mersive Technologies",
        timeframe: "Nov 2024 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Developed a real-time video conferencing solution using WebRTC and
            React Native, reducing latency by 40% and improving video call
            stability for 10,000+ users.
          </>,
          <>
            Optimized video streaming performance by engineering scalable
            microservices with Firebase and WebRTC
          </>,
          <>
            Implemented microservice architecture and CI/CD pipelines, reducing
            deployment time by 50% and ensuring 99.9% uptime for real-time
            communication services.
          </>,
          <>
            Built and notarized custom macOS PKG installers for a hybrid meeting
            feature using open-source software, with code signing via Apple
            Developer ID certificates.
          </>,
          <>
            Developed a Python Flask-based executable running as a Windows
            background agent (registered as a scheduled task) to listen for and
            handle requests on a dedicated port
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/company/cover-01.jpg",
            alt: "Mersive Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Nonceblox Pvt Ltd",
        timeframe: "April 2023 - Jan 2024",
        role: "Software Associate",
        achievements: [
          <>
            Built web applications using the MERN stack, resulting 20%
            improvement in page load time
          </>,
          <>
            Collaborated with UI/UX designers and cross-functional teams to
            develop and optimize user-friendly interfaces using Next.js,
            improving user engagement by 30%.
          </>,
          <>
            Designed and sustained RESTful APIs using Express.js and Nest.js,
            reducing latency, enhancing efficiency.
          </>,
        ],
        images: [],
      },
      {
        company: "Stable (Freelance)",
        timeframe: "Jan 2023 - Nov 2023",
        role: "Backend Developer",
        achievements: [
          <>
            Ensured seamless integration of fullstack applications, reducing
            integration-related bugs by 20%
          </>,
          <>
            Enhanced server-side application performance by 15% using Nest.js,
            and implemented OAuth-based user authenti- cation, improving
            security and user experience
          </>,
          <>
            Successfully integrated MongoDB databases, optimizing data storage
            and retrieval process, resulting in 30% reduc- tion in data access
            time
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Jaypee University of Information Technology, Solan",
        description: (
          <div>
            <p>B.Tech (Hons.) in Information Technology</p>
            <p>With Minors in Information Security</p>
          </div>
        ),
        cgpa: "8.76",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Technial Skills",
        tags: [
          {
            name: "Data Structures & Algorithms",
            icon: "dsa",
          },
          {
            name: "Typescript",
            icon: "typescript",
          },
          {
            name: "Javascript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React.js",
            icon: "reactjs",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "GraphQL",
            icon: "genkit",
          },
          {
            name: "Genkit",
            icon: "genkit",
          },
          {
            name: "WebRTC",
            icon: "webrtc",
          },
          {
            name: "React Native",
            icon: "reactnative",
          },
          {
            name: "Apollo Client",
            icon: "apollo",
          },
          {
            name: "Redux",
            icon: "redux",
          },
          {
            name: "WebSocket",
            icon: "websocket",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Express.js",
            icon: "expressjs",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Flask",
            icon: "flask",
          },
          {
            name: "Git/Github",
            icon: "git",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "AWS",
            icon: "aws",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Soft Skills",
        tags: [
          {
            name: "Leadership",
          },
          {
            name: "Ownership",
          },
          {
            name: "Communication",
          },
          {
            name: "Presentation",
          },
          {
            name: "Teamwork",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
  Others: {
    display: true,
    title: "Research Paper",
    description: (
      <>
        "An ensemble learning–based experimental framework for smart landslide
        detection, monitoring, prediction, and warning in IoT-cloud environment"
      </>
    ),
    link: "https://link.springer.com/article/10.1007/s11356-023-30683-6",
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, work };
