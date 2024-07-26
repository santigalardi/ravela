import Accordion from './Accordion';

export default function FAQ() {
  return (
    <section className="p-0 md:p-8">
      <h2 className="font-subtitle text-3xl font-bold mb-16 text-center">Preguntas Frecuentes</h2>
      <Accordion
        title="¿Cuál es la propuesta de Ravela?"
        answer={`Nuestra misión es impulsar la escena electrónica emergente de LATAM, dando visibilidad y herramientas a nuevos talentos para que puedan alcanzar su potencial y conectarse con una audiencia, en un ambiente seguro y profesional.

          Buscamos crear el medio digital de la escena electrónica más grande de LATAM y hacer eventos con lineups por concurso, donde los participantes serán DJs emergentes.`}
      />
      <Accordion
        title="¿Cómo funcionará el medio digital?"
        answer="Crearemos contenido diverso y de alta calidad por todas las plataformas y redes sociales con una entidad muy bien definida. De esta manera buscaremos crear una gran comunidad de Ravers y DJs, donde los artistas emergentes podrán tener la exposición que merecen."
      />
      <Accordion
        title="¿Cómo funciona el concurso?"
        answer={`Creamos un proceso donde los sets de quienes participen del concurso van a ser evaluados por medio de herramientas creadas exclusivamente para esto. Dentro de los criterios a evaluar entrarán: skills, creatividad, storytelling del set, entre otras cosas. Es un proceso que busca ser 100% objetivo y que quienes ganen, lo logren por meritocracia. 

          Los/as DJs que ganen participarán de un evento en un buen spot donde habrá un equipo encargado de generar contenido exclusivo para Ravela como medio digital. Aqui es donde el DJ emergente empieza a tener llegada a nuevo público y bajo un marco de mucha calidad.`}
      />
      <Accordion
        title="¿Cómo puedo participar del concurso?"
        answer="En primeras instancias los participantes serán seleccionados por el staff de Ravela. En un futuro las inscripciones se abrirán a todo el público ya que somos conscientes de que todo artista merece una gran oportunidad para demostrar su potencial."
      />
    </section>
  );
}
