document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;

            cart.push({
                name: productName,
                price: productPrice
            });

            alert(`${productName} has been added to your cart.`);
            console.log(cart);
        });
    });
});
