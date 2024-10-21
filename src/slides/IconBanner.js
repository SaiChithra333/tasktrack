import React from 'react';
import "../App.css"; 
import { useNavigate } from 'react-router-dom';


function IconBanner() {
    const navigate = useNavigate();
    const handleclick = () =>{
        navigate('/popular')
    }
  return (
    <div className='container'>
      <div className="IconBanner_iconBanner__udc_K IconBanner_scrollContainer__bWzKf flex gap-5 flex-wrap justify-center items-start" data-testid="icon-banner">
        <a className="IconBanner_iconButton__WenCb  duration-300 hover:scale-110" onClick={handleclick}>
          <img className="IconBanner_iconImg__axP9l" src="https://media.angi.com/s3fs-public/HandyPerson.svg" alt="Handyperson" />
          <p className="IconBanner_iconLabel__WEHCs">Handyperson</p>
        </a>
        <a className="IconBanner_iconButton__WenCb  duration-300 hover:scale-110 " onClick={handleclick} href="#">
          <img className="IconBanner_iconImg__axP9l" src="https://media.angi.com/s3fs-public/LandScaping.svg" alt="Landscaping" />
          <p className="IconBanner_iconLabel__WEHCs">Landscaping</p>
        </a>
        <a className="IconBanner_iconButton__WenCb  duration-300 hover:scale-110" onClick={handleclick} href="#">
          <img className="IconBanner_iconImg__axP9l" src="https://media.angi.com/s3fs-public/Plumbing.svg" alt="Plumbing" />
          <p className="IconBanner_iconLabel__WEHCs">Plumbing</p>
        </a>
        <a className="IconBanner_iconButton__WenCb  duration-300 hover:scale-110" onClick={handleclick} href="#">
          <img className="IconBanner_iconImg__axP9l" src="https://media.angi.com/s3fs-public/Electrical.svg" alt="Electrical" />
          <p className="IconBanner_iconLabel__WEHCs">Electrical</p>
        </a>
        <a className="IconBanner_iconButton__WenCb  duration-300 hover:scale-110" onClick={handleclick} href="#">
          <img className="IconBanner_iconImg__axP9l" src="https://media.angi.com/s3fs-public/Remodeling.svg" alt="Remodeling" />
          <p className="IconBanner_iconLabel__WEHCs">Remodeling</p>
        </a>
        <a className="IconBanner_iconButton__WenCb  duration-300 hover:scale-110" onClick={handleclick} href="#">
          <img className="IconBanner_iconImg__axP9l" src="https://media.angi.com/s3fs-public/Roofing.svg" alt="Roofing" />
          <p className="IconBanner_iconLabel__WEHCs">Roofing</p>
        </a>
        <a className="IconBanner_iconButton__WenCb  duration-300 hover:scale-110" onClick={handleclick} href="#">
          <img className="IconBanner_iconImg__axP9l" src="https://media.angi.com/s3fs-public/Painting.svg" alt="Painting" />
          <p className="IconBanner_iconLabel__WEHCs">Painting</p>
        </a>
        <a className="IconBanner_iconButton__WenCb  duration-300 hover:scale-110" onClick={handleclick} href="#">
          <img className="IconBanner_iconImg__axP9l" src="https://media.angi.com/s3fs-public/Cleaning.svg" alt="Cleaning" />
          <p className="IconBanner_iconLabel__WEHCs">Cleaning</p>
        </a>
        <a className="IconBanner_iconButton__WenCb  duration-300 hover:scale-110" onClick={handleclick} href="#">
          <img className="IconBanner_iconImg__axP9l" src="https://media.angi.com/s3fs-public/HVAC.svg" alt="HVAC" />
          <p className="IconBanner_iconLabel__WEHCs">HVAC</p>
        </a>
        <a className="IconBanner_iconButton__WenCb  duration-300 hover:scale-110" onClick={handleclick} href="#">
          <img className="IconBanner_iconImg__axP9l" src="https://media.angi.com/s3fs-public/Windows.svg" alt="Windows" />
          <p className="IconBanner_iconLabel__WEHCs">Windows</p>
        </a>
        <a className="IconBanner_iconButton__WenCb  duration-300 hover:scale-110" onClick={handleclick} href="#">
          <img className="IconBanner_iconImg__axP9l" src="https://media.angi.com/s3fs-public/Concrete.svg" alt="Concrete" />
          <p className="IconBanner_iconLabel__WEHCs">Concrete</p>
        </a>
        <a className="IconBanner_iconButton__WenCb  duration-300 hover:scale-110" onClick={handleclick} href="#">
          <img className="IconBanner_iconImg__axP9l" src="https://media.angi.com/s3fs-public/Siding.svg" alt="Siding" />
          <p className="IconBanner_iconLabel__WEHCs">Siding</p>
        </a>
      </div>
    </div>
  )
}

export default IconBanner;
