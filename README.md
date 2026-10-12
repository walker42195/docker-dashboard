# Docker Service Hub — Homelab Dashboard

En minimalistisk, ljus webbpanel för samlad överblick och direktåtkomst till alla containertjänster på hemmaservrarna `10.0.0.45` och `10.0.0.139`.

## Tjänster

Panelen omfattar 17 tjänster, både aktiva och vilande:

### 10.0.0.45
- **Paperclip** (`:3100`) — AI Agent Automation & Orchestration (Aktiv)
- **Aktiehandel Dashboard** (`:3000`) — Automatiserad handels- och analyspanel (Aktiv)
- **Docker Harbor** (`:6969`) — Container- & nodadministration (Aktiv)
- **n8n Automation** (`:5678`) — Arbetsflödesautomation & webhooks (Aktiv)
- **Playwright MCP** (`:8931`) — Headless webbläsarmotor & testning (Aktiv)
- **Frigate NVR** (`:5000`) — AI videoövervakning & objektdetektering (Inaktiv)
- **RustDesk Server** (`:21115-21119`) — Fjärrskrivbordsserver (Inaktiv)
- **ONVIF Camera Bridge** — IP-kameraprotokollbrygga (Inaktiv)

### 10.0.0.139
- **ComfyUI (Flux 1 dev)** (`:8188`) — AI-bildgenerering på NVIDIA RTX 5070 Ti (Aktiv)
- **Forgejo Git** (`:3000`) — Självhostad versionskontroll & kodförråd (Aktiv)
- **Ollama LLM Engine** (`:11434`) — GPU-accelererad språkmodells-inferens (Aktiv)
- **SearXNG** (`:8080`) — Privat metasökmotor (Inaktiv)
- **Open WebUI** (`:8080`) — Chattgränssnitt för LLM (Inaktiv)
- **Master Harbor Hub** (`:7000`) — Central för autonoma AI-agenter (Inaktiv)
- **KDE Harbor Desktop** (`:6081`) — Virtuellt skrivbord i webbläsaren via noVNC (Inaktiv)
- **Blender 3D MCP** (`:9876`) — Programmeringsbar 3D-renderingsmotor (Inaktiv)
- **Marketing Bridge** (`:8790`) — Instagram- och Reddit-automation (Inaktiv)

## Bildgenerering
Alla ikoner och kortbilder har genererats via ComfyUI med Flux 1 dev (`flux1-dev.safetensors`, 25 steps, euler) på `10.0.0.139:8188` med konsekvent minimalistisk 3D-stil och ljus bakgrund.

## Drift
Körs som en lättviktig Nginx-container på `http://10.0.0.45:8080`.
