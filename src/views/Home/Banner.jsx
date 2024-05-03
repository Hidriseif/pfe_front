import { Button, Card, Flex, Typography } from 'antd'
import React from 'react'

const Banner = () => {
  return (
    <Card style={{height: 260, padding: '20px'}}>
        <Flex vertical gap="30px">
            <Flex vertical align="flex-start">
                <Typography.Title level={2} strong>
                    Create and sell product
                </Typography.Title>
                <Typography.Text type="secondary" strong>
                    bonjour tout le mondeqfkjbqfjqvfqzh;f vqssfvseedvcjhs
                </Typography.Text>
            </Flex>
            <Flex gap='large'>
                <Button type="primary" size="large">Explore more</Button>
                <Button size="large">Top seller</Button>
            </Flex>
        </Flex>
    </Card>
  )
}

export default Banner