import React from "react";
import { motion } from "framer-motion";
import DCTbg from "../assets/dct.png";
import OSASlogo from "../assets/osas-logo.png";
import SSClogo from "../assets/ssc-logo.png";

const About = () => {
  return (
    <div className="flex flex-col bg-gray-900">

      {/* HERO SECTION */}
      <section
        className="relative py-24 text-center text-pink-400"
        style={{
          backgroundImage: `url(${DCTbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gray-900/85"></div>

        <motion.div
          className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT LOGO */}
          <motion.img
            src={OSASlogo}
            alt="OSAS Logo"
            className="h-24 w-24 md:h-48 md:w-48 object-contain"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          {/* CENTER CONTENT */}
          <motion.div
            className="max-w-2xl text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-lg text-pink-400">
              About OSAS
            </h1>

            <p className="text-pink-100 md:text-lg drop-shadow text-justify leading-relaxed">
              The Dominican College of Tarlac Office of Student Affairs and Services
              (OSAS) is an administrative unit of the Institution under the supervision
              of the Administrator. It develops and implements student-centered programs
              that complement the academic program to support holistic student development.
            </p>
          </motion.div>

          {/* RIGHT LOGO */}
          <motion.img
            src={SSClogo}
            alt="SSC Logo"
            className="h-24 w-24 md:h-48 md:w-48 object-contain"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>
      </section>

      {/* WHAT IS EVOSAS */}
      <section className="bg-gray-800 py-16 border-t border-pink-500/20">
        <motion.div
          className="max-w-5xl mx-auto px-4 text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-pink-400">
            What is EvOSAS?
          </h2>

          <p className="text-pink-100 text-lg md:text-xl text-justify leading-relaxed">
            EvOSAS is the <strong className="text-pink-300">
            Evolution of the Office of Student Affairs and Services
            </strong>,
            a web-based management system developed to centralize student services at
            the Dominican College of Tarlac. It allows students, OSAS staff, and SSC officers
            to manage reports, announcements, disciplinary cases, lost and found items,
            attendance tracking, and event evaluations, all in one seamless platform.
          </p>
        </motion.div>
      </section>

      {/* VISION, MISSION & OBJECTIVES */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          {/* Vision */}
          <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-pink-500/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-pink-400 mb-4">
              Vision
            </h2>

            <p className="text-pink-100 text-lg md:text-xl text-justify">
              Guided by the DCT’s ideals, OSAS envisions itself to be an integral part of the Institution
              in the holistic formation and development of the Dominican students.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-pink-500/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-pink-400 mb-4">
              Mission
            </h2>

            <p className="text-pink-100 text-lg md:text-xl text-justify">
              OSAS is committed to the enhancement and provision of student welfare and development programs
              and services, responsive and sensitive to the changing needs of the students.
            </p>
          </motion.div>

          {/* Objectives */}
          <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-pink-500/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-pink-400 mb-4">
              Objectives
            </h2>

            <ul className="list-disc list-inside space-y-3 text-pink-100 text-lg md:text-xl text-justify">
              <li>Provide student programs and services data-driven and relevant to students’ changing needs.</li>

              <li>Help students utilize their potentials to the fullest through guidance programs.</li>

              <li>Reinforce the academic program through learning support services.</li>

              <li>Train students to become leaders and agents of change through co-curricular activities.</li>

              <li>Maintain and improve student health and living conditions.</li>

              <li>Ensure peaceful and harmonious student environment via discipline policies.</li>

              <li>Deliver quality law enforcement and safety services.</li>

              <li>Oversee maintenance of physical school facilities for safe and full educational use.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SUPREME STUDENT COUNCIL */}
      <section className="bg-gray-800 py-16 border-t border-pink-500/20">
        <motion.div
          className="max-w-5xl mx-auto px-4 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-pink-400 mb-4">
            Supreme Student Council (SSC)
          </h2>

          <p className="text-pink-100 text-lg md:text-xl text-justify leading-relaxed">
            The SSC is composed of students of the Dominican College of Tarlac. Believing in the need
            for a better organized College Department Supreme Student Council and in the development
            of the youth as future leaders of the nation, the SSC hereby promulgates and adopts this
            Constitution and By–Laws. It advances, implements, and maintains the goals and aspirations,
            embodies the ideas and principles, and promotes the welfare of all students and the academic
            standards of the Alma Mater, with a passion for truth and compassion for humanity.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default About;