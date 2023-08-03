import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider

import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="preload-roboto-font"
      rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
    />,
    <link
      key="roboto-font"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
    />,
    <link
      key="preload-inter-font"
      rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css?family=Inter:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
    />,
    <link
      key="inter-font"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Inter:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
    />,
  ])
}
