import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Hijab', 'sub1', <AppstoreOutlined />, [
    getItem('', 'g1', null, [getItem('Moderne', '1'), getItem('Innovant', '2'), getItem('Édition limityée', '3')], 'group'),
  ]),
  {
    type: 'divider',
  },
  getItem('Robe', 'sub2', <AppstoreOutlined />, [
    getItem('', 'g2', null, [getItem('Brodée', '4'), getItem('Personalisée', '5'), getItem('Chic', '6'), getItem('Soirée', '7')], 'group'),
  ]),
  {
    type: 'divider',
  },
  getItem('Tenue de sport', 'sub3', <AppstoreOutlined />, [
    getItem('', 'g1', null, [getItem('Survetements', '8'), getItem('Sport chic', '9')], 'group'),
  ]),
  {
    type: 'divider',
  },
  getItem('Maillot', 'sub4', <AppstoreOutlined />, 
  ),
  {
    type: 'divider',
  },
  getItem('Accessoires', 'sub5', <AppstoreOutlined />, [
    getItem('', 'g1', null, [getItem('Bijoux', '10'), getItem('Bonnet', '11')], 'group'),
  ]),
];
const App = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      mode="inline"
      items={items}
    />
  );
};
export default App;