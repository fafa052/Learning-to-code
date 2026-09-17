# Actividad: crea la tarjeta digital desde 0

Esta es una práctica para que **tú** armes la página, como en una actividad de clase. No copies la carpeta completa del proyecto: ve paso a paso.

La mayoría de las personas abrirá el enlace **en el celular**. Por eso cada paso se prueba en vista de teléfono.

## Qué vas a lograr

Una sola página web, azul y blanca, con:

- la foto del doctor
- su nombre
- al deslizar: teléfono, WhatsApp, Instagram, Doctoralia
- dos botones fijos abajo (Llamar y WhatsApp), fáciles de tocar con el pulgar

## Qué necesitas

- Cursor, VS Code o el Bloc de notas
- Una foto del doctor (cuadrada o vertical)
- Estos datos, anotados en un papel:

| Dato | Ejemplo |
| --- | --- |
| Nombre | Dra. Ana Pérez |
| Especialidad | Medicina Interna |
| Teléfono (solo números, con código de país) | 525512345678 |
| Instagram | https://instagram.com/su.usuario |
| Doctoralia | el enlace de su perfil |
| Foto | `foto.jpg` |

---

## Paso 1. Crea la carpeta y el archivo

1. En tu computadora crea una carpeta llamada `mi-tarjeta`.
2. Dentro, pon la foto del doctor y nómbrala `foto.jpg`.
3. En esa misma carpeta crea un archivo vacío llamado `index.html`.
4. Ábrelo.

Hasta aquí no hay página. Solo la carpeta.

---

## Paso 2. Escribe el esqueleto HTML

Pega esto en `index.html` y guarda:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Tarjeta digital del doctor</title>
  </head>
  <body>
    <h1>Dr. Andrés Navarro</h1>
    <p>Medicina Interna</p>
  </body>
</html>
```

Cambia el nombre y la especialidad por los datos reales.

**Comprobar:** da doble clic a `index.html`. Debe abrirse en el navegador con el nombre en letras negras sobre fondo blanco.

---

## Paso 3. Mírala como si fuera un teléfono

La gente no la va a abrir en una pantalla grande. Activa la vista móvil:

1. En Chrome, abre tu `index.html`.
2. Pulsa `F12` (o clic derecho → Inspeccionar).
3. Pulsa el icono de celular/tablet (arriba a la izquierda de las herramientas).
4. Elige **iPhone SE** o **Pixel 7**.
5. Recarga la página.

A partir de ahora, **no salgas de esta vista**. Si se ve bien aquí, se verá bien en el teléfono del paciente.

---

## Paso 4. Portada azul, foto y “desliza”

Sustituye TODO el archivo por esto. Cambia nombre, especialidad y el nombre de la foto si no se llama `foto.jpg`:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Tarjeta digital del doctor</title>
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: system-ui, sans-serif;
        background: #f4f8ff;
        color: #10233f;
      }
      .hero {
        min-height: 100dvh;
        padding: 48px 20px 80px;
        background: linear-gradient(165deg, #072e63, #0b4f9c 50%, #1a7ae0);
        color: white;
        text-align: center;
      }
      .hero img {
        width: 210px;
        height: 280px;
        object-fit: cover;
        border-radius: 28px;
        border: 6px solid white;
      }
      h1 { margin: 16px 0 6px; font-size: 1.9rem; }
    </style>
  </head>
  <body>
    <section class="hero">
      <img src="foto.jpg" alt="Foto del doctor" />
      <h1>Dr. Andrés Navarro</h1>
      <p>Medicina Interna</p>
      <p>Desliza para ver más</p>
    </section>
  </body>
</html>
```

**Comprobar (teléfono):** la foto y el nombre caben en la primera pantalla, sin hacer zoom. El fondo es azul. Si la foto no sale, el archivo no se llama igual o no está en la misma carpeta.

---

## Paso 5. Al deslizar, que salga el teléfono y WhatsApp

Debajo de `</section>` (antes de `</body>`) agrega:

```html
    <main style="max-width:430px;margin:0 auto;padding:24px 20px 120px;">
      <h2>Contacto</h2>
      <p>
        <a href="tel:+525512345678">Llamar 55 1234 5678</a>
      </p>
      <p>
        <a href="https://wa.me/525512345678">WhatsApp</a>
      </p>
    </main>
```

Reglas importantes para el celular:

