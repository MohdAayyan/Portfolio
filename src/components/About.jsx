import Profile from "../assets/Profile.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-80 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-serif font-semibold mb-6 leading-tight text-[#D2C1B6]">
            Know <br /> About me
          </h2>

          <p className="text-white leading-relaxed mb-4">
            Passionate Computer Science student at Jain University with a strong interest in web development and problem-solving.
             Skilled in Python, C, and modern web technologies (HTML, CSS, JavaScript).
            I create engaging and responsive websites that prioritize user experience. Eager to apply technical skills in real-world projects. 
          </p>

          <p className="text-white leading-relaxed">
            Constant learning and improving my skills is something I value deeply,
            and I aim to create impactful projects that stand out.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          
          {/* Background image */}
        <div><img
            src={Profile}
            alt="about"
            className="w-72 h-96 object-cover border-4 border-[#D2C1B6] rounded"/>
        </div>
        
        </motion.div>

      </div>
    </section>
  )
}
