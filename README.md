📘 README — Proyecto: “Análisis al Instante con IA”

Este proyecto implementa un sistema completo para que un usuario pueda subir un archivo .csv o .xlsx, y la aplicación utilice Inteligencia Artificial para analizar los datos, generar sugerencias de visualizaciones y permitir construir un dashboard interactivo en segundos.

Este archivo describe:

Cómo configurar y ejecutar el proyecto localmente

Decisiones técnicas y tecnologías utilizadas

Enfoque para la ingeniería de prompts con IA

🖥️ 1. Configuración y ejecución del proyecto localmente

El proyecto está dividido en dos partes:

Backend: Flask (Python)

Frontend: React + Vite

A continuación se describe el proceso para ejecutar ambos de forma local.

🔧 1.1 Backend (Flask)
Requisitos previos

Python 3.9 o superior

pip instalado

Clave de API de OpenAI

Pasos
1) Ingresar al folder del backend
cd backend

2) Crear entorno virtual
python -m venv venv

3) Activar entorno virtual

Windows

venv\Scripts\activate


Linux/Mac

source venv/bin/activate

4) Instalar dependencias
pip install -r requirements.txt

5) Configurar variable de entorno (OpenAI)

Windows

set OPENAI_API_KEY=tu_api_key


Mac/Linux

export OPENAI_API_KEY=tu_api_key

6) Ejecutar backend
python app.py


El servicio se levantará en:

http://localhost:5000

🌐 1.2 Frontend (React + Vite)
Requisitos previos

Node.js 16+

npm o yarn

Pasos
1) Ir al folder del frontend
cd frontend

2) Instalar dependencias
npm install

3) Crear archivo .env y apuntar al backend
VITE_API_URL=http://localhost:5000

4) Ejecutar el frontend
npm run dev


La aplicación estará disponible en:

http://localhost:5173

⚙️ 2. Decisiones Técnicas

Este proyecto fue diseñado para ser rápido, modular y fácil de desplegar. Las decisiones técnicas clave fueron las siguientes:

🟦 2.1 Backend (Flask)
✔ Flask

Framework ligero y extremadamente rápido para prototipos y APIs.

✔ Flask-CORS

Permite que el frontend se comunique sin problemas desde otro host (Vercel / local).

✔ Pandas

Procesamiento de hojas de cálculo, obtención de columnas, tipos de datos y estadísticas.

✔ OpenAI API

Generación del análisis y sugerencias de gráficos.

✔ Arquitectura dividida

utils/ai.py → Lógica de IA
utils/data_processor.py → Procesamiento de datasets

Esto mantiene el backend limpio y mantenible.

🟧 2.2 Frontend (React + Vite)
✔ React

Ideal para interfaces interactivas, excelente manejo de estados y componentes.

✔ Vite

Herramienta moderna extremadamente rápida para desarrollo frontend.

✔ Axios

Para manejar peticiones HTTP al backend.

✔ Chart.js + react-chartjs-2

Para renderizar gráficos de forma elegante y sencilla.

✔ Animaciones mejoradas

Se implementaron:

Overlay estilo “pantalla de procesamiento IA”

Efecto de typing para el mensaje “La IA está analizando tus datos...”

Gráficas con colores automáticos modernos

🧠 3. Enfoque para la Ingeniería de Prompts

La inteligencia artificial se utiliza para analizar el dataset y generar sugerencias de visualizaciones útiles. El diseño del prompt fue fundamental para lograr resultados consistentes.

✔ 3.1 Rol del modelo

El prompt instruye al modelo:

“Actúa como un analista de datos experto.”

Esto mejora significativamente la calidad de los insights.

✔ 3.2 Información enviada al LLM

Se pasa un resumen estructurado:

Lista de columnas

Tipos de datos

Resultado de df.describe()

Esto permite que la IA entienda el contexto del dataset y sugiera visualizaciones relevantes.

✔ 3.3 JSON estricto

Se solicita expresamente:

Un arreglo JSON

Entre 3 y 5 visualizaciones

Formato exacto:

{
  "title": "",
  "chart_type": "",
  "parameters": {
    "x_axis": "",
    "y_axis": ""
  },
  "insight": ""
}


Las llaves fueron escapadas en el prompt para evitar errores de Python con .format().

✔ 3.4 Robustez del parsing

La respuesta del modelo es procesada mediante:

json.loads()

Regex para extraer el bloque JSON aun si viene acompañado de texto adicional

Esto hace el backend más estable ante variaciones del modelo.
