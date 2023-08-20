import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import styles from "./Styles/HeroSection.module.css"

import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

import { RiDownloadLine } from "react-icons/ri"
import Fade from "react-reveal/Fade"

const useStyles = makeStyles({
  contactBtn: {
    color: "white",

    backgroundColor: "rgb(8, 111, 143)",
    width: "130px",
    height: "45px",

    "&:hover": {
      backgroundColor: "rgb(21, 138, 173)",
    },
  },
  linkedInIcon: {
    fontSize: "40px",

    color: "rgb(8, 111, 143)",
    "&:hover": {
      backgroundColor: "rgb(17, 155, 197)",
    },
  },
  gitIcon: {
    fontSize: "35px",
    color: "rgb(42, 42, 42)",

    "&:hover": {
      backgroundColor: "rgb(100, 100, 100)",
    },
  },
  a: {
    textDecoration: "none",
  },
})
export function HeroSection() {
  const classes = useStyles()
  return (
    <div className={styles.rootCont} id="hero">
      <Fade>
        <div className={styles.nameCont}>
          <p>Hi,</p>
          <p>
            I am <span>Gajanan</span>{" "}
          </p>
          <p>Web Developer</p>
          <a
            // href="https://drive.google.com/file/d/1ZEGGaiwAYUWwdqa_7-ms6ppurMSN6JXr/view?usp=sharing"
            href="https://drive.google.com/file/d/1ZEGGaiwAYUWwdqa_7-ms6ppurMSN6JXr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" className={classes.contactBtn}>
              <RiDownloadLine
                style={{
                  fontSize: "18px",
                  marginLeft: "10px",
                  marginRight: "5px",
                }}
              />
              Resume
            </Button>
          </a>
        </div>

        <div className={styles.photoCont}>
          <img
            src="https://camo.githubusercontent.com/e4a569755580f96dce0e6d65bc761e0d9aef0fecae524ec73a1b0be60fc934fa/68747470733a2f2f7777772e6d79676f2e67652f75706c6f6164732f626c6f672f313538343032333739352e6a7067"
            alt=""
            className={styles.heroImg}
          />
        </div>
        <div className={styles.socialCont}>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/gajanan-wattamwar"
            className={classes.a}
            target="_blank"
          >
            <AiFillLinkedin className={styles.linkedInIcon} />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/Gajanan-Watt"
            className={classes.a}
            target="_blank"
          >
            <AiOutlineGithub className={styles.gitIcon} />
          </a>
        </div>
      </Fade>
    </div>
  )
}
