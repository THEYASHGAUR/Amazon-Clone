import React from 'react';
import './Home.css';
import Product from '../Product/Product';

const Home = () => {
  return (

    <div className='home'>
      <div className="home__container">
        <img src="panel_ss.png" className='home_img' alt="" />


        <div className="products">
          <div className="home__row">
            <Product
              id={23554}
              title="Iphone 14 Pro Max || 256gb ||14 MegaPixel"
              price="80000"
              image="iphone.webp"
              rating={4}
            />
            <Product
              id={25464}
              title="Rich Dad Poor Dad"
              price="230"
              image="rich-dad-poor-dad.webp"
              rating={5} />

          </div>
          <div className="home__row">
            <Product
              id={23948}
              title="Rubics Cube"
              price="80"
              image="cube.jpg"
              rating={3} />
            <Product
              id={12121}
              title="Lens Cleaner"
              price="100"
              image="lens.png"
              rating={3} />
            <Product
              id={23554}
              title="Google Pixel phones"
              price="33000"
              image="google pixel.jpg"
              rating={2} />
          </div>
          <div className="home__row">
            <Product
              id={45452}
              title="LG washing Machine"
              price="25000"
              image="lg-washing.webp"
              rating={4} />
          </div>
        </div>


      </div>

    </div>
  )
}

export default Home;
