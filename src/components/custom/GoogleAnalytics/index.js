import React from "react"

const index = () => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-141220171-1"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || [] function gtag(){" "}
        {dataLayer.push(arguments)}
        gtag('js', new Date()) gtag('config', 'UA-141220171-1')
      </script>
    </>
  )
}

export default index
