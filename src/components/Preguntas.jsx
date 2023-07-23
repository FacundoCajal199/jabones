import React, { useState } from 'react';


const faqData = [
  {
    question: 'Modulo 1: Bienvenida',
    answer: (
      <div>
        <p>Lección 1: El mundo de los jabónes.</p>
        <p>Lección 2: ¿Que vas a aprender?</p>
        <p>Lección 3: Eljabón artesanal vs jabón Industrial.</p>
        <p>Lección 4: Nuestra comunidad de estudiantes.</p>
      </div>
    ),
  },
  
  {
    question: 'Modulo 2: Lo que debes saber',
    answer:(
      <div>
        <p>Lección 4: Nuestra comunidad de estudiantes.</p>
        <p>Lección 2: La traza y el sobre engrasado.</p>
        <p>Lección 3: Todo sobre la soda cáustica.</p>
        <p>Lección 4: El PH en los jabones.</p>
      </div>
    ),
  },
  {
    question: 'Modulo 3: Herramientas de trabajo',
    answer:(
      <div>
        <p>Lección 1: Lista de materia a necesitar ( adjunto el pdf de herramientas y materiales de trabajo)</p>
        <p>Lección 2: Lugar de trabajo y medidas de seguridad.</p>
      </div>
    ),
  },
  {
    question: 'Modulo 4: Nuestros primeros jabones',
    answer:(
      <div>
        <p>Lección 1: Jabón con aceite de oliva.</p>
       
        <p>Lección 2: Jabón con aceite de coco.</p>
        <p>Lección 2: Jabón con aceite de coco.</p>
      </div>
    ),
  },
  {
    question: 'Modulo 5: Nuestras armas poderosas',
    answer:(
      <div>
        <p>Lección 1: Importancia y tipos de aceites.</p>
        <p>Lección 2: Guía de aceites (adjuntar el pdf de guia de aceites)</p>
        <p>Lección 3: Aceites esenciales, fragancias y colorantes (adjuntar el pdf de colorantes naturales)</p>
      </div>
    ),
  },
  {
    question: 'Modulo 6: Jaboneria nivel intermedio',
    answer:(
      <div>
        <p>Lección 1: Las propiedades en los jabones.</p>
        <p>Lección 2: Jabón de avena y miel.</p>
        <p>Lección 3: Jabón exfoliante de café.</p>
        <p>Lección 4: Jabón blanqueador de arroz.</p>
        <p>Lección 5: Jabón anti acné de carbón activado.</p>
      </div>
    ),
  },
  {
    question: 'Modulo 7: Jaboneria nivel avansado',
    answer:(
      <div>
        <p>Lección 1: Usando la calculadora de saponificación.</p>
        <p>Lección 2: Sustitución del agua en los jabones.</p>
        <p>Lección 3: Jabón de naranja.</p>
        <p>Lección 4: Jabón de manzanilla.</p>
        <p>Lección 4: Jabón de manzanilla.</p>
      </div>
    ),
  },
  {
    question: 'Modulo 8: El mundo de la glicelina',
    answer:(
      <div>
        <p>Lección 1: ¿Qué es la glicerina y tipos?</p>
        <p>Lección 2: Insumos y esencias.</p>
        <p>Lección 3: Glitters y moldes.</p>
      </div>
    ),
  },
  {
    question: 'Modulo 9: Manos a la obra',
    answer:(
      <div>
        <p>Lección 1: Jabón básico de glicerina.</p>
        <p>Lección 2: Jabón encapsulado de glicerina</p>
        <p>Lección 3: Jabón de 2 niveles.</p>
        <p>Lección 4: Jabón de avena.</p>
        <p>Lección 5: Jabón tipo cupcake2.</p>
      </div>
    ),
  },
  {
    question: 'Modulo 10: Recomendaciones y despedida',
    answer:(
      <div>
        <p>Lección 1: Recomendaciones y despedida.</p>
       
      </div>
    ),
  },
  // Agrega más preguntas y respuestas aquí
];

const Preguntas = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
    <section className='d-flex justify-content-center mt-5'>
    <div className="faq-section">
      <h2 className='h1'>Modulos</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item" onClick={() => handleQuestionClick(index)}>
          <h3>{item.question}</h3>
          {activeQuestionIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
    </section>
     
    </>
   
  );
};

export default Preguntas;