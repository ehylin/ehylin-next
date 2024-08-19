import React from "react";

const PortfolioSection: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Mi Portafolio</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* Aquí irían tus trabajos de portafolio */}
        <div className="bg-gray-200 h-48">Proyecto 1</div>
        <div className="bg-gray-200 h-48">Proyecto 2</div>
        <div className="bg-gray-200 h-48">Proyecto 3</div>
        <div className="bg-gray-200 h-48">Proyecto 4</div>
        <div className="bg-gray-200 h-48">Proyecto 5</div>
        <div className="bg-gray-200 h-48">Proyecto 6</div>
        {/* Más proyectos */}
      </div>
    </section>
  );
};

export default PortfolioSection;
