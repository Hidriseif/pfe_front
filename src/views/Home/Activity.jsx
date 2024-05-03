import { Avatar, Button, Flex, List, Typography } from 'antd'
import Item from 'antd/es/list/Item';
import React from 'react'


const data =[
    {
        name: 'rayssen',
        orderTime:1,
    },
    {
        name: 'maram',
        orderTime:2,
    },
    {
        name: 'salmin',
        orderTime:3,
    },
]
const Activity = () => {
  return (
    <Flex vertical gap="small">

        <Flex align="center" justify="space-between" gap="large">

            <Typography.Title level={3} strong className='primary--color'>
                Recent Activity
            </Typography.Title>
            <Button type="link " className="gray--color">
               View all
            </Button>
        </Flex>
        <List pagination dataSource={data} renderItem={(User , Index)=>(
            <List.Item>

                <List.Item.Meta avatar={<Avatar src={'https://api.dicebear.com/7.x/miniavs/svg?seed=${index}'} />} title={<a href="#">{User.name}</a>}
                description="order new hijab"
                ></List.Item.Meta>
                <span className="gray--color">
                    {User.name}{User.orderTime == 1 ? 'day ago': 'days ago'}
                </span>
            </List.Item>

        )}/>
    </Flex>
  );
};

export default Activity;