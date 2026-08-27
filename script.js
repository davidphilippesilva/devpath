const stages = [
{
  title:"How to Learn Programming",
  subtitle:"Build the habits that prevent tutorial hell.",
  topics:[
    ["Understand the Learn → Practice → Build loop","Turn passive learning into active skill.","METHOD"],
    ["Use the 30/70 rule","Spend less time watching and more time solving and building.","METHOD"],
    ["Learn to explain concepts","If you can teach it simply, you probably understand it.","METHOD"],
    ["Create a consistent weekly routine","Consistency beats random 8-hour study marathons.","HABIT"]
  ]
},
{
  title:"Computer Science Foundations",
  subtitle:"Understand what your code is actually running on.",
  topics:[
    ["CS50x","Study programming, memory, algorithms, C, Python, SQL and web fundamentals.","COURSE"],
    ["Variables, types and operators","The basic building blocks of programs.","CORE"],
    ["Conditions, loops and functions","Control program flow and reuse logic.","CORE"],
    ["Arrays, strings and memory basics","Understand how data is represented and accessed.","CORE"],
    ["CPU, RAM, storage and processes","Learn enough computer fundamentals to stop treating the machine as magic.","SYSTEMS"]
  ]
},
{
  title:"Algorithms & Data Structures",
  subtitle:"Train problem solving without turning it into your whole identity.",
  topics:[
    ["Big O notation","Understand O(1), O(log n), O(n), O(n log n) and O(n²).","ALGO"],
    ["Arrays, lists, stacks and queues","Core linear structures.","DS"],
    ["Hash maps and hash sets","Fast lookup, uniqueness and counting patterns.","DS"],
    ["Trees, graphs and heaps","Hierarchical, relational and priority structures.","DS"],
    ["Binary search, DFS and BFS","Foundational search algorithms.","ALGO"],
    ["Two pointers and sliding window","Common patterns for array/string problems.","PATTERN"],
    ["LeetCode in moderation","One focused problem a day is enough early on.","PRACTICE"]
  ]
},
{
  title:"Java Core",
  subtitle:"Use one language long enough to become genuinely comfortable.",
  topics:[
    ["Java syntax and core types","Variables, methods, arrays, strings, packages and enums.","JAVA"],
    ["Object-oriented programming","Classes, objects, encapsulation, polymorphism, interfaces and composition.","JAVA"],
    ["Collections and generics","List, Set, Map, Queue and generic types.","JAVA"],
    ["Exceptions and stack traces","Handle failures and learn to debug from real errors.","JAVA"],
    ["Immutability and equality","Understand records, equals, hashCode and safer object design.","JAVA"],
    ["Testing basics","Write unit tests with JUnit before frameworks get complex.","TEST"]
  ]
},
{
  title:"Developer Environment",
  subtitle:"Become comfortable working like a developer.",
  topics:[
    ["Terminal basics","pwd, ls, cd, mkdir, cp, mv, rm, cat, grep, find and curl.","TOOL"],
    ["Linux or WSL","Use a reliable environment without turning distro-hopping into a hobby.","SYSTEM"],
    ["Git fundamentals","Commit, branch, merge, pull, push and resolve conflicts.","GIT"],
    ["GitHub workflow","Repositories, pull requests and readable READMEs.","GIT"],
    ["Environment variables and PATH","Understand how programs find tools and configuration.","SYSTEM"]
  ]
},
{
  title:"Web Fundamentals",
  subtitle:"Understand the web before using a backend framework.",
  topics:[
    ["Client, server and DNS","Know what happens between a browser and a server.","WEB"],
    ["HTTP and HTTPS","Requests, responses, headers, methods and status codes.","WEB"],
    ["JSON and REST","Model resources and design predictable APIs.","API"],
    ["HTML and CSS basics","Understand the frontend you will eventually serve data to.","WEB"],
    ["JavaScript and fetch() basics","Call APIs and understand browser-side behavior.","WEB"]
  ]
},
{
  title:"Databases & SQL",
  subtitle:"Learn the database directly before hiding it behind an ORM.",
  topics:[
    ["PostgreSQL basics","Create databases, tables and relationships.","DB"],
    ["SELECT, INSERT, UPDATE, DELETE","The essential SQL operations.","SQL"],
    ["JOIN, GROUP BY and HAVING","Query relational data properly.","SQL"],
    ["Keys and constraints","Primary keys, foreign keys and integrity rules.","DB"],
    ["Indexes and query thinking","Understand why some queries are fast and others are not.","DB"],
    ["Transactions and ACID","Keep business operations consistent.","DB"]
  ]
},
{
  title:"Spring Boot Backend",
  subtitle:"Now use a framework because you understand the problems it solves.",
  topics:[
    ["Spring Core and dependency injection","Understand inversion of control instead of memorizing annotations.","SPRING"],
    ["Controllers, services and repositories","Separate HTTP, business logic and persistence.","SPRING"],
    ["DTOs and validation","Control API contracts and reject bad input.","API"],
    ["Spring Data JPA","Map entities and relationships without forgetting SQL underneath.","SPRING"],
    ["Error handling and API responses","Create predictable failures and useful messages.","API"],
    ["Pagination and filtering","Design APIs that scale beyond tiny datasets.","API"]
  ]
},
{
  title:"Security & Testing",
  subtitle:"Make software safer and prove that it behaves correctly.",
  topics:[
    ["Authentication vs authorization","Know the difference clearly.","SECURITY"],
    ["Password hashing","Never store raw passwords.","SECURITY"],
    ["Sessions, JWT and cookies","Understand common authentication strategies.","SECURITY"],
    ["OAuth 2.0 and OpenID Connect","Learn delegated identity at a conceptual level.","SECURITY"],
    ["Spring Security","Apply security rules intentionally.","SPRING"],
    ["Integration tests and Testcontainers","Test your API and database together.","TEST"]
  ]
},
{
  title:"Docker, CI/CD & Deployment",
  subtitle:"Move from 'works on my machine' to software others can run.",
  topics:[
    ["Docker images and containers","Understand Dockerfile, images, containers and ports.","DOCKER"],
    ["Docker Compose","Run your API and PostgreSQL together.","DOCKER"],
    ["Volumes and networks","Persist data and connect containers.","DOCKER"],
    ["GitHub Actions","Build, test and package on every push.","CI/CD"],
    ["Deploy a real application","Use a VPS, platform or cloud service and learn from production.","DEPLOY"],
    ["Logs, secrets and environments","Operate software responsibly.","OPS"]
  ]
},
{
  title:"Software Architecture",
  subtitle:"Learn architecture after you have software worth structuring.",
  topics:[
    ["Structured monolith","Start simple and keep clear boundaries.","ARCH"],
    ["Controller / service / repository boundaries","Give each layer a reason to exist.","ARCH"],
    ["Clean and hexagonal architecture concepts","Use them as design ideas, not folder religions.","ARCH"],
    ["DDD basics","Model business concepts and rules intentionally.","ARCH"],
    ["Caching with Redis","Use caching only when you understand the problem.","ARCH"],
    ["Queues and messaging","Learn events, producers, consumers and eventual consistency.","ARCH"],
    ["Microservices later","Study distributed systems only when a monolith is no longer enough.","ARCH"]
  ]
},
{
  title:"Job Readiness",
  subtitle:"Turn skills into evidence and evidence into opportunities.",
  topics:[
    ["Build 2–3 serious projects","Quality beats dozens of unfinished repositories.","CAREER"],
    ["Write excellent READMEs","Explain the problem, architecture, setup, trade-offs and future work.","CAREER"],
    ["Study real job descriptions","Use recurring requirements to guide what you learn next.","CAREER"],
    ["Practice explaining decisions","Interviews test thinking and communication, not just syntax.","CAREER"],
    ["Prepare your resume and LinkedIn","Show what you built and what problems you solved.","CAREER"],
    ["Start applying before you feel ready","You do not need to finish the entire roadmap.","CAREER"]
  ]
}
];

