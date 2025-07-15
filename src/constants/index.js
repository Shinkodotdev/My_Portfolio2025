const navLinks = [
  {
    name: "Home",
    link: "#hero",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: 'Ideas' },
  { text: 'Code' },
  { text: 'Tech' },
  { text: 'Insights' },
  { text: 'Ambitions' }
]

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
  tech: ["PHP", "TailwindCSS", "Figma"],
  date: "Jan 30 – May 19, 2025",
  responsibilities: [
    "Developed responsive UI components to improve user experience",
    "Collaborated with backend teams using GitHub for version control",
    "Optimized application performance by 30% via code splitting and lazy loading"
  ]
}


];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
    rating: 5
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
    rating: 4
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
    rating: 5
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
    rating: 4
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
    rating: 5
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
    rating: 5
  }
];


const socialImgs = [
  {
    name: "Instagram",
    imgPath: "/images/logos/instagram.png",
  },
  {
    name: "Facebook",
    imgPath: "/images/logos/facebook.png",
  },
  {
    name: "Tiktok",
    imgPath: "/images/logos/tiktok.png",
  },
  {
    name: "Github",
    imgPath: "/images/logos/github.png",
  },
];


const projects = [
  {
    title: 'Expense & Scheduling System with Real-Time Tracking',
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
    link: 'https://github.com/Shinkodotdev/blog-site',
  },
  {
    title: 'Monitoring System for Bridge and Infrastructure - DPWH',
    description: 'A mobile-first system for infrastructure monitoring with data visualization and mapping.',
    image: '/images/projects/DPWH.PNG',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Mapbox', 'MySQL', 'Chart.js', 'Vue.js'],
    link: 'https://github.com/Shinkodotdev/blog-site',
  },
  {
    title: 'Monitoring System for Bridge and Infrastructure - DPWH',
    description: 'A mobile-first system for infrastructure monitoring with data visualization and mapping.',
    image: '/images/projects/DPWH.PNG',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Mapbox', 'MySQL', 'Chart.js', 'Vue.js'],
    link: 'https://github.com/Shinkodotdev/blog-site',
  },
];

export {
  words,
  counterItems,
  expCards,
  testimonials,
  socialImgs,
  navLinks,
  projects,
};