"use client";


import { useEffect, useState, type ReactNode, type FormEvent } from "react";


import {

  Mail,

  MapPin,

  ExternalLink,

  Terminal,

  Code2,

  BrainCircuit,

  Smartphone,

  Database,

  ChevronDown,

  ArrowUpRight,

  Menu,

  X,

} from "lucide-react";


import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


/* =========================================================

   PROJECTS

\========================================================= */


const projects = [

  {

    number: "01",

    title: "E-Learning Platform",

    description:

      "A complete educational web platform for organizing courses, lessons, educational videos, quizzes, and student progress with a dedicated administration panel.",

    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],

    github: null,

  },


  {

    number: "02",

    title: "AI Drowsiness Detection System",

    description:

      "An AI-powered real-time driver drowsiness detection system that analyzes facial features and eye movements to detect signs of fatigue.",

    technologies: [

      "Python",

      "TensorFlow",

      "Keras",

      "MobileNetV2",

      "OpenCV",

      "MediaPipe",

    ],

    github: null,

  },


  {

    number: "03",

    title: "Smart Pool Rescue System",

    description:

      "An AI-powered pool safety system that monitors swimmers, analyzes body movements, and detects potential drowning incidents to enable rapid response.",

    technologies: [

      "Python",

      "YOLO",

      "OpenCV",

      "TensorFlow",

      "Deep Learning",

      "Computer Vision",

    ],

    github:

      "https://github.com/engMohamedmostafa-ai/Smart-Pool-Rescue-System",

  },


  {

    number: "04",

    title: "Breast Cancer Prediction System",

    description:

      "An AI-powered medical diagnostic application designed to process data and images and provide early breast cancer classification through an intuitive web interface.",

    technologies: [

      "Python",

      "Flask",

      "Machine Learning",

      "Deep Learning",

      "OpenCV",

      "HTML5",

      "CSS3",

    ],

    github:

      "https://github.com/engMohamedmostafa-ai/Breast-Cancer-Prediction",

  },


  {

    number: "05",

    title: "EG Dental Clinic Website",

    description:

      "A responsive modern website for a dental clinic featuring interactive interfaces, treatment sections, service carousels, and optimized mobile experiences.",

    technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Git"],

    github: "https://github.com/engMohamedmostafa-ai/EG-dental",

    demo: "https://engmohamedmostafa-ai.github.io/EG-dental/",

  },


  {

    number: "06",

    title: "Dental Case Manager",

    description:

      "A professional web application for dental technicians to manage dentists and clinical cases with real-time search, FDI tooth charts, PDF reports, offline caching, and Firebase security.",

    technologies: [

      "HTML5",

      "CSS3",

      "JavaScript",

      "Firebase",

      "Firestore",

      "jsPDF",

      "Git",

    ],

    github: "https://github.com/engMohamedmostafa-ai/Mohamed-Nafaa",

  },


  {

    number: "07",

    title: "AI Tourism System",

    description:

      "An AI-powered smart tourism platform combining intelligent assistance, personalized recommendations, computer vision, and generative deep learning.",

    technologies: [

      "Python",

      "TensorFlow",

      "Keras",

      "GANs",

      "NLP",

      "OpenCV",

      "Computer Vision",

    ],

    github: "https://github.com/engMohamedmostafa-ai/AI-Tourism",

  },


  {

    number: "08",

    title: "AI Tourism Chatbot",

    description:

      "An intelligent conversational assistant for travelers that processes natural language queries, answers FAQs, recommends locations, and assists with itineraries.",

    technologies: ["Python", "NLP", "Deep Learning", "NLTK", "TensorFlow"],

    github: "https://github.com/engMohamedmostafa-ai/AI-Tourism",

  },


  {

    number: "09",

    title: "AI Tourism Image Generation",

    description:

      "A generative AI application using GANs to create and process imagery for tourism marketing and digital exploration of cultural landmarks.",

    technologies: [

      "Python",

      "TensorFlow",

      "Keras",

      "GANs",

      "Deep Learning",

      "OpenCV",

    ],

    github: "https://github.com/engMohamedmostafa-ai/AI-Tourism",

    demo: "https://engmohamedmostafa-ai.github.io/Mohamed-Nafaa/",

  },


  {

    number: "10",

    title: "Hando — Mobile Application",

    description:

      "A universal task platform that connects people who need something done with nearby helpers who can do it on their behalf. Users simply describe the task, and Hando handles matching, safety checks, execution, and payment.",

    technologies: [

      "Android",

      "Kotlin",

      "Java",

      "Firebase",

      "Node.js",

      "FCM",

      "Gradle",

    ],

    github: null,

  },

];


