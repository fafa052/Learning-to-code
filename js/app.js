(function () {
  const card = window.DOCTOR_CARD;

  if (!card) {
    document.body.innerHTML =
      "<p style='padding:2rem;font-family:sans-serif'>Falta el archivo js/config.js</p>";
    return;
  }

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setMeta(name, content, property) {
    const attr = property ? "property" : "name";
    const key = property || name;
    let node = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!node) {
      node = document.createElement("meta");
      node.setAttribute(attr, key);
      document.head.appendChild(node);
    }
    node.setAttribute("content", content);
  }

  function icon(name) {
    const paths = {
      phone:
        '<path d="M6.7 3.8c.4-.4 1-.5 1.5-.3l2.2 1c.5.2.8.7.8 1.3v2.1c0 .4-.2.8-.6 1-.7.5-1 1.2-.8 2 .5 1.7 1.8 3 3.5 3.5.8.2 1.5-.1 2-.8.3-.4.7-.6 1.1-.6h2.1c.6 0 1.1.3 1.3.8l1 2.2c.2.5.1 1.1-.3 1.5l-1.3 1.3c-.4.4-1 .6-1.6.5C11.4 20.7 3.3 12.6 3.8 5.4c0-.6.2-1.2.5-1.6z" fill="currentColor"/>',
      whatsapp:
        '<path fill="currentColor" d="M12.1 3.2A8.4 8.4 0 0 0 4.5 14.7L3.6 20l5.4-.8A8.4 8.4 0 1 0 12.1 3.2zm4.7 12c-.2.5-1 .9-1.4 1-.4.1-.8.2-2.5-.5-2.1-1-3.4-2.9-3.5-3.1-.1-.2-1-1.3-1-2.5s.6-1.8.9-2 .5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.6l-.3.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1l1-1.1c.1-.2.3-.2.5-.1l1.8.8c.2.1.4.2.4.5 0 .2 0 .9-.4 1.4z"/>',
      mail: '<path fill="currentColor" d="M4 6h16v12H4V6zm8 7 8-5H4l8 5zm0 2-8-5v8h16v-8l-8 5z"/>',
      instagram:
        '<path fill="currentColor" d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.4 7a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>',
      doctoralia:
        '<path fill="currentColor" d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 4.2a2.2 2.2 0 1 1-2.2 2.2A2.2 2.2 0 0 1 12 7.2zM12 19c-2.4 0-4.5-1.2-5.6-3 .9-1.9 2.9-3.2 5.6-3.2s4.7 1.3 5.6 3.2C16.5 17.8 14.4 19 12 19z"/>',
    };

    return `<span class="card-link__icon" aria-hidden="true"><svg viewBox="0 0 24 24">${paths[name]}</svg></span>`;
  }

  function actionCard(href, iconName, label, value, extra = "") {
    return `<a class="card-link" href="${escapeHtml(href)}" ${extra}>
      ${icon(iconName)}
      <span>
        <span class="card-link__label">${escapeHtml(label)}</span>
        <span class="card-link__value">${escapeHtml(value)}</span>
      </span>
    </a>`;
  }

  const pageUrl = (card.publicUrl || window.location.href).replace(/\/?$/, "/");
  const photoUrl = new URL(card.photo, pageUrl).href;

  document.title = card.seoTitle;
  setMeta("description", card.seoDescription);
  setMeta("robots", card.allowSearchIndexing ? "index,follow" : "noindex,nofollow");
  setMeta("og:title", card.seoTitle, "og:title");
  setMeta("og:description", card.seoDescription, "og:description");
  setMeta("og:image", photoUrl, "og:image");
  setMeta("og:url", pageUrl, "og:url");
  setMeta("og:type", "profile", "og:type");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", card.seoTitle);
  setMeta("twitter:description", card.seoDescription);

  if (card.googleSiteVerification) {
    setMeta("google-site-verification", card.googleSiteVerification);
  }

  let canonical = document.head.querySelector("link[rel='canonical']");
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = pageUrl;

  $$(".portrait__img, .mini-bar__photo").forEach((img) => {
    img.src = card.photo;
    img.alt = card.photoAlt;
  });

  const logo = $(".hero__logo");
  if (logo && card.logo) {
    logo.src = card.logo;
    logo.alt = card.logoAlt || "";
  }

  $$(".hero__name, .mini-bar__name").forEach((el) => {
    el.textContent = card.name;
  });
  $$(".hero__specialty, .mini-bar__specialty").forEach((el) => {
    el.textContent = card.specialty;
  });

  $(".hero__credentials").textContent = card.credentials;
  $(".hero__tagline").textContent = card.tagline;
  $(".clinic-card__name").textContent = card.clinicName;
  $(".clinic-card__address").textContent = card.address;
  $("#bio-text").textContent = card.bio;

  const callHref = `tel:${card.phone}`;
  const mobileHref = card.mobile ? `tel:${card.mobile}` : "";
  const waHref = `https://wa.me/${card.whatsapp}?text=${encodeURIComponent(card.whatsappMessage)}`;

  $(".mini-bar__call").href = callHref;
  $(".thumb-bar__call").href = callHref;
  $(".thumb-bar__wa").href = waHref;
  $("#maps-link").href = card.mapsUrl;

  const contactCards = [
    actionCard(callHref, "phone", "Teléfono", card.phoneDisplay),
  ];
  if (mobileHref) {
    contactCards.push(actionCard(mobileHref, "phone", "Celular", card.mobileDisplay));
  }
  contactCards.push(
    actionCard(waHref, "whatsapp", "WhatsApp", "Agendar por mensaje", 'target="_blank" rel="noopener noreferrer"'),
    actionCard(`mailto:${card.email}`, "mail", "Correo", card.email)
  );
  $("#contact-actions").innerHTML = contactCards.join("");

  const socialCards = [
    actionCard(
      card.instagram,
      "instagram",
      "Instagram",
      card.instagramHandle,
      'target="_blank" rel="noopener noreferrer"'
    ),
    actionCard(
      card.doctoralia,
      "doctoralia",
      "Doctoralia",
      card.doctoraliaLabel,
      'target="_blank" rel="noopener noreferrer"'
    ),
  ];
  if (card.website) {
    socialCards.push(
      actionCard(
        card.website,
        "doctoralia",
        "Sitio web",
        card.websiteLabel || card.website,
        'target="_blank" rel="noopener noreferrer"'
      )
    );
  }
  $("#social-links").innerHTML = socialCards.join("");

  $("#services-list").innerHTML = card.services
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  $("#hours-list").innerHTML = card.hours
    .map(
      (row) =>
        `<div><dt>${escapeHtml(row.days)}</dt><dd>${escapeHtml(row.time)}</dd></div>`
    )
    .join("");

  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: card.name,
    medicalSpecialty: card.specialty,
    image: photoUrl,
    telephone: card.phone,
    email: card.email,
    url: pageUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: card.address,
    },
    sameAs: [card.instagram, card.doctoralia, card.website].filter(Boolean),
  };
  const schemaTag = document.createElement("script");
  schemaTag.type = "application/ld+json";
  schemaTag.textContent = JSON.stringify(schema);
  document.head.appendChild(schemaTag);

  const miniBar = $("#mini-bar");
  miniBar.hidden = false;
  const hero = $(".hero");

  const headerObserver = new IntersectionObserver(
    ([entry]) => {
      miniBar.classList.toggle("is-visible", !entry.isIntersecting);
    },
    { threshold: 0.35 }
  );
  headerObserver.observe(hero);

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  function vcardFile() {
    const savedName = card.contactName || `${card.name} ${card.specialty}`;
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:Areán;Javier;;Dr.;`,
      `FN:${savedName}`,
      `TITLE:${card.specialty}`,
      `ORG:${card.clinicName}`,
      `TEL;TYPE=WORK,VOICE:${card.phone}`,
      card.mobile ? `TEL;TYPE=CELL,VOICE:${card.mobile}` : "",
      `EMAIL;TYPE=INTERNET:${card.email}`,
      `URL:${pageUrl}`,
      `ADR;TYPE=WORK:;;${card.address};;;;`,
      `NOTE:${card.clinicName}. ${card.address}`,
      "END:VCARD",
    ].filter(Boolean);
    return new Blob([lines.join("\r\n")], { type: "text/vcard;charset=utf-8" });
  }

  $("#save-contact").addEventListener("click", () => {
    const url = URL.createObjectURL(vcardFile());
    const a = document.createElement("a");
    const savedName = card.contactName || card.name;
    a.href = url;
    a.download = `${savedName.replace(/\s+/g, "-")}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  });

  $("#share-card").addEventListener("click", async () => {
    const payload = {
      title: card.name,
      text: `${card.name} · ${card.specialty}`,
      url: pageUrl,
    };
    if (navigator.share) {
      try {
        await navigator.share(payload);
      } catch (error) {
        if (error && error.name !== "AbortError") {
          window.prompt("Copia este enlace:", pageUrl);
        }
      }
      return;
    }
    window.prompt("Copia este enlace:", pageUrl);
  });

  $("#copy-link").addEventListener("click", async () => {
    const button = $("#copy-link");
    try {
      await navigator.clipboard.writeText(pageUrl);
      button.textContent = "Copiado";
    } catch (error) {
      window.prompt("Copia este enlace:", pageUrl);
    }
    setTimeout(() => {
      button.textContent = "Copiar enlace";
    }, 1800);
  });

  const qr = $("#qr-image");
  qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(
    pageUrl
  )}`;
})();