const storageKey = "devRoadmap2026Progress";
let progress = JSON.parse(localStorage.getItem(storageKey) || "{}");
let currentFilter = "all";
let currentSearch = "";

const roadmapList = document.getElementById("roadmapList");
const searchInput = document.getElementById("searchInput");
const filters = document.querySelectorAll(".filter");

function topicId(stageIndex, topicIndex){
  return `s${stageIndex}-t${topicIndex}`;
}

function render(){
  roadmapList.innerHTML = "";
  stages.forEach((stage, sIdx) => {
    const visibleTopics = stage.topics
      .map((t,tIdx)=>({t,tIdx,id:topicId(sIdx,tIdx),done:!!progress[topicId(sIdx,tIdx)]}))
      .filter(({t,done}) => {
        const matchesSearch = (t[0] + " " + t[1] + " " + t[2]).toLowerCase().includes(currentSearch.toLowerCase());
        const matchesFilter = currentFilter === "all" || (currentFilter === "done" ? done : !done);
        return matchesSearch && matchesFilter;
      });

    if(!visibleTopics.length && (currentSearch || currentFilter !== "all")) return;

    const total = stage.topics.length;
    const done = stage.topics.filter((_,i)=>progress[topicId(sIdx,i)]).length;
    const pct = Math.round((done/total)*100);

    const el = document.createElement("article");
    el.className = "stage";
    el.dataset.stage = sIdx;
    el.innerHTML = `
      <div class="stage-head">
        <div class="stage-number">STAGE ${String(sIdx+1).padStart(2,"0")}</div>
        <div class="stage-title"><h3>${stage.title}</h3><p>${stage.subtitle}</p></div>
        <div class="stage-progress"><strong>${pct}%</strong><small>${done}/${total} topics</small></div>
      </div>
      <div class="stage-body">
        ${visibleTopics.map(({t,tIdx,id,done})=>`
          <label class="topic ${done ? "done":""}">
            <input type="checkbox" data-id="${id}" ${done ? "checked":""}>
            <div>
              <div class="topic-name">${t[0]}</div>
              <div class="topic-desc">${t[1]}</div>
            </div>
            <span class="topic-tag">${t[2]}</span>
          </label>`).join("")}
      </div>`;
    roadmapList.appendChild(el);
  });

  document.querySelectorAll(".stage-head").forEach(h => {
    h.addEventListener("click",()=>h.parentElement.classList.toggle("open"));
  });

  document.querySelectorAll(".topic input").forEach(cb => {
    cb.addEventListener("click",e=>e.stopPropagation());
    cb.addEventListener("change",()=>{
      progress[cb.dataset.id] = cb.checked;
      localStorage.setItem(storageKey, JSON.stringify(progress));
      render();
      updateSummary();
    });
  });

  updateSummary();
}

