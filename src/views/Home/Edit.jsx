import { Flex, Typography ,Button, Card, Avatar, Tooltip, Layout, Space, Form, Input} from 'antd';
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
            <Typography.Title level={3} strong className="primary--color">My Profile</Typography.Title>
            
            <Flex align='center' gap="large">
                <Space
                    direction="vertical"
                    size="middle"
                    style={{
                    display: 'flex',
                    }}>
                    <Flex>
                       
                        <Card hoverable className='contact-info'> 
                        <Typography.Title>Editer Votre profile </Typography.Title>
                          <Form>
                           <div className='edit'>
                          <Input type='text' placeholder='votre nom'/><br/><br/>
                          <Input type='email' placeholder='votre email'/><br/><br/>
                          <Input type='text' placeholder='votre adresse'/><br/><br/>
                          <Input type='password' placeholder='votre mot de passe'/><br/><br/>
                          </div>
                          
                          

                          </Form>
                           


                           

                        
                        </Card><br/><hr/>
                    </Flex><br/>
                </Space>
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