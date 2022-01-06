import styles from "./Styles/BlogSection.module.css"

import { BlogCard } from "./BlogCard"

const projects = [
  {
    name: "Building LinkedIn.com clone",
    img: "/linkedin-pic1.png",
    link: "https://hashnode.com/post/building-linkedin-clone-ckubelcmk07kb0gs1g7negho9",
    about: "This blog is about my exprience of building clone of LinkedIn",
  },
  {
    name: "Building Airbnb.com clone",
    img: "/Airbnb.png",
    link: "https://airbnbclone.hashnode.dev/building-airbnb-clone",
    about: "This blog is about my exprience of building clone of Airbnb",
  },
]
export function BlogSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <p>Blogs</p>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <BlogCard {...project} />
        ))}
      </div>
    </div>
  )
}
