import { useRef, useEffect } from 'react';
import yangi from './images/yangi.webp';
import ofis from './images/ofis.webp';
import konstitutsiya from './images/konstitutsiya.webp';
import './Company.css';

function Company() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const sectionWidth = scrollRef.current.querySelector('.slider_part').offsetWidth;
        scrollRef.current.scrollLeft += sectionWidth;
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const sectionWidth = scrollRef.current.querySelector('.slider_part').offsetWidth;
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= sectionWidth;
      } else {
        scrollRef.current.scrollLeft += sectionWidth;
      }
    }
  };

  const renderSliderPart = (image, text, paragraphText) => (
       <div className="slider_part">
      <div className="slider_img mx-auto w-4/5 relative">
        <img src={image} alt="Slider Image" className="slider_pic" />
        <div className="slider_texts absolute bottom-0 left-0 bg-opacity-50 text-secondary p-4 w-full">
          <p className="tex-picturs text-sm">{paragraphText}</p>
        </div>
      </div>
    </div>
  );

  const sliderData = [
    { image: yangi,  paragraphText: 'Who is the project manager of construction?' },
    { image: ofis,  paragraphText: 'Discover Invest congratulates everyone on a coming Happy New Year 2023!' },
    { image: konstitutsiya,  paragraphText: 'Description for Konstitutsiya Image' },
    { image: yangi,  paragraphText:'Who is the project manager of construction?' },
    { image: ofis,  paragraphText: 'Discover Invest congratulates everyone on a coming Happy New Year 2023!' },
    { image: yangi, paragraphText: 'Description for Yangi Image' },
    { image: konstitutsiya,  paragraphText: 'THE DAY WHEN THE CONSTITUTION OF THE REPUBLIC OF UZBEKISTAN WAS ADOPTED' },
  ];

  return (
    <div className='camdy'>
      <hr />
      <div className="slider container mx-auto">
        <div data-aos="fade-right" className="our_title my-12">
          <h1 className="text-4xl font-bold">Company</h1>
          <h1 className="text-4xl ps-8 font-bold">news</h1>
        </div>
        <div className="content_container">
          <div className="content" ref={scrollRef}>
            {sliderData.map((item, index) => renderSliderPart(item.image, item.text, item.paragraphText))}
          </div>
        </div>
        <div className="all_btn text-center my-6 pt-5">
          <button className='button2'>All projects</button>
        </div>
      </div>
    </div>
  );
}

export default Company;
