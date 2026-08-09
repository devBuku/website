# TARS Assignment

## Autonomous Agent

- Not only takes decisions
- But modifies decisions based on the situation (bina apke kuch bole)
- No precise instruction is needed
- Better options are provided
- Proactive + smart + **goal oriented**

## Asli Agent Ki Pehchaan

- Real decision making
- Context samajhne ki ability: situation, goal, history, environment, etc.
- Adaptive behavior

## Models vs Agents

- Models are the brain, they are not agents
- Models + tools + memory + planning = powerful AI agent
- Applications typically use backend services (controllers, APIs, business logic) to orchestrate interactions with models. The model is one component of the overall system, not the entire application.

## Pehle K Zamane

1. Collect thousands of data (e.g. pictures of cats and dogs)
2. Clean the data
3. Hire an ML engineer (expensive)
4. Train the model (time and money)
5. Deploy to the server (machine learning ops)
6. Maintain the servers

## Then Aya Naya Zamana

1. Big companies started scraping the internet to build datasets
2. LLM came
3. People can communicate with the models through APIs

> Swiggy analogy: you don't know how to cook, you open the app and order food, everything else is done by Swiggy

![[Pasted image 20260801195648.png]]

## Yeh Models Kya Kar Sakte Hai

1. Natural language samajhna
2. Context yaad rakhna
3. Code likhna

## Specialized Agents

- Jaise ek hospital mein alag alag doctors hote hain (ek heart ka, ek aakho ka), waise hi AI agents alag alag hote hain

![[Pasted image 20260801200552.png]]

Key takeaway:

- Har agent ka ek specific role hota hai
- Sahi agent = sahi kaam = zyada impact

![[Pasted image 20260801200809.png]]

> We are trying to create a conversational agent and a domain specific agent in the assignment. These are in highest demand in the market, no engineer is willing to do this.

## Types of Models

- Commercial models:
  - OpenAI ka GPT
  - Paid, lekin bahut capable
- Open source models:
  - Meta ka Llama, Mistral, Gemma by Google
  - Free, self-host can be done (infrastructure cost)

## Choosing a Model

1. Simple tasks (like answering a customer) — no high-end model needed
2. High complexity tasks (like analyzing legal documents, deep reasoning) — bada model chahiye
3. Chhote models = fast, saste, accurate (enough)
4. Bade models = slow, mahange, zyada accurate
5. **Query Classifier** (small agent) — routes simple queries to a chhota model and complex queries to a bada model

![[Pasted image 20260801202719.png]]

## Model Router

Your app -> model router (flex layer) -> different models (swap/add/remove models easily)

## AI Agent Loop
User
↓
Understand intent
↓
Reason
↓
Need a tool?
↓
If yes
↓
Call Tool
↓
Observe result
↓
Respond

## Effective agents banane ke principles aur team organization
- Scalable hona chahiye keeping in mind the cost (bill kitna aiga)
- Modularity yani alag alag part
- Continuos learning
- Resilience (yaani mushkil meh bhi kaam karna) like opencode send request again after 500 or server failure
- Future-proofing