/* =========================================================

   SKILLS

\========================================================= */


const skills = [

  "HTML",

  "CSS",

  "JavaScript",

  "PHP",

  "MySQL",

  "Python",

  "Machine Learning",

  "TensorFlow",

  "Keras",

  "OpenCV",

  "MediaPipe",

  "Android",

  "Java",

  "GitHub",

  "AI Chatbots",

  "API Integration",

  "UI/UX",

  "Computer Vision",

  "Deep Learning",

  "Full-Stack Development",

];


/* =========================================================

   CERTIFICATES

\========================================================= */


const certificates = [

  "Bachelor of Science in Artificial Intelligence",

  "Getting Started with Deep Learning — NVIDIA",

  "Artificial Intelligence Fundamentals — IBM SkillsBuild",

  "Enterprise Design Thinking Practitioner — IBM",

  "Enterprise Design Thinking — Team Essentials for AI — IBM",

  "Introduction to Artificial Intelligence — IBM SkillsBuild",

  "Python Programming Basics — ITI Mahara-Tech",

  "SQL Intermediate — SoloLearn",

];


/* =========================================================

   MATRIX BACKGROUND

\========================================================= */


function MatrixBackground() {

  useEffect(() => {

    const canvas = document.getElementById(

      "matrix-canvas"

    ) as HTMLCanvasElement | null;


    if (!canvas) return;


    const ctx = canvas.getContext("2d");


    if (!ctx) return;


    let animationFrame: number;


    const resize = () => {

      canvas.width = window.innerWidth;

      canvas.height = window.innerHeight;

    };


    resize();


    const characters =

      "01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ";


    const fontSize = 14;


    let columns = Math.floor(canvas.width / fontSize);


    let drops = Array(columns).fill(1);


    const draw = () => {

      ctx.fillStyle = "rgba(0, 0, 0, 0.075)";


      ctx.fillRect(

        0,

        0,

        canvas.width,

        canvas.height

      );


      ctx.font = `${fontSize}px monospace`;


      for (let i = 0; i < drops.length; i++) {

        const character =

          characters[

            Math.floor(

              Math.random() * characters.length

            )

          ];


        ctx.fillStyle = "#00ff66";


        ctx.globalAlpha =

          Math.random() * 0.5 + 0.1;


        ctx.fillText(

          character,

          i * fontSize,

          drops[i] * fontSize

        );


        ctx.globalAlpha = 1;


        if (

          drops[i] * fontSize > canvas.height &&

          Math.random() > 0.975

        ) {

          drops[i] = 0;

        }


        drops[i]++;

      }


      animationFrame =

        requestAnimationFrame(draw);

    };


    draw();


    const handleResize = () => {

      resize();


      columns = Math.floor(

        canvas.width / fontSize

      );


      drops = Array(columns).fill(1);

    };


    window.addEventListener(

      "resize",

      handleResize

    );


    return () => {

      cancelAnimationFrame(animationFrame);


      window.removeEventListener(

        "resize",

        handleResize

      );

    };

  }, []);


  return (

    <canvas

      id="matrix-canvas"

      className="pointer-events-none fixed inset-0 z-0 opacity-[0.12]"

    />

  );

}


/* =========================================================

   TYPEWRITER

\========================================================= */


function TypeWriter() {

  const texts = [

    "Full-Stack Web Developer",

    "Android Developer",

    "AI & Machine Learning Enthusiast",

    "Computer Vision Developer",

  ];


  const [text, setText] = useState("");


  const [index, setIndex] = useState(0);


  const [deleting, setDeleting] = useState(false);


  useEffect(() => {

    const current = texts[index];


    const timer = setTimeout(

      () => {

        if (!deleting) {

          setText(

            current.substring(

              0,

              text.length + 1

            )

          );


          if (text.length === current.length) {

            setDeleting(true);

          }

        } else {

          setText(

            current.substring(

              0,

              text.length - 1

            )

          );


          if (text.length === 0) {

            setDeleting(false);


            setIndex(

              (prev) =>

                (prev + 1) % texts.length

            );

          }

        }

      },

      deleting

        ? 45

        : text.length === current.length

          ? 1600

          : 75

    );


    return () =>

      clearTimeout(timer);

  }, [

    text,

    index,

    deleting,

  ]);


  return (

    <span className="text-[#00ff66]">

      {text}


      <span className="terminal-cursor">

        ▋

      </span>

    </span>

  );

}


