"use client";

import Link from "next/link";
import { BookOpen, Brain, Handshake, Zap, ChevronRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const exams = [
    {
      id: "tgat1",
      title: "English Communication",
      tag: "TGAT 1",
      icon: <BookOpen className="w-12 h-12 text-blue-400 mb-4" />,
      color: "from-blue-500 to-cyan-400",
      borderHover: "hover:border-blue-500",
      shadowHover: "hover:shadow-blue-500/20",
      stats: { questions: 60, time: 60 },
      topics: [
        "Conversation & Dialogue",
        "Vocabulary & Collocations",
        "Reading Comprehension",
        "Error Identification",
        "Cloze Test"
      ]
    },
    {
      id: "tgat2",
      title: "Critical & Logical Thinking",
      tag: "TGAT 2",
      icon: <Brain className="w-12 h-12 text-pink-400 mb-4" />,
      color: "from-pink-500 to-rose-400",
      borderHover: "hover:border-pink-500",
      shadowHover: "hover:shadow-pink-500/20",
      stats: { questions: 80, time: 60 },
      topics: [
        "Numerical Reasoning",
        "Logical Reasoning",
        "Spatial Reasoning",
        "Analytical Thinking",
        "IQ / Speed Thinking"
      ]
    },
    {
      id: "tgat3",
      title: "Future Workforce Competencies",
      tag: "TGAT 3",
      icon: <Handshake className="w-12 h-12 text-yellow-400 mb-4" />,
      color: "from-yellow-400 to-orange-500",
      borderHover: "hover:border-yellow-500",
      shadowHover: "hover:shadow-yellow-500/20",
      stats: { questions: 60, time: 60 },
      topics: [
        "Teamwork & Communication",
        "Problem Solving",
        "Emotional Intelligence",
        "Ethics & Professionalism",
        "Creativity & Adaptability"
      ]
    }
  ];

  return (
    <main className="min-h-screen p-8 bg-slate-950 text-slate-100 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              TGAT PHARMACY
            </span>
          </h1>
          <h2 className="text-2xl font-bold text-slate-300 mb-6 tracking-widest">
            TCAS 2570 SIMULATOR
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            ระบบจำลองข้อสอบเสมือนจริงครบ 3 พาร์ท เพื่อเตรียมความพร้อมเข้าศึกษาต่อคณะ<span className="text-cyan-400 font-semibold">เภสัชศาสตร์</span>
            <br />
            ออกแบบโดยอ้างอิงความยากระดับหวัง Top 1-5% พร้อมเฉลยอย่างละเอียดและวิธีวิเคราะห์จุดอ่อนเฉพาะจุด
          </p>
        </motion.div>

        {/* Exam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {exams.map((exam, index) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 flex flex-col transition-all duration-300 ${exam.borderHover} ${exam.shadowHover} group`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${exam.color} rounded-t-3xl opacity-80 group-hover:opacity-100 transition-opacity`} />
              
              <div className="flex flex-col items-center text-center flex-grow">
                <span className={`text-xs font-bold px-3 py-1 rounded-full mb-6 border border-slate-700 bg-slate-800/80 text-slate-300 tracking-wider group-hover:border-slate-500 transition-colors`}>
                  {exam.tag}
                </span>
                
                {exam.icon}
                
                <h3 className="text-xl font-bold mb-4 h-14 flex items-center justify-center">
                  {exam.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm font-medium text-slate-400 bg-slate-950/50 px-4 py-2 rounded-xl mb-8">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    <span>{exam.stats.questions} ข้อ</span>
                  </div>
                  <div className="w-px h-4 bg-slate-700" />
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    <span>{exam.stats.time} นาที</span>
                  </div>
                </div>

                <ul className="text-left w-full space-y-3 mb-8">
                  {exam.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <a href={`/${exam.id}-study.html`} className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 transition-all">
                  <BookOpen className="w-4 h-4" /> อ่านเนื้อหาก่อน
                </a>
                <a href={`/${exam.id}.html`} className={`w-full py-3 rounded-xl bg-gradient-to-r ${exam.color} text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all`}>
                  <Zap className="w-4 h-4 fill-current" /> เริ่มสอบเลย
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer info box */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 text-cyan-400 font-bold mb-3">
            <Zap className="w-5 h-5 fill-current" />
            <h3>เป้าหมาย: เภสัชศาสตร์ TCAS 2570</h3>
          </div>
          <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
            <li><strong className="text-slate-200">TGAT1 วัดทักษะสื่อสารภาษาอังกฤษเชิงวิชาการและวิชาชีพ</strong> — ต้องอ่านเร็ว ตัดชอยส์เก่ง</li>
            <li><strong className="text-slate-200">TGAT2 วัดการคิดอย่างมีเหตุผล</strong> — เน้นความเร็วและแม่นยำในการวิเคราะห์ข้อมูลซับซ้อน</li>
            <li><strong className="text-slate-200">TGAT3 วัดสมรรถนะการทำงานในอนาคต</strong> — เน้นความฉลาดทางอารมณ์และจริยธรรมที่จำเป็นในวิชาชีพแพทย์และเภสัช</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
