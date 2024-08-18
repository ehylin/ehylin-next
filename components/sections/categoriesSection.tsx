import React from "react";

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Categorías</h2>
      <div className="grid grid-cols-4 gap-4">
        {/* Aquí irían tus categorías, cada una con su imagen */}
        <div className="bg-gray-200 h-48">Categoría 1</div>
        <div className="bg-gray-200 h-48">Categoría 2</div>
        <div className="bg-gray-200 h-48">Categoría 3</div>
        <div className="bg-gray-200 h-48">Categoría 4</div>
      </div>
    </section>
  );
};

export default CategoriesSection;
