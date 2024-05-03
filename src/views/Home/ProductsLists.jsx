import { Flex, Typography, Button, Card, Image } from 'antd'
import React from 'react'
import plantData from '../../PlantData';
import hijabData from '../../PlantData';
import { Link } from 'react-router-dom';
import axios from 'axios';

const { Meta } = Card;
const ProductsLists = () => {
  const handleCreate = () => {
    axios.post('/api/products', {
      title: 'New Product',
      description: 'This is a new product'
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const handleUpdate = (id) => {
    axios.put(`/api/products/${id}`, {
      title: 'Updated Product',
      description: 'This product has been updated'
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const handleDelete = (id) => {
    axios.delete(`/api/products/${id}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div>
      <Flex align='center ' justify='space-between'>
        <Typography.Title level={3} strong className="primary--color">
          my list
        </Typography.Title>
        <Button type='link' className="gray--color"> test</Button>
        <Button onClick={handleCreate}>Create</Button>
      </Flex>
      <Flex align='center' gap="large">
        {plantData.map((hijab) => (
          <Card key={hijab.id} hoverable className="hijab-card">
            <Image src={hijab.picture} style={{ width: '150px' }} />
            <Meta title={hijab.name} style={{ marginTop: '1rem' }} />
            <Link to='/Test'>
              <Button className='button1'>Consulter maintenant</Button></Link>
            <Button onClick={() => handleUpdate(hijab.id)}>Update</Button>
            <Button onClick={() => handleDelete(hijab.id)}>Delete</Button>
          </Card>
        ))}
      </Flex>
    </div>
  )
}

export default ProductsLists