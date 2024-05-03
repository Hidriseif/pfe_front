import { Flex, Typography ,Button, Card, Avatar, Tooltip, Layout, Space} from 'antd';
import React, {useState} from 'react';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import '../../App.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const {Sider, Header , Content } = Layout;
const Profile = () => {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <Flex align='center ' justify='space-between'>
        <Layout>
            <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className='sider'>
                <Sidebar/>
                <Button type='text' icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                onClick={() => setCollapsed(!collapsed)}
                className="triger-btn"
                />
            </Sider>
            <Typography.Title level={3} strong className="primary--color">Mon Panier</Typography.Title>
            <Flex align='center' gap="large">
                <Flex>
                        
                </Flex><br/>
            </Flex>
        </Layout>
    </Flex> 
  )
}

const projectsData = [
  {
    title: 'Project 1',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    link: 'https://example.com/project1',
    description: 'This is a description of Project 1',
  },
  {
    title: 'Project 2',
    avatar: 'https://zos.alipayobjects.com.rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    link: 'https://example.com/project2',
    description: 'This is a description of Project 2',
  },
]

export default Profile