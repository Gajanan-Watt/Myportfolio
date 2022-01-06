import styles from "./Styles/BlogSection.module.css"
import LinkIcon from "@material-ui/icons/Link"

export function BlogCard({ name, img, link, about }) {
  return (
    <>
      <div className={styles.projectCont}>
        <img src={img} alt="" className={styles.image} />
        <p style={{ fontSize: "25px", fontWeight: "400", margin: "0" }}>
          {name}
        </p>

        <div className={styles.linkCont}>
          <a href={link} rel="noreferrer" target="_blank">
            <div className={styles.linkDiv}>
              <LinkIcon />
              <p>See Blog</p>
            </div>
          </a>
        </div>
        <div className={styles.projInfo}>
          <p>{about}</p>
        </div>
      </div>
    </>
  )
}
