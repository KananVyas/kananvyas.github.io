"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { DATA, type Experience, type Blog } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { BrutalCard } from '@/components/brutal-card';
import { TechBadge } from '@/components/tech-badge';
import { NavPill } from '@/components/nav-pill';
import { ThemeToggle } from '@/components/theme-toggle';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Cpu, 
  Terminal,
  ArrowRight,
  Hash,
  Download,
  Code2,
  Brain,
  Layers,
} from 'lucide-react';

export default function PortfolioPage() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('about');

  const sectionsRef = {
    about: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    blog: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    Object.values(sectionsRef).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionsRef).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionsRef]);

  const scrollToSection = (id: 'about' | 'experience' | 'blog') => {
    sectionsRef[id].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const avatar = PlaceHolderImages.find(img => img.id === 'avatar');

  return (
    <>
      <NavPill activeSection={activeSection} scrollToSection={scrollToSection} />
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />

      <main className="max-w-3xl mx-auto px-6 pt-40 pb-20">
        
        <section id="about" ref={sectionsRef.about} className="mb-32 flex flex-col gap-12 animate-in fade-in duration-700">
          <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] font-display">
                Hi, I&apos;m {DATA.profile.name.split(' ')[0]}
                <span className="text-gray-300 dark:text-zinc-600">.</span>
              </h1>
              
              <div className="text-xl md:text-2xl leading-relaxed font-normal max-w-xl text-gray-900 dark:text-zinc-100">
                Hi! I have 6+ years of experience working in ML. Currently, I&apos;m a <span className="font-bold text-black dark:text-white">Senior Machine Learning Engineer</span> at{' '}
                <TechBadge icon={Terminal} text="GoDaddy" color="orange" />.
                My interests are in developing{' '}
                <TechBadge icon={Brain} text="Agentic AI Systems" color="purple" />{' '}
                and evaluating them using{' '}
                <TechBadge icon={Layers} text="LangGraph" color="blue" />{' '}
                and{' '}
                <TechBadge icon={Code2} text="Langfuse" color="green" />.
                I also train ML models using{' '}
                <TechBadge icon={Cpu} text="PyTorch" color="purple" />,{' '}
                <TechBadge icon={Code2} text="Python" color="green" />{' '}
                and{' '}
                <TechBadge icon={ArrowRight} text="FastAPI" color="orange" />.
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href={`mailto:${DATA.profile.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition-all bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                  <Mail size={18} />
                  Get in touch
                </a>
                <a
                  href="/Kanan_Resume_2025.pdf"
                  download="Kanan_Resume_2025.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-full font-bold hover:scale-105 active:scale-95 transition-all border-black text-black hover:bg-black/5 dark:border-white dark:text-white dark:hover:bg-white/10"
                >
                  <Download size={18} />
                  Resume
                </a>
              </div>
              
              <div className="flex gap-6 pt-2">
                <a href={DATA.profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-black dark:text-zinc-500 dark:hover:text-white transition-colors"><Github /></a>
                <a href={DATA.profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-600 dark:text-zinc-500 dark:hover:text-blue-400 transition-colors"><Linkedin /></a>
                <a href={DATA.profile.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-blue-600 dark:text-zinc-500 dark:hover:text-blue-400 transition-colors"><Twitter /></a>
              </div>
            </div>

            <div className="relative shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 overflow-hidden shadow-xl transition-colors duration-300 border-gray-100 dark:border-zinc-800">
                {avatar && <Image 
                  src={avatar.imageUrl}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  width={160}
                  height={160}
                  priority
                />}
              </div>
              <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full border-4 shadow-sm flex items-center justify-center border-white dark:border-black">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" ref={sectionsRef.experience} className="mb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold font-display">Experience</h2>
            <div className="h-px flex-1 rounded-full bg-gray-200 dark:bg-zinc-800"></div>
          </div>

          <div className="space-y-6">
            {DATA.experience.map((job: Experience) => (
              <BrutalCard key={job.id}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-display">{job.role}</h3>
                    <span className="font-display font-semibold text-lg text-gray-700 dark:text-zinc-300">{job.company}</span>
                  </div>
                  <span className="text-sm font-mono px-3 py-1 rounded-full w-fit bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {job.period}
                  </span>
                </div>
                <p className="text-xl leading-relaxed text-gray-900 dark:text-zinc-100">
                  {job.description}
                </p>
              </BrutalCard>
            ))}
          </div>
        </section>

        <section id="blog" ref={sectionsRef.blog} className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold font-display">Writings</h2>
            <div className="h-px flex-1 rounded-full bg-gray-200 dark:bg-zinc-800"></div>
          </div>

          <div className="grid gap-6">
            {DATA.blogs.map((blog: Blog) => (
              <a key={blog.id} href={blog.link} target="_blank" rel="noopener noreferrer" className="block group">
                <BrutalCard className="h-full hover:border-blue-600 dark:hover:border-blue-400">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2 text-sm font-mono text-gray-400 dark:text-zinc-500">
                      <Hash size={14} />
                      {blog.date}
                    </div>
                    <ArrowRight className="transition-transform duration-300 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 text-gray-300 group-hover:text-blue-600 dark:text-zinc-600 dark:group-hover:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 transition-colors font-display group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {blog.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-900 dark:text-zinc-100">
                    {blog.excerpt}
                  </p>
                </BrutalCard>
              </a>
            ))}
          </div>
        </section>

        <footer className="flex justify-between items-center py-8 border-t text-sm font-mono border-gray-100 text-gray-500 dark:border-zinc-800 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Kanan Vyas</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Open to Work
          </div>
        </footer>
      </main>
    </>
  );
}
