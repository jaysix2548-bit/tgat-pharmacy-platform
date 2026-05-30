"use client";

import React, { useState, useMemo } from "react";
import type { Question, Difficulty, SearchFilters } from "@/types/exam";
import { getUniqueMetadata } from "@/lib/search";

interface SearchPanelProps {
  questions: Question[];
  onFilterChange: (filters: SearchFilters) => void;
  isTGAT3?: boolean;
}

export default function SearchPanel({ questions, onFilterChange, isTGAT3 = false }: SearchPanelProps) {
  const [keyword, setKeyword] = useState("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [competency, setCompetency] = useState<string>("");

  // Get unique metadata for dropdown lists
  const metadata = useMemo(() => getUniqueMetadata(questions), [questions]);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setKeyword(val);
    triggerFilter(val, difficulty, topic, competency);
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setDifficulty(val);
    triggerFilter(keyword, val, topic, competency);
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setTopic(val);
    triggerFilter(keyword, difficulty, val, competency);
  };

  const handleCompetencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setCompetency(val);
    triggerFilter(keyword, difficulty, topic, val);
  };

  const triggerFilter = (kw: string, diff: string, top: string, comp: string) => {
    const filters: SearchFilters = {};
    if (kw.trim() !== "") filters.keyword = kw;
    if (diff !== "") filters.difficulty = diff as Difficulty;
    if (top !== "") filters.topic = top;
    if (comp !== "") filters.competency = comp;
    onFilterChange(filters);
  };

  const handleReset = () => {
    setKeyword("");
    setDifficulty("");
    setTopic("");
    setCompetency("");
    onFilterChange({});
  };

  return (
    <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-6 transition-all duration-300 hover:border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent flex items-center gap-2">
          🔍 Search & Filter Database
        </h3>
        <button
          onClick={handleReset}
          className="text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 transition-all font-medium active:scale-95"
        >
          Reset Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Keyword Input */}
        <div className="relative">
          <input
            type="text"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="Type keywords (e.g. insulin, ethics)..."
            className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-neon-blue/80 focus:ring-1 focus:ring-neon-blue/80 transition-all"
          />
        </div>

        {/* Difficulty Select */}
        <div>
          <select
            value={difficulty}
            onChange={handleDifficultyChange}
            className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-white text-sm focus:outline-none focus:border-neon-blue/80 transition-all cursor-pointer"
          >
            <option value="" className="bg-slate-900 text-white/50">Any Difficulty</option>
            {metadata.difficulties.map((diff) => (
              <option key={diff} value={diff} className="bg-slate-900 text-white">
                {diff}
              </option>
            ))}
          </select>
        </div>

        {/* Topic Select */}
        <div>
          <select
            value={topic}
            onChange={handleTopicChange}
            className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-white text-sm focus:outline-none focus:border-neon-blue/80 transition-all cursor-pointer"
          >
            <option value="" className="bg-slate-900 text-white/50">Any Topic</option>
            {metadata.topics.map((t) => (
              <option key={t} value={t} className="bg-slate-900 text-white">
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Competency (TGAT3-specific) or Fallback */}
        {isTGAT3 ? (
          <div>
            <select
              value={competency}
              onChange={handleCompetencyChange}
              className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-white text-sm focus:outline-none focus:border-neon-blue/80 transition-all cursor-pointer"
            >
              <option value="" className="bg-slate-900 text-white/50">Any Competency</option>
              {metadata.competencies.map((c) => (
                <option key={c} value={c} className="bg-slate-900 text-white">
                  {c}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="flex items-center justify-center text-xs text-white/40 border border-white/5 rounded-xl bg-white/5 select-none">
            ⚡ Pharmacy Admission Prep
          </div>
        )}
      </div>
    </div>
  );
}
