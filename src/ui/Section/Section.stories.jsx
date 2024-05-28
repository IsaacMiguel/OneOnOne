import React from "react"
import { Button, } from "../Button/Button"
import Section from "./Section"

export default {
  component: Section,
}

export const Primary = {
  name: "basic Section",
  args: {
    sectionName: "Default Text",
    children: <Button label={"Hola"} />,
  },
}
