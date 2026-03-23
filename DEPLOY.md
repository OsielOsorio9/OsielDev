# Pasos para Despliegue en GitHub Pages

## 1. Crear el Repositorio en GitHub

1. Entra a [github.com](https://github.com) y haz login con tu cuenta `OsielOsorio9`
2. Haz clic en el botón **"+"** (arriba a la derecha) → **"New repository"**
3. **Repository name:** `portafolio-osiel` 
4. **Description:** `Portafolio web profesional de Osiel Osorio - Web Developer`
5. Marca **"Public"** (para que sea visible)
6. **NO** marques "Add a README file" (ya tenemos uno)
7. Haz clic en **"Create repository"**

## 2. Subir el Código

Una vez creado el repositorio, GitHub te mostrará estos comandos. Ejecútalos en PowerShell:

```bash
git remote add origin https://github.com/OsielOsorio9/portafolio-osiel.git
git branch -M main
git push -u origin main
```

## 3. Activar GitHub Pages

1. En tu repositorio, ve a **Settings** (ajustes)
2. En el menú de la izquierda, haz clic en **Pages**
3. En **Source**, selecciona **"Deploy from a branch"**
4. **Branch:** `main`
5. **Folder:** `/ (root)`
6. Haz clic en **Save**

## 4. Esperar el Despliegue

GitHub Pages tardará 1-2 minutos en desplegar. Cuando esté listo, tu sitio estará en:

**https://osielosorio9.github.io/portafolio-osiel/**

---

## 🎉 ¡Listo!

Tu portafolio profesional estará en línea y accesible para todo el mundo.
