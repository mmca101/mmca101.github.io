---
layout: post
status: published
search_visibility: true
permalink: /article/missing-connector/
title: The missing connector — building an exam simulator around an ownership problem.
date: 2026-08-20 09:00:00
description: The real gap was never content quality — it was the missing architecture between knowledge and exam behavior.
tags: certification tooling architecture
categories: system-design
thumbnail:
---

<!--
  internal tracking (not rendered publicly by this theme's blog index, safe to strip):
  system: SiM-C3RT — GPM Basiszertifikat exam simulator
  pressure_condition: Fragmented, instructor-owned exam content with no interface connecting
    acquired knowledge to actual exam performance
  core_insight: The real gap was never content quality — it was the missing architecture
    between knowledge and exam behavior. Solving it required separating content ownership
    from tool infrastructure, not centralizing better content.
  repo: https://github.com/mmca101/simc3rt
  live: https://sim-c3rt.de
  note: tool interface is German-only (built for a German certification exam context);
    this write-up is in English.
-->

<div class="clearfix text-justify-last-left">
<h3>Starting point</h3>
<p>During a four-week, full-time certification course for the GPM Basiszertifikat in project management (based on the ICB4 competence framework), a structural gap became visible — one that's common but rarely named directly. There is no official, unified question bank for exam preparation. Every instructor assembles and phrases their own practice questions and model answers. Quality varies accordingly, not out of carelessness, but because nobody structurally owns the responsibility to fix it.</p>

<p>That's one half of the gap. The other, more consequential half surfaced through parallel context I got by coincidence — informal contact with people in two other cohorts of the same certification, running at the same time under the same institute. Comparing notes across all three cohorts showed the fragmentation was worse than expected: at least one other course appeared to be using material closer to a different, related certification level rather than the one actually being examined — likely because that was the material available, not a deliberate substitution. And in at least one cohort, students were being steered toward a separate, paywalled application to access the remainder of their own exam-prep content — a paid product layered on top of material that should have been part of the course itself.</p>

<p>Looking at what already existed on the market — including that paywalled app — confirmed the actual gap: no existing platform, free or paid, had a fully correct or complete question set, and none resembled the real exam-taking interface (timer, competence-element structure, the pass rule of 11 of 14 elements at ≥50% each, the realistic ratio of multiple-choice to open questions). Content and exam behavior stayed two disconnected things, regardless of who was selling access to which piece.</p>
</div>

<div class="clearfix text-justify-last-left">
<h3>Observation: what was actually missing</h3>
<p>The obvious framing would have been "we need better questions." Closer inspection showed it was an architecture problem, not a content problem: there was no neutral place where arbitrary content — from any instructor, any cohort — could meet a realistic exam simulation, without someone having to take on editorial or legal responsibility for content that wasn't theirs.</p>

<p>That distinction matters. A tool that collects or curates questions itself immediately becomes the owner of that content — with every consequence attached: who is liable for an incorrect model answer, whose intellectual property the collection becomes, what happens when two instructors want different question sets.</p>

<p>The design had to answer that question architecturally, not organizationally. So the question bank never lives inside the tool. It loads live, on every session, from an externally managed Google Sheet — one per instructor, per cohort, per need. The tool stays neutral infrastructure; content responsibility stays exactly where it already was.</p>
</div>

<div class="profile float-right">
    <figure>
        <img src="/assets/img/sim-c3rt-architecture.svg" class="img-fluid rounded z-depth-1" alt="Diagram: Instructor A, B, and C each maintain their own Google Sheet, which feed into SiM-C3RT, a stateless index.html with no server and no stored content, which in turn serves the Learner, who supplies their own API key and keeps their own results in the browser.">
        {% include figure.liquid path="assets/img/11.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </figure>
</div>

<div class="clearfix text-justify-last-left">
<p>The same separation repeats one level down. Anyone who wants optional AI-assisted grading of open-answer questions provides their own, free API key. It runs entirely client-side, in the browser — no server belonging to this tool ever sees the key or the exam answers. Same logic again: no central storage of other people's data, no responsibility taken on that wasn't already the operator's to hold.</p>

<p>None of the architecture was left to be inferred by an AI coding tool. The visible interface — how the actual exam-taking screen should look and behave — was based directly on screenshots of the real exam platform. Everything beyond that: the feature set, the pass logic, the restrictions, and specifically the modular, externally-sourced data design described above, was decided as a condition and definition of function before any building started. Claude was the implementation hand, not the source of the design decisions.</p>
</div>

<div class="clearfix text-justify-last-left">
<h3>Where it breaks</h3>
<p>Named honestly, because that's the point of this format: AI-assisted grading of open answers carries a real risk. A false-positive assessment shortly before the actual exam can create a misleading sense of readiness. That risk was structurally reduced, not eliminated — the model answer is always shown alongside the AI assessment, never replacing it. Anyone who relies on the AI verdict alone still carries that residual risk themselves.</p>

<p>The single-file architecture (the entire application logic lives in one <code>index.html</code>) is a deliberate choice for fast iteration without a build step — works well at this scope, but would hit a natural ceiling with more contributors or more features. A modular split is a considered option, deliberately deferred until the need is real rather than built in advance on speculation.</p>

<p>And: the tool itself still carries the label "unofficial, for private use only." When the course instructor independently suggested using it as the default tool for future cohorts, that created an open question that isn't fully resolved yet — not legally complicated, but worth actively resolving rather than quietly working around.</p>
</div>

<div class="clearfix text-justify-last-left">
<h3>Core insight</h3>
<p>The actual insight wasn't "build a better practice tool." It was: content quality and exam-simulation quality are two independent problems that need one shared solution, without either side controlling the other. An architecture that cleanly separates content ownership from tool infrastructure can serve people who never authorized or commissioned it — because nobody has to give up their own responsibility to benefit from it.</p>

<p>That generalizes past this specific case. Anywhere multiple independent parties depend on shared infrastructure without a central authority to force consensus, the question isn't "how do I get everyone aligned" — it's "how do I build the infrastructure so each party keeps their own truth, without the system collapsing under the disagreement."</p>

<p>Built over five evenings during an ongoing certification course, with Claude Code as the implementation tool — the architecture and trade-off decisions were mine, the implementation was AI-assisted. Currently in use by the entire cohort for exam preparation.</p>
</div>