/* =========================================================

   INTERACTIVE TERMINAL

\========================================================= */


function InteractiveTerminal() {

  const [command, setCommand] =

    useState("");


  const [history, setHistory] =

    useState<string[]>([]);


  const executeCommand = (

    input: string

  ) => {

    const cmd =

      input.trim().toLowerCase();


    if (!cmd) return;


    if (cmd === "clear") {

      setHistory([]);

      setCommand("");

      return;

    }


    const commands: Record<

      string,

      string

    > = {

      help: `Available commands:


about

skills

projects

experience

education

certificates

contact

github

linkedin

whoami

clear`,


      about:

        "Opening about section...",


      skills:

        "Opening technical skills...",


      projects:

        "Opening projects...",


      experience:

        "Opening experience...",


      education:

        "Opening education...",


      certificates:

        "Opening certificates...",


      contact:

        "Opening contact information...",


      github:

        "Opening GitHub...",


      linkedin:

        "Opening LinkedIn...",


      whoami:

        "Mohammed Mostafa — Full-Stack Web Developer | Android Developer | AI & Machine Learning Enthusiast",

    };


    const response =

      commands[cmd] ||

      `Command not found: ${cmd}. Type "help" for available commands.`;


    setHistory((prev) => [

      ...prev,

      `visitor@web:~$ ${input}`,

      response,

    ]);


    setCommand("");


    if (cmd === "about") {

      document

        .getElementById("about")

        ?.scrollIntoView({

          behavior: "smooth",

        });

    }


    if (cmd === "skills") {

      document

        .getElementById("skills")

        ?.scrollIntoView({

          behavior: "smooth",

        });

    }


    if (cmd === "projects") {

      document

        .getElementById("projects")

        ?.scrollIntoView({

          behavior: "smooth",

        });

    }


    if (cmd === "experience") {

      document

        .getElementById("experience")

        ?.scrollIntoView({

          behavior: "smooth",

        });

    }


    if (cmd === "education") {

      document

        .getElementById("education")

        ?.scrollIntoView({

          behavior: "smooth",

        });

    }


    if (cmd === "certificates") {

      document

        .getElementById("certificates")

        ?.scrollIntoView({

          behavior: "smooth",

        });

    }


    if (cmd === "contact") {

      document

        .getElementById("contact")

        ?.scrollIntoView({

          behavior: "smooth",

        });

    }


    if (cmd === "github") {

      window.open(

        "https://github.com/engMohamedmostafa-ai",

        "_blank"

      );

    }


    if (cmd === "linkedin") {

      window.open(

        "https://www.linkedin.com/in/mohamed-mostafa-abo-elsaad-19206730",

        "_blank"

      );

    }

  };


  const handleSubmit = (

    event: FormEvent<HTMLFormElement>

  ) => {

    event.preventDefault();


    executeCommand(command);

  };


  return (

    <div className="border-b border-[#00ff66]/20 bg-[#020702] px-4 py-4 font-mono text-xs">


      {/* HISTORY */}


      <div className="mb-3 max-h-40 overflow-y-auto whitespace-pre-wrap">


        {history.map(

          (line, index) => (

            <div

              key={`${line}-${index}`}

              className={

                line.startsWith(

                  "visitor@web"

                )

                  ? "mb-1 text-gray-400"

                  : "mb-3 text-[#00ff66]/80"

              }

            >

              {line}

            </div>

          )

        )}


      </div>


      {/* INPUT */}


      <form

        onSubmit={handleSubmit}

        className="flex items-center gap-2"

      >


        <span className="shrink-0 text-[#00ff66]">

          visitor@web:~$

        </span>


        <input

          value={command}

          onChange={(event) =>

            setCommand(

              event.target.value

            )

          }

          placeholder='type "help"'

          autoComplete="off"

          spellCheck={false}

          className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-gray-700"

        />


        <span className="terminal-cursor text-[#00ff66]">

          ▋

        </span>


      </form>


    </div>

  );

}


/* =========================================================

   HOME

\========================================================= */


