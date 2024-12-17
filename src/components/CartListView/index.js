import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const removeAllCart = () => {
        removeAllCartItems()
      }
      return (
        <ul className="cart-list">
          <div className="remove-all-container">
            <button
              type="button"
              className="all-remove-btn"
              onClick={removeAllCart}
            >
              Remove All
            </button>
          </div>
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
