import React from "react";

const PhotoSection: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Galería de Fotos</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* Aquí irían tus imágenes, puede ser un map si tienes un array de imágenes */}
        <div className="bg-gray-200 h-48">Foto 1</div>
        <div className="bg-gray-200 h-48">Foto 2</div>
        <div className="bg-gray-200 h-48">Foto 3</div>
        {/* Más fotos */}
      </div>
    </section>
  );
};

export default PhotoSection;
