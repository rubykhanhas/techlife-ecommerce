import React from 'react'
import Swal from 'sweetalert2';
import './CartDiscount.scss';

function CartDiscount() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        Swal.fire({
            title: 'Error!',
            text: 'Invalid coupon code',
            icon: 'error'
        })
    }

    return (
        <div className="cart-discount">
            <h3>Discount Code</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" pattern="[A-Za-z0-9]*"/>
                <button className="primary-btn btn">submit</button>
            </form>
        </div>
    )
}

export default CartDiscount;
