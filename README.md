# Tarjeta digital del doctor

Página web para compartir la tarjeta de un médico por enlace (WhatsApp, correo o código QR) en lugar de tarjetas de papel.

No es un directorio. Quien no tenga el enlace no llega a una lista de médicos. Si dejas `allowSearchIndexing: true` en `js/config.js`, Google puede mostrar la página cuando alguien busque el nombre del doctor.

## Cómo personalizarla

1. Abre `js/config.js` y cambia nombre, especialidad, teléfono, Instagram, Doctoralia, consultorio y biografía.
2. Reemplaza `assets/doctor.png` por la foto real del doctor.
3. Si no quieres que Google la indexe, pon `allowSearchIndexing: false`.

## Cómo verla en tu computadora

Abre `index.html` en el navegador, o desde la carpeta del proyecto:

```bash
python3 -m http.server 8080
```

Luego visita `http://localhost:8080`.

## Cómo compartirla

Sube estos archivos a GitHub Pages, Netlify o cualquier hosting estático. El enlace de esa web es la tarjeta. El doctor puede mandarlo o mostrar el código QR que aparece al final de la página.
