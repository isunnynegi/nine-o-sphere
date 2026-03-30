const demoData = {
  algebra: {
    label: "Algebra",
    problem: "Solve: 3x + 9 = 24",
    steps: ["Subtract 9 from both sides -> 3x = 15", "Divide both sides by 3 -> x = 5", "Check: 3(5) + 9 = 24"],
  },
  geometry: {
    label: "Geometry",
    problem: "Find area of triangle: base = 12, height = 9",
    steps: ["Use formula A = 1/2 x b x h", "A = 1/2 x 12 x 9", "A = 54 square units"],
  },
  arithmetic: {
    label: "Arithmetic",
    problem: "Find average: 12, 18, 22, 28",
    steps: ["Add numbers -> 12 + 18 + 22 + 28 = 80", "Count numbers -> 4", "Average = 80 / 4 = 20"],
  },
};

const testimonials = [
  {
    name: "Aarav Mehta",
    photo: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    review: "My confidence in algebra improved in just 6 weeks. The tutor made every concept easy to understand.",
  },
  {
    name: "Diya Sharma",
    photo: "https://i.pravatar.cc/100?img=32",
    rating: 5,
    review: "Live classes are very interactive and doubts are solved instantly. My test scores jumped significantly.",
  },
  {
    name: "Rohan Verma",
    photo: "https://i.pravatar.cc/100?img=24",
    rating: 4,
    review: "The personalized study plan keeps me consistent. Progress tracking helps me focus on weak topics.",
  },
  {
    name: "Ira Kapoor",
    photo: "https://i.pravatar.cc/100?img=5",
    rating: 5,
    review: "Excellent mentors and structured sessions. This is the best math learning platform I have used.",
  },
];

