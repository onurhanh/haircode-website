import { motion } from "framer-motion";
export default function Services() {
  return (
    <section id="hizmetler" className="flex font-sans min-h-screen bg-[#FAFAFA] px-8 py-30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: 0, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="md:text-5xl text-3xl mb-15 justify-center flex">Hizmetlerimiz</h2>
        </motion.div>
        <div className="flex gap-20 flex-wrap justify-center">
          <div className="shadow-2xl relative">
            <img
              className="max-w-[250px] rounded-xl filter brightness-50  hover:brightness-75 transition duration-300 ease-in-out"
              src="/services-content.png" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest">ombre / sombre</p>
          </div>
          <div className="shadow-2xl relative">
            <img
              className="max-w-[250px] rounded-xl filter brightness-50  hover:brightness-75 transition duration-300 ease-in-out"
              src="/services-content.png" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest">brushlight</p>
          </div>
          <div className="shadow-2xl relative">
            <img
              className="max-w-[250px] rounded-xl filter brightness-50  hover:brightness-75 transition duration-300 ease-in-out"
              src="/services-content.png" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest">highlight</p>
          </div>
          <div className="shadow-2xl relative">
            <img
              className="max-w-[250px] rounded-xl filter brightness-50  hover:brightness-75 transition duration-300 ease-in-out"
              src="/services-content.png" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest">açma / boyama</p>
          </div>
          <div className="shadow-2xl relative">
            <img
              className="max-w-[250px] rounded-xl filter brightness-50  hover:brightness-75 transition duration-300 ease-in-out"
              src="/services-content.png" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest">saç kesimi</p>
          </div>
          <div className="shadow-2xl relative">
            <img
              className="max-w-[250px] rounded-xl filter brightness-50  hover:brightness-75 transition duration-300 ease-in-out"
              src="/services-content.png" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest">keratin bakımı</p>
          </div>
          <div className="shadow-2xl relative">
            <img
              className="max-w-[250px] rounded-xl filter brightness-50  hover:brightness-75 transition duration-300 ease-in-out"
              src="/services-content.png" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest">kolajen bakımı</p>
          </div>
          <div className="shadow-2xl relative">
            <img
              className="max-w-[250px] rounded-xl filter brightness-50  hover:brightness-75 transition duration-300 ease-in-out"
              src="/services-content.png" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest letter-spacing-">kaynak işlemi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
