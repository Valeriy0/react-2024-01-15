import React from "react"
import { Layout } from "./components/Layout/component"
import { Restaurants } from "./components/Restaurants/components"
import { restaurants } from "../materials/mock"

export const App = () => {
  return (
    <Layout>
      <Restaurants info={restaurants} />
    </Layout>
  )
}