const audienceData = {
  students: {
    title: "A motivating student-first learning journey",
    description:
      "Gamified milestones, instant doubt help, and personal tutor attention keep students active and confident.",
    points: [
      "Daily challenge sets with streak rewards",
      "Live whiteboard problem solving in every class",
      "Weekly mastery reports by chapter",
    ],
  },
  parents: {
    title: "Parent visibility without constant follow-up",
    description:
      "Track attendance, concept clarity, and class quality from one simple dashboard with regular tutor feedback.",
    points: [
      "Weekly email summaries and score trends",
      "Tutor notes on behavior and improvement areas",
      "Transparent session recordings and homework status",
    ],
  },
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function generateQuestionBank() {
  const bank = {
    class6_8: [],
    class9_10: [],
    class11_12: [],
    jee: [],
  };

  // 35 questions: arithmetic basics
  for (let i = 0; i < 35; i += 1) {
    const a = randomInt(12, 98);
    const b = randomInt(11, 87);
    const type = i % 4;
    if (type === 0) bank.class6_8.push({ question: `${a} + ${b} = ?`, answer: a + b });
    if (type === 1) bank.class6_8.push({ question: `${a} - ${b} = ?`, answer: a - b });
    if (type === 2) bank.class6_8.push({ question: `${randomInt(7, 25)} x ${randomInt(3, 12)} = ?`, answer: 0 });
    if (type === 3) {
      const p = randomInt(2, 9);
      const q = randomInt(10, 24);
      bank.class6_8.push({ question: `${p} x (${q} + 3) = ?`, answer: p * (q + 3) });
    }
  }

  // Fix multiplication placeholders to keep generation compact
  bank.class6_8 = bank.class6_8.map((item) => {
    if (item.answer !== 0) return item;
    const [x, y] = item.question.replace(" = ?", "").split(" x ").map((n) => Number(n));
    return { question: item.question, answer: x * y };
  });

  // 35 questions: class 9-10 algebra and exponents
  for (let i = 0; i < 35; i += 1) {
    const type = i % 3;
    if (type === 0) {
      const x = randomInt(3, 18);
      const a = randomInt(2, 9);
      const b = randomInt(3, 20);
      const c = a * x + b;
      bank.class9_10.push({ question: `Solve for x: ${a}x + ${b} = ${c}`, answer: x });
    }
    if (type === 1) {
      const base = randomInt(2, 8);
      const p = randomInt(2, 5);
      const q = randomInt(1, 4);
      bank.class9_10.push({
        question: `Evaluate: ${base}^${p} x ${base}^${q}`,
        answer: base ** (p + q),
      });
    }
    if (type === 2) {
      const a = randomInt(10, 35);
      const b = randomInt(2, 14);
      bank.class9_10.push({ question: `Find value: (a + b)^2 for a=${a}, b=${b}`, answer: (a + b) ** 2 });
    }
  }

  // 35 questions: class 11-12 focus
  for (let i = 0; i < 35; i += 1) {
    const type = i % 3;
    if (type === 0) {
      const root1 = randomInt(2, 10);
      const root2 = randomInt(1, 9);
      const sum = root1 + root2;
      const product = root1 * root2;
      bank.class11_12.push({
        question: `If x^2 - ${sum}x + ${product} = 0, find the larger root.`,
        answer: Math.max(root1, root2),
      });
    }
    if (type === 1) {
      const a = randomInt(2, 8);
      const d = randomInt(2, 9);
      const n = randomInt(8, 18);
      bank.class11_12.push({
        question: `Find nth term of AP: a=${a}, d=${d}, n=${n}`,
        answer: a + (n - 1) * d,
      });
    }
    if (type === 2) {
      const n = randomInt(12, 48);
      const r = randomInt(2, 6);
      let value = 1;
      for (let j = 0; j < r; j += 1) value *= n - j;
      bank.class11_12.push({ question: `Evaluate permutation P(${n}, ${r})`, answer: value });
    }
  }

  // 35 questions: JEE basics mixed
  for (let i = 0; i < 35; i += 1) {
    const type = i % 4;
    if (type === 0) {
      const x = randomInt(2, 8);
      const y = randomInt(2, 9);
      bank.jee.push({
        question: `Evaluate: (${x} + ${y})^2 - (${x} - ${y})^2`,
        answer: 4 * x * y,
      });
    }
    if (type === 1) {
      const a = randomInt(2, 12);
      const b = randomInt(2, 12);
      const c = randomInt(2, 12);
      bank.jee.push({
        question: `Find determinant: | ${a} ${b}; ${b} ${c} |`,
        answer: a * c - b * b,
      });
    }
    if (type === 2) {
      const n = randomInt(6, 15);
      bank.jee.push({
        question: `Find sum of first ${n} natural numbers.`,
        answer: (n * (n + 1)) / 2,
      });
    }
    if (type === 3) {
      const x1 = randomInt(1, 9);
      const y1 = randomInt(1, 9);
      const x2 = randomInt(11, 20);
      const y2 = randomInt(11, 20);
      const dx = x2 - x1;
      const dy = y2 - y1;
      bank.jee.push({
        question: `Find distance squared between (${x1}, ${y1}) and (${x2}, ${y2}).`,
        answer: dx * dx + dy * dy,
      });
    }
  }

  return bank;
}

const questionBank = generateQuestionBank();
const practiceState = {
  activeClass: "class6_8",
  queues: {},
  currentQuestionByClass: {},
  questionNumberByClass: {},
  hasAnsweredByClass: {},
  feedbackByClass: {},
  attempted: 0,
  correct: 0,
  streak: 0,
  bestStreak: 0,
};

function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.target || 0);
        let current = 0;
        const duration = 1400;
        const stepTime = 16;
        const totalSteps = Math.floor(duration / stepTime);
        const increment = Math.max(1, Math.ceil(target / totalSteps));

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = `${current.toLocaleString()}${target >= 5000 ? "+" : ""}`;
        }, stepTime);

        obs.unobserve(el);
      });
    },
    { threshold: 0.35 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function renderDemoTab(tabKey) {
  const topic = demoData[tabKey];
  if (!topic) return;

  const topicName = document.getElementById("topic-name");
  const problemText = document.getElementById("problem-text");
  const stepsList = document.getElementById("steps-list");

  topicName.textContent = topic.label;
  problemText.textContent = topic.problem;
  stepsList.innerHTML = "";

  // Animate each step in sequence for a live-tutorial feel.
  topic.steps.forEach((step, index) => {
    setTimeout(() => {
      const li = document.createElement("li");
      li.textContent = step;
      stepsList.appendChild(li);
    }, 380 * (index + 1));
  });
}

function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  if (!tabButtons.length) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
      });

      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      renderDemoTab(btn.dataset.tab);
    });
  });

  renderDemoTab("algebra");
}

function createStars(count) {
  return "★".repeat(count) + "☆".repeat(Math.max(0, 5 - count));
}

