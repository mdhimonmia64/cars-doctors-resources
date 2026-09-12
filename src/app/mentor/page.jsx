"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BookOpen, Code2, Sparkles } from "lucide-react";

const skills = [
  "Web Development",
  "React.js",
  "Next.js",
  "JavaScript",
  "MERN Stack",
  "Problem Solving",
];

const highlights = [
  {
    icon: BookOpen,
    title: "Practical Learning",
    description: "Learn through real-world projects",
  },
  {
    icon: Code2,
    title: "Modern Development",
    description: "Focus on modern web technologies",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Continuous guidance and support",
  },
];

export default function MentorSection() {
  return (
    <section className="overflow-hidden bg-base-200 px-4 py-20">
      <div className="mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center "
        >

          <h2 className="text-4xl font-bold md:text-5xl text-primary">Meet My Mentor</h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-base-content/60">
            একজন ভালো mentor শুধু coding শেখান না, বরং একজন student-কে
            সঠিক direction, confidence এবং practical knowledge অর্জনে
            সাহায্য করেন।
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative min-h-[450px] lg:min-h-[620px]"
            >
              <Image
                src="/MD.SAJJAD HOSSAIN.png"
                alt="MD SAJJAD HOSSAIN"
                fill
                priority
                className="object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-7 left-7 text-white"
              >
                <p className="mb-1 text-sm text-white/80">
                  Web Development Mentor
                </p>

                <h3 className="text-2xl font-bold md:text-3xl">
                  MD SAJJAD HOSSAIN
                </h3>
              </motion.div>
            </motion.div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Web Development Mentor
                </span>

                <h3 className="mt-2 mb-4 text-3xl font-bold md:text-4xl text-primary">
                  MD SAJJAD HOSSAIN
                </h3>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mb-5 leading-8 text-base-content/70"
              >
                I am grateful to have a mentor like{" "}
                <span className="font-semibold text-base-content">
                  MD SAJJAD HOSSAIN
                </span>
                , who has been guiding me throughout my Web Development
                learning journey.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-8 leading-8 text-base-content/70"
              >
                His practical knowledge, guidance, and continuous support
                help me improve my coding skills, understand modern
                technologies, solve problems, and build real-world projects.
              </motion.p>

              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.12,
                        duration: 0.6,
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                      }}
                      className="rounded-2xl border border-base-300 bg-base-200 p-4 transition hover:border-primary/40"
                    >
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.1,
                        }}
                        className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"
                      >
                        <Icon size={21} />
                      </motion.div>

                      <h4 className="mb-1 text-sm font-semibold">
                        {item.title}
                      </h4>

                      <p className="text-xs leading-5 text-base-content/60">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h4 className="mb-4 text-lg font-bold ">Expertise</h4>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-default rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-content"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-lg italic text-base-content/60 md:text-xl">
            “A great mentor helps you discover what you are capable of.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}