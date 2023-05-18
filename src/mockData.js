export const currentOrder = [
  {
    id: 19049585,
    name: 'Steak Fries Veggies',
    price: 'P 185',
    type: 'Meat',
    imgSrc: '/steakfries.png',
    addOns: [
      { type: 'Sauce', name: 'Tomato Sows', quantity: 1 },
      { type: 'Drinks', name: 'Regular Coke', quantity: 1 },
      { type: 'Chimken', name: 'Fried Chimken', quantity: 1 },
    ],
  },
];

export const paymentOptions = [
  { type: 'Cash on Delivery', description: 'Pay when you received the order' },
  {
    type: 'Loyalty Points',
    description: 'Pay using your earned loyalty points',
  },
  { type: 'Paypal', description: 'A new tab will open to access your account' },
  { type: 'Paynamics', description: 'Choose paynamics available from you' },
];