function renderTestimonials(startIndex = 0) {
  const track = document.getElementById("testimonial-track");
  if (!track) return;

  const isMobile = window.matchMedia("(max-width: 759px)").matches;
  const visibleCount = isMobile ? 1 : 3;
  const sliced = [];

  for (let i = 0; i < visibleCount; i += 1) {
    const idx = (startIndex + i) % testimonials.length;
    sliced.push(testimonials[idx]);
  }

  track.innerHTML = sliced
    .map(
      (item) => `
      <article class="testimonial-card">
        <div class="person">
          <img src="${item.photo}" alt="${item.name}" loading="lazy" />
          <h3>${item.name}</h3>
        </div>
        <p class="stars" aria-label="${item.rating} out of 5 stars">${createStars(item.rating)}</p>
        <p>${item.review}</p>
      </article>
    `
    )
    .join("");
}

function setupTestimonials() {
  let index = 0;
  const prevBtn = document.getElementById("prev-testimonial");
  const nextBtn = document.getElementById("next-testimonial");
  const slider = document.querySelector(".testimonial-slider");
  let autoPlayTimer = null;

  renderTestimonials(index);

  const goNext = () => {
    index = (index + 1) % testimonials.length;
    renderTestimonials(index);
  };

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + testimonials.length) % testimonials.length;
      renderTestimonials(index);
    });

    nextBtn.addEventListener("click", goNext);
  }

  window.addEventListener("resize", () => renderTestimonials(index));

  const startAutoPlay = () => {
    clearInterval(autoPlayTimer);
    autoPlayTimer = window.setInterval(goNext, 3600);
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayTimer);
  };

  if (slider) {
    slider.addEventListener("mouseenter", stopAutoPlay);
    slider.addEventListener("mouseleave", startAutoPlay);
    slider.addEventListener("focusin", stopAutoPlay);
    slider.addEventListener("focusout", startAutoPlay);
  }

  startAutoPlay();
}

function renderAudience(type = "students") {
  const panel = document.getElementById("audience-panel");
  const data = audienceData[type];
  if (!panel || !data) return;

  panel.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.description}</p>
    <ul>
      ${data.points.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function setupAudienceTabs() {
  const tabs = document.querySelectorAll(".audience-tab");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      renderAudience(tab.dataset.audience);
    });
  });

  renderAudience("students");
}

function setupFaqAccordion() {
  const questions = document.querySelectorAll(".faq-question");
  if (!questions.length) return;

  questions.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".faq-item");
      if (!parent) return;

      const isOpen = parent.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((item) => item.classList.remove("open"));
      if (!isOpen) parent.classList.add("open");
    });
  });
}

function setupScrollProgress() {
  const progressBar = document.getElementById("scroll-progress-bar");
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
}

function setupMobileNav() {
  const navToggle = document.getElementById("nav-toggle");
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".nav a");
  if (!navToggle || !header) return;

  navToggle.addEventListener("click", () => {
    const willOpen = !header.classList.contains("nav-open");
    header.classList.toggle("nav-open", willOpen);
    navToggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
    navToggle.textContent = willOpen ? "✕" : "☰";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.textContent = "☰";
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 760) {
      header.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.textContent = "☰";
    }
  });
}

