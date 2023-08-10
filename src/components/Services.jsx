 import React from 'react';
import SectionTitle from './SectionTitle';
import services from '../data/Services';
import ServiceItem from './ServiceItem'

 function Services (){
    return(
      <div className="py-12">
       <SectionTitle>My Services</SectionTitle>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(Service =>(
          <ServiceItem key={Service.title}
           title={Service.title}
           icon={Service.icon}
           description={Service.description}
          ></ServiceItem>
          
        ))}
       </div>
      </div>


    )
 }
 export default Services