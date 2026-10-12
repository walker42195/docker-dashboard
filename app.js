/**
 * Homelab & Cloud Service Hub — Overview for 10.0.0.45, 10.0.0.139 & fwserver
 */

const SERVICES = [
  // ----------------------------------------------------
  // 10.0.0.45 Services
  // ----------------------------------------------------
  {
    id: "paperclip",
    title: "Paperclip",
    category: "AI Agent Orchestration",
    desc: "Autonom agentorkestrering, uppgiftsstyrning och ledningscentral för AI-assistenter.",
    host: "10.0.0.45",
    port: "3100",
    url: "http://10.0.0.45:3100",
    container: "paperclip-paperclip-1",
    status: "active",
    image: "images/paperclip.webp"
  },
  {
    id: "aktiehandel",
    title: "Aktiehandel Dashboard",
    category: "Finans & Trading",
    desc: "Överblickspanel för automatiserad aktiehandel, portföljanalys och realtidsnotiser.",
    host: "10.0.0.45",
    port: "3000",
    url: "http://10.0.0.45:3000",
    container: "aktiehandel-dashboard",
    status: "active",
    image: "images/aktiehandel.webp"
  },
  {
    id: "docker-harbor",
    title: "Docker Harbor Hub",
    category: "Containermanagement",
    desc: "Central administration och övervakning av containrar och noder över hela hemnätverket.",
    host: "10.0.0.45",
    port: "6969",
    url: "http://10.0.0.45:6969",
    container: "docker-harbor",
    status: "active",
    image: "images/docker_harbor.webp"
  },
  {
    id: "n8n",
    title: "n8n Workflow Hub",
    category: "Automation & Integrering",
    desc: "Visuell nodbaserad arbetsflödesautomation och webhook-integration mellan system.",
    host: "10.0.0.45",
    port: "5678",
    url: "http://10.0.0.45:5678",
    container: "n8n",
    status: "active",
    image: "images/n8n.webp"
  },
  {
    id: "playwright-mcp",
    title: "Playwright MCP",
    category: "Webbläsarautomation",
    desc: "Delad headless webbläsarmiljö och MCP-tjänst för AI-webbsurf och visuell inspektion.",
    host: "10.0.0.45",
    port: "8931",
    url: "http://10.0.0.45:8931/mcp",
    container: "playwright-mcp",
    status: "active",
    image: "images/playwright.webp"
  },
  {
    id: "frigate",
    title: "Frigate NVR",
    category: "AI Videoövervakning",
    desc: "Lokal nätverksvideoinspelning och realtidsdetektering av personer och fordon via AI.",
    host: "10.0.0.45",
    port: "5000",
    url: "http://10.0.0.45:5000",
    container: "frigate",
    status: "inactive",
    image: "images/frigate.webp"
  },
  {
    id: "rustdesk",
    title: "RustDesk Server",
    category: "Fjärrskrivbord",
    desc: "Egenhostad rendezvous- och relätjänst för snabb och säker fjärrskrivbordsanslutning.",
    host: "10.0.0.45",
    port: "21115-19",
    url: "http://10.0.0.45:21116",
    container: "rustdeskbroker / hbbr",
    status: "inactive",
    image: "images/rustdesk.webp"
  },
  {
    id: "onvif",
    title: "ONVIF Camera Bridge",
    category: "Kameraprotokoll",
    desc: "Brygga för upptäckt och strömning av IP-kameror enligt den officiella ONVIF-standarden.",
    host: "10.0.0.45",
    port: "Host Net",
    url: "http://10.0.0.45",
    container: "onvif",
    status: "inactive",
    image: "images/onvif.webp"
  },

  // ----------------------------------------------------
  // 10.0.0.139 Services
  // ----------------------------------------------------
  {
    id: "comfyui",
    title: "ComfyUI (Flux 1 dev)",
    category: "Generativ Bild-AI",
    desc: "Nodbaserad bildsyntes driven av RTX 5070 Ti (16 GB VRAM) för foto och grafik.",
    host: "10.0.0.139",
    port: "8188",
    url: "http://10.0.0.139:8188",
    container: "fyui",
    status: "active",
    image: "images/comfyui.webp"
  },
  {
    id: "forgejo",
    title: "Forgejo Git",
    category: "Kodhantering & CI/CD",
    desc: "Självhostad, snabb Git-plattform med ärendehantering, kodgranskning och versionskontroll.",
    host: "10.0.0.139",
    port: "3000",
    url: "http://10.0.0.139:3000",
    container: "forgejo",
    status: "active",
    image: "images/forgejo.webp"
  },
  {
    id: "ollama",
    title: "Ollama LLM Engine",
    category: "Lokal Språkmodell",
    desc: "GPU-accelererad lokal inferens med Gemma 4, Qwen och synapsinbäddningar.",
    host: "10.0.0.139",
    port: "11434",
    url: "http://10.0.0.139:11434",
    container: "clawollama",
    status: "active",
    image: "images/ollama.webp"
  },
  {
    id: "searxng",
    title: "SearXNG Metasearch",
    category: "Sökmotor & Integritet",
    desc: "Integritetsskyddad metasökmotor utan spårning för både webbanvändare och AI-agenter.",
    host: "10.0.0.139",
    port: "8080",
    url: "http://10.0.0.139:8080",
    container: "clawsearxng",
    status: "inactive",
    image: "images/searxng.webp"
  },
  {
    id: "open-webui",
    title: "Open WebUI",
    category: "AI Chattgränssnitt",
    desc: "Modernt användargränssnitt i ChatGPT-stil för chatt, dokument-RAG och modellväxling.",
    host: "10.0.0.139",
    port: "3000 / 8080",
    url: "http://10.0.0.139:8080",
    container: "clawopen-webui",
    status: "inactive",
    image: "images/open_webui.webp"
  },
  {
    id: "master-harbor",
    title: "Master Harbor Hub",
    category: "Autonoma Agenter",
    desc: "Samordningsnav för autonoma AI-agenter med direkt integrerad webbsök och sandbox.",
    host: "10.0.0.139",
    port: "7000",
    url: "http://10.0.0.139:7000",
    container: "master-harbor",
    status: "inactive",
    image: "images/master_harbor.webp"
  },
  {
    id: "kde-harbor",
    title: "KDE Harbor Desktop",
    category: "Virtuellt Skrivbord",
    desc: "Cloud-baserat grafiskt Linux-skrivbord åtkomligt direkt i webbläsaren via noVNC.",
    host: "10.0.0.139",
    port: "6081",
    url: "http://10.0.0.139:6081",
    container: "kde-harbor",
    status: "inactive",
    image: "images/kde_harbor.webp"
  },
  {
    id: "blender-mcp",
    title: "Blender 3D MCP",
    category: "3D Modellering & Render",
    desc: "Programmeringsbart MCP-gränssnitt för att styra Blender 3D och rendering via AI.",
    host: "10.0.0.139",
    port: "9876",
    url: "http://10.0.0.139:9876",
    container: "blender-mcp",
    status: "inactive",
    image: "images/blender_mcp.webp"
  },
  {
    id: "marketing-bridge",
    title: "Marketing Bridge",
    category: "Sociala Medier",
    desc: "Automatiserad publicering och interaktionshantering för Instagram och Reddit.",
    host: "10.0.0.139",
    port: "8790",
    url: "http://10.0.0.139:8790",
    container: "marketing-bridge",
    status: "inactive",
    image: "images/marketing_bridge.webp"
  },

  // ----------------------------------------------------
  // fwserver (107.152.37.150) Services & Websites
  // ----------------------------------------------------
  {
    id: "doc-harbor-app",
    title: "Doc-Harbor App",
    category: "Dokument & AI Arkiv",
    desc: "AI-driven dokumentsökning, arkivering och kunskapsdatabas i Docker (port 8090).",
    host: "fwserver",
    port: "8090 / 443",
    url: "https://app.doc-harbor.se",
    container: "doc-harbor_doc-harbor_1",
    status: "active",
    image: "images/doc_harbor.webp"
  },
  {
    id: "lilla-stugan",
    title: "Boka Lilla Stugan",
    category: "Bokning & Telegram",
    desc: "Bokningsportal för stuguthyrning med realtidsnotifiering i Telegram (port 8091).",
    host: "fwserver",
    port: "8091 / 443",
    url: "https://bokalillastugan.novabase.se",
    container: "telegram-booking-lilla-stugan",
    status: "active",
    image: "images/lilla_stugan.webp"
  },
  {
    id: "novabase-web",
    title: "Novabase Huvudportal",
    category: "Företagswebbplats",
    desc: "Officiell webbplats för Novabase med teknikkonsultation och systemlösningar.",
    host: "fwserver",
    port: "443",
    url: "https://novabase.se",
    container: "Apache / novabase.se",
    status: "active",
    image: "images/novabase.webp"
  },
  {
    id: "geo-harbor",
    title: "Geo-Harbor Backend",
    category: "Geotrack & IoT Telemetri",
    desc: "Realtidspositionering, kartanalys och beacon-telemetri på port 4001.",
    host: "fwserver",
    port: "4001 / 443",
    url: "https://geo-harbor.se",
    container: "geo-harbor.service",
    status: "active",
    image: "images/geo_harbor.webp"
  },
  {
    id: "firstwarning-web",
    title: "FirstWarning Säkerhet",
    category: "Säkerhet & Tidiga Larm",
    desc: "Säkerhetsövervakning, tidiga incidentvarningar och skyddslösningar.",
    host: "fwserver",
    port: "443",
    url: "https://firstwarning.novabase.se",
    container: "Apache / firstwarning",
    status: "active",
    image: "images/firstwarning.webp"
  },
  {
    id: "security-harbor-web",
    title: "Security Harbor",
    category: "Säkerhetsplattform",
    desc: "Plattformspresentation och resurser för Security Harbor cybersäkerhet.",
    host: "fwserver",
    port: "443",
    url: "https://security.novabase.se",
    container: "Apache / security-harbor",
    status: "active",
    image: "images/security_harbor.webp"
  },
  {
    id: "promille-web",
    title: "Promillekalkylatorn",
    category: "Beräkningsverktyg",
    desc: "Interaktiv promillekalkylator och förbränningsberäkning online.",
    host: "fwserver",
    port: "443",
    url: "https://promille.novabase.se",
    container: "Apache / promille",
    status: "active",
    image: "images/promille.webp"
  },
  {
    id: "westvolt-web",
    title: "Westvolt Webbplats",
    category: "Energi & Teknik",
    desc: "Webbportal för modern energiteknik och tekniska anläggningar.",
    host: "fwserver",
    port: "443",
    url: "https://westvolt.novabase.se",
    container: "Apache / westvolt",
    status: "active",
    image: "images/westvolt.webp"
  },
  {
    id: "gps-web",
    title: "GPS Tracking Portal",
    category: "Flottstyrning & GPS",
    desc: "Kartvy och spårningsgränssnitt för anslutna GPS-enheter och fordon.",
    host: "fwserver",
    port: "443",
    url: "https://gps.novabase.se",
    container: "Apache / gps",
    status: "active",
    image: "images/gps_portal.webp"
  },
  {
    id: "games-web",
    title: "Novabase Games",
    category: "Spel & Underhållning",
    desc: "Webbaserade spel, nöjen och interaktiva mini-applikationer.",
    host: "fwserver",
    port: "443",
    url: "https://games.novabase.se",
    container: "Apache / games",
    status: "active",
    image: "images/games.webp"
  },
  {
    id: "finntorp-web",
    title: "Finntorp Portal",
    category: "Fastighet & Område",
    desc: "Informationsportal och boenderesurser för Finntorpsområdet.",
    host: "fwserver",
    port: "443",
    url: "https://finntorp.novabase.se",
    container: "Apache / finntorp",
    status: "active",
    image: "images/finntorp.webp"
  },
  {
    id: "vonbachen-web",
    title: "Von Bachen Profil",
    category: "Varumärke & Profil",
    desc: "Officiell webbplats och profilering för varumärket Von Bachen.",
    host: "fwserver",
    port: "443",
    url: "https://vonbachen.se",
    container: "Apache / vonbachen",
    status: "active",
    image: "images/vonbachen.webp"
  }
];