function setupHeroLetterRain() {
  const canvas = document.getElementById("hero-letter-rain");
  const hero = document.querySelector(".hero");
  if (!canvas || !hero) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const isMobile = window.matchMedia("(max-width: 759px)").matches;
  const lowPowerDevice =
    (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);

  // Heavy animation is skipped on lower-powered mobile devices.
  if (isMobile && lowPowerDevice) return;

  const glyphs = ["x", "y", "z", "+", "-", "=", "π", "Σ", "√", "θ", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const goldColors = ["rgba(215,178,77,0.32)", "rgba(184,138,0,0.28)", "rgba(255,248,223,0.24)"];
  const dprCap = isMobile ? 1.25 : 1.6;
  const frameInterval = 1000 / 30; // 30 FPS cap for smoother battery usage.

  let width = 0;
  let height = 0;
  let dpr = 1;
  let columns = [];
  let isVisible = true;
  let inViewport = true;
  let rafId = 0;
  let lastTs = 0;

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function resizeCanvas() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, dprCap);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const columnCount = Math.max(10, Math.floor(width / (isMobile ? 32 : 24)));
    columns = Array.from({ length: columnCount }, (_, i) => {
      const x = ((i + 0.5) * width) / columnCount + (Math.random() * 10 - 5);
      return {
        x,
        y: Math.random() * height,
        speed: (isMobile ? 0.34 : 0.46) + Math.random() * (isMobile ? 0.28 : 0.42),
        size: (isMobile ? 12 : 13) + Math.random() * 4,
        glyph: pick(glyphs),
        alpha: 0.14 + Math.random() * 0.22,
        color: pick(goldColors),
      };
    });
  }

  function drawFrame(ts) {
    if (!isVisible || !inViewport) {
      rafId = requestAnimationFrame(drawFrame);
      return;
    }

    if (ts - lastTs < frameInterval) {
      rafId = requestAnimationFrame(drawFrame);
      return;
    }
    lastTs = ts;

    ctx.clearRect(0, 0, width, height);

    // Faint veil keeps text readable while preserving motion.
    ctx.fillStyle = "rgba(18,13,0,0.06)";
    ctx.fillRect(0, 0, width, height);

    columns.forEach((col) => {
      ctx.font = `600 ${col.size}px Inter, system-ui, sans-serif`;
      ctx.fillStyle = col.color.replace(/0\.\d+\)/, `${col.alpha.toFixed(2)})`);
      ctx.fillText(col.glyph, col.x, col.y);

      col.y += col.speed;
      if (col.y > height + 18) {
        col.y = -12 - Math.random() * 22;
        col.glyph = pick(glyphs);
        col.color = pick(goldColors);
        col.alpha = 0.12 + Math.random() * 0.2;
      }
    });

    rafId = requestAnimationFrame(drawFrame);
  }

  const viewportObserver = new IntersectionObserver(
    (entries) => {
      inViewport = entries.some((entry) => entry.isIntersecting);
    },
    { threshold: 0.05 }
  );
  viewportObserver.observe(hero);

  const visibilityHandler = () => {
    isVisible = !document.hidden;
  };
  document.addEventListener("visibilitychange", visibilityHandler);
  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();
  rafId = requestAnimationFrame(drawFrame);

  // Optional cleanup for SPA-like navigation if needed in future.
  return () => {
    cancelAnimationFrame(rafId);
    viewportObserver.disconnect();
    document.removeEventListener("visibilitychange", visibilityHandler);
    window.removeEventListener("resize", resizeCanvas);
  };
}

function setupHeroParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!canHover) return;

  const parallaxTargets = hero.querySelectorAll("[data-parallax], .hero-glow-one, .hero-glow-two");
  if (!parallaxTargets.length) return;

  let rafId = 0;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  const animate = () => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    parallaxTargets.forEach((el) => {
      const depth = Number(el.getAttribute("data-parallax") || (el.classList.contains("hero-glow-two") ? 14 : 8));
      const moveX = (currentX * depth) / 48;
      const moveY = (currentY * depth) / 54;
      el.style.transform = `translate3d(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px, 0)`;
    });

    rafId = requestAnimationFrame(animate);
  };

  const onMove = (event) => {
    const rect = hero.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    targetX = (px - 0.5) * 2;
    targetY = (py - 0.5) * 2;
  };

  const reset = () => {
    targetX = 0;
    targetY = 0;
  };

  hero.addEventListener("mousemove", onMove);
  hero.addEventListener("mouseleave", reset);
  rafId = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(rafId);
    hero.removeEventListener("mousemove", onMove);
    hero.removeEventListener("mouseleave", reset);
  };
}

function getClassLabel(key) {
  if (key === "class6_8") return "Class 6-8";
  if (key === "class9_10") return "Class 9-10";
  if (key === "class11_12") return "Class 11-12";
  return "JEE Basics";
}

function nextPracticeQuestion(key = practiceState.activeClass) {
  const source = questionBank[key] || [];
  if (!source.length) return null;

  if (!practiceState.queues[key] || !practiceState.queues[key].length) {
    practiceState.queues[key] = shuffle(source);
  }

  const nextItem = practiceState.queues[key].pop();
  practiceState.currentQuestionByClass[key] = nextItem;
  practiceState.questionNumberByClass[key] = (practiceState.questionNumberByClass[key] || 0) + 1;
  practiceState.hasAnsweredByClass[key] = false;
  practiceState.feedbackByClass[key] = { text: "", className: "practice-feedback" };
  return nextItem;
}

function updatePracticeMetrics() {
  const attemptedEl = document.getElementById("metric-attempted");
  const correctEl = document.getElementById("metric-correct");
  const accuracyEl = document.getElementById("metric-accuracy");
  const streakEl = document.getElementById("metric-streak");
  const bestStreakEl = document.getElementById("metric-best-streak");

  if (!attemptedEl || !correctEl || !accuracyEl || !streakEl || !bestStreakEl) return;

  const accuracy = practiceState.attempted
    ? Math.round((practiceState.correct / practiceState.attempted) * 100)
    : 0;

  attemptedEl.textContent = String(practiceState.attempted);
  correctEl.textContent = String(practiceState.correct);
  accuracyEl.textContent = `${accuracy}%`;
  streakEl.textContent = String(practiceState.streak);
  bestStreakEl.textContent = String(practiceState.bestStreak);
}

