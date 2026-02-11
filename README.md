# Rick & Morty App

Aplicación desarrollada con Next.js que consume la API pública de Rick & Morty.  
Permite listar personajes, buscarlos por nombre y visualizar detalles.  
Incluye manejo de estado global, caché de datos y almacenamiento de recientes.

---

## 🚀 Tecnologías utilizadas

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Redux Toolkit**
- **React Query (@tanstack/react-query)**
- **Jest**
- **React Testing Library**
- **Stryker (Mutation Testing)**
- **SCSS Modules**


## Requisitos

- **Node 18+**
- **npm 9+**

---

## 📦 Instalación

    
    npm install
    


## Ejecutar proyecto 

    
    npm run dev
   
    

puerto: http://localhost:3000

## Ejecutar pruebas unitarias 

test sin coberturas

   
    npm test
    
    

test con coberturas.  

    
    npm test:coverage
   
    

los test se podran ver en la consola o en un archivo html generado en la ruta coverage/lcov-report/index.html

## Ejecutar Mutations testing (stryker)

    
    npm run test:mutation
   
    

los test se podran ver en la consola o en un archivo html generado en la ruta reports/mutation/html/index.html
