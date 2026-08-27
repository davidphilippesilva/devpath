const stages = [
  {
    title: 'Computer Science Foundations',
    desc: 'Understand how computers, memory, programs and problem-solving work before specializing in a stack.',
    label: 'FOUNDATION',
    items: ['CS50 — Introduction to Computer Science', 'Programming logic and control flow', 'How memory and data representation work', 'Functions, abstraction and decomposition', 'Object-oriented programming concepts']
  },
  {
    title: 'Linux & Development Environment',
    desc: 'Become comfortable with the terminal, files, permissions and the tools developers use every day.',
    label: 'ESSENTIAL',
    items: ['Install Linux, WSL or a Linux virtual machine', 'Navigate files and directories from the terminal', 'Understand paths, permissions and environment variables', 'Install software and packages from the command line', 'Configure your editor or IDE for development']
  },
  {
    title: 'Algorithms & Data Structures',
    desc: 'Learn how to reason about performance and choose the right structure for a problem.',
    label: 'CORE CS',
    items: ['Big O and time complexity', 'Arrays and linked lists', 'Stacks and queues', 'Searching and sorting algorithms', 'Trees and graphs', 'Recursion, hash maps and sets']
  },
  {
    title: 'Web Development Fundamentals',
    desc: 'Build broad development intuition through the practical freeCodeCamp curriculum.',
    label: 'PRACTICE',
    items: ['Responsive Web Design', 'JavaScript Algorithms and Data Structures', 'Front-End Development Libraries', 'Scientific Computing with Python', 'Relational Databases', 'Back-End Development and APIs']
  },
  {
    title: 'Choose a Direction',
    desc: 'Use roadmap.sh to understand the bigger picture. This roadmap continues with backend development.',
    label: 'DIRECTION',
    items: ['Open the Backend roadmap on roadmap.sh', 'Identify topics you already understand', 'Mark the knowledge gaps that matter next', 'Choose one main language and ecosystem', 'Avoid trying to learn every tool at once']
  },
  {
    title: 'Core Language — Java',
    desc: 'Go deep enough in one language to stop fighting syntax and start thinking about software design.',
    label: 'LANGUAGE',
    items: ['Syntax, types and control flow', 'Classes, interfaces and object-oriented design', 'Collections and generics', 'Exception handling', 'Streams and lambdas', 'Basic concurrency', 'Java course — Amigoscode', 'Java Programming MOOC — University of Helsinki']
  },
  {
    title: 'Spring Boot & Databases',
    desc: 'Build production-style APIs, persist data and learn the backend patterns used in real applications.',
    label: 'BACKEND',
    items: ['Spring Boot fundamentals', 'Design REST APIs', 'Spring Data JPA', 'Spring Security basics', 'Write SQL without an ORM', 'PostgreSQL or MySQL', 'JOINs and relational modeling', 'Basic database indexing', 'Practice SQL with SQLBolt']
  },
  {
    title: 'Git, GitHub & Docker',
    desc: 'Learn the minimum delivery workflow required to share, reproduce and run your projects professionally.',
    label: 'DELIVERY',
    items: ['Use Git confidently', 'Branches, pull requests and clean commit history', 'Write useful GitHub READMEs', 'Docker images and containers', 'Write a Dockerfile', 'Use Docker Compose', 'Containerize one of your backend projects']
  }
];

const resources = [
  ['HARVARD', 'CS50 — Introduction to Computer Science', 'Computer science fundamentals, algorithms, memory and problem-solving.', 'https://cs50.harvard.edu/x/', 'Computer Science'],
  ['ALGORITHMS', 'The Last Algorithms Course You’ll Need', 'ThePrimeagen’s practical course on algorithms and data structures.', 'https://theprimeagen.github.io/fem-algos/', 'Algorithms'],
  ['CURRICULUM', 'freeCodeCamp', 'Project-based certifications covering web, JavaScript, Python, databases and backend.', 'https://www.freecodecamp.org/learn/', 'Web Development'],
  ['ROADMAP', 'roadmap.sh — Backend', 'A visual map of the knowledge areas expected from backend developers.', 'https://roadmap.sh/backend', 'Career Direction'],
  ['JAVA', 'Java Programming MOOC — Helsinki', 'A deep, free Java course with exercises and object-oriented programming.', 'https://java-programming.mooc.fi/', 'Java'],
  ['JAVA', 'Amigoscode', 'Java, Spring Boot and backend engineering tutorials and courses.', 'https://www.youtube.com/@amigoscode', 'Java / Spring'],
  ['SPRING', 'Spring Academy', 'Official guided learning for Spring and Spring Boot.', 'https://spring.academy/', 'Spring Boot'],
  ['SQL', 'SQLBolt', 'Interactive lessons for SQL queries, JOINs and relational databases.', 'https://sqlbolt.com/', 'Databases'],
  ['DOCKER', 'Docker Crash Course — TechWorld with Nana', 'A practical introduction to images, containers, registries and Dockerfiles.', 'https://www.youtube.com/watch?v=pg19Z8LL06w', 'DevOps']
];

const progressKey = 'devpath-progress-v2';
const themeKey = 'devpath-theme-v2';
const progress = JSON.parse(localStorage.getItem(progressKey) || '{}');
const roadmapEl = document.querySelector('#roadmapList');
const resourceGrid = document.querySelector('#resourceGrid');

