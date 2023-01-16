 import React from "react";
 
 function Header(){
    return(
      <header className="header">
          <div className="container">
              <div className="row">
                  <div className="col-6">
                     <div className="header__content">
                        <div className="header-section">
                            <h2>Bonjour, Je suis</h2>
                            <h1>Olive Ade</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis consequatur quae, minus, repudiandae dolores illo voluptatum ducimus, aperiam mollitia eligendi nostrum sequi!
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure omnis nemo inventore dolorum molestiae odit, nostrum labore deleniti? <br />
                               At voluptatum aliquam, excepturi consequuntur culpa ullam debitis accusantium? Architecto, inventore.
                            </p>
                            <div className="header__buttons">
                              <a href="#Skills" className="btn btn-outline">
                               Hire me
                              </a>
                            </div>
                        </div>
                      </div> 
                  </div>
                  <div className="col-6">
                      <div className="Im">
                      <img src="./imge.jpeg" alt="" className="image"/>
                      </div>
                     
                  </div>
              </div>
          </div>
      </header>
    )
 }
 export default Header;
