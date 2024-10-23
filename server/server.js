const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = 3001;

const products = [
  {
    "id": "1",
    "name": "Smartphone Pro",
    "price": 699.99,
    "category": "Electronics",
    "image_url": "https://loremflickr.com/400/400/electronics"
  },
  {
    "id": "2",
    "name": "Gaming Laptop X",
    "price": 1299.99,
    "category": "Electronics",
    "image_url": "https://loremflickr.com/400/400/laptop"
  },
  {
    "id": "3",
    "name": "Wireless Earbuds",
    "price": 59.99,
    "category": "Accessories",
    "image_url": "https://loremflickr.com/400/400/earbuds"
  },
  {
    "id": "4",
    "name": "4K Smart TV",
    "price": 499.99,
    "category": "Electronics",
    "image_url": "https://loremflickr.com/400/400/tv"
  },
  {
    "id": "5",
    "name": "Bluetooth Speaker",
    "price": 79.99,
    "category": "Audio",
    "image_url": "https://loremflickr.com/400/400/speaker"
  },
  {
    "id": "6",
    "name": "Fitness Smartwatch",
    "price": 199.99,
    "category": "Wearables",
    "image_url": "https://loremflickr.com/400/400/smartwatch"
  },
  {
    "id": "7",
    "name": "Gaming Mouse",
    "price": 49.99,
    "category": "Accessories",
    "image_url": "https://loremflickr.com/400/400/mouse"
  },
  {
    "id": "8",
    "name": "Mechanical Keyboard",
    "price": 89.99,
    "category": "Accessories",
    "image_url": "https://loremflickr.com/400/400/keyboard"
  },
  {
    "id": "9",
    "name": "Digital Camera",
    "price": 549.99,
    "category": "Electronics",
    "image_url": "https://loremflickr.com/400/400/camera"
  },
  {
    "id": "10",
    "name": "Electric Scooter",
    "price": 399.99,
    "category": "Transport",
    "image_url": "https://loremflickr.com/400/400/scooter"
  },
  {
    "id": "11",
    "name": "Drone Quadcopter",
    "price": 299.99,
    "category": "Electronics",
    "image_url": "https://loremflickr.com/400/400/drone"
  },
  {
    "id": "12",
    "name": "Gaming Chair",
    "price": 199.99,
    "category": "Furniture",
    "image_url": "https://loremflickr.com/400/400/chair"
  },
  {
    "id": "13",
    "name": "LED Desk Lamp",
    "price": 29.99,
    "category": "Furniture",
    "image_url": "https://loremflickr.com/400/400/lamp"
  },
  {
    "id": "14",
    "name": "Air Purifier",
    "price": 149.99,
    "category": "Home Appliances",
    "image_url": "https://loremflickr.com/400/400/airpurifier"
  },
  {
    "id": "15",
    "name": "Espresso Machine",
    "price": 249.99,
    "category": "Kitchen",
    "image_url": "https://loremflickr.com/400/400/coffee"
  },
  {
    "id": "16",
    "name": "Blender Pro",
    "price": 89.99,
    "category": "Kitchen",
    "image_url": "https://loremflickr.com/400/400/blender"
  },
  {
    "id": "17",
    "name": "Robot Vacuum",
    "price": 329.99,
    "category": "Home Appliances",
    "image_url": "https://loremflickr.com/400/400/vacuum"
  },
  {
    "id": "18",
    "name": "Electric Toothbrush",
    "price": 59.99,
    "category": "Health",
    "image_url": "https://loremflickr.com/400/400/toothbrush"
  },
  {
    "id": "19",
    "name": "Hair Dryer",
    "price": 49.99,
    "category": "Personal Care",
    "image_url": "https://loremflickr.com/400/400/hairdryer"
  },
  {
    "id": "20",
    "name": "Kitchen Mixer",
    "price": 129.99,
    "category": "Kitchen",
    "image_url": "https://loremflickr.com/400/400/mixer"
  },
  {
    "id": "21",
    "name": "Electric Kettle",
    "price": 39.99,
    "category": "Kitchen",
    "image_url": "https://loremflickr.com/400/400/kettle"
  },
  {
    "id": "22",
    "name": "Pressure Cooker",
    "price": 99.99,
    "category": "Kitchen",
    "image_url": "https://loremflickr.com/400/400/cooker"
  },
  {
    "id": "23",
    "name": "Wireless Router",
    "price": 149.99,
    "category": "Electronics",
    "image_url": "https://loremflickr.com/400/400/router"
  },
  {
    "id": "24",
    "name": "Smart Light Bulb",
    "price": 24.99,
    "category": "Home",
    "image_url": "https://loremflickr.com/400/400/lightbulb"
  },
  {
    "id": "25",
    "name": "Smart Thermostat",
    "price": 199.99,
    "category": "Home",
    "image_url": "https://loremflickr.com/400/400/thermostat"
  },
  {
    "id": "26",
    "name": "Electric Guitar",
    "price": 399.99,
    "category": "Music",
    "image_url": "https://loremflickr.com/400/400/guitar"
  },
  {
    "id": "27",
    "name": "Digital Piano",
    "price": 549.99,
    "category": "Music",
    "image_url": "https://loremflickr.com/400/400/piano"
  },
  {
    "id": "28",
    "name": "Acoustic Guitar",
    "price": 199.99,
    "category": "Music",
    "image_url": "https://loremflickr.com/400/400/acousticguitar"
  },
  {
    "id": "29",
    "name": "Noise-Cancelling Headphones",
    "price": 249.99,
    "category": "Audio",
    "image_url": "https://loremflickr.com/400/400/headphones"
  },
  {
    "id": "30",
    "name": "VR Headset",
    "price": 399.99,
    "category": "Gaming",
    "image_url": "https://loremflickr.com/400/400/vr"
  },
  {
    "id": "31",
    "name": "Treadmill",
    "price": 599.99,
    "category": "Fitness",
    "image_url": "https://loremflickr.com/400/400/treadmill"
  },
  {
    "id": "32",
    "name": "Elliptical Machine",
    "price": 699.99,
    "category": "Fitness",
    "image_url": "https://loremflickr.com/400/400/elliptical"
  },
  {
    "id": "33",
    "name": "Yoga Mat",
    "price": 29.99,
    "category": "Fitness",
    "image_url": "https://loremflickr.com/400/400/yogamat"
  },
  {
    "id": "34",
    "name": "Dumbbell Set",
    "price": 79.99,
    "category": "Fitness",
    "image_url": "https://loremflickr.com/400/400/dumbbells"
  },
  {
    "id": "35",
    "name": "Action Camera",
    "price": 249.99,
    "category": "Electronics",
    "image_url": "https://loremflickr.com/400/400/actioncamera"
  }
]