function renderRoadmap() {
  roadmapEl.innerHTML = stages.map((stage, stageIndex) => `
    <article class="stage" data-stage="${stageIndex}">
      <div class="stage-marker">${String(stageIndex + 1).padStart(2, '0')}</div>
      <div class="stage-card">
        <div class="stage-head">
          <div>
            <h3>${stage.title}</h3>
            <p>${stage.desc}</p>
          </div>
          <span class="stage-badge">${stage.label}</span>
        </div>
        <div class="stage-progress">
          <div class="mini-track"><div class="mini-bar"></div></div>
          <span class="stage-progress-text">0 / ${stage.items.length} complete</span>
        </div>
        <div class="checklist">
          ${stage.items.map((item, itemIndex) => `
            <label class="check">
              <input type="checkbox" data-id="${stageIndex}-${itemIndex}" ${progress[`${stageIndex}-${itemIndex}`] ? 'checked' : ''}>
              <span>${item}</span>
            </label>`).join('')}
        </div>
      </div>
    </article>`).join('');

  document.querySelectorAll('input[type="checkbox"]').forEach(box => {
    box.addEventListener('change', () => {
      progress[box.dataset.id] = box.checked;
      localStorage.setItem(progressKey, JSON.stringify(progress));
      updateProgress();
    });
  });
}

function renderResources() {
  resourceGrid.innerHTML = resources.map(([type, title, desc, url, topic]) => `
    <a class="resource" href="${url}" target="_blank" rel="noopener">
      <div class="resource-top"><span class="resource-type">${type}</span><span class="resource-arrow">↗</span></div>
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="resource-footer">${topic}</div>
    </a>`).join('');
}

function getBoxes() {
  return [...document.querySelectorAll('input[type="checkbox"]')];
}

function updateProgress() {
  const boxes = getBoxes();
  const done = boxes.filter(box => box.checked).length;
  const total = boxes.length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  document.querySelector('#progressPercent').textContent = `${percent}%`;
  document.querySelector('#progressBar').style.width = `${percent}%`;
  document.querySelector('#doneCount').textContent = done;
  document.querySelector('#totalCount').textContent = total;

  const status = percent === 100 ? 'Roadmap complete' : percent >= 70 ? 'Strong momentum' : percent >= 30 ? 'Building consistency' : 'Getting started';
  document.querySelector('#statusText').textContent = status;

  stages.forEach((stage, stageIndex) => {
    const stageEl = document.querySelector(`[data-stage="${stageIndex}"]`);
    const stageBoxes = stage.items.map((_, itemIndex) => document.querySelector(`[data-id="${stageIndex}-${itemIndex}"]`));
    const stageDone = stageBoxes.filter(box => box?.checked).length;
    const stagePercent = Math.round((stageDone / stage.items.length) * 100);
    stageEl.querySelector('.mini-bar').style.width = `${stagePercent}%`;
    stageEl.querySelector('.stage-progress-text').textContent = `${stageDone} / ${stage.items.length} complete`;
    stageEl.classList.toggle('completed', stageDone === stage.items.length);
  });

  const firstIncomplete = boxes.find(box => !box.checked);
  if (firstIncomplete) {
    const [stageIndex, itemIndex] = firstIncomplete.dataset.id.split('-').map(Number);
    document.querySelector('#nextTopic').textContent = stages[stageIndex].items[itemIndex];
    document.querySelector('#nextStage').textContent = `Stage ${String(stageIndex + 1).padStart(2, '0')} · ${stages[stageIndex].title}`;
  } else {
    document.querySelector('#nextTopic').textContent = 'Build another project from scratch';
    document.querySelector('#nextStage').textContent = 'Roadmap complete · Keep shipping';
  }

  applyCurrentFilter();
}

let currentFilter = 'all';
function applyCurrentFilter() {
  document.querySelectorAll('.stage').forEach(stageEl => {
    const boxes = [...stageEl.querySelectorAll('input[type="checkbox"]')];
    const done = boxes.filter(box => box.checked).length;
    const isDone = done === boxes.length;
    const matches = currentFilter === 'all' || (currentFilter === 'done' && isDone) || (currentFilter === 'todo' && !isDone);
    stageEl.classList.toggle('hidden', !matches);
  });
}

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    applyCurrentFilter();
  });
});

document.querySelector('#continueBtn').addEventListener('click', () => {
  const next = getBoxes().find(box => !box.checked);
  if (next) {
    next.closest('.stage').scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => next.closest('.check').focus?.(), 450);
  } else {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  }
});

document.querySelector('#resetProgress').addEventListener('click', () => {
  if (!confirm('Reset all saved roadmap progress?')) return;
  localStorage.removeItem(progressKey);
  Object.keys(progress).forEach(key => delete progress[key]);
  getBoxes().forEach(box => { box.checked = false; });
  updateProgress();
});

const themeToggle = document.querySelector('#themeToggle');
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(themeKey, theme);
  themeToggle.textContent = theme === 'light' ? '☾' : '☼';
  document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'light' ? '#f5f7f9' : '#08090c');
}
setTheme(localStorage.getItem(themeKey) || 'dark');
themeToggle.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'));

renderRoadmap();
renderResources();
updateProgress();
