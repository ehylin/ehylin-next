import React from "react";

const PhotoSection: React.FC = () => {
  return (
    <section className="py-8">
    <h2 className="text-2xl font-bold text-center mb-6">Galería de Fotos</h2>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      {/* Fila 1 */}
      <div className="bg-gray-200 h-[380px] sm:col-span-2 lg:col-span-2">Foto 1</div>
      <div className="bg-gray-200 h-[380px] sm:col-span-1 lg:col-span-1">Foto 2</div>
 
      
      {/* Fila 2 */}
      <div className="bg-gray-200 h-[380px] sm:col-span-1 lg:col-span-1 lg:row-span-1">Foto 3</div>
      {/* <div className="bg-gray-200 h-[380px] sm:col-span-1 lg:col-span-1 lg:row-span-1">Foto 4</div>
      <div className="bg-gray-200 h-[380px] sm:col-span-1 lg:col-span-1 lg:row-span-1">Foto 5</div> */}
    </div>
  </section>
  );
};

export default PhotoSection;
