
  const fakeData = {
    products: [
      {
        id: 1,
        image:require("../assets/Home/mage.png"),
        nameProduct: "Vegan Resto",
        location:'9 km',
        rating:'4.8',
        min:'12 min',
        description: "Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole . . . .",
      },
      {
        id: 2,
        nameProduct: "Healthy Resto",
        image:require("../assets/Home/Heaththy.png"),
        location:'10 km',
        rating:'4.9',
        min:'13 min',
        description: "Whole Alaskan Red King Crabs are often broken down into legs, claws, and lump meat. You can find all these options in our online store, but there's a unique experience in having the whole crab delivered to your door."
      },
      {
        id: 3,
        nameProduct: "Good Food",
        image:require("../assets/Home/luamach.png"),
        min:'14 min',
        location:'9 km',
        rating:'5.0',
        description: "The majority of Alaskan Red King Crabs are separated into legs, claws, and lump meat. We offer all of these choices in our online store, but there's something special about ordering the whole crab...",
     
      },
      {
        id: 4,
        nameProduct: "Vegan Resto",
        image:require("../assets/Home/RestaurantImage.png"),
        min:'12 min',
        location:'19 km',
        rating:'5.1',
        description: "Most Alaskan Red King Crabs are categorized into parts like legs, claws, and lump meat. At our online store, you can choose each type individually, but nothing compares to ordering the whole crab...",
        
      },
      {
        id: 5,
        nameProduct: "Healthy Resto",
        image:require("../assets/Home/RestaurantImage2.png"),
        min:'13 min',
        location:'19 km',
        rating:'5.2',
        description: "Alaskan Red King Crabs are typically divided into legs, claws, and lump meat. We provide all these options in our online shop, but there's no substitute for ordering the whole crab...",
       
      },
      {
        id: 6,
        nameProduct: "Healthy Resto",
        image:require("../assets/Home/RestaurantImage.png"),
        min:'13 min',
        location:'10 km',
        rating:'5.4',
        description: "Most whole Alaskan Red King Crabs are typically divided into legs, claws, and lump meat. While we offer all of these options in our online shop, there's nothing quite like getting the whole crab...",
       
      },
    ],
    menus: [
      {
        id: 1,
        nameMenu: "Herbar Pancake",
        name:'Wijie Resto',
        location:'9 km',
        rating:'4.8',
        order:'2000 +',
        image: require("../assets/Home/MenuPhoto.png"),
        description: "Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt. Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis eu laborum.",
        price: 45,
      },
      {
        id: 2,
        nameMenu: "Fruit Salad",
        name:'Wijie Resto',
        location:'9 km',
        rating:'4.8',
        order:'3000 +',
        image: require("../assets/Home/Menu.png"),
        description: "Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt. Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis eu laborum.",
        price: 50,
      },
      {
        id: 3,
        nameMenu: "Green Noddle",
        location:'10 km',
        name:'Noodle Home',
        rating:'5.8',
        order:'4000 +',
        image: require("../assets/Home/Photo.png"),
        description: "Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt. Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis eu laborum.",
        price: 67,
      },
    ],
    chats:[
      {
        id: '1',
        name: 'Louis Kelly',
        time: '20:00',
        message: 'Your Order TL Just Arrived!',
        avatar: require('../assets/Message/PhotoProfile.png'),
        status:'Online',
        chatHistory: [
          { sender: 'friend', text: 'Just to order?' },
          { sender: 'user', text: 'Okay, for what level of spiciness?' },
          { sender: 'friend', text: 'Okay, wait a minutes!' },
          { sender: 'user', text: "Okay I'm waiting!" },
        ],
    },
    {
        id: '2',
        name: 'Paul Koch',
        time: '20:00',
        message: 'Your Order VN Just Arrived!',
        avatar: require('../assets/Message/PhotoProfile(1).png'),
        status:'Offline',
        chatHistory: [
          { sender: 'friend', text: 'Hi, how are you Nhat?' },
          { sender: 'user', text: 'Im good, thank you!' },
        ],
    },
    {
        id: '3',
        name: 'Carla Klein',
        time: '20:00',
        message: 'Your Order LT Just Arrived!',
        avatar: require('../assets/Message/PhotoProfile(2).png'),
        status:'Online',
        chatHistory: [
          { sender: 'friend', text: 'Hi, how are you Thien?' },
          { sender: 'user', text: 'Im good, thank you!' },
        ],
    },
    ],
    notification:[
      {
        id:1,
        image: require('../assets/Notification/checked.png'),
        name:'Your order has been taken by the driver',
        actionOrder:'Recently'
      },
      {
        id:2,
        image: require('../assets/Notification/checked.png'),
        name:'Topup for $100 was successful',
        actionOrder:'10.00 Am'
      },
      {
        id:3,
        image:require('../assets/Notification/money.png'),
        name:'Your order has been canceled',
        actionOrder:'22 Juny 2021'
      }
    ]
  };
  
  export default fakeData;
  
  