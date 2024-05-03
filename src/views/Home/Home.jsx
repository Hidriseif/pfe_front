import React, { useState } from 'react';
import { Button, Layout, Flex } from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import Sidebar from './Sidebar';
import '../../App.css';
import CustomHeader from './Header';
import MainContent from './MainContent';
import SideContent from './SideContent';
import Profile from './Profile';

const {Sider, Header , Content } = Layout;
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
  <Layout>
    <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className='sider'>
      <Sidebar/>
      <Button type='text' icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
      onClick={() => setCollapsed(!collapsed)}
      className="triger-btn"
      />
    </Sider>
    <Layout>
      <Header className='header'>
        <CustomHeader/>
      </Header>
      <Content className='content'>
        <Flex gap="large">
          <MainContent/>
          <SideContent/>
        </Flex>
      </Content>
    </Layout>
   </Layout>
  );
};

export default Home;