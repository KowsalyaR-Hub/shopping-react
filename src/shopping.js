import React, { useState } from 'react';
import './shopping.css';
import { FaTrash } from 'react-icons/fa'; // Importing the trash icon

function ShoppingList() {
    // State for managing input item and cart
    const [item, setItem] = useState('');
    const [cart, setCart] = useState(['Apple', 'Orange', 'Papaya', 'Kiwi']);

    // Handles input change
    const handleInputChange = (event) => {
        setItem(event.target.value);
    };

    // Adds item to the cart
    const handleAddItem = () => {
        if (item.trim() !== '') {
            setCart([...cart, item]);
            setItem(''); // Reset input field
        }
    };

    // Removes item from the cart
    const handleRemoveItem = (indexToRemove) => {
        const updatedCart = cart.filter((_, index) => index !== indexToRemove);
        setCart(updatedCart);
    };

    return (
        <div className="shopping-container">
            <h1 className="shopping-heading">Shopping List</h1>
            <div className="shopping-input-container">
                <input
                    type="text"
                    value={item}
                    onChange={handleInputChange}
                    placeholder="Enter item"
                    className="shopping-input"
                />
                <button onClick={handleAddItem} className="shopping-add-button">
                    Add
                </button>
            </div>
            <ul className="shopping-list">
                {cart.map((cartItem, index) => (
                    <li key={index} className="shopping-list-item">
                        {cartItem}
                        <FaTrash
                            className="delete-icon"
                            onClick={() => handleRemoveItem(index)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
