import { Contacts } from '../Contacts/Contacts';
import './Ourprojects.css';

export const Ourprojects = () => {
  return (
    <div className="ourprojects">
      <div className="container mx-auto">
        <div data-aos="fade-right" className="our_title my-12">
          <h1 className="text-4xl font-bold">Our</h1>
          <h1 className="text-4xl ps-12 font-bold">projects</h1>
        </div>
        <div className="flex justify-between">
          <div className="ourprojects_img">
            <div className="project_img1">
              <h1 className="text-xl font-bold z-10 text-white">Magic City</h1>
              <p className="text-sm z-10 text-white">
                Magic city is a large socially significant project. The cultural and entertainment cluster in <br />
                Tashkent is one of the new attractions.
              </p>
            </div>
            <div className="project_img2">
              <h1 className="text-xl font-bold z-10 text-white">Gardens Residence</h1>
              <p className="text-sm z-10 text-white">A grandiose residential quarter in the heart of the capital.</p>
            </div>
            <div className="project_img3">
              <h1 className="text-xl font-bold z-10 text-white">Invento</h1>
              <p className="text-sm z-10 text-white">
                International kindergarten and school located in the international business center
                <br /> Tashkent City
              </p>
            </div>
          </div>
          <div className="ourprojects_img2">
            <div className="project_img4">
              <h1 className="text-xl font-bold z-10 text-white">Boulevard</h1>
              <p className="text-sm z-10 text-white">
                Magic city is a large socially significant project. The cultural and entertainment cluster in <br />
                Tashkent is one of the new attractions.
              </p>
            </div>
            <div className="project_img5">
              <h1 className="text-xl font-bold z-10 text-white">Fonon</h1>
              <p className="text-sm z-10 text-white">A grandiose residential quarter in the heart of the capital.</p>
            </div>
            <div className="project_img6">
              <h1 className="text-xl font-bold z-10 text-white">President's School</h1>
              <p className="text-sm z-10 text-white">
                International kindergarten and school located in the international business center
                <br /> Tashkent City
              </p>
            </div>
          </div>
        </div>
         <div className="all_btn text-center my-6">
         <button className='button2'>
                   All projects
                </button>
         </div>
      </div>
    </div>
    
  );
};
