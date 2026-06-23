"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  ShieldCheck,
  Clock,
  Sparkles,
  Users,
  Award,
  PhoneCall,
  ArrowRight,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

// Animations config
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stats = [
  { value: "15+", label: "Years of Experience", icon: Clock, color: "text-amber-500" },
  { value: "12K+", label: "Vehicles Repaired", icon: Wrench, color: "text-blue-500" },
  { value: "99%", label: "Satisfaction Rate", icon: ShieldCheck, color: "text-emerald-500" },
  { value: "45+", label: "Expert Mechanics", icon: Users, color: "text-purple-500" },
];

const values = [
  {
    title: "Uncompromising Quality",
    description: "We use state-of-the-art diagnostic equipment and genuine OEM parts to ensure your vehicle receives the finest care.",
    icon: Award,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Absolute Transparency",
    description: "No hidden charges, no unnecessary repairs. We provide detailed digital inspections and clear, upfront pricing.",
    icon: ShieldCheck,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Swift Turnaround",
    description: "Your time is valuable. We optimize our workflows and schedule appointments efficiently to get you back on the road safely.",
    icon: Sparkles,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Customer First Philosophy",
    description: "From our comfortable waiting lounge to our detailed consultations, your convenience and safety are our top priorities.",
    icon: Users,
    gradient: "from-emerald-500 to-teal-600",
  },
];

const history = [
  {
    year: "2012",
    title: "The Humble Spark",
    description: "Car Doctor starts as a local two-bay workshop with a single mechanic and a passion for precision diagnostics.",
  },
  {
    year: "2016",
    title: "Earning Regional Trust",
    description: "Expanded our facilities to include advanced computer alignment and electrical diagnostics, serving over 5,000 active clients.",
  },
  {
    year: "2021",
    title: "The Digital Revolution",
    description: "Launched our cloud booking app and remote vehicle status tracking, setting a new benchmark for automotive convenience.",
  },
  {
    year: "2026",
    title: "Industry Excellence",
    description: "Now boasting a top-tier multi-bay facility, an elite team of certified master technicians, and industry-leading satisfaction.",
  },
];

