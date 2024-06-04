
import './Abaut.css';

export const Abaut = () => {
  return (
   <section>
    <div className="container mx-auto">
        <div className="About_title">
            <div data-aos="zoom-in-right" className="about-left">
            <h1>About</h1>
            <h1 className='hx'>DISCOVER INVEST</h1>
            <p>We {"don't"} just create projects, we create new opportunities. By building state- <br />
            scale facilities, we are building the future. We care about the environment: <br />
             the company takes full responsibility for the environmental aspects related <br />
              to the construction and operation of buildings and infrastructure.
</p>
            </div>
            <div data-aos="zoom-in-left"  className="about-right">
               <div className="wrap_box1">
               <span className="box">
                    <h1>4000+</h1>
                    <p>The number of employees</p>
                    </span>
                    <span className="box">
                    <h1>150+</h1>
                    <p>projects</p>
                    </span>
               </div>
               <div className="wrap_box2">
               <span className="box">
               <h1>16</h1>
                    <p>Residential complexes</p>
                    </span>
                    <span className="box"> 
                    <h1>14</h1>
                    <p>14 years on marketplace</p>
                    </span>
                    <span className="box"> 
                    <h1>250+</h1>
                    <p>Special techniques recuperated</p>
                    </span>
               </div>
               <div className="wrap_box3">
               <span className="box1 box">
               <a href="./">About</a>
                    </span>
                    <span className="box">
                    <h1>9+</h1>
                    <p>Hospitals</p>
                    </span>
               </div>
            </div>
        </div>
    </div>
   </section>
  )
}
