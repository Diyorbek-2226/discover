import { useRef, useEffect } from 'react';
import qurilish1 from '../img/qurilish1.webp';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import qurilish2 from '../img/qurilish2.webp';
import qurilish3 from '../img/qurilish3.webp';
import './slider.css';

function Ourslider() {
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
      <div className="slider_img mx-auto w-4/5">
        <img src={image} alt="Slider Image" className="slider_pic" />
       <div className="slider_texts">
       <h1 >{text}</h1>
        <p>{paragraphText}</p>
       </div>
      </div>
    </div>
  );

  const sliderData = [
    { image: qurilish1, text: 'Xusanov Akromjon Turaxonvich ', paragraphText: 'Project Manager' },
    { image: qurilish2, text: 'Kuziyev Jahongir Bahodirovich', paragraphText: 'Construction site supervisor' },
    { image: qurilish3, text: 'Norbekov Shavkat Boriboyevich', paragraphText: 'Project Manager' },
    { image: qurilish1, text: 'Xusanov Akromjon Turaxonvich ', paragraphText: 'Project Manager' },
    { image: qurilish2, text: 'Kuziyev Jahongir Bahodirovich', paragraphText: 'constructor' },
    { image: qurilish3, text: 'Norbekov Shavkat Boriboyevich', paragraphText: 'Project Manager' },
    { image: qurilish2, text: 'Kuziyev Jahongir Bahodirovich', paragraphText: 'Construction site supervisor' },
    { image: qurilish3, text: 'Kuziyev Jahongir Bahodirovich', paragraphText: 'Project Manager' },
  ];

  return (
    <>
      <hr />
      <div className="slider container mx-auto">
      <div data-aos="fade-right" className="our_title my-12 ">
            <h1 className="text-4xl font-bold">Our</h1>
            <h1 className="text-4xl ps-12 font-bold">
            team
            </h1>
           </div>
        <div className="content_container">
          
          <div className="content" ref={scrollRef}>
            {sliderData.map((item, index) => renderSliderPart(item.image, item.text, item.paragraphText))}
          </div>
        </div>
       
      </div>
    </>
  );
}

export default Ourslider;