export default function AboutSection() {
  return (
    <div className="bg-base-200 text-base-content overflow-hidden min-h-screen">
      
      {/* 1. HERO SECTION WITH IMAGE COLLAGE & ENTRANCE ANIMATIONS */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-base-100 to-base-200 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero text */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold self-start tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Est. 2012 • Premium Car Care
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-base-content via-primary to-secondary bg-clip-text text-transparent"
            >
              Restoring Performance, <br />
              Ensuring Peace of Mind.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-base-content/80 leading-relaxed max-w-xl">
              At Car Doctor, we combine state-of-the-art engineering diagnostics with old-school mechanical craftsmanship. We don&apos;t just fix problems; we understand your vehicle&apos;s heartbeat.
            </motion.p>
            
            <motion.p variants={fadeInUp} className="text-base-content/75 max-w-xl">
              Whether you need routine precision maintenance, complex hybrid system service, or complete engine restoration, our certified master mechanics ensure your journey remains smooth and safe.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/#ser"
                className="btn btn-primary shadow-lg hover:shadow-primary/20 group relative overflow-hidden flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#ser"
                className="btn btn-outline border-base-content/20 hover:bg-base-content hover:text-base-100 flex items-center gap-2"
              >
                Book Inspection
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image Collage */}
          <motion.div 
            className="lg:col-span-5 relative w-full h-[400px] md:h-[480px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background glowing orb */}
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse z-0" />
            
            {/* Primary Main Image */}
            <motion.div 
              className="absolute left-0 top-0 w-[80%] h-[75%] rounded-3xl overflow-hidden shadow-2xl border-4 border-base-100 z-10 group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image
                src="/assets/images/about_us/person.jpg"
                alt="Expert mechanic performing inspection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-semibold">Precision Diagnostics</span>
              </div>
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div 
              className="absolute right-0 bottom-4 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-base-100 z-20 group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image
                src="/assets/images/about_us/parts.jpg"
                alt="Genuine automotive component replacement"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-xs font-semibold">Certified OEM Components</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 2. STATS SECTION WITH FLOATING CARDS & HOVER EFFECTS */}
      <section className="py-12 px-6 md:px-16 -mt-8 relative z-30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                  className="bg-base-100 p-6 md:p-8 rounded-3xl shadow-lg border border-base-content/5 flex flex-col items-center text-center space-y-3 cursor-pointer"
                >
                  <div className={`p-4 rounded-2xl bg-base-200/50 ${stat.color} transition-colors duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">{stat.value}</h3>
                  <p className="text-sm font-medium text-base-content/70">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION WITH GLASSMORPHIC CARDS */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-wider text-primary">Our Code of Conduct</span>
          <h2 className="text-3xl md:text-5xl font-black">Values That Drive Us Forward</h2>
          <p className="text-base-content/75">
            We adhere to strict standards of transparency, engineering excellence, and customer care in everything we do.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                className="group bg-base-100 p-8 rounded-3xl border border-base-content/5 shadow-md flex flex-col md:flex-row items-start gap-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual hover border decoration */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${val.gradient}`} />
                
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${val.gradient} text-white shadow-md self-start shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-200">{val.title}</h3>
                  <p className="text-sm text-base-content/75 leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 4. STORY / TIMELINE SECTION WITH SCROLL ENTRY */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-base-200 to-base-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-primary">Evolution</span>
            <h2 className="text-3xl md:text-5xl font-black">Our Milestone Journey</h2>
            <p className="text-base-content/75 max-w-xl mx-auto">
              How a single, passionate repair service grew to become the region&apos;s most trusted automotive technology hub.
            </p>
          </div>

          <div className="relative border-l-2 border-base-content/10 ml-4 md:ml-32 py-4 space-y-12">
            {history.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-8 md:pl-12 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline node */}
                <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-primary border-4 border-base-200 group-hover:scale-125 transition-transform duration-300 shadow-md" />
                
                {/* Floating year box left-aligned on medium+ screens */}
                <div className="hidden md:block absolute -left-[140px] top-0 w-24 text-right">
                  <span className="text-2xl font-black text-primary/40 group-hover:text-primary transition-colors duration-300">{item.year}</span>
                </div>

                <div className="bg-base-100 p-6 md:p-8 rounded-3xl shadow-sm border border-base-content/5 hover:shadow-md transition-shadow duration-300">
                  <span className="inline-block md:hidden text-lg font-black text-primary mb-2">{item.year}</span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-base-content/75 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div 
          className="relative bg-gradient-to-br from-primary via-orange-600 to-secondary text-white rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating abstract decorative elements */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-20 -translate-y-20 pointer-events-none" />
          <div className="absolute left-10 bottom-0 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Ready to Experience Premium <br className="hidden md:inline" />
                Car Service?
              </h2>
              <p className="text-white/80 max-w-xl text-base md:text-lg">
                Schedule your appointment online today. Get transparent quotes, visual service reports, and direct contact with your dedicated technician.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 pt-4 text-sm font-semibold text-white/95">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-300" />
                  Visual Health Diagnostic Report
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-300" />
                  12-Month/12,000-Mile Warranty
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-300" />
                  Complimentary Pickup & Drop-off
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-300" />
                  100% Genuine OEM Replacement Parts
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end w-full">
              <Link 
                href="/#ser" 
                className="btn bg-white hover:bg-neutral-100 text-neutral-900 border-none px-8 py-4 h-auto rounded-2xl shadow-xl w-full sm:w-auto lg:w-full font-bold flex items-center justify-center gap-2 group"
              >
                Book Inspection
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/contact" 
                className="btn btn-outline border-white/30 hover:bg-white/10 text-white px-8 py-4 h-auto rounded-2xl w-full sm:w-auto lg:w-full font-bold flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                Contact Support
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
