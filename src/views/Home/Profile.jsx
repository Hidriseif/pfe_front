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
            <Typography.Title level={3} strong className="primary--color">My Profile</Typography.Title>
            <Link to='/Edit'><Button type='link' className="gray--color"> Edit Profile</Button></Link>
            <Flex align='center' gap="large">
                <Space
                    direction="vertical"
                    size="middle"
                    style={{
                    display: 'flex',
                    }}>
                    <Flex>
                        <Card  hoverable className="Profile-card1">
                            <Tooltip title="User 1" placement="top">
                                <Avatar className='avatar' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </Tooltip><br/>
                            <Typography.Text type="primary">User 1</Typography.Text><br/><hr/>
                            <Typography.Text type="secondary">Email: user1@example.com</Typography.Text><br/><hr/>
                            <Typography.Text type="secondary">Joined on: 01/01/2022</Typography.Text><br/><hr/>
                        </Card>
                        <Card hoverable className='contact-info'>
                            <Typography.Text className='name' type="primary">Name: John Doe</Typography.Text><br/><hr/>
                            <Typography.Text className='email' type="secondary">Email: user1@example.com</Typography.Text><br/><hr/>
                            <Typography.Text className='phone' type="secondary">Phone: 123-456-7890</Typography.Text><br/><hr/>
                            <Typography.Text className='adress' type="secondary">Address: 123 Main St, Anytown USA</Typography.Text><br/><hr/>
                            <Typography.Text className='bio' type="secondary">Bio: I am a software engineer with a passion for building great products.</Typography.Text><br/><hr/>
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