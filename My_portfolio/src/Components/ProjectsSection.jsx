import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import Fade from "react-reveal/Fade"
const projects = [
  {
    name: "Tanishq.com clone",
    img: "/tanishq.png",
    link: "https://tanishqclone-production.up.railway.app/",
    git: "https://github.com/Gajanan-Watt/tanishq_clone.git",
    about:
      "“Tanishq” is a brand of Jewellery retail stores in India. The brand is the property of Titan Company, which is backed by Tata Group and TIDCO. Implemented features to get data from backend.",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiNodedotjs className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Unacademy.com clone",
    img: "/unacademy.png",
    link: "https://unacademy-clone.vercel.app/",
    git: "https://github.com/Gajanan-Watt/unacademy_clone.git",
    about:
      " Unacademy is an e-learning application. This was a team project where I with my teammates had created a learning platform for classes 6 to12. Tech Stack which we used in this project is HTML, CSS, JS, React JS & Redux.",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Zara.com clone",
    img: "/zara.jpg",
    link: "https://thotapavankumar.github.io/Zara_Project_Clone/",
    git: "https://github.com/Gajanan-Watt/zara_web.git",
    about:
      " It is an e-commerce website having varieties of luxury items which are of high quality. We have tried to clone the pixel perfect website with the help of HTML. Implemented using HTML, CSS and javascript.",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Pixel Art",
    img: "/doggo2.png",
    link: "https://pixel-pic.vercel.app/",
    git: "https://github.com/Gajanan-Watt/pixel_pic",
    about:
      "This project will let you design the pixel art. Let your creativity flow and convert them to images",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  // {
  //   name: "Airbnb.com clone",
  //   img: "/Airbnb.png",
  //   link: "https://airbnb-clone-one-weld.vercel.app/",
  //   git: "https://github.com/ks-1007/Airbnb-clone",
  //   about:
  //     "Airbnb is a hotel booking online platform. Implemented features to search for hotels based on ratings, reviews and price range and then booking it after selecting check-in & check-out dates",

  //   stacks: [
  //     <SiReact className={styles.stackIcon} />,
  //     <SiRedux className={styles.stackIcon} />,

  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },
  // {
  //   name: "Contio",
  //   img: "/contio.png",
  //   link: "https://contio.netlify.app/",
  //   git: "https://github.com/chandan1499/contio",
  //   about:
  //     "Contio is an online portal where anyone can ask there doubts and anyone can become a mentor to help their peers using a built-in chat app",

  //   stacks: [
  //     <SiReact className={styles.stackIcon} />,
  //     <SiNodedotjs className={styles.stackIcon} />,
  //     <SiExpress className={styles.stackIcon} />,
  //     <SiMongodb className={styles.stackIcon} />,
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },

  // {
  //   name: "Sephora.com clone",
  //   img: "/sephora.png",
  //   link: "https://project-sephora.vercel.app/",
  //   git: "https://github.com/ks-1007/Project-Sephora",
  //   about:
  //     "Sephora is an American e-commerce website which sells beauty products. Features are implemented to select products from carousel and add products to cart and do CRUD operations",
  //   stacks: [
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiHtml5 className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}