const prices = products.map(x => x.price);

const priceRange = [Math.min(...prices), Math.max(...prices) + 100]


const categories = [...new Set(products.map(x => x.category))]

app.use(express.json());

app.get('/api/products', (req, res) => {
  let result = [...products]
  if (req.query.category) {
    result = result.filter(product => product.category === req.query.category)
  }
  if (req.query.search) {
    result = result.filter(product => product.name.toLowerCase().replace(' ', '').includes(req.query.search))
  }
  if (req.query.minPrice) {
    result = result.filter(product => product.price >= Number.parseFloat(req.query.minPrice))
  }
  if (req.query.maxPrice) {
    result = result.filter(product => product.price <= Number.parseFloat(req.query.maxPrice))
  }
  if (req.query.sorting) {
    switch (req.query.sorting) {
      case "pricedesc":
        result = result.sort((a, b) => b.price - a.price)
        break
      case "priceasc":
        result = result.sort((a, b) => a.price - b.price)
        break
      case "alphasc":
        result = result.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
        break
      case "alphdesc":
        result = result.sort((a, b) => {
          if (b.name < a.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        })
        break
    }
  }
  res.json(result);
});

app.get('/api/categories', (req, res) => {
  res.json(categories);
});
app.get('/api/pricerange', (req, res) => {
  res.json(priceRange);
});

app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});