function updateSummary(){
  const ids = [];
  stages.forEach((s,si)=>s.topics.forEach((_,ti)=>ids.push(topicId(si,ti))));
  const done = ids.filter(id=>progress[id]).length;
  const total = ids.length;
  const pct = total ? Math.round(done/total*100) : 0;

  document.getElementById("progressPercent").textContent = pct+"%";
  document.getElementById("ringValue").textContent = pct+"%";
  document.getElementById("progressBar").style.width = pct+"%";
  document.getElementById("progressRing").style.background = `conic-gradient(var(--accent) ${pct*3.6}deg,var(--line) 0deg)`;
  document.getElementById("doneCount").textContent = done;
  document.getElementById("topicCount").textContent = total;
  document.getElementById("stageCount").textContent = stages.length;

  let next = null;
  outer: for(let si=0;si<stages.length;si++){
    for(let ti=0;ti<stages[si].topics.length;ti++){
      const id = topicId(si,ti);
      if(!progress[id]){
        next = {si,ti,topic:stages[si].topics[ti][0]};
        break outer;
      }
    }
  }
  document.getElementById("nextTopic").textContent = next ? next.topic : "Roadmap complete — keep building";
  document.getElementById("nextStage").textContent = next ? `Stage ${String(next.si+1).padStart(2,"0")} · ${stages[next.si].title}` : "Great work";
}

searchInput.addEventListener("input",e=>{currentSearch=e.target.value;render()});
filters.forEach(btn=>btn.addEventListener("click",()=>{
  filters.forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = btn.dataset.filter;
  render();
}));

document.getElementById("continueBtn").addEventListener("click",()=>{
  let target = null;
  outer: for(let si=0;si<stages.length;si++){
    for(let ti=0;ti<stages[si].topics.length;ti++){
      if(!progress[topicId(si,ti)]){target=si;break outer}
    }
  }
  if(target === null) target = stages.length-1;
  const el = document.querySelector(`[data-stage="${target}"]`);
  if(el){el.classList.add("open");el.scrollIntoView({behavior:"smooth",block:"center"})}
});

document.getElementById("themeBtn").addEventListener("click",()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("devRoadmapTheme", document.body.classList.contains("light") ? "light":"dark");
});
if(localStorage.getItem("devRoadmapTheme")==="light") document.body.classList.add("light");

document.getElementById("resetBtn").addEventListener("click",()=>{
  if(confirm("Reset all roadmap progress?")){
    progress={};
    localStorage.removeItem(storageKey);
    render();
  }
});

render();
