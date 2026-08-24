const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderFilters();
  renderProjects("All");
  initInteractions();
  initReveal();
});

function renderProfile() {
  const p = PORTFOLIO_DATA.profile;
  $("#statsGrid").innerHTML = p.stats.map(item => `
    <div class="stat">
      <strong>${escapeHTML(item.value)}</strong>
      <span>${escapeHTML(item.label)}</span>
    </div>
  `).join("");

  $("#skillCloud").innerHTML = p.skills.map(skill =>
    `<span class="skill">${escapeHTML(skill)}</span>`
  ).join("");

  $("#linkedinHero").href = p.linkedin;
  $("#linkedinButton").href = p.linkedin;
  $("#emailButton").href = `mailto:${p.email}`;
  $("#year").textContent = new Date().getFullYear();
}

function renderFilters() {
  const categories = ["All", ...new Set(PORTFOLIO_DATA.projects.map(p => p.category.split(" · ")[0]))];
  $("#filterRow").innerHTML = categories.map((category, index) => `
    <button class="filter-btn ${index === 0 ? "active" : ""}" data-filter="${escapeAttr(category)}">
      ${escapeHTML(category)}
    </button>
  `).join("");

  $$(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });
}

function renderProjects(filter) {
  const projects = PORTFOLIO_DATA.projects.filter(project =>
    filter === "All" || project.category.startsWith(filter)
  );

  $("#projects").innerHTML = projects.map(project => {
    const media = project.media?.[0];
    return `
      <article class="project-card reveal visible">
        <div class="project-media">
          ${mediaHTML(media, true)}
          <span class="project-badge">${escapeHTML(project.category)}</span>
        </div>
        <div class="project-body">
          <h3>${escapeHTML(project.title)}</h3>
          <p>${escapeHTML(project.description)}</p>
          <div class="project-meta">
            <div><span>Client</span><strong>${escapeHTML(project.client)}</strong></div>
            <div><span>Role</span><strong>${escapeHTML(project.role)}</strong></div>
          </div>
          <button class="project-link" data-project="${escapeAttr(project.id)}">View case study →</button>
        </div>
      </article>
    `;
  }).join("");

  $$(".project-link").forEach(button => {
    button.addEventListener("click", () => openProject(button.dataset.project));
  });
}

function openProject(id) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === id);
  if (!project) return;

  $("#modalCategory").textContent = project.category;
  $("#modalTitle").textContent = project.title;
  $("#modalDescription").textContent = project.description;
  $("#modalClient").textContent = project.client;
  $("#modalRole").textContent = `${project.role} · ${project.date}`;
  $("#modalContributions").innerHTML = project.contributions.map(item => `<li>${escapeHTML(item)}</li>`).join("");
  $("#modalResults").innerHTML = project.results.map(item => `
    <div class="result-item">
      <span>${escapeHTML(item.label)}</span>
      <strong>${escapeHTML(item.value)}</strong>
    </div>
  `).join("");

  const gallery = project.media?.length
    ? project.media.map(media => mediaHTML(media, false)).join("")
    : placeholderHTML("Add your project visual in the assets folder.");

  $("#modalMedia").className = "modal-media";
  $("#modalMedia").innerHTML = project.media?.length > 1
    ? `<div class="modal-gallery">${gallery}</div>`
    : gallery;

  $("#modalValue").textContent = project.value;
  $("#projectModal").classList.add("open");
  $("#projectModal").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("#projectModal").classList.remove("open");
  $("#projectModal").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function mediaHTML(media, cardMode) {
  if (!media || !media.src) return placeholderHTML("Your visual will appear here.");

  const isVideo = media.type === "video";
  const fallback = `onerror="this.parentElement.innerHTML=${JSON.stringify(placeholderHTML(media.label || "Add your media file."))}"`;

  if (isVideo) {
    return `<video src="${escapeAttr(media.src)}" ${cardMode ? "muted autoplay loop playsinline" : "controls playsinline"} ${fallback}></video>`;
  }
  return `<img src="${escapeAttr(media.src)}" alt="${escapeAttr(media.label || "Project visual")}" loading="lazy" ${fallback}>`;
}

function placeholderHTML(text) {
  return `<div class="media-placeholder"><div><strong>YOUR VISUAL</strong><span>${escapeHTML(text)}</span></div></div>`;
}

function initInteractions() {
  $("#menuToggle").addEventListener("click", () => {
    const nav = $("#navLinks");
    const isOpen = nav.classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
  });

  $$("#navLinks a").forEach(link => link.addEventListener("click", () => {
    $("#navLinks").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  }));

  $$("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    $("#progressBar").style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  }, { passive: true });
}

function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  items.forEach(el => observer.observe(el));
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}
function escapeAttr(value = "") {
  return escapeHTML(value);
}
