---
name: Yehi
summary: "An open-source CLI that turns one JSON file into an MP4 in seconds, compositing every frame on the GPU. It’s built for AI agents to drive, so the docs ship in the binary and every error names the field to fix."
order: 5
status: current
tags: [Rust, wgpu, FFmpeg]
links:
  - label: Source on GitHub
    href: https://github.com/zhamann/yehi
  - label: npm package
    href: https://www.npmjs.com/package/@zhamann/yehi
image: ../../assets/projects/yehi.jpg
imageAlt: "A contact sheet of twelve labeled frames from a nine-second video, made with yehi’s sheet command."
drawing: "The sun coming up over water."
---

[Yehi](https://github.com/zhamann/yehi) is a command-line renderer for AI agents, open source under MIT. You describe a video as one JSON file (canvas, timeline, layers, keyframes, expressions) and it becomes an MP4 in seconds. The name is the Hebrew "let there be" of Genesis 1:3. You describe the video, and there it is.

It does one thing. There's no editor, no timeline UI, and no browser. A spec goes in, a video comes out, and every frame is a pure function of time.

## Speed

A real 64-second 1080×1920 social video, with 14 scenes, kinetic type, camera shake, grain, and a dozen shader passes, took 115 seconds to render in the Python and numpy renderer Yehi replaced. On the same Apple M4, Yehi takes 9 seconds in H.264 and 5.3 in HEVC. A still or a sheet of twelve labeled frames takes under a second.

The compositor alone runs at about 600 frames a second at 1080×1920. The rest is the encoder.

## How it works

- The spec is parsed and validated once, then images and masks are decoded and mipmapped in parallel, text is shaped into a shared glyph atlas, and shader layers are checked and compiled.
- Evaluating the layer tree at a time gives one buffer of instanced quads and a few operations. Consecutive quads with the same texture batch into one draw.
- The GPU composites premultiplied color in 16-bit float, then converts it to dithered BT.709 YUV in a compute shader, so the CPU copies only 3 MB a frame.
- Four frames are in flight. While the GPU draws one, earlier ones are copied back and piped to ffmpeg on another thread, which encodes with VideoToolbox on macOS, NVENC on NVIDIA, or x264 and x265 elsewhere.
- Because a frame depends only on its time, a render can be split across processes or machines and the parts joined.

## Built for agents

- `yehi docs` prints the whole spec, so an agent can learn it from the tool itself.
- Errors name the field and say what's allowed. Unknown fields are errors, so a typo never silently renders wrong.
- `yehi sheet` puts a dozen labeled frames on one image in well under a second, so checking the work is cheap enough to do every time.
- The repository includes an agent skill for Claude Code and other agents that read skills.

## Release pipeline

- Pull requests run unit tests, end-to-end tests that render the example video, Clippy, and formatting, along with a Windows build, an Intel Mac build, and a check on the oldest supported Rust.
- Pushing a version tag builds the binary for macOS, Linux, and Windows, publishes it to npm behind a small launcher, and attaches the binaries, their licenses, and checksums to a GitHub release. `npx @zhamann/yehi` downloads the right one for the machine.

## Stack

- Rust, with wgpu on Metal, Vulkan, and DX12
- WGSL for compositing, color conversion, and shader layers
- FFmpeg for decoding and encoding
- npm and GitHub Actions for releases
