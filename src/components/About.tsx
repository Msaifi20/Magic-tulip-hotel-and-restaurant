import { motion } from 'motion/react';

export default function About() {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/d/1HEVYTAH256Cj7Gqd4TonfFgQHDlIY7Sn",
      alt: "Magic Tulip Garden Courtyard Dining",
    },
    {
      src: "https://lh3.googleusercontent.com/d/1rf_SirIeLObZ4v2kloUrV80LUevcDJdW",
      alt: "Magic Tulip Gourmet Presentation",
    }
  ];

  return (
    <section id="about" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-850 aspect-[4/3] group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
