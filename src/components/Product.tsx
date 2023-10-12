import React, {useEffect, useState} from 'react';
import axios from 'axios';

export function Products() {
  
  const [data, setData] = useState({products: []});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setData(response.data);

        /***
        const response = {
	  "products": [
	    {
	      "id": 1,
	      "title": "Shoes & Shirts"
	    },
	    {
	      "id": 2,
	      "title": "Dresses & Gowns"
	    }
	  ]
	}
	setData(response);
	***/
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    }, []);
  
  
  return (
    <div>
      <ul>
        {data.products.map(product => (
	  <li key={product.id}>{product.title}</li>
	  )
	)}
      </ul>
    </div>
  )
}