let currentFilter = "all";
let searchQuery = "";

function renderCards() {
  const grid = document.getElementById("services-grid");
  const emptyState = document.getElementById("empty-state");

  const filtered = SERVICES.filter(item => {
    // Filter matching
    if (currentFilter === "host-45" && item.host !== "10.0.0.45") return false;
    if (currentFilter === "host-139" && item.host !== "10.0.0.139") return false;
    if (currentFilter === "host-fwserver" && item.host !== "fwserver") return false;
    if (currentFilter === "status-active" && item.status !== "active") return false;
    if (currentFilter === "status-inactive" && item.status !== "inactive") return false;

    // Search query matching
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      const match = item.title.toLowerCase().includes(q) ||
                    item.desc.toLowerCase().includes(q) ||
                    item.container.toLowerCase().includes(q) ||
                    item.category.toLowerCase().includes(q) ||
                    item.host.toLowerCase().includes(q) ||
                    item.port.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";
  grid.innerHTML = filtered.map(item => `
    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="service-card" aria-label="Öppna ${item.title} (${item.host})">
      <div class="card-image-wrap">
        <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy" width="600" height="375">
        <div class="card-top-badges">
          <span class="badge-host ${item.host === 'fwserver' ? 'badge-cloud' : ''}">${item.host}</span>
          <span class="badge-status ${item.status}">
            <span class="${item.status === 'active' ? 'pulse-dot' : 'inactive-dot'}"></span>
            ${item.status === 'active' ? 'Aktiv' : 'Inaktiv'}
          </span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-header">
          <h2 class="card-title">${item.title}</h2>
          <svg class="card-ext-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>
        <div class="card-category">${item.category}</div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-container-name" title="${item.container}">${item.container}</span>
          <span class="card-port-pill">Port ${item.port}</span>
        </div>
      </div>
    </a>
  `).join("");
}

function updateBadgeCounts() {
  const activeCount = SERVICES.filter(s => s.status === "active").length;
  const inactiveCount = SERVICES.filter(s => s.status === "inactive").length;
  const host45Count = SERVICES.filter(s => s.host === "10.0.0.45").length;
  const host139Count = SERVICES.filter(s => s.host === "10.0.0.139").length;
  const hostFwCount = SERVICES.filter(s => s.host === "fwserver").length;

  document.getElementById("count-total").textContent = SERVICES.length;
  document.getElementById("count-active").textContent = activeCount;
  document.getElementById("count-inactive").textContent = inactiveCount;

  // Filter button badges
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    const f = btn.getAttribute("data-filter");
    const badge = btn.querySelector(".badge");
    if (!badge) return;
    if (f === "all") badge.textContent = SERVICES.length;
    if (f === "host-45") badge.textContent = host45Count;
    if (f === "host-139") badge.textContent = host139Count;
    if (f === "host-fwserver") badge.textContent = hostFwCount;
    if (f === "status-active") badge.textContent = activeCount;
    if (f === "status-inactive") badge.textContent = inactiveCount;
  });
}

function setupEventListeners() {
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-search");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const resetBtn = document.getElementById("reset-filter-btn");

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    clearBtn.style.display = searchQuery ? "block" : "none";
    renderCards();
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearBtn.style.display = "none";
    searchInput.focus();
    renderCards();
  });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderCards();
    });
  });

  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearBtn.style.display = "none";
    currentFilter = "all";
    filterBtns.forEach(b => b.classList.remove("active"));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add("active");
    renderCards();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateBadgeCounts();
  setupEventListeners();
  renderCards();
});
