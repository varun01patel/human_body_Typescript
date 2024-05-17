import React from 'react';
import { useNavigate } from 'react-router-dom';
import Doctor1 from '../assets/t1.png';
import Doctor2 from '../assets/t2.png';
import Doctor3 from '../assets/t3.png';
import Doctor4 from '../assets/t4.png';

interface Service {
  id: string;
  title: string;
  image: string;
  alt: string;
}

const services: Service[] = [
  { id: '1', title: 'Symptom Checker', image: Doctor1, alt: 'Symptom Checker' },
  { id: '2', title: 'Telehealth', image: Doctor2, alt: 'Telehealth' },
  { id: '3', title: 'Facility Search & Booking', image: Doctor3, alt: 'Facility Search & Booking' },
  { id: '4', title: 'Medicine Delivery', image: Doctor4, alt: 'Medicine Delivery' },
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    if (id === '1') {
      navigate('/skelton');
    }
  };

  return (
    <div className="mt-8 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 ml">Medical Services</h2>
      <div className="grid grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.id} className="bg-[rgb(224,241,244)] p-4 rounded-lg shadow-md flex flex-col items-center" onClick={() => handleClick(service.id)}>
            <img src={service.image} alt={service.alt} className="w-16 h-16 mb-2" />
            <p className="text-gray-700 text-center">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
