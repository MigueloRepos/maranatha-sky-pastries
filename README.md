# Maranatha Sky Pastries

Construye el prototipo completo de una landing page premium para “Maranatha — La pastelería del cielo”, tomando como referencia estricta la imagen original de la pastelera adjunta en esta conversación. No inventes datos comerciales ni afirmaciones que no aparecen en la referencia. La imagen de referencia debe guiar identidad, colores, ambiente y composición. Si la imagen no está adjunta al proyecto, usa los detalles descritos aquí y deja la imagen hero como un asset local claramente identificable para reemplazar por el original; no afirmes que la has importado.

DIRECCIÓN VISUAL:
- Estética premium minimalista inspirada en principios de Apple: composición editorial, amplio espacio en blanco, tipografía cuidada, controles simples, microinteracciones discretas. No copiar páginas o logotipos de Apple.
- Preservar el carácter celestial, romántico y artesanal de la imagen: fondo blanco/crema luminoso, rosa pastel, rosa frambuesa para acentos, turquesa suave y dorado ornamental.
- La imagen original muestra una pastelera sonriente con uniforme blanco y detalles rosa, sosteniendo una manga pastelera dorada; un rótulo rosa con letras cursivas “Maranatha, La pastelería del cielo”; flores rosas y turquesas y decoración dorada. No alterar ni contradecir estos elementos.
- Paleta aproximada: #FFF9F7, #F8DCE6, #E95788, #BDEFEF, #D8B16A, texto #242027 y secundario #706A70. Predominar blanco y rosa pálido; turquesa y dorado solo como acentos.
- Tipografía: serif editorial elegante para titulares, sans legible para interfaz, cursiva decorativa solo para acentos de marca.
- No usar neón, sombras fuertes, degradados excesivos, exceso de glassmorphism ni elementos visuales recargados.

CONSTRUIR UNA PÁGINA COMPLETA Y RESPONSIVE:
1. Header limpio y opcionalmente translúcido con marca tipográfica “Maranatha”, eslogan “La pastelería del cielo”, enlaces de ancla Inicio, Creaciones, Nuestra esencia, Encargos y Contacto, y CTA “Hacer un pedido”. Menú móvil accesible y funcional.
2. Hero editorial con la imagen de la pastelera como protagonista. Titular: “Un pedacito de cielo en cada creación”. Texto: “Pastelería artesanal para convertir tus momentos especiales en recuerdos inolvidables”. Botones “Descubrir creaciones” y “Hacer un pedido”. No recortar el rostro de la pastelera. Si el archivo de imagen no está disponible, no inventes que está cargado; crea una referencia local fácil de sustituir, sin depender de una URL inventada.
3. Sección de creaciones con tres categorías ilustrativas, sin precios ni promesas comerciales inventadas: “Tortas de celebración”, “Dulces artesanales” y “Creaciones especiales”. Descripciones breves: “Diseños para hacer más especial tu día”, “Pequeños bocados de felicidad” y “Una creación para tu ocasión”. Usa imágenes visualmente coherentes en rosa, turquesa, crema y dorado, y deja claro en el código cómo sustituirlas por fotos reales de la marca.
4. Sección “Nuestra esencia” con el titular “El arte de crear momentos dulces” y este texto: “En Maranatha creemos que la pastelería es una forma de expresar amor, alegría y gratitud. Cada creación es una oportunidad para acompañar esos momentos que merecen recordarse”. No inventar historia, ubicación ni años de experiencia.
5. Sección de ocasiones con Cumpleaños, Bodas y aniversarios, Celebraciones familiares y Regalos especiales; presentarlas como ideas de encargos, no como servicios garantizados.
6. Sección de encargo con formulario visual y funcional: nombre, medio de contacto, tipo de creación, ocasión, fecha deseada y detalles. Campos no imprescindibles opcionales. Validar los datos, mostrar errores accesibles y permitir preparar un mensaje para WhatsApp. NO inventar teléfono: crear una constante WHATSAPP_NUMBER vacía. Si está vacía, desactivar el enlace de WhatsApp y mostrar que falta configurar el contacto; permitir copiar el resumen del pedido. No simular que el pedido se ha enviado ni que existe un backend.
7. CTA final “Tu próximo momento especial comienza aquí” y botón que baja al formulario.
8. Footer con marca y navegación. No inventar dirección, horario, correo, redes sociales ni teléfono. Ocultar datos no proporcionados.
9. Botón flotante de WhatsApp solo cuando el número real esté configurado.

IMPLEMENTACIÓN:
- Utiliza el stack por defecto de Lovable (React + TypeScript + Tailwind/shadcn si procede). Componentes limpios y reutilizables.
- No conectar Supabase, autenticación, pagos, carrito ni servicios externos que no se han solicitado.
- Configuración central para datos comerciales y WhatsApp, vacíos cuando no se conocen.
- Formularios honestos: preparar/copiado de resumen, no simular envíos.
- Responsive real para móviles, tabletas y escritorio; sin overflow horizontal.
- Accesibilidad: HTML semántico, etiquetas de formulario, contraste, foco visible, navegación por teclado, alt text, menú móvil accesible y prefers-reduced-motion.
- Rendimiento: imágenes optimizadas, dimensiones definidas, lazy loading solo para imágenes secundarias. No depender de enlaces de imagen inventados.
- SEO básico en español: título “Maranatha | La pastelería del cielo”, descripción “Descubre las creaciones de Maranatha y prepara una solicitud para tus momentos especiales”, idioma es.
- Evita testimonios, reseñas, precios, promociones, certificaciones, ubicación, horarios o estadísticas inventadas.
- No dejes botones sin acción ni enlaces vacíos.

Antes de terminar, revisa el resultado en desktop y móvil, corrige los errores visibles, prueba menú, anclas, validación del formulario, copiar resumen y el estado de WhatsApp sin número configurado. Entrega el prototipo completo, no solo un plan o una descripción. Si no puedes probar alguna cosa, dilo con claridad.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/375a91b0-5991-43e8-8c99-57d24779b417).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
