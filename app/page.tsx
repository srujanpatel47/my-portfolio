export default function Home() {
  const skills = {
    languages: ["Python", "SQL", "R"],
    analytics: ["Power BI", "Excel", "Data Cleaning", "Data Validation", "ETL"],
    ml: ["scikit-learn", "NumPy", "Pandas", "NLP", "Model Evaluation", "Machine Learning"],
    bigDataCloud: ["Apache Spark", "Hadoop", "AWS", "GCP"],
    tools: ["Git", "Flask", "Jira", "MS Dynamics", "Heroku"],
  };

  const experiences = [
    {
      company: "Vosyn",
      role: "Technical Business Analyst Intern",
      period: "Jan 2025 – Jun 2025",
      points: [
        "Translated AI product ideas into implementable requirements, edge cases, and acceptance criteria for NLP and LLM-driven features.",
        "Created process maps, lightweight technical specs, data flow notes, and evaluation checklists to support engineering and QA.",
        "Used Python, SQL, and Excel to size datasets, validate assumptions, and support market and competitor analysis.",
        "Maintained Jira backlog, wrote user stories, and supported UAT with structured test cases and issue triage.",
      ],
    },
    {
      company: "NielsenIQ",
      role: "Data Processing Specialist",
      period: "May 2023 – Jul 2024",
      points: [
        "Prepared and standardized retail measurement data for downstream reporting and analysis.",
        "Built SQL-based validation checks for row counts, joins, null handling, and anomaly detection to improve data quality.",
        "Created Power BI QA views to verify refresh completeness and support internal reporting needs.",
        "Improved data quality and reduced reporting inconsistencies through structured validation checks and anomaly detection.",
      ],
    },
    {
      company: "Dots & Coms",
      role: "Tech Support Executive Intern",
      period: "Jan 2023 – May 2023",
      points: [
        "Supported backend and database-related work using ASP.NET MVC, C#, and SQL Server.",
        "Wrote SQL queries and resolved integration and connectivity issues across systems.",
      ],
    },
  ];

  const projects = [
    {
      title: "AI-Powered Sudoku Solver",
      subtitle: "Hybrid ML + Search Algorithms",
      description:
        "Built a hybrid AI system combining machine learning with classical search algorithms to solve Sudoku puzzles more efficiently.",
      bullets: [
        "Implemented Backtracking, CSP, A* Search, and Dancing Links (DLX) approaches for solving Sudoku grids.",
        "Used model-based predictions to reduce the search space for classical solvers and improve solving performance.",
        "Designed the system to balance speed from ML-guided heuristics with accuracy from rule-based validation.",
        "Impact: Reduced solving time by ~25–35% and significantly lowered node exploration across algorithms.",
      ],
      stack: ["Python", "TensorFlow", "NumPy", "Google Colab", "Algorithms"],
      github: "https://github.com/srujanpatel47",
    },
    {
      title: "Affordable Housing in Ontario",
      subtitle: "Panel Data Analysis & Public Policy Insights",
      description:
        "Built a multi-year panel dataset from Ontario housing data and analyzed trends related to rent-geared-to-income delivery, public units, and private-market rent supplements.",
      bullets: [
        "Cleaned and standardized multi-year workbook data into a usable analytical dataset.",
        "Engineered indicators for regional comparison and trend analysis.",
        "Presented findings through clear charts and structured analysis.",
      ],
      stack: ["Python", "Excel", "Data Cleaning", "Analytics", "Visualization"],
      github: "https://github.com/srujanpatel47/affordable-housing-ontario-capstone",
    },
    {
      title: "WhatsApp Chat Analyzer",
      subtitle: "NLP Web App",
      description:
        "Built a Python-based NLP app to parse exported WhatsApp chats, generate descriptive insights, and summarize sentiment patterns through a lightweight web experience.",
      bullets: [
        "Processed chat exports into structured data for downstream analysis.",
        "Generated descriptive metrics and sentiment-oriented summaries.",
        "Designed the project to make chat analysis easy for non-technical users.",
      ],
      stack: ["Python", "NLP", "Flask", "Visualization"],
      github: "https://github.com/srujanpatel47/WhatsApp-Chat-Analyzer",
    },
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <main className="bg-[#f8fafc] text-slate-900 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-8 md:px-10">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-14">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-2">
              Portfolio
            </p>
            <h1 className="text-3xl md:text-4xl font-bold">Srujan Patel</h1>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-slate-900 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </header>

        <section className="grid md:grid-cols-[1.25fr_0.75fr] gap-8 items-stretch mb-20">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-4">
              Data Analyst | Machine Learning Background | Big Data Analytics
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Turning raw data into actionable insights using analytics, machine learning, and structured problem solving.
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mb-8 leading-8">
              I recently completed my M.Sc. in Big Data Analytics and hold a bachelor’s
              degree in Information Technology with a major in Machine Learning. My
              experience spans data analysis, SQL-based validation, reporting, NLP-style
              projects, and structured problem solving using Python, with additional
              exposure to Spark, Hadoop, and cloud technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/srujanpatel47"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl bg-slate-900 text-white font-medium hover:opacity-90 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/srujan-patel-6674b6212/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl border border-slate-300 bg-white font-medium hover:bg-slate-50 transition"
              >
                LinkedIn
              </a>
              <a
                href="/Srujan_Patel_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl border border-slate-300 bg-white font-medium hover:bg-slate-50 transition"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-7">
              <p className="text-sm text-slate-500 mb-2">Primary Fit</p>
              <h3 className="text-2xl font-semibold mb-3">Data Analyst</h3>
              <p className="text-slate-600 leading-7">
                Strongest alignment with analytics, SQL, data validation, reporting,
                and business-facing problem solving.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-7">
              <p className="text-sm text-slate-500 mb-2">Also Relevant For</p>
              <h3 className="text-2xl font-semibold mb-3">Data Scientist / Data Engineer</h3>
              <p className="text-slate-600 leading-7">
                Supported by machine learning coursework, NLP projects, and exposure to
                big data tools, data pipelines, and structured system thinking.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6">What I’m Looking For</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <h3 className="text-lg font-semibold mb-2">Data Analyst</h3>
                <p className="text-slate-600 leading-7">
                  My primary focus, especially roles involving SQL, reporting, dashboards, data quality, and business insights.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <h3 className="text-lg font-semibold mb-2">Data Scientist</h3>
                <p className="text-slate-600 leading-7">
                  Entry-level roles where I can apply machine learning, NLP, evaluation, and structured analytical thinking.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <h3 className="text-lg font-semibold mb-2">Data Engineer</h3>
                <p className="text-slate-600 leading-7">
                  Junior roles involving ETL, data pipelines, transformation workflows, and scalable data processing concepts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mb-20">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6">About</h2>
            <p className="text-slate-600 leading-8 text-lg max-w-4xl">
              I like working on data problems that start messy and become useful. My background
              combines analytics, machine learning concepts, and practical data work across
              reporting, validation, process support, and applied projects. I am especially
              interested in roles where I can clean and analyze data, build meaningful insights,
              and contribute to solutions that are understandable to both technical and
              non-technical stakeholders.
            </p>
          </div>
        </section>

        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
            <SkillCard title="Languages" items={skills.languages} />
            <SkillCard title="Data & Analytics" items={skills.analytics} />
            <SkillCard title="ML & Data Science" items={skills.ml} />
            <SkillCard title="Big Data & Cloud" items={skills.bigDataCloud} />
            <SkillCard title="Tools" items={skills.tools} />
          </div>
        </section>

        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-2xl font-semibold">{exp.role}</h3>
                    <p className="text-slate-600 mt-1">{exp.company}</p>
                  </div>
                  <p className="text-sm text-slate-500">{exp.period}</p>
                </div>

                <ul className="space-y-3 text-slate-600 leading-7">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-slate-400 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Projects</h2>
              <p className="text-slate-600">
                A selected set of projects spanning analytics, NLP, machine learning, and algorithmic problem solving.
              </p>
            </div>
          </div>

          <div className="grid gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 md:p-10 hover:shadow-md transition"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">
                      {project.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 leading-8 mb-6">
                      {project.description}
                    </p>

                    <ul className="space-y-3 text-slate-600 leading-7 mb-6">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-slate-400 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-2 rounded-full bg-slate-100 text-slate-700 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:min-w-[180px]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-5 py-3 rounded-2xl border border-slate-300 bg-white font-medium hover:bg-slate-50 transition"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-20">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-4">Resume</h2>
            <p className="text-slate-600 leading-8 max-w-3xl mb-6">
              Download my resume for a full overview of my experience, technical skills, and project work across analytics, machine learning, and data-focused problem solving.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/Srujan_Patel_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl bg-slate-900 text-white font-medium hover:opacity-90 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-10">
          <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-slate-300 leading-8 max-w-3xl mb-6">
              I’m open to full-time roles and new opportunities across data analytics, machine learning-adjacent work, and data-focused problem solving.
            </p>

            <div className="flex flex-col gap-3 text-slate-200">
              <a href="mailto:srujanpatel12@gmail.com" className="hover:text-white transition">
                srujanpatel12@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/srujan-patel-6674b6212/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/srujanpatel47"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-2 rounded-full bg-slate-100 text-slate-700 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}