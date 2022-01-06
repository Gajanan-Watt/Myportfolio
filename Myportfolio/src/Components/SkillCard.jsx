import { Paper } from "@material-ui/core"
import styles from "./Styles/SkillCard.module.css"

import { useState } from "react"
import Jump from "react-reveal/Jump"
import HeadShake from "react-reveal/HeadShake"
import Pulse from "react-reveal/Pulse"
import Jello from "react-reveal/Jello"
export function SkillCard({ skill, icon }) {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount((prev) => prev + 1)
  }
  return (
    // <Pulse spy={count}>
    <Paper elevation={3} className={styles.card}>
      {icon}

      <p>{skill}</p>
    </Paper>
    // </Pulse>
  )
}
