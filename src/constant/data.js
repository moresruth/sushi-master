
import salmontemaki from '../assets/salmontemaki.png';
import tamagoyaki from '../assets/tamagoyaki.png';
import hosomaki from '../assets/hosomaki.png';
import profile01 from "../assets/profile01.png";
import rating01 from '../assets/rating01.svg';
import rating02 from '../assets/rating02.svg';


const temaki = [
    {
      title: 'Tobiko Temaki',
      price: '$56',
     
    },
    {
      title: 'Unagi Nigiri',
      price: '$53',
    
    },
    {
      title: 'Tamago Nigiri',
      price: '$44',
      
    },
    {
      title: 'Eel and Avocado Temaki',
      price: '$31',
      
    },
    
  ];

  const uramaki = [
    {
      title: 'California Sunset Roll',
      price: '$55',
     
    },
    {
      title: 'Spicy Tuna Roll',
      price: '$53',
    
    },
    {
      title: 'Dragon Roll',
      price: '$42',
      
    },
    {
      title: 'Tempura Roll',
      price: '$30',
      
    },
    
  ];

  const products =[
    {
      id:"product-1",
      imgUrl: salmontemaki,
      name:'Salmon Tamaki',
      description: 'Nihonryōri',
      price: '$10.99'
    },

    {
      id:"product-2",
      imgUrl: tamagoyaki,
      name:'Tamagoyaki',
      description: 'Nihonryōri',
      price: '$8.99'
    },
    {
      id:"product-3",
      imgUrl: hosomaki,
      name:'Hosomaki',
      description: 'Nihonryōri',
      price: '$12.99'
    }
  ];

  const feedbacks =[
    {
      id:"feedback-1",
      profile: profile01,
      name:'Emily Rod.',
      rating:rating01,
      comment:"SushiMasters is my go-to source for all things sushi! The website has a wealth of information, from sushi-making tips to the latest trends and have tried some amazing recipes. Highly recommended!"

    },
    {
      id:"feedback-2",
      profile: profile01,
      name:'Emily Rod.',
      rating:rating02,
      comment:"SushiMasters is my go-to source for all things sushi! The website has a wealth of information, from sushi-making tips to the latest trends and have tried some amazing recipes. Highly recommended!"

    },
    {
      id:"feedback-3",
      profile: profile01,
      name:'Emily Rod.',
      rating:rating01,
      comment:"SushiMasters is my go-to source for all things sushi! The website has a wealth of information, from sushi-making tips to the latest trends and have tried some amazing recipes. Highly recommended!"

    },
  ];

  export default { temaki , uramaki, products, feedbacks};