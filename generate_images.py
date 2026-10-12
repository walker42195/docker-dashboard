#!/usr/bin/env python3
"""Generate minimalist icons for Docker services via ComfyUI (Flux 1 dev on 10.0.0.139)."""

import json
import time
import urllib.request
import io
import os
import random
from PIL import Image

COMFY_URL = "http://10.0.0.139:8188"
OUTPUT_DIR = "/home/fredrik/Projects/docker-dashboard/images"

BASE_WORKFLOW = {
    "3": {
        "class_type": "KSampler",
        "inputs": {
            "seed": 0,
            "steps": 25,
            "cfg": 1,
            "sampler_name": "euler",
            "scheduler": "simple",
            "denoise": 1,
            "model": ["15", 0],
            "positive": ["27", 0],
            "negative": ["7", 0],
            "latent_image": ["5", 0],
        },
    },
    "5": {
        "class_type": "EmptyLatentImage",
        "inputs": {"width": 1024, "height": 1024, "batch_size": 1},
    },
    "7": {
        "class_type": "CLIPTextEncode",
        "inputs": {
            "text": "blurry, low quality, dark, gloomy, dirty, cluttered, realistic photo noise, watermark, text, text logo",
            "clip": ["14", 0],
        },
    },
    "8": {
        "class_type": "VAEDecode",
        "inputs": {"samples": ["3", 0], "vae": ["16", 0]},
    },
    "9": {
        "class_type": "SaveImage",
        "inputs": {"filename_prefix": "claude/docker_dash/icon", "images": ["8", 0]},
    },
    "13": {
        "class_type": "CLIPTextEncode",
        "inputs": {"text": "", "clip": ["14", 0]},
    },
    "14": {
        "class_type": "DualCLIPLoader",
        "inputs": {
            "clip_name1": "t5xxl_fp16.safetensors",
            "clip_name2": "clip_l.safetensors",
            "type": "flux",
            "device": "default",
        },
    },
    "15": {
        "class_type": "UNETLoader",
        "inputs": {"unet_name": "flux1-dev.safetensors", "weight_dtype": "fp8_e4m3fn"},
    },
    "16": {
        "class_type": "VAELoader",
        "inputs": {"vae_name": "ae.safetensors"},
    },
    "27": {
        "class_type": "FluxGuidance",
        "inputs": {"guidance": 3.5, "conditioning": ["13", 0]},
    },
}

SERVICES = [
    {
        "id": "paperclip",
        "prompt": "minimalist 3D isometric icon of a sleek futuristic chrome paperclip holding glowing digital holographic cards, smooth porcelain materials, soft clean studio lighting, pristine bright off-white background, elegant subtle soft shadows, modern tech aesthetic, ultra clean, high detail",
        "seed": 420101,
    },
    {
        "id": "aktiehandel",
        "prompt": "minimalist 3D isometric icon of a financial stock chart with an elegant glowing emerald green upward trend line and geometric candlestick graph, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows, modern fintech aesthetic",
        "seed": 583192,
    },
    {
        "id": "docker_harbor",
        "prompt": "minimalist 3D isometric icon of a geometric modern maritime lighthouse and shipping container, ocean wave curves, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows, clean tech design",
        "seed": 739102,
    },
    {
        "id": "n8n",
        "prompt": "minimalist 3D isometric icon of interconnected glowing modular automation nodes and flow pipes, bright coral and cyan accent dots, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows, workflow pipeline",
        "seed": 294819,
    },
    {
        "id": "playwright",
        "prompt": "minimalist 3D isometric icon of a sleek glass browser window frame with a graceful theatrical spotlight illuminating the glass, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows, web automation",
        "seed": 841920,
    },
    {
        "id": "frigate",
        "prompt": "minimalist 3D isometric icon of a modern compact smart security dome camera with a glowing sapphire lens, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows, AI surveillance camera",
        "seed": 158293,
    },
    {
        "id": "rustdesk",
        "prompt": "minimalist 3D isometric icon of two sleek desktop monitors linked by a glowing optical beam, remote desktop connection, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows",
        "seed": 920412,
    },
    {
        "id": "onvif",
        "prompt": "minimalist 3D isometric icon of a digital camera lens sensor and network cable connector, surveillance protocol bridge, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows",
        "seed": 339104,
    },
    {
        "id": "comfyui",
        "prompt": "minimalist 3D isometric icon of an artist palette with glowing neural network color dots and a creative stylus, generative AI art, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows",
        "seed": 619283,
    },
    {
        "id": "forgejo",
        "prompt": "minimalist 3D isometric icon of git branching code paths with glowing node points, version control repository, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows, developer tools",
        "seed": 472910,
    },
    {
        "id": "ollama",
        "prompt": "minimalist 3D isometric icon of a friendly stylized geometric ceramic llama head with subtle glowing neural nodes, local LLM artificial intelligence, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows",
        "seed": 581902,
    },
    {
        "id": "searxng",
        "prompt": "minimalist 3D isometric icon of a crystal magnifying glass hovering over abstract search signal rings, privacy search engine, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows",
        "seed": 718294,
    },
    {
        "id": "open_webui",
        "prompt": "minimalist 3D isometric icon of two modern chat conversation bubbles with a delicate glowing AI star spark, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows, clean chat interface",
        "seed": 839102,
    },
    {
        "id": "master_harbor",
        "prompt": "minimalist 3D isometric icon of a futuristic captain helm wheel with a precision gyro compass, autonomous agent coordination, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows",
        "seed": 948102,
    },
    {
        "id": "kde_harbor",
        "prompt": "minimalist 3D isometric icon of a floating virtual workspace desktop screen displaying neat modern UI application cards, remote desktop, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows",
        "seed": 102948,
    },
    {
        "id": "blender_mcp",
        "prompt": "minimalist 3D isometric icon of a warm orange geometric wireframe cube with smooth bevels, 3D modeling and rendering engine, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows",
        "seed": 391820,
    },
    {
        "id": "marketing_bridge",
        "prompt": "minimalist 3D isometric icon of an elegant megaphone broadcasting soft glowing social engagement waves, social media marketing automation, smooth materials, soft clean studio lighting, pristine bright off-white background, subtle soft shadows",
        "seed": 648291,
    },
]


