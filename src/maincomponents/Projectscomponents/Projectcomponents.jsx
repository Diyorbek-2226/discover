import { Contacts } from '../../components/Contacts/Contacts';
import { Navbar } from '../../components/Navbar/navbar';
import '../../components/Our projects/Ourprojects.css';

export const Projectcomponents = () => {
  return (
    <div className="ourprojects">
        <Navbar/>
    <div className="container mx-auto py-20">
      <div data-aos="fade-right" className="our_title my-12">
        <div className="text-PROJECTS flex items-center justify-between ">
        <h1 className="text-6xl font-bold">Projects</h1>
        <p className='text-sm'>We don't just create projects, we  create new opportunities. By building state-scale facilities, we <br />
         are building the future. We care about the environment:</p>
        </div>
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
      
    </div>
    <Contacts/>
  </div>
  )
}
