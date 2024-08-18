import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-center mb-6">Sobre Mí</h2>
      <p className="max-w-3xl mx-auto text-center">
        Aquí puedes escribir un resumen sobre ti. Describe quién eres, qué
        haces, y cualquier otro detalle importante que quieras compartir.
      </p>
    </section>
  );
};

export default AboutSection;
