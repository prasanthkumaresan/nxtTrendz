import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let sum = 0
      const addPrice = each => {
        sum += each.price * each.quantity
      }
      const items = cartList.length
      cartList.forEach(each => addPrice(each))
      return (
        <div className="summary-container">
          <div className="summary-content">
            <h1 className="rs-para">
              Order Total: <span className="rupees-cart">Rs {sum}</span>
            </h1>
            <p className="items-para">{items} items in cart</p>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
