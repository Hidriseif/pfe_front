import { Flex, Typography ,Button, Card, Avatar, Tooltip, Layout} from 'antd';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Sidebar from './Sidebar';
import logo from '../../assets/logo.png';

const {Sider, Header , Content } = Layout;
const test = () => {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
    <Flex align='center ' justify='space-between'>
        <Layout>
            <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className='sider'>
                <Sidebar/>
            </Sider>
            <Typography.Title level={3} strong className="primary--color">
            My article 
            </Typography.Title>

            <Flex align='center' gap="large">
        <Card  hoverable className="Profile-card1">
        <img className='logo' src={logo} alt='Produit'/>
            
            
        </Card>
        <Card hoverable className='contact-info'>
            <Typography.Text className='name' type="primary">Price: 50 DT</Typography.Text><br/><hr/>
            <Typography.Text className='email' type="secondary">Seller:</Typography.Text><br/><hr/>
            <Typography.Text className='phone' type="secondary">Phone:55 555 55</Typography.Text><br/><hr/>
            <Typography.Text className='adress' type="secondary">size:xl</Typography.Text>
            <Link to='/Test'>
            <Button className='button1'>Ajouter au Panier</Button></Link>
        </Card>
    </Flex>
    </Layout>
    </Flex>
    </div>
  )
}

export default test