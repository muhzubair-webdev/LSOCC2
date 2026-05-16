import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Code, MonitorPlay, Users, ArrowRight, Sparkles, ChevronRight, CheckCircle2, Menu, X } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bg text-slate-50 font-sans selection:bg-purple-500/30 bg-mesh relative overflow-hidden">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card rounded-none border-t-0 border-x-0 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)]">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Create Centre</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#profile" className="hover:text-white transition-colors">Profile</a>
            <a href="#vision" className="hover:text-white transition-colors">Visi Misi</a>
            <a href="#departments" className="hover:text-white transition-colors">Bidang</a>
            <a href="#prelaunch" className="hover:text-white transition-colors">Coming Soon</a>
          </div>
          <button 
            className="md:hidden flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden glass-card border-b border-white/5 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-4 pb-6">
                <a href="#profile" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors font-medium">Profile</a>
                <a href="#vision" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors font-medium">Visi Misi</a>
                <a href="#departments" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors font-medium">Bidang</a>
                <a href="#prelaunch" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors font-medium">Coming Soon</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-sm font-medium text-slate-300"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Lembaga Semi Otonom (LSO) FTI
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.05]"
          >
            Kode, Kreasi, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500">
              Kolaborasi
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10"
          >
            Lembaga Semi Otonom (LSO) Fakultas Teknologi Informasi. Wadah eksekusi ide, inovasi, dan kolaborasi tanpa batas.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <a href="#prelaunch" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-lg transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] group">
              Pantau Peresmian Kami
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. PROFILE & VISION-MISSION SECTION */}
      <section id="profile" className="py-24 md:py-32 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Mengenal Create Centre</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div id="vision" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Visi */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="glass-card p-8 md:p-10 rounded-3xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 mb-8">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Visi</h3>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                "Menjadi wadah pengembangan kreativitas, inovasi dan potensi mahasiswa yang aktif, progresif dan berdaya saing."
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-purple-500/50"></span>
                Misi
              </h3>
              <div className="space-y-4">
                {[
                  "Mengembangkan minat dan bakat mahasiswa di bidang kreatif.",
                  "Menjadi ruang kolaborasi antar mahasiswa.",
                  "Menyelenggarakan kegiatan kreatif dan inovatif.",
                  "Mendorong pengembangan soft skill mahasiswa.",
                  "Membangun budaya organisasi yang profesional dan produktif."
                ].map((misi, i) => (
                  <motion.div variants={fadeIn} key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-semibold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-slate-300 leading-relaxed pt-1">{misi}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tujuan */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mt-24 pt-24 border-t border-white/5"
          >
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold tracking-tight mb-4">Tujuan</h3>
              <p className="text-slate-400">Apa yang ingin kami capai melalui Create Centre.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Menjadi wadah pengembangan kreativitas mahasiswa.",
                "Meningkatkan kemampuan mahasiswa di bidang kreatif.",
                "Membentuk mahasiswa yang inovatif dan berintegritas.",
                "Meningkatkan prestasi dan kontribusi mahasiswa di tingkat fakultas maupun eksternal."
              ].map((tujuan, i) => (
                <motion.div variants={fadeIn} key={i} className="glass-card p-6 md:p-8 rounded-3xl flex items-start gap-4 group hover:border-purple-500/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 shrink-0 mt-0.5 group-hover:block transition-all" />
                  <p className="text-slate-200 text-lg">{tujuan}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. DEPARTMENTS SECTION */}
      <section id="departments" className="py-24 md:py-32 relative bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16 md:flex items-end justify-between"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">4 Pilar Utama</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Departemen-departemen yang menjadi motor penggerak Create Centre FTI dalam mengeksekusi setiap ide dan program kerja.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Acara",
                desc: "Manajemen event teknologi, webinar, dan workshop kreatif.",
                icon: <Users className="w-6 h-6 text-orange-400" />,
                color: "from-orange-500/20 to-orange-500/0",
                borderColor: "group-hover:border-orange-500/50"
              },
              {
                title: "Software & Teknologi",
                desc: "Pengembangan aplikasi, web development, dan riset teknologi IT.",
                icon: <Code className="w-6 h-6 text-blue-400" />,
                color: "from-blue-500/20 to-blue-500/0",
                borderColor: "group-hover:border-blue-500/50"
              },
              {
                title: "Media & Desain Kreatif",
                desc: "Visual branding, konten multimedia, videografi, dan UI/UX.",
                icon: <Palette className="w-6 h-6 text-purple-400" />,
                color: "from-purple-500/20 to-purple-500/0",
                borderColor: "group-hover:border-purple-500/50"
              },
              {
                title: "Humas & Kemitraan",
                desc: "Hubungan eksternal, jaringan alumni, dan kolaborasi industri.",
                icon: <MonitorPlay className="w-6 h-6 text-emerald-400" />,
                color: "from-emerald-500/20 to-emerald-500/0",
                borderColor: "group-hover:border-emerald-500/50"
              }
            ].map((dept, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                key={i} 
                className={`glass-card p-8 rounded-3xl group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${dept.borderColor}`}
              >
                <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${dept.color} opacity-50`}></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-md">
                    {dept.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{dept.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {dept.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRE-LAUNCH / FOOTER SECTION */}
      <section id="prelaunch" className="py-24 md:py-32 relative overflow-hidden">
        {/* Glow behind footer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 mt-12 text-white">
              Sesuatu yang Besar <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Sedang Dibuat.
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Create Centre FTI akan segera diresmikan. Jadilah yang pertama tahu saat kami membuka pendaftaran anggota baru.
            </p>

            <div className="flex justify-center mb-24">
              <button 
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg font-semibold transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]"
              >
                Beri Tahu Saya
              </button>
            </div>
          </motion.div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
               <div className="w-6 h-6 rounded border border-white/10 bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="font-semibold text-slate-300">Create Centre FTI</span>
            </div>
            <p>© 2026 Create Centre FTI. Built for Innovation.</p>
          </div>
        </div>
      </section>
      
    </div>
  );
}

