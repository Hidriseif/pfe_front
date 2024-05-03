import { Flex } from 'antd'
import React from 'react'
import Banner from './Banner'
import ProductsLists from './ProductsLists'
import Sellerlist from './Sellerlist'

const MainContent = () => {
  return (
        <div style={{flex: 1 }}>
            <Flex vertical gap="2.3rem">
                <Banner/>
                <ProductsLists/>
                <Sellerlist/>
            </Flex>
        </div>
  )
}

export default MainContent