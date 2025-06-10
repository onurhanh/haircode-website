import { motion } from "framer-motion";
export default function About() {
  return (
    <main>

      <section id="hakkimizda" className="w-full font-sans bg-[#FAFAFA] px-8 lg:pt-35 py-18  items-center flex">
        <div className="sm:flex max-w-6xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full flex justify-center items-center">
            <motion.img
              className="object-cover h-95 w-70 lg:w-130 lg:h-160 sm:w-80 sm:h-100 flex overflow-hidden rounded-lg shadow-2xl"
              whileHover={{ scale: 0.95, filter: "brightness(0.75)" }}
              transition={{ duration: 0.3 }}
              src="/store.webp" alt="store" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full text-center justify-center flex-row  lg:px-20">
            <h1 className="uppercase py-5 tracking-wide sm:text-xl lg:text-3xl font-extralight">hair code suadiye</h1>
            <p className="tracking-wide sm:leading-7 lg:leading-8">Hair Code, köklü bir tecrübenin, yenilikçi vizyonun ve tutkunun birleşimiyle kuaförlük sektöründe fark yaratmak amacıyla kurulmuştur. Sanatı, zarafeti ve güzellikte mükemmelliği bir araya getiren Hair Code; her misafirini, özgün stilini bulmaya davet ediyor.

              Kurulduğumuz ilk günden itibaren, alanında uzman ekibimiz ve müşteri odaklı hizmet anlayışımız ile güzelliğe yeni bir soluk getirmeyi hedefliyoruz. Modern tekniklerle şekillendirdiğimiz saç tasarımlarımızda, bireyselliğe ve estetik değerlere büyük önem veriyoruz. Sunduğumuz her hizmette kaliteyi, hijyeni ve müşteri memnuniyetini ön planda tutuyoruz.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
