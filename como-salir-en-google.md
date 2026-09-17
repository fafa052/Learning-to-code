# Cómo hacer que la tarjeta aparezca en Google

Google **no puede** ver la página en tu computadora. Primero hay que publicarla en internet y después pedirle a Google que la indexe.

Haz estos pasos en orden.

## Paso 1. Pon los datos reales del doctor

1. Abre `js/config.js`.
2. Cambia nombre, especialidad, ciudad, teléfono y el texto `seoTitle` / `seoDescription`.
3. Escribe el nombre **tal como la gente lo buscaría**, por ejemplo: `Dra. Ana Pérez internista Ciudad de México`.
4. Reemplaza `assets/doctor.png` por la foto real.
5. Deja `allowSearchIndexing: true`.

Sin el nombre real, Google indexaría el ejemplo (Dr. Andrés Navarro) y no ayudaría al doctor.

## Paso 2. Publica la página (GitHub Pages)

1. Fusiona (merge) el pull request de la tarjeta digital, o usa la rama donde está esta página.
2. En GitHub abre el repositorio **Learning-to-code**.
3. Arriba, entra a **Settings**.
4. En el menú izquierdo, entra a **Pages**.
5. En **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
6. Pulsa **Save**.
7. Espera 1 a 2 minutos y recarga esa misma pantalla. Debe aparecer un enlace como:

   `https://fafa052.github.io/Learning-to-code/`

8. Ábrelo en el celular o en otra pestaña. Si ves la tarjeta (foto, nombre, contacto), ya está en internet.

Si Pages pide confirmar el flujo de GitHub Actions, elige **Deploy from a branch** como arriba. No hace falta un dominio de pago.

## Paso 3. Confirma que Google puede leerla

En el navegador abre estos dos enlaces (cambia la URL si usaste otro hosting):

- `https://fafa052.github.io/Learning-to-code/robots.txt`
- `https://fafa052.github.io/Learning-to-code/sitemap.xml`

Debes ver `Allow: /` y la dirección de la página. Si sale 404, espera un poco y recarga; GitHub Pages a veces tarda.

## Paso 4. Crea una cuenta en Google Search Console

1. Entra a [https://search.google.com/search-console](https://search.google.com/search-console) con una cuenta de Gmail.
2. Pulsa **Añadir propiedad**.
3. Elige **Prefijo de URL**.
4. Pega exactamente: `https://fafa052.github.io/Learning-to-code/`
5. Pulsa **Continuar**.

## Paso 5. Verifica que el sitio es tuyo

La forma más fácil con esta tarjeta:

1. En Search Console elige el método **Etiqueta HTML**.
2. Google te muestra algo como:

   `<meta name="google-site-verification" content="CODIGO_LARGO" />`

3. Copia **solo el código** (lo que va entre comillas en `content="..."`).
4. Pégalo en `js/config.js`, en `googleSiteVerification: "AQUI"`.
5. Guarda, haz commit y push (o vuelve a fusionar el cambio).
6. Espera a que GitHub Pages se actualice y recarga la tarjeta en el navegador.
7. En Search Console pulsa **Verificar**.

Si la verificación falla, espera 2 minutos, recarga la web pública y vuelve a intentar. El código tiene que estar ya visible en la página publicada, no solo en tu computadora.

## Paso 6. Pide a Google que indexe la página

1. En Search Console, arriba está la barra **Inspeccionar cualquier URL**.
2. Pega: `https://fafa052.github.io/Learning-to-code/`
3. Espera el resultado y pulsa **Solicitar indización**.
4. En **Sitemaps**, envía: `sitemap.xml`

Esto no publica el resultado al instante. Suele tardar **de unas horas a varios días**. A veces hasta 1 o 2 semanas si el sitio es nuevo.

## Paso 7. Ayuda a Google a descubrirla

Google encuentra antes las páginas que tienen enlaces. Comparte el enlace en:

- La bio de Instagram del doctor
- El perfil de Doctoralia (sitio web / más información)
- WhatsApp o el correo de la clínica, como tarjeta digital
- Google Maps de la clínica, si el doctor lo administra (sitio web)

Cada enlace real acelera el rastreo.

## Paso 8. Comprueba que ya salió

Cuando Search Console muestre la URL como **Indexada**, busca en Google (en una ventana de incógnito):

```
"Dr. Andrés Navarro" medicina interna
```

(Usa el nombre real cuando lo hayas cambiado.)

También puedes probar:

```
site:fafa052.github.io/Learning-to-code
```

Si sale la tarjeta, ya se puede encontrar.

## Si no aparece

| Qué ves | Qué hacer |
| --- | --- |
| La web no abre en github.io | Repite el Paso 2. La rama debe ser `main` y la carpeta `/ (root)`. |
| Search Console dice “no se pudo verificar” | El código de verificación debe estar en la web **publicada**. Recarga y espera el deploy. |
| Dice “Descubierta, actualmente no indexada” | Espera unos días y vuelve a solicitar indexación. Comparte el enlace en Instagram o Doctoralia. |
| Indexa el nombre de ejemplo | Aún no cambiaste `js/config.js`. Pon el nombre real y pide indexación otra vez. |

No hace falta pagar Google Ads para que la página exista en los resultados. Los anuncios son opcionales y aparte.
