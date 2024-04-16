const totalPrice = ({ price, discount, isInstallment, months }) => isInstallment ? (price - (price * discount / 100)) / months : price / months;
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price);
