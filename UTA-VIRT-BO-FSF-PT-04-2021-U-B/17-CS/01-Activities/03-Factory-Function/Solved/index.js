const beverage = function() {
  const type = 'coffee';
  const price = 6;
  const origin = 'Kenya';

  return {
    product: function() {
      console.log(`Would you like a ${type}?`);
    },
    amount: function() {
      console.log(`The price of this ${type} is $${price}.`);
    },
    place: function() {
      console.log(`This ${type} is from ${origin}!`);
    }
  };
};

const drink = beverage();
drink.product();
drink.amount();
drink.place();
