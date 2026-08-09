I actually think you have a chance to make your Loom stand out because **you have a genuine engineering thought process**. Most candidates will probably say:

> "I used TARS, connected Salesforce, and here's my bot."

Yours can tell a story:

> "Here's how I approached the problem as an engineer."

Below is how I would structure the entire video.

---

# 1. Quick Introduction (40-50 sec)

Don't oversell yourself. Keep it authentic.

> Hi, I'm Shubhayan Bagchi. I'm a final-year Computer Science undergraduate at Swami Vivekananda Institute of Science and Technology.
>
> I'm primarily interested in backend engineering and building systems that solve real-world problems. Over the past few years I've worked on several full-stack projects including a College ERP system where I built backend APIs for modules like Library Management and Examination & Results, an AI chatbot project using the Gemini API, and an AI-powered multilingual video dubbing system that reached the Smart India Hackathon national finals. 
>
> What attracted me to this assignment was that it combines conversational AI with business workflow automation, which sits right at the intersection of software engineering and practical AI.

> "One quick note before I begin: I'm recording this on Linux Mint. Since Loom doesn't currently provide a native desktop application for Linux, I wasn't able to use its desktop screen-and-camera recorder with the webcam overlay. Instead, I recorded using OBS and uploaded the final recording to Loom, so you'll still have the required Loom link and transcript."

That's it.

Then immediately move on to:

> "Now let me walk you through my approach."

---

# 2. Research Process

This is the most underrated section.

Don't say

> "I watched YouTube."

Explain your thinking.

---

## First

> Before building anything, I wanted to understand what actually makes an AI Agent different from a traditional chatbot.

Then mention

> I watched Hitesh Choudhary's introductory video on AI Agents and took notes throughout to build a strong conceptual understanding.

Then mention your learnings.

---

## Explain in your own words

> One important thing I learned is that an LLM by itself isn't an AI agent.

Instead

```text
Model

↓

Reasoning

↓

Memory

↓

Knowledge

↓

Tools

↓

Planning
```

Together they become an AI Agent.

---

Then

> That helped me think of the assignment differently. Instead of building a chatbot that only answers questions, I started thinking about building a digital receptionist for a healthcare clinic.

That sentence is gold.

---

## Then

> After understanding the concepts, I moved to the official TARS documentation and video tutorials to understand how the platform works, how knowledge bases are configured, how tools are connected, and how conversation flows are designed. 

---

# 3. Planning

This part is what most candidates skip.

Say

> Before opening TARS, I spent some time breaking down the assignment into individual requirements.

Then

Requirement 1

↓

Knowledge Base

Requirement 2

↓

Salesforce Lead

Requirement 3

↓

Different flow for new and returning patients

Brownie

↓

Task

Lead Temperature

Now it sounds like engineering.

---

Then say

> Once I understood the requirements, I designed the conversation flow first instead of directly building the agent.

Very good engineering practice.

---

# 4. Design Decisions

This is where you can really shine.

---

## Why New Patient / Existing Patient

Instead of

"I added buttons."

Say

> The assignment specifically required the agent to distinguish between first-time visitors and existing patients.

> I intentionally made this the very first decision because it changes the rest of the conversation.

Explain

New patient

↓

Clinic information

↓

Appointment

Existing patient

↓

Support

↓

Reschedule

↓

Follow-up

That demonstrates workflow thinking.

---

## Model Selection

Don't say

> I picked the cheapest model.

Say

> Since the majority of conversations consist of FAQ retrieval and appointment booking, I selected Claude Haiku 4.5.

Then explain

> My goal was to balance response quality with inference cost.

Then

> Rather than using the largest available model, I chose a smaller model because it provides sufficient capability for customer support while significantly reducing operational cost.

This sounds much more mature.

---

## Knowledge Base

Mention your GitHub Pages idea if you implemented it.

> Instead of relying on an existing hospital website, I created a realistic multi-location clinic website and used it as the knowledge source for the AI agent.

Why?

Because

> This allowed me to fully control the information the AI retrieves while simulating a real customer implementation.

Excellent.

---

## Keyword + Vector Blend

This is probably the strongest technical point.

Say

> For retrieval, I chose the hybrid Keyword + Vector search mode.

Explain

Keyword search

↓

Excellent for

Doctor names

Medicine names

Clinic names

Branch names

Addresses

Phone numbers

---

Vector Search

↓

Better for

Natural language

Meaning

Semantics

Different phrasings

---

Then

> Combining both approaches provides more reliable retrieval than using either one independently because exact factual information and semantic similarity are both important in healthcare conversations.

That's a very strong explanation.

---

## Cost Optimization

Mention

> Since this is a production-style customer support agent, cost is also an important engineering consideration.

Then

Small model

*

Hybrid retrieval

↓

Lower cost

↓

Good enough quality

Exactly the tradeoff companies care about.

---

# 5. Explain the Agent

Now demo.

Don't explain buttons.

Tell a story.

Example

> Suppose I'm visiting the clinic website for the first time.

Then

Hi

↓

New Patient

↓

FAQs

↓

Appointment

↓

Salesforce Lead

↓

Confirmation

Done.

---

Then

Existing Patient

↓

Different path

↓

Different outcome.

---

# 6. Why TARS

Avoid saying

> AI is the future.

Everyone says that.

Instead say something more specific:

> What excites me about TARS is that it sits at the point where AI meets real business problems. Building an AI model is interesting, but deploying AI in a way that genuinely improves customer experience is what creates value. This assignment made me think beyond the model itself and focus on user journeys, integrations, reliability, and business workflows.

Then continue:

> I'm particularly interested in backend engineering, APIs, and system design. Implementation engineering lets me apply those skills while also working closely with customers and modern AI products. That's the kind of environment where I believe I'll learn the most.

Then end with:

> I want to become an engineer who builds software that people actually use every day. Conversational AI is evolving quickly, and I'd love the opportunity to contribute to products that make AI genuinely useful for businesses and their customers.

---

## One thing I'd change from your draft

You wrote:

> AI is the future.

I'd soften it to:

> I believe AI is becoming an increasingly important part of modern software, and I'm excited to learn how to build products that use it responsibly to solve real customer problems.

That sounds more thoughtful and grounded.

---

I think your biggest differentiator won't be the TARS workflow itself. It will be that you consistently explain **why** you made each engineering decision—why you chose the model, why you used hybrid retrieval, why you branched the conversation early, and why you optimized for cost. That's exactly the perspective an Implementation Engineer should demonstrate.
