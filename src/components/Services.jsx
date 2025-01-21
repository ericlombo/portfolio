// src/components/Services.jsx
import SectionTitle from './SectionTitle';
import services from '../data/Services'; // Import services data
import ServiceItem from './ServiceItem'; // Import ServiceItem component

function Services() {
  return (
    <div id="services" className="py-12">
      <SectionTitle>My Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceItem
            key={service.title}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
