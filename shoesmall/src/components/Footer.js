const Footer = ()=>{
    return <>
     <div  className="newslatter">
         <div className="container">
            <div className="row d_flex">
               <div className="col-md-5">
                  <h3 className="neslatter">Subscribe To The Newsletter</h3>
               </div>
               <div className="col-md-7">
                  <form className="news_form">
                     <input className="letter_form" placeholder=" Enter your email" type="text" name="Enter your email"/>
                     <button className="sumbit">Subscribe</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
     
      <div className="three_box">
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                  <div className="gift_box">
                     <i><img src="images/icon_mony.png"/></i>
                     <span>Money Back</span>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="gift_box">
                     <i><img src="images/icon_gift.png"/></i>
                     <span>Special Gift</span>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="gift_box">
                     <i><img src="images/icon_car.png"/></i>
                     <span>Free Shipping</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      <footer>
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-3">
                     <div className="inror_box">
                        <h3>INFORMATION </h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="inror_box">
                        <h3>MY ACCOUNT </h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="inror_box">
                        <h3>ABOUT  </h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="inror_box">
                        <h3>CONTACTS  </h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <p>© 2019 All Rights Reserved. Design by<a href="https://html.design/"> Free Html Templates</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer></>
}
export default Footer;