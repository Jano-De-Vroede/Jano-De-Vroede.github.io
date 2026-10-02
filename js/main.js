(function () {
  const thisScript = document.currentScript;
  if (thisScript && thisScript.src) {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = new URL("../css/styles.css?v=20261002", thisScript.src).href;
    document.head.appendChild(css);
  }

  const site = window.SITE;
  if (!site) return;

  const page = document.body.dataset.page || "home";

  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const navItems = [
    { id: "home", href: "index.html", label: "Home" },
    { id: "about", href: "about.html", label: "Over mij" },
    { id: "projects", href: "projects.html", label: "Projecten" },
    { id: "homelab", href: "homelab.html", label: "Homelab" },
    { id: "contact", href: "contact.html", label: "Contact" },
  ];

  document.title =
    page === "home"
      ? site.name + " — Portfolio"
      : navItems.find((n) => n.id === page)?.label + " — " + site.name;

  const header = el(`
    <header class="site-header">
      <a class="logo" href="index.html">${escapeHtml(site.name)}</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span class="nav-toggle-bars" aria-hidden="true"></span>
        <span class="sr-only">Menu</span>
      </button>
      <nav id="site-nav" class="site-nav">
        ${navItems
          .map(
            (item) =>
              `<a href="${item.href}"${item.id === page ? ' aria-current="page"' : ""}>${item.label}</a>`,
          )
          .join("")}
        <a class="nav-cv" href="${escapeHtml(site.cv)}">CV</a>
      </nav>
    </header>
  `);

  const footer = el(`
    <footer class="site-footer">
      <p>© ${new Date().getFullYear()} ${escapeHtml(site.name)}</p>
      <p class="footer-links">
        <a href="${escapeHtml(site.github)}">GitHub</a>
        <a href="${escapeHtml(site.linkedin)}">LinkedIn</a>
        <a href="mailto:${escapeHtml(site.email)}">Mail</a>
      </p>
    </footer>
  `);

  document.body.prepend(header);
  document.body.append(footer);

  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".site-nav");
  toggle.addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  });

  const root = document.getElementById("app");
  if (!root) return;

  const renderers = {
    home: renderHome,
    about: renderAbout,
    projects: renderProjects,
    homelab: renderHomelab,
    contact: renderContact,
  };

  (renderers[page] || renderHome)(root);

  function renderHome(root) {
    root.innerHTML = `
      <section class="hero">
        <p class="eyebrow">${escapeHtml(site.role)} · ${escapeHtml(site.location)}</p>
        <h1>
          <span>Digitaal</span>
          <span>Portfolio</span>
        </h1>
        <p class="lede">${escapeHtml(site.tagline)}</p>
        <div class="hero-actions">
          <a class="btn btn-solid" href="projects.html">Bekijk projecten</a>
          <a class="btn btn-ghost" href="contact.html">Contact</a>
        </div>
      </section>
      <div class="marquee" aria-hidden="true">
        <div class="marquee-track">
          ${[...site.highlights, ...site.highlights]
            .map((item) => `<span>${escapeHtml(item)}</span>`)
            .join("")}
        </div>
      </div>
      <section class="split">
        <div class="split-copy">
          <h2>Kort.</h2>
          <p>${escapeHtml(site.about[0])}</p>
          <a class="text-link" href="about.html">Meer over mij →</a>
        </div>
        <aside class="stat-grid">
          <article>
            <strong>${String(site.projects.length).padStart(2, "0")}</strong>
            <span>Projectkaarten klaar om in te vullen</span>
          </article>
          <article>
            <strong>${String(site.homelab.nodes.length).padStart(2, "0")}</strong>
            <span>Homelab-nodes in opbouw</span>
          </article>
          <article>
            <strong>24/7</strong>
            <span>Lab dat mag crashen — tot het niet meer crasht</span>
          </article>
        </aside>
      </section>
    `;
  }

  function renderAbout(root) {
    const photo = `
      <div class="portrait">
        <img src="${escapeHtml(site.photo)}" alt="Portret van ${escapeHtml(site.name)}" />
        <div class="portrait-fallback" hidden>
          <span>${escapeHtml(site.firstName.slice(0, 1))}${escapeHtml(site.name.split(" ").pop().slice(0, 1))}</span>
          <p>Zet je foto als <code>images/jano.jpg</code></p>
        </div>
      </div>
    `;

    root.innerHTML = `
      <section class="page-hero">
        <p class="eyebrow">Over mij</p>
        <h1>Wie er achter de rack zit.</h1>
      </section>
      <section class="about-grid">
        ${photo}
        <div class="about-copy">
          ${site.about.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
          <a class="btn btn-solid" href="${escapeHtml(site.cv)}">Download CV</a>
        </div>
      </section>
      <section class="timeline-block">
        <h2>Opleiding</h2>
        <ol class="timeline">
          ${site.education.map(timelineItem).join("")}
        </ol>
      </section>
      <section class="timeline-block">
        <h2>Ervaring</h2>
        <ol class="timeline">
          ${site.experience.map(timelineItem).join("")}
        </ol>
      </section>
    `;

    const img = root.querySelector(".portrait img");
    const fallback = root.querySelector(".portrait-fallback");
    img.addEventListener("error", () => {
      img.remove();
      fallback.hidden = false;
    });
  }

  function timelineItem(item) {
    return `
      <li>
        <p class="when">${escapeHtml(item.period)}</p>
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="where">${escapeHtml(item.school || item.place)}</p>
          <p>${escapeHtml(item.detail)}</p>
        </div>
      </li>
    `;
  }

  function renderProjects(root) {
    root.innerHTML = `
      <section class="page-hero">
        <p class="eyebrow">Werk</p>
        <h1>Projecten. Nog leeg — tot jij ze vult.</h1>
        <p class="lede">Elke kaart komt uit <code>js/site-data.js</code>. Titel, tags, samenvatting, optionele link.</p>
      </section>
      <section class="project-list">
        ${site.projects
          .map((project) => {
            const inner = `
              <span class="project-num">${escapeHtml(project.number)}</span>
              <div>
                <h2>${escapeHtml(project.title)}</h2>
                <p>${escapeHtml(project.summary)}</p>
                <ul class="tags">${project.tags.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
              </div>
            `;
            if (project.href) {
              return `<a class="project-card" href="${escapeHtml(project.href)}">${inner}</a>`;
            }
            return `<article class="project-card">${inner}</article>`;
          })
          .join("")}
      </section>
    `;
  }

  function renderHomelab(root) {
    root.innerHTML = `
      <section class="page-hero">
        <p class="eyebrow">Lab</p>
        <h1>Thuis draait de stack.</h1>
        <p class="lede">${escapeHtml(site.homelab.intro)}</p>
      </section>
      <section class="node-grid">
        ${site.homelab.nodes
          .map(
            (node) => `
          <article class="node-card">
            <p class="eyebrow">${escapeHtml(node.role)}</p>
            <h2>${escapeHtml(node.name)}</h2>
            <p>${escapeHtml(node.detail)}</p>
          </article>
        `,
          )
          .join("")}
      </section>
    `;
  }

  function renderContact(root) {
    root.innerHTML = `
      <section class="page-hero">
        <p class="eyebrow">Contact</p>
        <h1>Aarzel niet om mij te contacteren</h1>
      </section>
      <section class="contact-list">
        <a class="contact-row" href="mailto:${escapeHtml(site.email)}">
          <span>E-mail</span>
          <strong>${escapeHtml(site.email)}</strong>
        </a>
        <a class="contact-row" href="${escapeHtml(site.github)}">
          <span>GitHub</span>
          <strong>${escapeHtml(site.githubLabel)}</strong>
        </a>
        <a class="contact-row" href="${escapeHtml(site.linkedin)}">
          <span>LinkedIn</span>
          <strong>Jano De Vroede</strong>
        </a>
      </section>
    `;
  }
})();
