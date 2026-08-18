import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Check,
  Menu,
  Search,
  Sparkles,
} from "lucide-react";

const applications = [
  {
    company: "Google",
    role: "Software Engineer",
    status: "Interview",
    statusStyle: "bg-blue-50 text-blue-600",
    logo: "G",
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    status: "Applied",
    statusStyle: "bg-neutral-100 text-neutral-600",
    logo: "M",
  },
  {
    company: "Atlassian",
    role: "Frontend Engineer",
    status: "Screening",
    statusStyle: "bg-amber-50 text-amber-600",
    logo: "A",
  },
  {
    company: "Amazon",
    role: "SDE Intern",
    status: "Applied",
    statusStyle: "bg-neutral-100 text-neutral-600",
    logo: "A",
  },
];

function ApplicationRow({ application }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-neutral-100 p-3 transition hover:border-neutral-200 hover:bg-neutral-50">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-sm font-semibold text-neutral-700">
        {application.logo}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-neutral-900">
          {application.company}
        </p>

        <p className="truncate text-xs text-neutral-400">
          {application.role}
        </p>
      </div>

      <span
        className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium ${application.statusStyle}`}
      >
        {application.status}
      </span>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-xl border border-neutral-100 p-3">
      <p className="text-[10px] text-neutral-400">{title}</p>

      <p className="mt-1 text-xl font-semibold tracking-tight text-neutral-950">
        {value}
      </p>
    </div>
  );
}

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full"
    >
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-neutral-200/50 blur-3xl" />

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.10)]">
        {/* Browser bar */}
        <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
          </div>

          <div className="hidden items-center gap-2 rounded-lg bg-neutral-50 px-4 py-1.5 text-[10px] text-neutral-400 sm:flex">
            app.applyflow.dev
          </div>

          <div className="w-8" />
        </div>

        {/* Dashboard */}
        <div className="grid md:grid-cols-[150px_1fr]">
          {/* Sidebar */}
          <aside className="hidden border-r border-neutral-100 bg-neutral-50/70 p-4 md:block">
            <div className="mb-7 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-950 text-white">
                <Sparkles size={13} />
              </div>

              <span className="text-xs font-semibold">ApplyFlow</span>
            </div>

            <div className="space-y-1 text-xs">
              <div className="rounded-lg bg-white px-3 py-2 font-medium text-neutral-900 shadow-sm">
                Overview
              </div>

              <div className="px-3 py-2 text-neutral-400">
                Applications
              </div>

              <div className="px-3 py-2 text-neutral-400">
                Interviews
              </div>

              <div className="px-3 py-2 text-neutral-400">
                Analytics
              </div>
            </div>
          </aside>

          {/* Main dashboard */}
          <div className="min-w-0">
            <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Overview
                </p>

                <p className="mt-0.5 text-[10px] text-neutral-400">
                  Tuesday, August 18
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button className="hidden rounded-lg border border-neutral-200 p-2 sm:block">
                  <Search size={13} className="text-neutral-400" />
                </button>

                <button className="hidden rounded-lg border border-neutral-200 p-2 sm:block">
                  <Bell size={13} className="text-neutral-400" />
                </button>

                <button className="rounded-lg bg-neutral-950 px-3 py-2 text-[10px] font-medium text-white">
                  + Add job
                </button>
              </div>
            </div>

            <div className="p-5">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-2">
                <StatCard title="Applications" value="24" />
                <StatCard title="Interviews" value="5" />
                <StatCard title="Offers" value="1" />
              </div>

              {/* Applications */}
              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold text-neutral-900">
                    Recent applications
                  </p>

                  <span className="text-[10px] text-neutral-400">
                    View all
                  </span>
                </div>

                <div className="space-y-2">
                  {applications.map((application) => (
                    <ApplicationRow
                      key={application.company + application.role}
                      application={application}
                    />
                  ))}
                </div>
              </div>

              {/* Progress */}
              <div className="mt-6 rounded-xl bg-neutral-50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-neutral-400">
                      Application response rate
                    </p>

                    <p className="mt-1 text-lg font-semibold">
                      21%
                    </p>
                  </div>

                  <span className="text-xs font-medium text-emerald-600">
                    +4.2%
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-neutral-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "21%" }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="h-full rounded-full bg-neutral-950"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeaturesSection() {
  const features = [
    {
      number: "01",
      title: "One place for every application.",
      description:
        "Keep every company, role, status, deadline, and note in one organized workspace.",
      visual: (
        <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-neutral-500">
              Application pipeline
            </span>

            <span className="text-[10px] text-neutral-400">
              24 total
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-neutral-50 p-3">
              <p className="text-[10px] text-neutral-400">
                Applied
              </p>
              <p className="mt-1 text-lg font-semibold">14</p>
            </div>

            <div className="rounded-lg bg-blue-50 p-3">
              <p className="text-[10px] text-blue-500">
                Interview
              </p>
              <p className="mt-1 text-lg font-semibold text-blue-700">
                5
              </p>
            </div>

            <div className="rounded-lg bg-emerald-50 p-3">
              <p className="text-[10px] text-emerald-500">
                Offer
              </p>
              <p className="mt-1 text-lg font-semibold text-emerald-700">
                1
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      number: "02",
      title: "Know what's actually working.",
      description:
        "See your response rate and application patterns so you can improve your search instead of guessing.",
      visual: (
        <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] text-neutral-400">
                Response rate
              </p>

              <p className="mt-1 text-2xl font-semibold tracking-tight">
                21%
              </p>
            </div>

            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-600">
              Improving
            </span>
          </div>

          <div className="mt-6 flex h-20 items-end gap-2">
            {[35, 48, 42, 60, 52, 72, 82].map(
              (height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="flex-1 rounded-t-md bg-neutral-900"
                />
              ),
            )}
          </div>

          <div className="mt-2 flex justify-between text-[9px] text-neutral-400">
            <span>Week 1</span>
            <span>Week 2</span>
            <span>Week 3</span>
            <span>Week 4</span>
          </div>
        </div>
      ),
    },

    {
      number: "03",
      title: "Never lose the next step.",
      description:
        "Know which applications need attention, which interviews are coming up, and what you should do next.",
      visual: (
        <div className="mt-8 space-y-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3 rounded-lg bg-neutral-50 p-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              !
            </div>

            <div className="flex-1">
              <p className="text-xs font-medium">
                Follow up with Microsoft
              </p>

              <p className="text-[10px] text-neutral-400">
                Due tomorrow
              </p>
            </div>

            <ArrowRight
              size={13}
              className="text-neutral-400"
            />
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-neutral-100 p-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              ✓
            </div>

            <div className="flex-1">
              <p className="text-xs font-medium">
                Google interview
              </p>

              <p className="text-[10px] text-neutral-400">
                Thursday · 10:30 AM
              </p>
            </div>

            <ArrowRight
              size={13}
              className="text-neutral-400"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
          Built for the search
        </p>

        <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-5xl">
          Everything you need to run a better job search.
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-neutral-500">
          Replace scattered spreadsheets, browser tabs, and
          forgotten follow-ups with one focused workspace.
        </p>
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.article
            key={feature.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-neutral-400">
                {feature.number}
              </span>

              <ArrowRight
                size={15}
                className="text-neutral-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-700"
              />
            </div>

            <h3 className="mt-7 text-xl font-semibold leading-tight tracking-[-0.025em] text-neutral-950">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              {feature.description}
            </p>

            {feature.visual}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Add the opportunity",
      description:
        "Save a job in seconds with the company, role, link, and the details that matter.",
    },
    {
      number: "02",
      title: "Move it through your pipeline",
      description:
        "Keep every application moving from applied to screening, interview, and offer.",
    },
    {
      number: "03",
      title: "Know what comes next",
      description:
        "See follow-ups, interviews, and applications that need your attention before they slip through.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        {/* Heading */}
        <div className="lg:sticky lg:top-24">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
            How it works
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-5xl">
            Less managing.
            <br />
            More applying.
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-neutral-500">
            ApplyFlow keeps the busywork out of your job search so
            you can focus on finding the right opportunity.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-[19px] top-6 hidden h-[calc(100%-48px)] w-px bg-neutral-200 sm:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="relative flex gap-6"
              >
                {/* Number */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-[#f7f7f5] text-xs font-semibold text-neutral-500">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-neutral-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-500">
                    {step.description}
                  </p>

                  {/* Small visual */}
                  <div className="mt-5 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                    {index === 0 && (
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-sm font-semibold">
                          G
                        </div>

                        <div className="flex-1">
                          <p className="text-xs font-medium">
                            Software Engineer
                          </p>

                          <p className="mt-1 text-[10px] text-neutral-400">
                            Google · Bangalore
                          </p>
                        </div>

                        <span className="rounded-full bg-neutral-100 px-2 py-1 text-[10px] text-neutral-500">
                          New
                        </span>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="flex items-center gap-1.5 overflow-hidden">
                        {[
                          "Applied",
                          "Screening",
                          "Interview",
                          "Offer",
                        ].map((status, statusIndex) => (
                          <div
                            key={status}
                            className="flex min-w-0 flex-1 items-center gap-1.5"
                          >
                            <div
                              className={`h-2 w-2 shrink-0 rounded-full ${
                                statusIndex === 2
                                  ? "bg-blue-500"
                                  : "bg-neutral-200"
                              }`}
                            />

                            <span
                              className={`truncate text-[10px] ${
                                statusIndex === 2
                                  ? "font-medium text-neutral-900"
                                  : "text-neutral-400"
                              }`}
                            >
                              {status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {index === 2 && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-xs text-amber-600">
                            !
                          </div>

                          <div>
                            <p className="text-xs font-medium">
                              Follow up with Microsoft
                            </p>

                            <p className="mt-1 text-[10px] text-neutral-400">
                              Due tomorrow
                            </p>
                          </div>
                        </div>

                        <ArrowRight
                          size={14}
                          className="text-neutral-400"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 lg:px-10 lg:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-neutral-950 px-6 py-16 text-center sm:px-12 sm:py-20"
      >
        {/* Decorative circles */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/[0.04] blur-2xl" />

        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/[0.04] blur-2xl" />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
            Ready when you are
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Your next opportunity deserves a better system.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-neutral-400 sm:text-base">
            Stop wondering where your applications stand. Start
            building a job search you can actually manage.
          </p>

          <button className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-100">
            Start tracking

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function App() {
  const [secretFound, setSecretFound] = useState(false);

  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];

    let position = 0;
    let timeoutId;

    const handleKeyDown = (event) => {
      const key =
        event.key.length === 1
          ? event.key.toLowerCase()
          : event.key;

      if (key === konamiCode[position]) {
        position += 1;

        if (position === konamiCode.length) {
          setSecretFound(true);
          position = 0;

          timeoutId = setTimeout(() => {
            setSecretFound(false);
          }, 4000);
        }
      } else {
        position = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f5]">
      {secretFound && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white shadow-2xl"
        >
          You found the secret. Nice. ✨
        </motion.div>
      )}
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-950 text-white">
            <Sparkles size={15} />
          </div>

          <span className="text-lg font-semibold tracking-tight">
            ApplyFlow
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-neutral-500 md:flex">
          <a
            href="#features"
            className="transition hover:text-neutral-950"
          >
            Features
          </a>

          <a
            href="#product"
            className="transition hover:text-neutral-950"
          >
            Product
          </a>

          <a
            href="#how-it-works"
            className="transition hover:text-neutral-950"
          >
            How it works
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-medium text-neutral-600 transition hover:text-neutral-950 sm:block">
            Sign in
          </button>

          <button className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800">
            Get started
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white md:hidden">
            <Menu size={17} />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Your job search, organized
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-neutral-950 sm:text-6xl lg:text-7xl"
            >
              Turn your job search into a{" "}
              <span className="text-neutral-400">system.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg"
            >
              Track applications, organize opportunities, and see
              exactly where your search stands — without another
              spreadsheet.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800">
                Start tracking

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-full border border-neutral-200 bg-white px-6 py-3.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50">
                See how it works
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-neutral-500"
            >
              <span className="flex items-center gap-1.5">
                <Check size={13} />
                Simple setup
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={13} />
                Built for job seekers
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={13} />
                No spreadsheet required
              </span>
            </motion.div>
          </div>

          <DashboardPreview />
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="border-t border-neutral-200" />
      </div>

      {/* Features */}
     <FeaturesSection />

     <ProductShowcase />
     <HowItWorks />
     <FinalCTA />
     <footer className="border-t border-neutral-200">
  <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
    <div className="flex items-center gap-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-950 text-white">
        <Sparkles size={11} />
      </div>

      <span className="font-medium text-neutral-600">
        ApplyFlow
      </span>
    </div>

    <p>Built for people building their careers.</p>
  </div>
</footer>
    </main>
  );
}
function ProductShowcase() {
  const jobs = [
    {
      company: "Google",
      role: "Software Engineer",
      location: "Bangalore · Hybrid",
      status: "Interview",
      statusStyle: "bg-blue-50 text-blue-600",
      logo: "G",
    },
    {
      company: "Microsoft",
      role: "Software Engineer Intern",
      location: "Hyderabad · Hybrid",
      status: "Applied",
      statusStyle: "bg-neutral-100 text-neutral-600",
      logo: "M",
    },
    {
      company: "Atlassian",
      role: "Frontend Engineer",
      location: "Remote",
      status: "Screening",
      statusStyle: "bg-amber-50 text-amber-600",
      logo: "A",
    },
  ];

  return (
    <section
      id="product"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
          Your search, at a glance
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
          See every opportunity.
          <br />
          Know what comes next.
        </h2>

        <p className="mt-5 text-base leading-7 text-neutral-500">
          A focused workspace for managing applications from the
          first click to the final offer.
        </p>
      </div>

      {/* Product window */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="relative mt-16"
      >
        <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-neutral-200/40 blur-3xl" />

        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.08)]">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-neutral-950">
                Applications
              </p>

              <p className="mt-0.5 text-xs text-neutral-400">
                24 opportunities
              </p>
            </div>

            <button className="rounded-lg bg-neutral-950 px-4 py-2 text-xs font-medium text-white transition hover:bg-neutral-800">
              + Add application
            </button>
          </div>

          {/* Search/filter */}
          <div className="flex flex-col gap-3 border-b border-neutral-100 p-5 sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2.5">
              <Search size={14} className="text-neutral-400" />

              <span className="text-xs text-neutral-400">
                Search applications...
              </span>
            </div>

            <button className="rounded-lg border border-neutral-200 px-4 py-2.5 text-xs font-medium text-neutral-600">
              All statuses
            </button>

            <button className="rounded-lg border border-neutral-200 px-4 py-2.5 text-xs font-medium text-neutral-600">
              Sort by
            </button>
          </div>

          {/* Application list */}
          <div className="p-5">
            <div className="hidden grid-cols-[1.5fr_1fr_1fr_auto] gap-4 px-4 pb-3 text-[10px] font-medium uppercase tracking-wider text-neutral-400 sm:grid">
              <span>Company</span>
              <span>Location</span>
              <span>Status</span>
              <span />
            </div>

            <div className="space-y-2">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="group grid gap-3 rounded-xl border border-neutral-100 p-4 transition duration-200 hover:border-neutral-200 hover:bg-neutral-50 sm:grid-cols-[1.5fr_1fr_1fr_auto] sm:items-center sm:gap-4"
                >
                  {/* Company */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-sm font-semibold text-neutral-700">
                      {job.logo}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-neutral-950">
                        {job.company}
                      </p>

                      <p className="mt-0.5 text-xs text-neutral-400">
                        {job.role}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <p className="text-xs text-neutral-500">
                    {job.location}
                  </p>

                  {/* Status */}
                  <div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${job.statusStyle}`}
                    >
                      {job.status}
                    </span>
                  </div>

                  {/* Arrow */}
                  <ArrowRight
                    size={15}
                    className="hidden text-neutral-300 transition-transform group-hover:translate-x-1 group-hover:text-neutral-700 sm:block"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom insight */}
          <div className="border-t border-neutral-100 bg-neutral-50 px-5 py-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold text-neutral-900">
                  Your search is moving.
                </p>

                <p className="mt-1 text-xs text-neutral-400">
                  You have 3 applications that need attention this week.
                </p>
              </div>

              <button className="flex items-center gap-2 text-xs font-medium text-neutral-900">
                View next steps
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default App;