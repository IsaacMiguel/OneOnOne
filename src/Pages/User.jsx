import React from "react"

// UI
import Section from "../ui/Section/Section"
import { Text, } from "../ui/Inputs/Text/Text"
import { Button, } from "../ui/Button/Button"
import { Form, Formik, } from "formik"

export const User = () => {
  return (
    <Section sectionName={"Crear Usuario"}>
      <Formik
        initialValues={{}}
        validate={() => {}}
        onSubmit={(values, { setSubmitting, },) => {
          console.log(JSON.stringify(values, null, 2,),)
          setSubmitting(false,)
        }}
      >
        {
          () => (
            <Form>
              <Text name="nombre" />
              <Button label={"Crear Usuario"} type={"submit"}/>
            </Form>
          )
        }
      </Formik>
    </Section>
  )
}
