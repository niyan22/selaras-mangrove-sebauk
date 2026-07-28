import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Muhammad Reza Maulana",
    role: "Ketua Tim KKN",
    image: "/rezang.jpeg",
    quote:
      "Program SELARAS 2026 telah tuntas dilaksanakan. Lebih dari seribu bibit kini tertanam di zona tengah kawasan mangrove Desa Sebauk, menjadi pilar penguat benteng alam dari ancaman abrasi. Aksi ini merajut kolaborasi antara mahasiswa Kukerta Universitas Riau, pemerintah desa, dan masyarakat. Terima kasih atas setiap dukungan yang tercurah. Langkah awal ini mungkin telah usai, namun akar yang kita tanam bersama akan terus tumbuh dan menjaga Desa Sebauk hingga bertahun-tahun ke depan."
  },
  {
    name: "Salomo Rizky Cassanova Napitupulu",
    role: "Penanggung Jawab Program",
    image: "/jochua.jpeg",
    quote:
      "Sebagai penanggung jawab Program SELARAS (Sebauk Lestari dan Asri), saya percaya bahwa pelestarian 1.300 bibit mangrove lahir dari kepedulian dan kolaborasi seluruh pihak. Menanam mangrove berarti menulis harapan di sepanjang pesisir, agar suatu hari nanti anak cucu dapat membaca kisah tentang alam yang tetap lestari. Melalui program ini, kami tidak hanya mengajak masyarakat untuk menanam, tetapi juga belajar, memahami, dan bersama menjaga ekosistem pesisir sebagai bagian dari kehidupan. Saya berharap SELARAS menjadi awal dari gerakan yang terus bertumbuh, sehingga setiap langkah yang kita lakukan hari ini dapat menjadi warisan berharga bagi Desa Sebauk dan generasi yang akan datang."
  },
  {
    name: "Tamrin",
    role: "Kepala Desa Sebauk",
    image: "/kades.jpeg",
    quote:
      "Saya selaku Kepala Desa Sebauk ingin mengucapkan terima kasih kepada Tim KKN Universitas Riau dan seluruh pihak yang telah berkontribusi melalui Program SELARAS. Melihat mahasiswa, masyarakat, pemerintah, dan para mitra dapat bekerja bersama menjadi kebanggaan bagi kami. Semoga semangat kebersamaan ini terus terjaga dan menjadi kekuatan untuk menjaga mangrove serta mewujudkan Desa Sebauk yang semakin lestari dan berkelanjutan."
  },
  {
    name: "Zakaria A.",
    role: "Ketua Kelompok Mangrove KEMPAS",
    image: "/ketua kempas.JPG",
    quote:
      "Sebagai pengelola mangrove di Desa Sebauk, saya melihat mangrove bukan hanya pelindung pesisir, tetapi juga sumber kehidupan yang harus dijaga bersama. Saya berharap semangat yang dibawa melalui Program SELARAS dapat terus tumbuh di tengah masyarakat, sehingga penanaman yang dilakukan hari ini menjadi awal dari kepedulian yang terus berlanjut untuk menjaga pesisir Desa Sebauk."
  }
];

export function Testimonials() {
  return (
    <section className="bg-mist py-24 dark:bg-ink md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Sambutan & Ucapan"
          title="Suara di balik Program SELARAS."
          description="Ucapan tim dan pemerintah desa serta pengelola mangrove dalam menjalankan Program SELARAS bersama, berikut katanya."
          align="center"
        />
        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-6">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.1}>
              <div className="group flex flex-col items-center gap-6 rounded-lg border border-canopy/10 bg-white/76 p-7 text-center shadow-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-ember/40 hover:shadow-glow dark:border-white/10 dark:bg-white/[0.06] sm:flex-row sm:text-left">
                <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105 dark:border-white/10 sm:h-44 sm:w-44">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="176px" />
                </div>
                <div>
                  <Quote aria-hidden className="mx-auto h-7 w-7 text-ember/50 sm:mx-0" />
                  <p className="mt-3 text-pretty leading-8 text-ink/78 dark:text-mist/85">{item.quote}</p>
                  <p className="mt-4 font-bold text-canopy dark:text-mist">{item.name}</p>
                  <p className="text-sm uppercase tracking-[0.16em] text-ink/50 dark:text-mist/55">{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
