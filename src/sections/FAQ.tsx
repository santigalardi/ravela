import Accordion from '@/components/Accordion';

export default function FAQ() {
  return (
    <section id="faqs" className="p-0 md:p-8 my-10">
      <h2 className="font-title text-3xl font-bold mb-16 text-center">Preguntas Frecuentes</h2>
      <Accordion
        title="¿Cuál es la propuesta de Ravela?"
        answer={`Nuestra misión es potenciar la escena electrónica emergente en LATAM al proporcionar visibilidad y herramientas a nuevos talentos. Queremos ayudarlos a alcanzar su máximo potencial y conectarse con una audiencia en un entorno seguro y profesional.

          Nos comprometemos a establecer el medio digital líder en la escena electrónica de LATAM y a organizar eventos con lineups seleccionados a través de concursos, donde los participantes serán DJs emergentes.`}
      />
      <Accordion
        title="¿Cómo funcionará el medio digital?"
        answer="Desarrollaremos contenido variado y de alta calidad a través de todas las plataformas y redes sociales, con una identidad claramente definida. Nuestro objetivo es construir una comunidad sólida de Ravers y DJs, proporcionando a los artistas emergentes la visibilidad que merecen y facilitando su conexión con una audiencia más amplia."
      />
      <Accordion
        title="¿Cómo funciona el concurso?"
        answer={`El concurso se basa en un proceso riguroso en el que los sets de los participantes serán evaluados mediante herramientas diseñadas exclusivamente para este propósito. Los criterios de evaluación incluyen habilidades técnicas, creatividad y la narrativa del set, entre otros aspectos. Este enfoque busca garantizar un proceso 100% objetivo, donde los ganadores sean seleccionados exclusivamente por mérito.

          Los DJs ganadores tendrán la oportunidad de participar en un evento destacado, donde un equipo especializado creará contenido exclusivo para Ravela. Este evento representa una plataforma de alta calidad para que los DJs emergentes se conecten con una nueva audiencia y amplíen su alcance.`}
      />
      <Accordion
        title="¿Cómo puedo participar del concurso?"
        answer="En las etapas iniciales, los participantes serán seleccionados por el equipo de Ravela. En el futuro, planeamos abrir las inscripciones al público en general, reconociendo que cada artista merece una oportunidad para demostrar su potencial."
      />
    </section>
  );
}
