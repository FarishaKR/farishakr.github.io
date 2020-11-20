var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Font Awesome Icon Library */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style dangerouslySetInnerHTML={{__html: "\n* {box-sizing: border-box}\nbody {font-family: Verdana, sans-serif; margin:0}\n.mySlides {display: none}\nimg {vertical-align: middle;}\n\n/* Slideshow container */\n.slideshow-container {\n  max-width: 3000px;\n  position: relative;\n  margin: auto;\n}\n\n/* Next & previous buttons */\n.prev, .next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -22px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n}\n\n/* Position the \"next button\" to the right */\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.prev:hover, .next:hover {\n  background-color: rgba(0,0,0,0.8);\n}\n\n/* Caption text */\n.text {\n  color: #f2f2f2;\n  font-size: 15px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 8px;\n  width: 100%;\n  text-align: center;\n}\n\n/* Number text (1/3 etc) */\n.numbertext {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n/* The dots/bullets/indicators */\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active, .dot:hover {\n  background-color: #717171;\n}\n\n/* Fading animation */\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n  from {opacity: .4}\n  to {opacity: 1}\n}\n\n@keyframes fade {\n  from {opacity: .4}\n  to {opacity: 1}\n}\n\n/* On smaller screens, decrease text size */\n@media only screen and (max-width: 300px) {\n  .prev, .next,.text {font-size: 11px}\n}\n\np.c {\n  white-space: pre;\n}\np.b {\n  white-space: normal;\n}\n* {\n  box-sizing: border-box;\n}\n\n.zoom {\n  padding: 50px;\n  background-color: white;\n  transition: transform .2s;\n  width: 500px;\n  height: 400px;\n  margin: 0 auto;\n}\n\n.zoom:hover {\n  -ms-transform: scale(1.5); /* IE 9 */\n  -webkit-transform: scale(1.5); /* Safari 3-8 */\n  transform: scale(1.5);\n}\n.checked {\n  color: orange;\n}\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color:blue;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  padding: 12px 16px;\n  color:white;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n" }} />
        <title>flipflop</title>
        <table border={0} width="100%" height={50} bgcolor="orange">
          <tbody><tr>
              <td align="center">
                <img src="logo.png" />
              </td>
              <td>
                <input type="text" placeholder="search products" style={{width: '1500px', height: '35px'}} />
                <input type="button" defaultValue="search" style={{width: '60px', height: '35px'}} < td />      
              </td><th><a href="file:///C:/Users/Admin/Desktop/online%20store/login.html">Login</a>
              </th>
              <th><a href="file:///C:/Users/Admin/Desktop/online%20store/signup.html">Sign Up</a>
              </th>            
              <td><img src="cart.jpg" width={100} />
              </td>
            </tr>
          </tbody></table>
        &nbsp;
        <br /><br /><table border={0} width="100%" bgcolor="white">
          <tbody><tr>
              <th width="16.6%">
                <div className="dropdown">
                  <span>Fashion</span>
                  <div className="dropdown-content">
                    <p>Men</p>
                    <p>Women</p>
                    <p>kids Wear</p>
                  </div>
                </div>
              </th>    
              <th width="16.6%">
                <div className="dropdown"><span>Mobile</span>
                  <div className="dropdown-content">
                    <p>OPPO</p>
                    <p>SAMSUNG</p>
                    <p>XIOMI</p>
                  </div>
                </div>
              </th>
              <th width="16.6%"><div className="dropdown"><span>electronic</span>
                  <div className="dropdown-content">
                    <p>Refrigerator</p>
                    <p>Air Conditioner</p>
                    <p>Television</p>
                  </div>
                </div>
              </th>
              <th width="16.6%"><div className="dropdown"><span>home</span>
                  <div className="dropdown-content">
                    <p>Furniture</p>
                    <p>Home Decor</p>
                    <p>Kitchen Appliances</p>
                  </div>
                </div>
              </th>
              <th width="16.6%"><div className="dropdown"><span>Pantry</span>
                  <div className="dropdown-content">
                    <p>groceries</p>
                    <p>soft drinks</p>
                    <p>chocolate</p>
                  </div>
                </div>
              </th>
              <th width="16.6%"><div className="dropdown"><span>Appliances</span>
                  <div className="dropdown-content">
                    <p> drying cabinets</p>
                    <p>clothes dryers</p>
                    <p>dishwashers</p>
                  </div>
                </div>
              </th>
            </tr></tbody></table><br /><br /><br /><table border={0} width="100%" height="100%">
          <tbody><tr>
              <td width="25%">
                <img src="bb2.jpg" width="100%" className="zoom" /></td>
              <td><h1>5 pcs newborn baby clothes set gift romper jumpsuit </h1><br />
                <font color="green">Special Price</font>
                <br /><b>
                  3000/-</b><font color="grey">3500/-</font><font color="green"> 30%off</font>
                <br /><br /><br /><br /><br /><b><u><font color="red">Quick Details</font></u><font color="red"><b /></font><b>
                    <br /><br /><br />Age Group:
                    Infants &amp; Toddlers
                    <br />Material:
                    100% Organic Cotton
                    <br />Place of Origin:
                    China
                    <br />Season:
                    Summer
                    <br />Gender:Unisex
                    <br />Closure Type:
                    Rompers
                    <br />Style:
                    Rompers
                    <br />Feature:
                    Eco friendly
                    <br />Color:
                    Picture
                    <br />Collar : 0-Neck
                    <br />
                    <u><font color="red"><b>Basic Information</b></font></u>
                    <br /><br />Model No : CTSI3-S069
                    <br />Material :	95% cotton
                    <br />Sleeve Style :	Short
                    <br />Age :	0-8M
                    <br />Feature :	Eco-friendly
                    <br />Color:	As photos or as you required
                    <br />MOQ	1600pcs/color/style/design/pattern
                    <br /><br />Season :	 Spring, Summer, Autumn
                    <br />Sample time :	About 7 days after receiving the sample fee.
                    <br />Payment term	L/C, D/P, T/T, Western Union, MoneyGram, Paypal, Cash
                    <br /><br /><b><u><font color="red">Packaging &amp; Delivery</font></u></b>
                    <br /><br />Selling Units:
                    As per request
                    <br />Single package size: 
                    10X23X6 cm
                    <br />Single gross weight:
                    0.375 kg
                    <br />Package Type:5 pcs newborn baby clothes set gift romper jumpsuit  as your request.
                    <br />
                    <br /><br />
                    <b><input type="button" defaultValue="Buynow" style={{width: '500px', height: '45px'}} /><input type="button" defaultValue="Add to Cart" style={{width: '500px', height: '45px'}} /></b>
                  </b></b></td></tr>
          </tbody></table>
      </div>
    );
  }
});