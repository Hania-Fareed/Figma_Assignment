import Header from "./components/header";

export default function Home(){
  return(
    <div>
      <Header />
      <div className="parentContainer">
        <div>
        <h1  className="heading">Pro.Beyond. </h1>
        </div>
        <div>
          <h2 className="heading2">IPhone 14 <span className="pro">Pro</span></h2>
          <p className="descripion">Created to change everything for the better.For everyone</p>
        </div>
        <div>
          <p className="shopNow">Shop Now</p>
        </div>
        <div className="picture">
          <img src="./Iphone Image.png"/>
        </div>
      </div>
      {/* <div>
        <div className="frameTwo">
          <h1 className="playStation">Playstation 5</h1>
          <p className="stationDescription">Incredibly powerful CPUs, GPUs, and an SSD with <br/> integrated I/O will redefine 
            your PlayStation <br/>experience.
          </p>
          <div className="stationPicture">
            <img src="./PlayStation.png"/>
          </div>
        </div>
      </div>
      <div>
        <div className="frameThree"></div>
          <h1 className="macbookAir"><span className="macbook">Macbook</span> <br/> <span className="air">Air</span></h1>
          <p className="macDescription">The new 15-inch MacBook Air makes root for more <br/>of what you love
          with a spacious Liquid Retina<br/>display</p>
      </div> */}
      <div className="bannerPicture">
        <img src="Banners.png"/>
      </div>
      <div className="category">
        <img src="Category.png"/>
      </div>
      <div className="products">
        <img src="Products.png"/>
      </div>
      <div className="banner">
        <img src="Banners02.png"/>
      </div>
      <div className="discount">
        <img src="Discount Products.png"/>
      </div>
      <div className="banner2">
        <img src="Banner 2.png"/>
      </div>
      <div className="footer">
        <img src="Footer.png"/>
      </div>
    </div>
  )
}