export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (

    <main className="min-h-screen bg-black text-white selection:bg-[#00ff66] selection:text-black">

      <style jsx global>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 700ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        [data-reveal].is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal] {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <MatrixBackground />


      <div className="relative z-10">


        {/* =================================================

            NAVBAR

        ================================================= */}


        <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#00ff66]/20 bg-black/85 backdrop-blur-md">

          <div className="mx-auto max-w-6xl px-5">

            <div className="flex items-center justify-between py-4">

              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm font-bold tracking-widest text-[#00ff66]"
              >
                MOHAMMED@DEV
              </a>

              {/* DESKTOP NAVIGATION */}
              <div className="hidden items-center gap-6 font-mono text-xs text-gray-400 md:flex">
                <a href="#about" className="transition hover:text-[#00ff66]">
                  ./about
                </a>
                <a href="#skills" className="transition hover:text-[#00ff66]">
                  ./skills
                </a>
                <a href="#projects" className="transition hover:text-[#00ff66]">
                  ./projects
                </a>
                <a href="#experience" className="transition hover:text-[#00ff66]">
                  ./experience
                </a>
                <a href="#contact" className="transition hover:text-[#00ff66]">
                  ./contact
                </a>
              </div>

              {/* DESKTOP CONTACT */}
              <a
                href="https://wa.me/201033685145"
                className="hidden font-mono text-xs text-[#00ff66] md:block"
              >
                [CONTACT]
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={
                  mobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={mobileMenuOpen}
                className="flex items-center gap-2 border border-[#00ff66]/30 px-3 py-2 font-mono text-xs text-[#00ff66] transition hover:border-[#00ff66] hover:bg-[#00ff66]/5 md:hidden"
              >
                {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
                <span>{mobileMenuOpen ? "[CLOSE]" : "[MENU]"}</span>
              </button>

            </div>

            {/* MOBILE NAVIGATION */}
            {mobileMenuOpen && (
              <div className="border-t border-[#00ff66]/20 py-4 md:hidden">
                <div className="flex flex-col font-mono text-xs">
                  <a
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-gray-900 px-2 py-3 text-gray-400 transition hover:bg-[#00ff66]/5 hover:text-[#00ff66]"
                  >
                    <span className="mr-2 text-[#00ff66]">$</span> ./about
                  </a>

                  <a
                    href="#skills"
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-gray-900 px-2 py-3 text-gray-400 transition hover:bg-[#00ff66]/5 hover:text-[#00ff66]"
                  >
                    <span className="mr-2 text-[#00ff66]">$</span> ./skills
                  </a>

                  <a
                    href="#projects"
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-gray-900 px-2 py-3 text-gray-400 transition hover:bg-[#00ff66]/5 hover:text-[#00ff66]"
                  >
                    <span className="mr-2 text-[#00ff66]">$</span> ./projects
                  </a>

                  <a
                    href="#experience"
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-gray-900 px-2 py-3 text-gray-400 transition hover:bg-[#00ff66]/5 hover:text-[#00ff66]"
                  >
                    <span className="mr-2 text-[#00ff66]">$</span> ./experience
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-gray-900 px-2 py-3 text-gray-400 transition hover:bg-[#00ff66]/5 hover:text-[#00ff66]"
                  >
                    <span className="mr-2 text-[#00ff66]">$</span> ./contact
                  </a>

                  <a
                    href="mailto:m7mdab0elsaad@gmail.com"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-2 py-3 text-[#00ff66] transition hover:bg-[#00ff66]/5"
                  >
                    <span className="mr-2 text-gray-600">$</span>
                    mailto:m7mdab0elsaad@gmail.com
                  </a>
                </div>
              </div>
            )}

          </div>

        </nav>

        {/* =================================================

            HERO

        ================================================= */}


        <section

          id="home"

          data-reveal

          className="flex min-h-screen items-center justify-center px-5 pt-20"

        >


          <div className="w-full max-w-5xl">


            <div className="overflow-hidden rounded-lg border border-[#00ff66]/30 bg-black/90 shadow-[0_0_60px_rgba(0,255,102,0.08)]">


              {/* TERMINAL HEADER */}


              <div className="flex items-center gap-2 border-b border-[#00ff66]/20 bg-[#07100a] px-4 py-3">


                <span className="h-3 w-3 rounded-full bg-red-500/80" />


                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />


                <span className="h-3 w-3 rounded-full bg-[#00ff66]/80" />


                <span className="ml-3 font-mono text-xs text-gray-500">

                  mohammed@portfolio:~

                </span>


              </div>


              {/* INTERACTIVE TERMINAL */}


              <InteractiveTerminal />


              {/* HERO CONTENT */}


              <div className="p-7 font-mono md:p-12">


                <div className="mb-5 text-sm text-gray-500">


                  <span className="text-[#00ff66]">

                    visitor@web

                  </span>


                  <span>:</span>


                  <span className="text-blue-400">

                    ~

                  </span>


                  <span>$</span>{" "}


                  <span className="text-gray-300">

                    whoami

                  </span>


                </div>


                <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-7xl">


                  Mohammed{" "}


                  <span className="text-[#00ff66]">

                    Mostafa

                  </span>


                </h1>


                <div className="mb-8 text-lg md:text-2xl">


                  <span className="text-gray-500">

                    &gt;{" "}

                  </span>


                  <TypeWriter />


                </div>


                <p className="max-w-3xl font-sans text-sm leading-7 text-gray-400 md:text-base">


                  Creative and passionate software developer building modern

                  web applications, Android applications, AI/ML systems,

                  and interactive digital experiences.


                </p>


                <div className="mt-8 flex flex-wrap gap-4">


                  <a

                    href="#projects"

                    className="group flex items-center gap-2 border border-[#00ff66] bg-[#00ff66] px-5 py-3 font-mono text-sm font-bold text-black transition hover:bg-transparent hover:text-[#00ff66]"

                  >


                    <Terminal size={16} />


                    ./view-projects


                    <ArrowUpRight

                      size={15}

                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"

                    />


                  </a>


                  <a

                    href="https://wa.me/201033685145"

                    className="flex items-center gap-2 border border-gray-700 px-5 py-3 font-mono text-sm text-gray-300 transition hover:border-[#00ff66] hover:text-[#00ff66]"

                  >


                    <FaWhatsapp size={16} />


                    ./contact


                  </a>


                </div>


                <div className="mt-10 flex flex-wrap gap-5 text-xs text-gray-500">


                  <span className="flex items-center gap-2">


                    <MapPin size={14} />


                    Egypt


                  </span>


                  <a

                    href="https://github.com/engMohamedmostafa-ai"

                    target="_blank"

                    rel="noreferrer"

                    className="flex items-center gap-2 transition hover:text-[#00ff66]"

                  >


                    <FaGithub size={14} />


                    GitHub


                  </a>


                  <a

                    href="https://www.linkedin.com/in/mohamed-mostafa-abo-elsaad-19206730"

                    target="_blank"

                    rel="noreferrer"

                    className="flex items-center gap-2 transition hover:text-[#00ff66]"

                  >


                    <FaLinkedinIn size={14} />


                    LinkedIn


                  </a>


                </div>


              </div>


            </div>


            <div className="mt-8 flex justify-center text-[#00ff66]/60">


              <ChevronDown className="animate-bounce" />


            </div>


          </div>


        </section>


        {/* =================================================

            ABOUT

        ================================================= */}


        <section

          id="about"

          data-reveal

          className="mx-auto max-w-6xl px-5 py-28"

        >


          <SectionTitle

            command="cat about.txt"

            title="ABOUT_ME"

          />


          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">


            <TerminalCard>


              <div className="space-y-3 font-mono text-sm">


                <p>


                  <span className="text-gray-500">

                    name:

                  </span>{" "}


                  <span className="text-[#00ff66]">

                    Mohammed Mostafa

                  </span>


                </p>


                <p>


                  <span className="text-gray-500">

                    location:

                  </span>{" "}


                  Egypt


                </p>


                <p>


                  <span className="text-gray-500">

                    status:

                  </span>{" "}


                  <span className="text-[#00ff66]">

                    available

                  </span>


                </p>


                <p>


                  <span className="text-gray-500">

                    focus:

                  </span>{" "}


                  Software Engineering + AI


                </p>


              </div>


            </TerminalCard>


            <div className="font-sans leading-8 text-gray-400">


              <p className="mb-5">


                Creative and passionate software developer with experience

                building modern web applications, Android applications,

                artificial intelligence and machine learning projects,

                and interactive digital experiences.


              </p>


              <p>


                My work combines{" "}


                <span className="text-[#00ff66]">

                  full-stack development

                </span>

                ,{" "}


                <span className="text-[#00ff66]">

                  mobile development

                </span>

                ,{" "}


                <span className="text-[#00ff66]">

                  computer vision

                </span>

                ,{" "}


                <span className="text-[#00ff66]">

                  deep learning

                </span>{" "}


                and practical software engineering to create smart,

                secure, scalable and visually impressive applications.


              </p>


            </div>


          </div>


        </section>


        {/* =================================================

            SKILLS

        ================================================= */}


        <section

          id="skills"

          data-reveal

          className="border-y border-[#00ff66]/10 bg-[#020602] py-28"

        >


          <div className="mx-auto max-w-6xl px-5">


            <SectionTitle

              command="ls ./skills"

              title="TECH_STACK"

            />


            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">


              <SkillCard

                icon={<Code2 />}

                title="WEB"

                items={[

                  "HTML",

                  "CSS",

                  "JavaScript",

                  "PHP",

                  "Bootstrap",

                  "Full-Stack",

                ]}

              />


              <SkillCard

                icon={<BrainCircuit />}

                title="AI / ML"

                items={[

                  "Python",

                  "TensorFlow",

                  "Keras",

                  "OpenCV",

                  "MediaPipe",

                  "Deep Learning",

                ]}

              />


              <SkillCard

                icon={<Smartphone />}

                title="MOBILE"

                items={[

                  "Android",

                  "Java",

                  "Kotlin",

                  "Firebase",

                  "Gradle",

                ]}

              />


              <SkillCard

                icon={<Database />}

                title="DATA"

                items={[

                  "MySQL",

                  "Firestore",

                  "Databases",

                  "API Integration",

                  "Git",

                  "GitHub",

                ]}

              />


            </div>


            <div className="mt-10 flex flex-wrap gap-2">


              {skills.map(

                (skill) => (

                  <span

                    key={skill}

                    className="border border-[#00ff66]/20 bg-black px-3 py-2 font-mono text-xs text-gray-400 transition hover:border-[#00ff66] hover:text-[#00ff66]"

                  >

                    {skill}

                  </span>

                )

              )}


            </div>


          </div>


        </section>


        {/* =================================================

            PROJECTS

        ================================================= */}


        <section

          id="projects"

          data-reveal

          className="mx-auto max-w-6xl px-5 py-28"

        >


          <SectionTitle

            command="find ./projects -type project"

            title="PROJECTS"

          />


          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                data-reveal
                style={{ animationDelay: `${Number(project.number) * 70}ms` }}
                className="group relative flex min-h-[390px] flex-col overflow-hidden border border-gray-800 bg-black/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff66]/60 hover:bg-[#020a04] hover:shadow-[0_20px_60px_rgba(0,255,102,0.08)]"
              >
                {/* subtle top accent */}
                <div className="absolute left-0 top-0 h-px w-0 bg-[#00ff66] transition-all duration-500 group-hover:w-full" />

                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-600">
                      project
                    </span>
                    <div className="mt-1 font-mono text-2xl font-bold text-[#00ff66]/70 transition group-hover:text-[#00ff66]">
                      {project.number}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} GitHub repository`}
                        className="flex h-9 w-9 items-center justify-center border border-gray-800 text-gray-500 transition hover:border-[#00ff66] hover:bg-[#00ff66]/5 hover:text-[#00ff66]"
                      >
                        <FaGithub size={17} />
                      </a>
                    ) : (
                      <span
                        title="No public repository"
                        className="flex h-9 w-9 items-center justify-center border border-gray-900 text-gray-700"
                      >
                        <FaGithub size={17} />
                      </span>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} live demo`}
                        className="flex h-9 w-9 items-center justify-center border border-gray-800 text-gray-500 transition hover:border-[#00ff66] hover:bg-[#00ff66]/5 hover:text-[#00ff66]"
                      >
                        <ExternalLink size={17} />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-2 font-mono text-[10px] text-[#00ff66]/60">
                    <span>$</span>
                    <span>./run {project.title.toLowerCase().replace(/\s+/g, "-")}</span>
                  </div>

                  <h3 className="mb-4 font-mono text-xl font-bold leading-tight text-white transition group-hover:text-[#00ff66] md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="font-sans text-sm leading-7 text-gray-500 transition group-hover:text-gray-400">
                    {project.description}
                  </p>
                </div>

                <div className="mt-7 border-t border-gray-900 pt-5">
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-gray-600">
                    stack
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-[#00ff66]/10 bg-[#00ff66]/[0.03] px-2.5 py-1.5 font-mono text-[10px] text-[#00ff66]/70 transition group-hover:border-[#00ff66]/20 group-hover:text-[#00ff66]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between font-mono text-[10px] text-gray-700">
                  <span>
                    {project.github ? "repository: public" : "repository: private"}
                  </span>

                  {project.demo ? (
                    <span className="text-[#00ff66]/50">live: available</span>
                  ) : (
                    <span>live: unavailable</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* =================================================

            EXPERIENCE

        ================================================= */}


        <section

          id="experience"

          data-reveal

          className="border-y border-[#00ff66]/10 bg-[#020602] py-28"

        >


          <div className="mx-auto max-w-6xl px-5">


            <SectionTitle

              command="cat experience.log"

              title="EXPERIENCE"

            />


            <div className="space-y-5">


              <ExperienceItem

                title="Full-Stack Web Development"

                description="Building database-driven web applications, educational platforms, authentication systems, admin dashboards, REST/API integrations, and interactive user interfaces."

              />


              <ExperienceItem

                title="Android Development"

                description="Developing Android applications with modern mobile development technologies, focusing on responsive interfaces, functionality, performance, and user experience."

              />


              <ExperienceItem

                title="AI & Machine Learning"

                description="Developing practical AI projects involving image classification, computer vision, NLP, deep learning, and real-time detection using Python and TensorFlow/Keras."

              />


              <ExperienceItem

                title="Database Development"

                description="Designing and working with MySQL databases for web and application-based systems."

              />


              <ExperienceItem

                title="UI/UX Development"

                description="Creating responsive, modern, interactive, and user-friendly interfaces for web and mobile applications."

              />


            </div>


          </div>


        </section>


        {/* =================================================

            EDUCATION

        ================================================= */}


        <section

          id="education"

          data-reveal

          className="mx-auto max-w-6xl px-5 py-28"

        >


          <SectionTitle

            command="cat education.txt"

            title="EDUCATION"

          />


          <TerminalCard>


            <div className="font-mono">


              <div className="mb-2 text-[#00ff66]">

                &gt; ./education --current

              </div>


              <h3 className="text-xl font-bold text-white">

                Egyptian Russian University

              </h3>


              <p className="mt-2 text-gray-400">

                Faculty of Artificial Intelligence

              </p>


              <p className="mt-1 text-gray-500">

                Bachelor of Science in Artificial Intelligence

              </p>


              <p className="mt-4 text-sm text-[#00ff66]">

                2026

              </p>


            </div>


          </TerminalCard>


        </section>


        {/* =================================================

            CERTIFICATES

        ================================================= */}


        <section

          id="certificates"

          data-reveal

          className="border-y border-[#00ff66]/10 bg-[#020602] py-28"

        >


          <div className="mx-auto max-w-6xl px-5">


            <SectionTitle

              command="ls ./certificates"

              title="CERTIFICATES"

            />


            <div className="grid gap-3 md:grid-cols-2">


              {certificates.map(

                (certificate, index) => (


                  <div

                    key={certificate}

                    className="flex gap-4 border border-gray-800 bg-black p-5 transition hover:border-[#00ff66]/50"

                  >


                    <span className="font-mono text-xs text-[#00ff66]">


                      [

                      {String(

                        index + 1

                      ).padStart(

                        2,

                        "0"

                      )}

                      ]


                    </span>


                    <span className="font-sans text-sm text-gray-400">


                      {certificate}


                    </span>


                  </div>


                )

              )}


            </div>


          </div>


        </section>


        {/* =================================================

            CONTACT

        ================================================= */}


        <section

          id="contact"

          data-reveal

          className="mx-auto max-w-4xl px-5 py-32"

        >


          <div className="text-center">


            <p className="mb-4 font-mono text-sm text-[#00ff66]">

              &gt; ./connect

            </p>


            <h2 className="mb-6 font-mono text-4xl font-bold md:text-6xl">


              LET&apos;S BUILD

              <br />


              SOMETHING{" "}


              <span className="text-[#00ff66]">

                GREAT

              </span>


            </h2>


            <p className="mx-auto mb-10 max-w-2xl font-sans leading-7 text-gray-500">


              Have an idea, project, or opportunity?

              Feel free to reach out.

              Mohammed is always interested in building useful

              and innovative software solutions.


            </p>


            <div className="flex flex-wrap justify-center gap-4">


              <a

                href="mailto:m7mdab0elsaad@gmail.com"

                className="flex items-center gap-2 border border-[#00ff66] bg-[#00ff66] px-6 py-3 font-mono text-sm font-bold text-black transition hover:bg-transparent hover:text-[#00ff66]"

              >


                <Mail size={17} />


                m7mdab0elsaad@gmail.com


              </a>


              <a

                href="https://github.com/engMohamedmostafa-ai"

                target="_blank"

                rel="noreferrer"

                className="flex items-center gap-2 border border-gray-700 px-6 py-3 font-mono text-sm text-gray-300 transition hover:border-[#00ff66] hover:text-[#00ff66]"

              >


                <FaGithub size={17} />


                GitHub


              </a>


              <a

                href="https://www.linkedin.com/in/mohamed-mostafa-abo-elsaad-19206730"

                target="_blank"

                rel="noreferrer"

                className="flex items-center gap-2 border border-gray-700 px-6 py-3 font-mono text-sm text-gray-300 transition hover:border-[#00ff66] hover:text-[#00ff66]"

              >


                <FaLinkedinIn size={17} />


                LinkedIn


              </a>
              <a
  href="https://wa.me/201033685145"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-2 border border-gray-700 px-6 py-3 font-mono text-sm text-gray-300 transition hover:border-[#00ff66] hover:text-[#00ff66]"
>
  <FaWhatsapp size={17} />
  WhatsApp
</a>


            </div>


          </div>


        </section>


        {/* =================================================

            FOOTER

        ================================================= */}


        <footer className="border-t border-[#00ff66]/20 bg-black px-5 py-8">


          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs text-gray-600 md:flex-row">


            <span>

              © 2026 Mohammed Mostafa. All rights reserved.

            </span>


            <span>


              <span className="text-[#00ff66]">

                STATUS:

              </span>{" "}


              ONLINE


            </span>


          </div>


        </footer>


      </div>


    </main>

  );

}


/* =========================================================

   SECTION TITLE

\========================================================= */


function SectionTitle({

  command,

  title,

}: {

  command: string;

  title: string;

}) {

  return (

    <div className="mb-12">


      <div className="mb-3 font-mono text-xs text-[#00ff66]">

        &gt; {command}

      </div>


      <div className="flex items-center gap-4">


        <h2 className="font-mono text-3xl font-bold md:text-4xl">

          {title}

        </h2>


        <div className="h-px flex-1 bg-gradient-to-r from-[#00ff66]/40 to-transparent" />


      </div>


    </div>

  );

}


/* =========================================================

   TERMINAL CARD

\========================================================= */


function TerminalCard({

  children,

}: {

  children: ReactNode;

}) {

  return (

    <div className="border border-[#00ff66]/20 bg-black/80 p-6 shadow-[0_0_30px_rgba(0,255,102,0.03)]">


      {children}


    </div>

  );

}


/* =========================================================

   SKILL CARD

\========================================================= */


function SkillCard({

  icon,

  title,

  items,

}: {

  icon: ReactNode;

  title: string;

  items: string[];

}) {

  return (

    <div data-reveal className="border border-gray-800 bg-black p-5 transition hover:border-[#00ff66]/50">


      <div className="mb-5 flex items-center gap-3 text-[#00ff66]">


        {icon}


        <span className="font-mono text-sm font-bold">

          {title}

        </span>


      </div>


      <div className="space-y-2 font-mono text-xs text-gray-500">


        {items.map(

          (item) => (


            <div key={item}>


              <span className="mr-2 text-[#00ff66]">

                ›

              </span>


              {item}


            </div>


          )

        )}


      </div>


    </div>

  );

}


/* =========================================================

   EXPERIENCE ITEM

\========================================================= */


function ExperienceItem({

  title,

  description,

}: {

  title: string;

  description: string;

}) {

  return (

    <div data-reveal className="border-l-2 border-[#00ff66]/40 bg-black p-6 transition hover:border-[#00ff66]">


      <div className="mb-2 font-mono text-lg font-bold text-white">

        {title}

      </div>


      <p className="font-sans text-sm leading-7 text-gray-500">

        {description}

      </p>


    </div>

  );

}