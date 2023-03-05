import React from 'react'
import {ImSpoonKnife} from 'react-icons/im'

function Header() {
  return (
    <header className='header' style={{ backgroundImage: `url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
        <div className='layer'>
        <div className="container">
          <nav className='logo-position'>
            <div className='logo'>
              <ImSpoonKnife className='brand' />
            </div>
            <div className='header-img'>
              <img src='https://dcassetcdn.com/design_img/10150/25224/25224_294121_10150_image.jpg'/>
            </div>
          </nav>
          <div className='header-text' >
            <h1>Easy Recipe</h1>
            <p>Get Your Recipe And Make Delicious Food Within The Home</p>
          </div>

        </div>
        </div>
      </header>
  )
}

export default Header
