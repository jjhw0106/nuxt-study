import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
})
async function fetchProductById(id) {
  const response = await instance.get(`/products/${id}`);
  console.log("imgurl type: ",typeof(response.data.imageUrl));
  console.log(response.data.imageUrl.replace("{id}", id));
  response.data.imageUrl = response.data.imageUrl.replace("{id}", id);
  // product.imageUrl.replace("{id}", id);
  // product.data.imageUrl.replace("{id}", id);
  // console.log(product.data.imageUrl);
  return response;
}

function fetchProductsByKeyword(keyword) {
  console.log("search!!");
  return instance.get(`/products`, {
    params: {
      name_like: keyword,
    }
  })  
}

export { fetchProductById, fetchProductsByKeyword }