# Tarjeta digital del doctor

La página ya está lista, con los datos del Dr. Javier Areán y los colores de su marca.

## Cómo abrirla para verla

**Opción A (la más fácil)**  
En Cursor o VS Code, abre el archivo `index.html` y pulsa clic derecho → **Open with Live Server** / **Show Preview**, si lo tienes. Si no:

**Opción B**  
1. En la carpeta del proyecto, abre una terminal.
2. Escribe:

```bash
python3 -m http.server 8080
```

3. En Chrome entra a: `http://localhost:8080`
4. Para verla como celular: pulsa `F12` → icono de teléfono → iPhone.

Si la terminal dice `Address already in use`, **no está rota**. Significa que el servidor ya está abierto. No vuelvas a escribir el comando: solo entra a `http://localhost:8080` y recarga con **Ctrl + Shift + R**.

Si quieres apagarlo y arrancarlo de nuevo, en otra terminal:

```bash
fuser -k 8080/tcp
python3 -m http.server 8080
```

**Opción C**  
Da doble clic a `index.html`. A veces la foto o los botones fallan así; si pasa, usa la opción B.

Después de cada cambio, recarga con **Ctrl + Shift + R** (no solo F5), para que no se quede la versión vieja.

## Cómo hacerle cambios

| Qué quieres cambiar | Dónde |
| --- | --- |
| Nombre, teléfonos, WhatsApp, Instagram, correo, consultorio | `js/config.js` |
| Foto del doctor | `assets/doctor.jpg` (mismo nombre) |
| Logo | `assets/logo.png` |
| Colores | `css/styles.css` (arriba, las variables `--navy`, `--blue`, `--sky`) |

1. Abre el archivo.
2. Cambia el texto (respeta las comillas).
3. Guarda (`Ctrl + S`).
4. Vuelve a Chrome y recarga con **Ctrl + Shift + R**.

No edites el nombre “a mano” sobre la página en el navegador: eso no se guarda. Siempre en `js/config.js`.

## Publicar y Google

Cuando la veas bien, publícala en GitHub Pages y pídele a Google que la indexe: [como-salir-en-google.md](como-salir-en-google.md)
