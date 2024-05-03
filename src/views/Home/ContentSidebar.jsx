import { Card, Flex, Typography, Image } from 'antd';
import React from 'react';
import logo from '../../assets/logo.png';

const ContentSidebar = () => {
  return (
    <div>
        <Card className="card">
            <Flex vertical gap='large'>
              <Image className='logo' src={logo} alt=''/>
            </Flex>
        </Card>
    </div>
  )
}

export default ContentSidebar