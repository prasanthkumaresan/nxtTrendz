import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      // TODO: Update the functionality to increment and decrement quantity of the cart item
      const increaseQuantity = () => {
        incrementCartItemQuantity(id)
      }
      const decreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <BsDashSquare
                onClick={decreaseQuantity}
                color="#52606D"
                size={12}
              />
              <p className="cart-quantity">{quantity}</p>
              <BsPlusSquare
                onClick={increaseQuantity}
                color="#52606D"
                size={12}
              />
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
              <button
                className="remove-button"
                type="button"
                data-testid="remove"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <AiFillCloseCircle
            onClick={onRemoveCartItem}
            color="#616E7C"
            size={20}
          />
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
