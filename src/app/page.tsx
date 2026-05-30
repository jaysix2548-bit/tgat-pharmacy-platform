import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Activity, Award, Star, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050b14] text-white flex flex-col items-center overflow-hidden font-sans pb-20">
      
      {/* Hero Section */}
      <section className="relative w-full max-w-6xl mx-auto px-4 pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center">
        {/* Glow Effects */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[40vh] bg-neon-blue/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-bold text-slate-300 tracking-wide">The #1 Premium TGAT Simulator</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          Master Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-pink-500">
            University Admission
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
          แพลตฟอร์มจำลองสอบ TGAT ที่เหมือนจริงที่สุด พร้อมระบบวิเคราะห์จุดอ่อน แนะนำการอ่านหนังสือ และคลังข้อสอบมากกว่า 1,000 ข้อ
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/dashboard" className="px-8 py-4 bg-white text-black rounded-2xl font-black text-lg hover:bg-slate-200 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
            เข้าสู่ระบบ Dashboard <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="#features" className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" /> ดูฟีเจอร์ทั้งหมด
          </Link>
        </div>
      </section>

      {/* Feature Exams */}
      <section id="features" className="w-full max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Complete TGAT Ecosystem</h2>
          <p className="text-slate-400">ครอบคลุมทุกวิชา พร้อมระบบ AI ช่วยวิเคราะห์</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* TGAT1 */}
          <Link href="/tgat1" className="group bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">TGAT1</h3>
            <p className="text-slate-400 leading-relaxed mb-6">English Communication ฝึกลุยโจทย์บทสนทนา Reading และ Vocabulary</p>
            <div className="text-cyan-400 font-bold flex items-center gap-2 text-sm">
              เริ่มสอบเลย <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* TGAT2 */}
          <Link href="/tgat2" className="group bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-pink-500/50 hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform">
              <Activity className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">TGAT2</h3>
            <p className="text-slate-400 leading-relaxed mb-6">Logical & Critical Thinking ลับสมองประลองตรรกะ ตัวเลข และมิติสัมพันธ์</p>
            <div className="text-pink-400 font-bold flex items-center gap-2 text-sm">
              เริ่มสอบเลย <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* TGAT3 */}
          <Link href="/tgat3" className="group bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">TGAT3</h3>
            <p className="text-slate-400 leading-relaxed mb-6">Future Workforce Competencies ทักษะการทำงานในอนาคต</p>
            <div className="text-orange-400 font-bold flex items-center gap-2 text-sm">
              เริ่มสอบเลย <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
