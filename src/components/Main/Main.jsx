import React from 'react';
import './Main.css'

function Main() {
  return (
    <div className="main">
      <div className="container main__container">
          <div className="main-main">
            <div className="main-inter">
              <h2>Interior Design</h2>
              <p>
                Enhancing the interior to achieve a healthier environment for
                the people using right space.
              </p>
              <h6>View More</h6>
            </div>
            <div className="main-furniture">
              <h2>Furniture</h2>
              <p>
                Movable articles that are used to make a room or building
                suitable for living or working.
              </p>
              <h6>View More</h6>
            </div>
            <div className="main-floor">
              <h2>Flooring</h2>
              <p>
                Thin object any finished material applied over a floor structure
                to provide a walking surface.
              </p>
              <h6>View More</h6>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Main;
