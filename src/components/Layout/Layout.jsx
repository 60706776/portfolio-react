import React from 'react'
import { SLayout, SMain } from './Styles'
import Sidebar from './Sidebar/Sidebar'

export default function Layout({children}) {
  return (
    <SLayout>
        <Sidebar />
        <SMain>{children}</SMain>
    </SLayout>
  )
}
