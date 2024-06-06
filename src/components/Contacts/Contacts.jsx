import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BiTime } from "react-icons/bi";
import './Contact.css';
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";


export const Contacts = () => {
  return (
  <div className="contacts">
<div className="container mx-auto">
<div className="contacts_title">
    <h1 className="text-4xl ps-10 font-bold" >Contacts </h1></div>
  <div className="next-contact flex align-center justify-around gap-20 W-full">
  <div className="contact_tell w-full">
  <ul className="flex items-center gap-12 py-16 ">
        <li>
            <div className="flex  gap-3 ">
                <p className="pb-20 text-manashu font-bold"><FaLocationDot size={20} /></p>
               <span className="block">
               <h1 className="text-xl font-bold">Adress</h1>
              <p className="text-sm pt-2 text-slate-500">Uzbekistan, Tashkent <br />
              , National Park of <br />
               Uzbekistan named <br />
                after Alisher Navoi</p>
               </span>
            </div>
        </li>
        <li>
            <div className="flex  gap-3 align-center">
                <p className="pb-20 text-manashu font-bold"><BiSolidPhoneCall size={24} /></p>
               <span className="block">
               <h1 className="text-xl font-bold">Phone</h1>
              <p className="text-sm text-slate-500">+998939992226</p>
               </span>
            </div>
        </li>
        <li>
            <div className="flex gap-3">
                <p className="pb-20 text-manashu font-bold"><BiTime  size={24}/></p>
               <span className="block">
               <h1 className="text-xl font-bold">Working hours</h1>
              <p className="text-sm pt-2 text-slate-500">09:00 - 18:00 Mon-Sat</p>
               </span>
            </div>
        </li>
    </ul>
    <ul className="flex gap-4">
          <li className="hover:text-manashu cursor-pointer"><FaFacebook /></li>
          <li className="hover:text-manashu cursor-pointer"><FaInstagram /></li>
          <li className="hover:text-manashu cursor-pointer"><FaTelegram /></li>
        </ul>
    <div className="contact_sms flex   gap-8 text-stone-400  ">
    <input placeholder="+998" type="tel" class="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input placeholder="What is your name ?" class="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  type="text" />
        <button className="bg-manashu text-white">
            feedback
        </button>
    </div>
  </div>
  <div className="contact_map pe-8 pt-20 W-full container">
  <iframe className="CONTACT_XARITA" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47918.862332569974!2d69.2859536!3d41.3538992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cb23888afb9%3A0x31c22300affbc36a!2z0K7QvdGD0YHQsNCx0LDQtNGB0LrQuNC5INGA0LDQudC-0L0sINCi0LDRiNC60LXQvdGCLCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2s!4v1717584422494!5m2!1sru!2s"  referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  </div>
  <ul className="flex justify-between items-center">
    <li>
    <a href="" class="novas">
                <svg width="100" height="28" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.9063 19.077C44.4586 19.077 44.9063 18.6292 44.9063 18.077V8.72555C44.9063 8.17327 44.4586 7.72555 43.9063 7.72555H43.2495C42.6973 7.72555 42.2495 8.17327 42.2495 8.72555V11.9376C42.2495 12.8779 41.0694 13.2984 40.4748 12.5699L36.821 8.09324C36.6311 7.86055 36.3467 7.72555 36.0463 7.72555H35.2461C34.6938 7.72555 34.2461 8.17327 34.2461 8.72555V18.077C34.2461 18.6292 34.6938 19.077 35.2461 19.077H35.8862C36.4385 19.077 36.8862 18.6292 36.8862 18.077V14.8587C36.8862 13.919 38.0648 13.4981 38.66 14.2253L42.3314 18.7104C42.5213 18.9424 42.8053 19.077 43.1052 19.077H43.9063Z" fill="#262525"></path>
                    <path d="M66.0949 18.4686C66.2519 18.8375 66.6141 19.077 67.015 19.077H68.0672C68.4681 19.077 68.8302 18.8375 68.9873 18.4686L72.9679 9.11722C73.2486 8.45763 72.7646 7.72555 72.0478 7.72555H71.3235C70.9186 7.72555 70.5537 7.96972 70.3992 8.34399L68.4547 13.0545C68.1146 13.8783 66.9483 13.8794 66.6067 13.0563L64.6504 8.34226C64.4955 7.96891 64.131 7.72555 63.7268 7.72555H63.0344C62.3175 7.72555 61.8335 8.45763 62.1143 9.11722L66.0949 18.4686Z" fill="#262525"></path>
                    <path d="M75.0234 18.4768C74.8644 18.8413 74.5045 19.077 74.1068 19.077H73.5443C72.8206 19.077 72.3365 18.3319 72.6306 17.6706L76.789 8.31923C76.9496 7.9582 77.3076 7.72555 77.7027 7.72555H78.7944C79.1895 7.72555 79.5475 7.9582 79.7081 8.31923L83.8665 17.6706C84.1606 18.3319 83.6765 19.077 82.9528 19.077H82.3902C81.9926 19.077 81.6327 18.8414 81.4737 18.4769L79.7264 14.4724L79.1608 13.1691C78.8133 12.3684 77.6785 12.366 77.3277 13.1654L76.7541 14.4724L75.8077 16.6788L75.0234 18.4768Z" fill="#262525"></path>
                    <path d="M90.6078 19.2688C93.0653 19.2688 94.8254 17.8299 94.8254 15.7675C94.842 14.0568 93.7295 12.9696 92.0192 12.378L91.189 12.0902C89.927 11.6586 89.3625 11.4028 89.3625 10.7792C89.3625 10.1877 90.0765 9.91589 90.7905 9.91589C91.1978 9.91589 91.6051 10.0062 91.9802 10.1919C92.5055 10.4521 93.1858 10.4997 93.5965 10.0814L93.8772 9.79559C94.257 9.4088 94.2659 8.77841 93.8273 8.4599C92.9056 7.79063 91.893 7.53369 90.7572 7.53369C88.416 7.53369 86.6891 8.82871 86.6891 11.035C86.6891 12.5859 87.7352 13.689 89.6613 14.3126L90.4916 14.5844C91.6871 14.9681 92.1354 15.3678 92.1354 15.9433C92.1354 16.5029 91.5875 16.8866 90.7074 16.8866C90.1532 16.8866 89.5442 16.689 89.0255 16.3318C88.5501 16.0045 87.8877 15.8996 87.4398 16.2636L86.976 16.6407C86.5637 16.9759 86.4791 17.5852 86.8731 17.9417C87.8087 18.7883 89.1074 19.2688 90.6078 19.2688Z" fill="#262525"></path>
                    <path d="M50.6017 13.4865C50.6017 15.3251 52.1127 16.8919 54.0388 16.8919C54.19 16.8919 54.3386 16.8821 54.4842 16.8631C54.8471 16.8158 55.2272 16.8933 55.4908 17.1471L56.0213 17.6579C56.5091 18.1276 56.3931 18.9364 55.7414 19.12C55.2006 19.2723 54.6293 19.3541 54.0388 19.3541C50.6681 19.3541 47.9449 16.7161 47.9449 13.4865C47.9449 10.257 50.6681 7.61896 54.0388 7.61896C57.393 7.61896 60.1328 10.257 60.1328 13.4865C60.1328 14.3116 59.9539 15.098 59.6318 15.8117C59.3811 16.3671 58.6616 16.4317 58.2226 16.0091L57.6452 15.4531C57.3336 15.1531 57.2655 14.6893 57.3666 14.2688C57.4273 14.0165 57.4594 13.7544 57.4594 13.4865C57.4594 11.6479 55.9484 10.0811 54.0388 10.0811C52.1127 10.0811 50.6017 11.6479 50.6017 13.4865Z" fill="#262525"></path>
                    <circle cx="98.5205" cy="17.876" r="1.47755" fill="#FAB448"></circle>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5.00001V22.3962C0 25.1576 2.23858 27.3962 5.00001 27.3962H22.3962C25.1576 27.3962 27.3962 25.1576 27.3962 22.3962V5C27.3962 2.23858 25.1576 0 22.3962 0H5ZM10.9607 8.90425C11.4046 8.89403 11.8517 9.06311 12.1904 9.4115L12.7162 9.95219C14.6795 11.9713 17.9223 11.9713 19.8856 9.95219L20.4113 9.41151C21.0696 8.73458 22.1368 8.73458 22.795 9.41151C23.4532 10.0884 23.4532 11.186 22.795 11.8629L17.6691 17.1344C17.5402 17.267 17.399 17.389 17.2488 17.4969C16.5915 17.9688 15.6802 17.9031 15.0936 17.2999L14.5454 16.7361C12.5821 14.717 9.33932 14.717 7.376 16.7361L6.98866 17.1344C6.33043 17.8114 5.26323 17.8114 4.605 17.1344C3.94677 16.4575 3.94677 15.36 4.605 14.6831L9.73094 9.41151C10.0697 9.06313 10.5168 8.89404 10.9607 8.90425Z" fill="#FAB448"></path>
                </svg>
            </a>
    </li>
    <li><p class="general__euclid-l text-slate-500 text-sm pe-72">© 2022 Discover Invest. All rights reserved.</p></li>
  </ul>
</div>
</div>

    
  )
}
