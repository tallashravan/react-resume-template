import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/web-background.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Shravan Kumar Talla',
  description: "Shravan Kumar Talla's Portfolio Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Turning ideas into code and code into innovation.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"> 👋🏻 Welcome to my digital space!</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm <strong className="text-stone-100">Shravan Kumar Talla</strong> a software architect, full-stack developer,
        and a tech enthusiast, with over 13 years of experience in software development and architecture 👨🏻‍💻. <br />
        Based in the bustling city of <strong className="text-stone-100">Hyderabad, India</strong>🇮🇳 <br />I spend my
        days crafting innovative and scalable solutions that bring ideas to life—and my evenings chasing new adventures
        in tech.
        <br />
        Explore 🕵🏻‍♂️ my portfolio to learn about my journey, skills, and passion for technology. <br />
        <strong className="text-stone-100">Let’s connect and create something amazing together! 🚀 </strong>
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I specialize in everything from building seamless user interfaces 🖥️ to architecting complex backend systems.
        Whether it’s coding with <strong className="text-stone-100">Java</strong> ☕, experimenting with{' '}
        <strong className="text-stone-100">React</strong> ⚛️, or deploying on the{' '}
        <strong className="text-stone-100">cloud</strong> ☁️, I thrive on challenges. And let’s not forget my growing
        love for <strong className="text-stone-100">Python</strong> 🐍—the Swiss Army knife of programming languages
        that keeps me hooked!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        When I’m not busy designing the next big thing, you’ll probably find me:
      </p>
      <ul>
        <li>
          <strong className="text-stone-100">Geeking out over the latest tech gadgets</strong> 🤓 because shiny things
          are irresistible!
        </li>
        <li>
          <strong className="text-stone-100">Exploring new cuisines</strong> 🍜 because life is too short for boring
          food.
        </li>
        <li>
          <strong className="text-stone-100">Unwinding with a good book or a gripping sci-fi movie 📚🎬</strong>,
          because everyone needs a little escape into another world.
        </li>
      </ul>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        At the end of the day, I’m just a passionate developer who believes in using technology to make the world a
        better place, one elegant line of code at a time.
        <br />
        Let’s build something extraordinary together!
      </p>
    </>
  ),
  aboutItems: [],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: '💡 Programming Languages',
    skills: [
      {
        name: 'Java ☕',
        level: 9.5,
      },
      {
        name: 'Python 🐍',
        level: 8,
      },
      {
        name: 'JavaScript ⚡',
        level: 9,
      },
    ],
  },
  {
    name: '⚙️ Frameworks',
    skills: [
      {
        name: 'React ⚛️',
        level: 9,
      },
      {
        name: 'Spring Boot 🌱',
        level: 8,
      },
      {
        name: 'Node.js 🚀',
        level: 8,
      },
      {
        name: 'TypeScript ☑️',
        level: 8,
      },
      {
        name: 'HTML & CSS',
        level: 9,
      },
    ],
  },
  {
    name: '📚 Content Management Systems',
    skills: [
      {
        name: 'Adobe Experience Manager (AEM)',
        level: 9.5,
      },
    ],
  },
  {
    name: '☁️ Cloud & DevOps',
    skills: [
      {
        name: 'AWS ☁️',
        level: 8,
      },
      {
        name: 'Kubernetes',
        level: 7,
      },
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'CI/CD Pipelines',
        level: 7,
      },
    ],
  },
  {
    name: '🌐 API & Backend Frameworks',
    skills: [
      {
        name: 'GraphQL',
        level: 7,
      },
      {
        name: 'REST APIs',
        level: 9,
      },
      {
        name: 'Apigee',
        level: 7,
      },
      {
        name: 'Microservices Architecture',
        level: 7,
      },
    ],
  },
  {
    name: '📦 Databases',
    skills: [
      {
        name: 'MySQL',
        level: 8,
      },
      {
        name: 'Oracle',
        level: 8,
      },
      {
        name: 'MongoDB',
        level: 7,
      },
      {
        name: 'Redis',
        level: 7,
      },
      {
        name: 'DynamoDB',
        level: 7,
      },
    ],
  },
  {
    name: '🛠️ Tools & Methodologies',
    skills: [
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'Jenkins',
        level: 8,
      },
      {
        name: 'SonarQube',
        level: 8,
      },
      {
        name: 'Agile (Scrum, Kanban, SAFe)',
        level: 7,
      },
      {
        name: 'Test-Driven Development (TDD)',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Let's Connect",
  description:
    '💬 Feel free to reach out if you’d like to discuss tech, collaborate on projects, or share your favorite Python tricks!',
  items: [
    {
      type: ContactType.Email,
      text: 'tallashravankumar@gmail.com',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.LinkedIn,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shravankumartalla/',
    },
    {
      type: ContactType.Instagram,
      text: '@shravantalla',
      href: 'https://www.instagram.com/shravantalla/',
    },
    {
      type: ContactType.Github,
      text: 'tallashravan',
      href: 'https://github.com/tallashravan',
    },
    {
      type: ContactType.Twitter,
      text: '@itsshravantalla',
      href: 'https://twitter.com/itsshravantalla',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tallashravan'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/shravankumartalla/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/shravantalla/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/itsshravantalla'},
];
