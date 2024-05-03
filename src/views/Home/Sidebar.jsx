import React from 'react';
import { Flex, Menu, Image } from 'antd';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa6';
import { UserOutlined, ProfileOutlined, LogoutOutlined, ShoppingCartOutlined, CarryOutOutlined, SettingOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.png';

const Sidebar = () => {
  return (
    <>
    <Flex align="center" justify="center" >
      <div className="logo">
      <Image className='logo' src={logo} alt=''/>
      </div>
    </Flex>
    <Menu mode="inline" defaultSelectedKeys={['selected']} className="menu-bar" items={[
      {
      key: '1',
      icon: <UserOutlined/>,
      label: <Link to='/'>
      Acceuil
    </Link>,
    },
    {
      key: '2',
      icon: <ShoppingCartOutlined/>,
      label: <Link to='/Panier'>
      Mon Panier
    </Link>,
    },
    {
      key: '3',
      icon: <ProfileOutlined/>,
      label: <Link to='/Profil'>
      Profile
    </Link>,
    },
    {
      key: '4',
      icon: <LogoutOutlined/>,
      label: 
      <Link to='/Login'>
        logout
      </Link>,
    },
    ]} />
    </>
  )
}

export default Sidebar;