import React, { useRef, useEffect } from 'react';
import '../../components/Company/Company.css'; // Ensure you have the correct path to your CSS file
import yangi from '../../components/Company/images/yangi.webp';
import konstitutsiya from '../../components/Company/images/konstitutsiya.webp';
import ofis from '../../components/Company/images/ofis.webp';
import { Navbar } from '../../components/Navbar/navbar';
import { Contacts } from '../../components/Contacts/Contacts';

export const News = () => {
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
        <div className="slider_part" key={text}>
            <div className="slider_img mx-auto w-4/5 relative">
                <img src={image} alt="Slider Image" className="slider_pic" />
                <div className="slider_texts absolute bottom-0 left-0 bg-opacity-50 text-secondary p-4 w-full">
                    <p className="tex-picturs text-sm">{paragraphText}</p>
                </div>
            </div>
        </div>
    );

    const sliderData = [
        { image: yangi, paragraphText: 'Who is the project manager of construction?' },
        { image: ofis, paragraphText: 'Discover Invest congratulates everyone on a coming Happy New Year 2023!' },
        { image: konstitutsiya, paragraphText: 'Description for Konstitutsiya Image' },
        { image: yangi, paragraphText: 'Who is the project manager of construction?' },
        { image: ofis, paragraphText: 'Discover Invest congratulates everyone on a coming Happy New Year 2023!' },
        { image: yangi, paragraphText: 'Description for Yangi Image' },
        { image: konstitutsiya, paragraphText: 'THE DAY WHEN THE CONSTITUTION OF THE REPUBLIC OF UZBEKISTAN WAS ADOPTED' },
    ];

    return (<>
    <Navbar/>
    <div className="text-PROJECTS flex items-center justify-between my-28">
                    <div className="container mx-auto flex items-center justify-between">
                    <h1 className="text-6xl font-bold">Projects</h1>
                    <p className='text-sm text-slate-700'>We don't just create projects, we create new opportunities. By building state-scale facilities, we <br />
                    are building the future. We care about the environment:</p>
                    </div>
                </div>
        <div className='camdy '>
            <hr />
            
            <div className="slider container mx-auto">
               
                <div className="content_container ">
                    <div className="content" ref={scrollRef}>
                        {sliderData.map((item, index) => renderSliderPart(item.image, item.text, item.paragraphText))}
                    </div>
                </div>
            </div>
        </div>
        <Contacts/>
        </>
    );
}
