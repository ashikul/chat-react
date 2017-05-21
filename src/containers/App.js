// import React from 'react'
// import ProductsContainer from './ProductsContainer'
// import CartContainer from './CartContainer'
//
// const App = () => (
//   <div>
//     <h2>Shopping Cart Example</h2>
//     <hr/>
//     <ProductsContainer />
//     <hr/>
//     <CartContainer />
//   </div>
// )
//
// export default App


import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
//TODO: add chat container???

//TODO: chatbox with props--- user, reciever
//TODO: user, recievingUser

//TODO: i dont think I need containers. just 2 components...
//TODO:  possibly... chatbox container... but idk..
const App = () => (
    <div>
        <div className="shopping-cart-demo">
            <h2>Shopping Cart Example</h2>
            <hr/>
            <ProductsContainer />
            <hr/>
            <CartContainer />
        </div>
        <div>
            my chat example starting here

            need 2 chatbox
        </div>
    </div>
)

export default App