function renderPracticeQuestion(useExisting = true, shouldFocusInput = true) {
  const questionEl = document.getElementById("practice-question");
  const classLabelEl = document.getElementById("practice-class-label");
  const questionIdEl = document.getElementById("practice-question-id");
  const answerInput = document.getElementById("practice-answer-input");
  const feedback = document.getElementById("practice-feedback");
  const nextBtn = document.getElementById("practice-next-btn");

  if (!questionEl || !classLabelEl || !questionIdEl || !answerInput || !feedback || !nextBtn) return;

  const key = practiceState.activeClass;
  let item = useExisting ? practiceState.currentQuestionByClass[key] : null;
  if (!item) item = nextPracticeQuestion(key);
  if (!item) {
    questionEl.textContent = "Questions are not available right now.";
    return;
  }

  classLabelEl.textContent = getClassLabel(key);
  questionIdEl.textContent = `Question #${practiceState.questionNumberByClass[key] || 1}`;
  questionEl.textContent = item.question;
  answerInput.value = "";
  const savedFeedback = practiceState.feedbackByClass[key] || { text: "", className: "practice-feedback" };
  feedback.textContent = savedFeedback.text;
  feedback.className = savedFeedback.className;
  if (shouldFocusInput) {
    answerInput.focus({ preventScroll: true });
  }
  nextBtn.disabled = !practiceState.hasAnsweredByClass[key];
}

function checkPracticeAnswer() {
  const answerInput = document.getElementById("practice-answer-input");
  const feedback = document.getElementById("practice-feedback");
  const nextBtn = document.getElementById("practice-next-btn");
  const key = practiceState.activeClass;
  const item = practiceState.currentQuestionByClass[key];

  if (!answerInput || !feedback || !nextBtn || !item) return;
  const raw = answerInput.value.trim();
  if (!raw) {
    feedback.textContent = "Please enter an answer first.";
    feedback.className = "practice-feedback wrong";
    return;
  }

  if (practiceState.hasAnsweredByClass[key]) {
    feedback.textContent = "Open the next question to continue.";
    feedback.className = "practice-feedback";
    return;
  }

  const userAnswer = Number(raw);
  if (Number.isNaN(userAnswer)) {
    feedback.textContent = "Please enter a numeric answer.";
    feedback.className = "practice-feedback wrong";
    return;
  }

  const isCorrect = Math.abs(userAnswer - item.answer) < 0.001;
  practiceState.attempted += 1;

  if (isCorrect) {
    practiceState.correct += 1;
    practiceState.streak += 1;
    practiceState.bestStreak = Math.max(practiceState.bestStreak, practiceState.streak);
    feedback.textContent = "Correct! Great work.";
    feedback.className = "practice-feedback correct";
  } else {
    practiceState.streak = 0;
    feedback.textContent = `Not quite. Correct answer: ${item.answer}`;
    feedback.className = "practice-feedback wrong";
  }

  practiceState.feedbackByClass[key] = {
    text: feedback.textContent,
    className: feedback.className,
  };
  updatePracticeMetrics();
  practiceState.hasAnsweredByClass[key] = true;
  nextBtn.disabled = false;
}

function setupQuickPractice() {
  const classTabs = document.querySelectorAll(".practice-class-tab");
  const checkBtn = document.getElementById("practice-check-btn");
  const nextBtn = document.getElementById("practice-next-btn");
  const answerInput = document.getElementById("practice-answer-input");
  if (!classTabs.length || !checkBtn || !nextBtn || !answerInput) return;

  classTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      classTabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      practiceState.activeClass = tab.dataset.class;
      renderPracticeQuestion(true, true);
    });
  });

  checkBtn.addEventListener("click", checkPracticeAnswer);
  nextBtn.addEventListener("click", () => renderPracticeQuestion(false, true));
  answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkPracticeAnswer();
  });

  updatePracticeMetrics();
  // Do not auto-scroll to Quick Practice on initial page load.
  renderPracticeQuestion(true, false);
}

document.addEventListener("DOMContentLoaded", () => {
  animateCounters();
  setupHeroLetterRain();
  setupHeroParallax();
  setupTabs();
  setupTestimonials();
  setupAudienceTabs();
  setupFaqAccordion();
  setupScrollProgress();
  setupMobileNav();
  setupQuickPractice();
});