- `tel:+52...` abre la app de llamadas al tocarlo.
- `https://wa.me/52...` abre WhatsApp. El número va **sin espacios y con código de país** (`52` para México).

**Comprobar:** en vista de teléfono, desliza hacia abajo. Toca “Llamar”: debe intentar marcar. Toca “WhatsApp”: debe abrir o querer abrir WhatsApp.

---

## Paso 6. Convierte los enlaces en botones grandes

En el celular un enlace de texto es difícil de tocar. Dentro de `<style>` agrega:

```css
      a.boton {
        display: block;
        background: white;
        color: #073a7a;
        text-decoration: none;
        padding: 16px;
        border-radius: 18px;
        margin: 10px 0;
        min-height: 56px;
        font-weight: 600;
      }
```

Y cambia los enlaces a:

```html
      <a class="boton" href="tel:+525512345678">Llamar 55 1234 5678</a>
      <a class="boton" href="https://wa.me/525512345678">WhatsApp</a>
      <a class="boton" href="mailto:correo@consultorio.com">Correo</a>
```

**Comprobar:** cada botón se puede tocar con el pulgar. Deben ocupar casi todo el ancho del teléfono.

---

## Paso 7. Instagram y Doctoralia

Debajo de los botones de contacto agrega:

```html
      <h2>Redes</h2>
      <a class="boton" href="https://www.instagram.com/USUARIO">Instagram</a>
      <a class="boton" href="https://www.doctoralia.com.mx/PERFIL">Doctoralia</a>

      <h2>Sobre el doctor</h2>
      <p>Escribe aquí 2 o 3 frases: especialidad, cómo atiende y en qué ayuda.</p>
```

Pon los enlaces reales. Si el doctor no tiene Doctoralia, borra esa línea.

**Comprobar:** en el teléfono, Instagram debe abrir la app o el perfil web.

---

## Paso 8. Barra fija abajo (Llamar y WhatsApp)

Quien abre el link en el celular debe poder llamar **sin buscar**. Antes de `</body>` agrega:

```html
    <nav class="abajo">
      <a class="llamar" href="tel:+525512345678">Llamar</a>
      <a class="whatsapp" href="https://wa.me/525512345678">WhatsApp</a>
    </nav>
```

Y en el `<style>`:

```css
      .abajo {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        padding: 10px 16px;
        background: white;
      }
      .abajo a {
        text-align: center;
        text-decoration: none;
        color: white;
        font-weight: 700;
        padding: 14px;
        border-radius: 14px;
      }
      .llamar { background: #0b4f9c; }
      .whatsapp { background: #25d366; }
```

Para que el último texto no quede tapado por la barra, el `main` debe tener `padding-bottom: 120px`.

**Comprobar:** desliza hasta el final. Los botones **Llamar** (azul) y **WhatsApp** (verde) se quedan pegados abajo. Tócalos con el pulgar.

---

## Paso 9. Pruébala en un teléfono de verdad

La vista de Chrome ayuda, pero no es igual.

1. Sube la carpeta `mi-tarjeta` a GitHub Pages (Settings → Pages → Deploy from a branch), o arrástrala a [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Copia el enlace.
3. Mándatelo por WhatsApp a tu celular.
4. Ábrelo **sin zoom**. Revisa:
   - la foto se ve completa
   - no hay que desplazarse a los lados
   - Llamar y WhatsApp funcionan
   - Instagram y Doctoralia abren

Si hay que hacer zoom o mover a los lados, algo está demasiado ancho. Busca en el CSS un `width` grande y cámbialo por `max-width: 100%`.

---

## Paso 10. (Opcional) Compara con la versión completa

Si ya terminaste esta actividad, abre la versión más completa del repositorio (`index.html` en la raíz). Esa tiene animación al deslizar, guardar contacto, QR y preparación para Google.

Tu archivo de la actividad es la base. La versión completa es el extra.

---

## Lista final

- [ ] Se ve bien en vista iPhone (F12)
- [ ] Foto, nombre y especialidad en la primera pantalla
- [ ] Al deslizar salen teléfono, WhatsApp, Instagram y Doctoralia
- [ ] Los botones se tocan fácil con el pulgar
- [ ] Abajo siempre están Llamar y WhatsApp
- [ ] La abriste desde un teléfono real con el enlace

Si te trabas, hay un ejemplo ya armado en `actividad/index.html` (usa la foto de `assets/doctor.png`). Úsalo solo para comparar, no para saltarte los pasos.
