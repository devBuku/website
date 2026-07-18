---
title: "Swarlipi: Building an AI Video Dubbing Assistant — A Project Retrospective"
date: "2025-12-15"
readTime: "8 min read"
tags: ["Project Retrospective", "SIH 2023", "Python", "Flask", "React", "AI"]
excerpt: "A deep dive into my contribution to Swarlipi, our Smart India Hackathon 2023 finalist project — from speech recognition pipelines to real-time video processing."
---

## The Problem

Smart India Hackathon 2023 presented a unique challenge: build a solution that could automatically dub videos from one language to another while preserving the original speaker's timing, tone, and emotional delivery. Manual dubbing is expensive, slow, and requires significant human expertise. For India's multilingual landscape, an automated solution could make content accessible across linguistic boundaries.

Our team set out to build **Swarlipi** — an AI-powered video dubbing assistant that could take a video in one language and produce a dubbed version in a target language with minimal human intervention.

## My Role & Contribution

As the backend engineer on a team of five, I owned:

- **Speech Recognition Pipeline**: Integrating OpenAI's Whisper model for accurate speech-to-text transcription
- **Text-to-Speech Synthesis**: Building a flexible TTS layer using gTTS (Google Text-to-Speech) with fallback mechanisms
- **Video Processing**: Using OpenCV to extract frames, synchronize audio tracks, and reassemble the final dubbed video
- **API Design**: Designing the Flask REST API that connected the frontend to our processing pipeline

## Technical Approach

### Architecture Overview

```
React Frontend
      ↕ HTTP / WebSocket
  Flask API Server
      ↕
┌─────────────────┐
│ Processing Pipeline │
├─────────────────┤
│ Whisper (ASR)    │
│ gTTS (TTS)       │
│ OpenCV (Video)   │
│ Audio Sync       │
└─────────────────┘
```

### The Whisper Integration

We chose OpenAI's Whisper because of its impressive accuracy across Indian languages. The integration was straightforward on the surface but required careful tuning:

```python
import whisper

model = whisper.load_model("medium")

def transcribe_audio(audio_path, source_lang):
    result = model.transcribe(
        audio_path,
        language=source_lang,
        task="transcribe",
        fp16=False
    )
    return result["segments"]
```

The tricky part was handling long videos. Whisper has a context window limit, so we implemented a chunking strategy:

1. Split the input audio into 30-second segments with 5-second overlap
2. Transcribe each segment independently
3. Merge overlapping segments using timestamp alignment
4. Pass the merged transcript to the translation phase

### Synchronization Challenge

The hardest technical problem we faced was **audio-visual synchronization**. When you replace the original audio with synthesized speech, even a 100ms offset is noticeable. We solved this by:

1. Extracting word-level timestamps from Whisper's output
2. Mapping each word to its corresponding video frame timestamp
3. Generating the TTS audio with duration constraints that matched the original timing
4. Using OpenCV's `VideoWriter` to interleave the new audio track with the original video frames

```python
import cv2
from pydub import AudioSegment

def sync_audio_video(video_path, new_audio_path, output_path):
    video = cv2.VideoCapture(video_path)
    fps = video.get(cv2.CAP_PROP_FPS)
    
    new_audio = AudioSegment.from_file(new_audio_path)
    
    # Write video with new audio using ffmpeg backend
    os.system(
        f"ffmpeg -i {video_path} -i {new_audio_path} "
        f"-c:v copy -c:a aac -map 0:v:0 -map 1:a:0 "
        f"{output_path}"
    )
```

### The Flask Backend

The backend exposed two main endpoints:

- `POST /api/transcribe` — Upload video, receive transcription
- `POST /api/dub` — Provide transcription + target language, receive dubbed video

We used Celery for async task processing since dubbing could take several minutes for longer videos. The frontend polled a task status endpoint to show progress to the user.

## Outcome & Learnings

**What went well:**

- The Whisper model performed exceptionally well on Hindi, Bengali, and English — our primary target languages
- The chunked processing approach allowed us to handle videos up to 30 minutes long (within the hackathon time constraints)
- Our team won the internal college round and was selected for the national finale at CGC Landran, Punjab

**What I'd do differently:**

- **Model quantization**: We ran Whisper on CPU which was painfully slow. Using a quantized version or setting up GPU inference would have cut processing time by 10x
- **Real-time streaming**: Instead of upload-and-wait, a streaming architecture using WebSockets could provide incremental results as the video is being processed
- **Better error handling**: The pipeline had several single points of failure. A queue-based architecture with retry logic would be more robust
- **Smaller model**: Whisper "medium" was overkill for our use case. The "small" or "base" models would have been 80% faster with only marginal accuracy loss

## Key Takeaways

1. **Start with the hardest problem first** — We spent too much time on the UI early on. The audio sync issue nearly broke us in the final hours.
2. **Know your tools' limits** — Whisper is amazing, but it's not designed for real-time streaming. Understanding these constraints early would have saved us a redesign iteration.
3. **Hackathons reward working demos** — A polished but narrow demo beats a broad but broken one. We should have limited input video length to 5 minutes and optimized for that case.
4. **Team communication matters** — Our best debugging sessions happened when we sat together and walked through the pipeline step by step.

---

*This post is part of an ongoing series where I break down my project contributions. The Swarlipi codebase remains in development — I'm currently refactoring the pipeline to support real-time streaming.*
