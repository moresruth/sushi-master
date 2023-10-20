
import salmontemaki from '../assets/salmontemaki.png';
import tamagoyaki from '../assets/tamagoyaki.png';
import hosomaki from '../assets/hosomaki.png';

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
      imgUrl: salmontemaki,
      name:'Salmon Tamaki',
      description: 'Nihonryōri',
      price: '$10.99'
    },

    {
      imgUrl: tamagoyaki,
      name:'Tamagoyaki',
      description: 'Nihonryōri',
      price: '$8.99'
    },
    {
      imgUrl: hosomaki,
      name:'Hosomaki',
      description: 'Nihonryōri',
      price: '$12.99'
    }
  ]

  export default { temaki , uramaki, products};