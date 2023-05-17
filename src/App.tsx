import { Fragment, useState,  } from 'react'
import { Button } from 'antd'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {

  const element = useRoutes(routes)

  return (
    <Fragment>{element}</Fragment>
  )
}

export default App
