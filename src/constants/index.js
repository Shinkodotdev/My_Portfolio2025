const navLinks = [
  { id: 1, name: "Home", link: "#hero" },
   { id: 2, name: "About", link: "#about" },
  { id: 3, name: "Experience", link: "#experience" },
  { id: 4, name: "Projects", link: "#projects" },
 

];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Training" },
  { value: 20, suffix: "+", label: "Projects" },
  { value: 7, suffix: "+", label: "Certifications Earned" },
  { value: 95, suffix: "%", label: "Learning Adaptability Rate" },
];

const expCards = [
{
  title: "On-the-Job Trainee",
  company: "Department of Public Works and Highways",
  duration: "Jan – May 2025",
  imgPath: "/images/logos/dpwh.png",
  logoPath: "/images/logos/dpwh.png",
  description: `Developed a monitoring system for the Bridges and Other Infrastructure Unit, enhancing project oversight through structured data management and precise reporting.
Provided IT support by troubleshooting network issues, configuring hardware, installing software, and creating automated form-based Excel reports.
Assisted in document management including scanning, printing, and distributing project plans.`,
  tech: ["PHP", "HTML5", "CSS", "JavaScript", "MySQL", "Mapbox", "Vue.js"],
  date: "Jan 30 – May 19, 2025",
  responsibilities: [
    "Developed responsive UI components to improve user experience",
    "Optimized application performance by 30% via code splitting and lazy loading",
    "Provide Document tracking and Printing efficient using this System."
  ]}
];

const socialImgs = [
  {
    name: "Instagram",
    imgPath: "/images/logos/instagram.png",
    link: "https://www.instagram.com/shinkodotdev/",
  },
  {
    name: "Facebook",
    imgPath: "/images/logos/facebook.png",
    link: "https://www.facebook.com/shinkodotdev",
  },
  {
    name: "Tiktok",
    imgPath: "/images/logos/tiktok.png",
    link: "https://www.tiktok.com/@shinkodotdev",
  },
  {
    name: "Github",
    imgPath: "/images/logos/github.png",
    link: "https://github.com/Shinkodotdev",
  },
  {
    name: "Linkedin",
    imgPath: "/images/logos/linkedin.png",
    link: "https://www.linkedin.com/in/iglesia-mark-joseph-0-73ab45222",
  },
];

const testimonials = [
  
];


const projects = [
  {
    title: 'Expense & Scheduling Information System with Real-Time Tracking',
    description: 'A web-based platform for Closed Van fleet operations. It handles employee management, expense tracking, service scheduling, and real-time map tracking.',
    image: '/images/projects/1.PNG',
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap', 'Mapbox'],
    link: 'https://github.com/Shinkodotdev/barangay-system',
  },
  {
    title: '3D React Portfolio',
    description: 'A modern 3D animated portfolio built using React Three Fiber and TailwindCSS.',
    image: '/images/projects/portfolio.PNG',
    tech: ['React', 'Three.js', 'Tailwind'],
    link: 'https://github.com/Shinkodotdev/3d-portfolio',
  },
  {
    title: 'Monitoring System for Bridge and Infrastructure - DPWH',
    description: 'A mobile-first system for infrastructure monitoring with data visualization and mapping.',
    image: '/images/projects/DPWH.PNG',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Mapbox', 'MySQL', 'Chart.js', 'Vue.js'],
    link: '/localhost/htdocs/FINALDPWH/index.php',
  },
  
];

const certificates = [
  {
    image: '/images/certificates/1.PNG',
    title: 'Tools of the Trade: Linux and SQL',
    date: 'June 2024',
    description: 'A comprehensive bootcamp covering Linux and SQL fundamentals.',
    link: '/certificates/tools-of-the-trade.pdf',
  },
  {
    image: '/images/certificates/2.PNG',
    title: 'Foundations of Cybersecurity',
    date: 'July 2024',
    description: 'An introductory course on cybersecurity principles and practices.',
    link: '/certificates/foundation-of-cybersecurity.pdf',
  },
  {
    image: '/images/certificates/3.PNG',
    title: 'Play It Safe: Manage Security Risks',
    date: 'August 2024',
    description: 'A course focused on managing security risks in IT environments.',
    link: '/certificates/play-it-safe.pdf',
  },
  {
    image: '/images/certificates/4.PNG',
    title: 'Networks and Network Security',
    date: 'September 2024',
    description: 'A course on network fundamentals and security measures.',
    link: '/certificates/connect-and-protect.pdf',
  },
  {
    image: '/images/certificates/Capture.PNG',
    title: 'Introduction to Databases',
    date: 'October 2024',
    description: 'An introductory course on database concepts and SQL.',
    link: '/certificates/introduction-to-databases.pdf',
  },
  {
    image: '/images/certificates/6.PNG',
    title: 'Introduction to Front-End Development',
    date: 'November 2024',
    description: 'A beginner-friendly course on front-end web development using HTML, CSS, and JavaScript.',
    link: '/certificates/introduction-to-front-end-development.pdf',
  },
  {
    image: '/images/certificates/7.PNG',
    title: 'JavaScript Essentials 1',
    date: 'August 2025',
    description: '',
    link: '/certificates/Javascript-essentials.pdf',
  },
];


const skill = [
    { name: 'C++', icon: '/images/logos/c++.png', level: '4' },
    { name: 'Python', icon: '/images/logos/python.svg', level: 3 },
    { name: 'Java', icon: '/images/logos/java.png', level: 3 },
    { name: 'React', icon: '/images/logos/react.png', level: 1 },
    { name: 'HTML5', icon: '/images/logos/html.png', level: 4},
    { name: 'CSS3', icon: '/images/logos/css.png', level: 4 },
    { name: 'PHP', icon: '/images/logos/php.png', level: 2 },
    { name: 'Git', icon: '/images/logos/git.svg', level: 1 },
    { name: 'Github', icon: '/images/logos/github.png', level: 1 },
    { name: 'Bitbucket', icon: '/images/logos/bitbucket.png', level: 1 },
    { name: 'Figma', icon: '/images/logos/figma.png', level: 1 },
    { name: 'MYSQL', icon: '/images/logos/mysql.png', level: 3 },
    { name: 'NodeJs', icon: '/images/logos/node.png', level: 1 },
    { name: 'Tailwind', icon: '/images/logos/tailwind.png', level: 1 },
    { name: 'Bootstrap', icon: '/images/logos/bootstrap.png', level: 2 },

];

const techStack = [
  "html", "css", "javascript", "react", "php", "mysql", "tailwind",
  "github", "git", "threejs", "Mapbox", "node", "bootstrap",
  "word", "excel", "powerpoint", "figma", "python", "java", "vscode",
  "c++", "webstorm", "pycharm", "nvidia", "hostinger"
];

const contactCards = [
    {
      title: "📧 Email Me",
      link: "mailto:markiglesia.dev@gmail.com",
      bg: "bg-blue-600",
      hover: "hover:bg-blue-700",
      text: "markiglesia.dev@gmail.com",
    },
    {
      title: "📞 Call or Text",
      link: "tel:+639270529068",
      bg: "bg-green-600",
      hover: "hover:bg-green-700",
      text: "+63 92X XXX XXXX",
    },
    {
      title: "💬 Messenger",
      link: "https://m.me/shinkodotdev",
      bg: "bg-indigo-600",
      hover: "hover:bg-indigo-700",
      text: "Message Me on Messenger",
    },
  ];

export {
  counterItems,
  expCards,
  testimonials,
  socialImgs,
  navLinks,
  projects,
  certificates,
  skill,
  techStack,
  contactCards,
};