import React from 'react';

const Cart = (props) => {
    
    const cart = props.cart;

    // Computing total Price
    
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    
    }

    return (
        <div>
            <div className="orders">
                <h4>Order Summery</h4>
                <h5>You've enrolled : {cart.length}</h5>
                <p>Total price : ${total}</p>
            </div>
            <div className="order-detail">
                <ol>
                    {
                        // Showing enrolled details in the cart side with ascending order by selecting items 
                        cart.map( ct => 
                            <li key={ct.id}>
                                {ct.name}
                            </li> )
                    }
                </ol>
            </div>
            

        </div>
    );
};

export default Cart;