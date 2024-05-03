import Axios from 'axios';

const axios = Axios.create({
	baseURL: "http://localhost:8000/api",
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json",
	},
});


// Get all products
axios.get('/products')
 .then(response => {
    console.log(response.data);
  })
 .catch(error => {
    console.error(error);
  });

// Get a single product
axios.get('/products/1')
 .then(response => {
    console.log(response.data);
  })
 .catch(error => {
    console.error(error);
  });

// Create a new product
axios.post('/products', {
  title: 'New Product',
  description: 'This is a new product'
})
 .then(response => {
    console.log(response.data);
  })
 .catch(error => {
    console.error(error);
  });

// Update a product
axios.put('/products/1', {
  title: 'Updated Product',
  description: 'This product has been updated'
})
 .then(response => {
    console.log(response.data);
  })
 .catch(error => {
    console.error(error);
  });

// Delete a product
axios.delete('/products/1')
 .then(response => {
    console.log(response.data);
  })
 .catch(error => {
    console.error(error);
  });
export default axios;