def queue_prompt(workflow: dict) -> str:
    payload = json.dumps({"prompt": workflow}).encode("utf-8")
    req = urllib.request.Request(
        f"{COMFY_URL}/prompt",
        data=payload,
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read().decode("utf-8"))["prompt_id"]


def wait_for_result(prompt_id: str, timeout: int = 180):
    deadline = time.time() + timeout
    while time.time() < deadline:
        with urllib.request.urlopen(f"{COMFY_URL}/history/{prompt_id}") as resp:
            history = json.loads(resp.read().decode("utf-8"))
        if prompt_id in history:
            outputs = history[prompt_id]["outputs"]
            for node_out in outputs.values():
                if "images" in node_out:
                    img = node_out["images"][0]
                    return img["filename"], img.get("subfolder", ""), img.get("type", "output")
        time.sleep(2)
    raise TimeoutError(f"Timeout waiting for prompt {prompt_id}")


def download_image(filename: str, subfolder: str, img_type: str) -> Image.Image:
    url = f"{COMFY_URL}/view?filename={filename}&subfolder={subfolder}&type={img_type}"
    with urllib.request.urlopen(url) as resp:
        return Image.open(io.BytesIO(resp.read())).convert("RGB")


def main():
    import copy
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"Starting image generation for {len(SERVICES)} services...")

    for i, s in enumerate(SERVICES, 1):
        target_path = os.path.join(OUTPUT_DIR, f"{s['id']}.webp")
        if os.path.exists(target_path):
            print(f"[{i}/{len(SERVICES)}] Already exists: {s['id']}")
            continue

        print(f"\n[{i}/{len(SERVICES)}] Generating: {s['id']}...")
        wf = copy.deepcopy(BASE_WORKFLOW)
        wf["13"]["inputs"]["text"] = s["prompt"]
        wf["3"]["inputs"]["seed"] = s["seed"]
        wf["9"]["inputs"]["filename_prefix"] = f"claude/docker_dash/{s['id']}"

        try:
            pid = queue_prompt(wf)
            print(f"  Queued: {pid}")
            fname, subfolder, itype = wait_for_result(pid)
            print(f"  Completed: {fname}")
            img = download_image(fname, subfolder, itype)
            
            # Resize and save optimized webp for crisp rendering and fast load
            resized = img.resize((600, 600), Image.Resampling.LANCZOS)
            resized.save(target_path, "WEBP", quality=90)
            print(f"  Saved -> {target_path}")
        except Exception as e:
            print(f"  Error generating {s['id']}: {e}")

    print("\nGeneration process complete!")


if __name__ == "__main__":
    main()
