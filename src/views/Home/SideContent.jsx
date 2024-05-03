import React from 'react'
import ContentSidebar from './ContentSidebar'
import { Flex } from 'antd'
import Activity from './Activity'
import Categories from './Categories'

const SideContent = () => {
  return (
    <Flex vertical gap="2.3rem" style={{width: 350 }}>
            <ContentSidebar/>
            <Categories/>
    </Flex>
  )
}

export default SideContent