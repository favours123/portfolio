import React from 'react';
import services from '../services';
const Services = () => {
    return (
        <div id="services">
            <h1 className='text-primary font-semibold text-3xl mt-14 mx-5'>Services I Do Render : </h1>
        <div className='s-card-b grid lg:grid-cols-3 sm:grid-cols-2 gap-2 my-8 '>
            {
                services.map(service => <div key={service.id} className='
                service-card flex flex-col justify-center items-center text-center text-white py-20 px-6  hover:border-[#0015ff]  rounded-xl w-[300px]  mx-auto'>
                    <span className='text-center text-3xl m-3'>{service.icon}</span>
                    <h6 className='text-2xl mb-4 font-semibold'>{service.name}</h6>
                       <p className='text-base text-center'>{service.description}</p>
                    </div > )
 }
        </div>
    </div>
    );
};

            export default Services;

            