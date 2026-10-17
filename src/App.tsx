import { useState } from 'react';

// Define TypeScript interfaces for state safety
interface BasinState {
  fill: number;
  height: number;
}

interface BasinStates {
  A: BasinState;
  B: BasinState;
  C: BasinState;
}

export default function App() {
  const [basinStates, setBasinStates] = useState<BasinStates>({
    A: { fill: 0, height: 82 },
    B: { fill: 45, height: 82 },
    C: { fill: 0, height: 82 }
  });

  const handlePedalAction = (basin: 'A' | 'B' | 'C', action: 'FILL' | 'DRAIN' | 'LOWER' | 'ELEVATE') => {
    setBasinStates(prev => {
      const current = prev[basin];
      const updated = { ...current };
      if (action === 'FILL') updated.fill = 100;
      if (action === 'DRAIN') updated.fill = 0;
      if (action === 'LOWER') updated.height = Math.max(70, current.height - 2);
      if (action === 'ELEVATE') updated.height = Math.min(95, current.height + 2);
      return { ...prev, [basin]: updated };
    });
  };

  return (
    <div 
      className="min-h-screen bg-slate-950 text-white flex flex-col items-center p-4"
      data-basin-states={JSON.stringify(basinStates)}
    >
      
      {/* Top Header */}
      <header className="w-full max-w-7xl flex justify-between items-center bg-slate-900 border border-slate-800 px-6 py-3 rounded-xl mb-4 shadow-lg">
        <h1 className="text-sm font-bold tracking-wider text-cyan-400">MULTI-SINK HMI DIGITAL TWIN WORKSTATION</h1>
        <span className="text-xs text-emerald-400 font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Multi-Sink HMI Simulator Embedded Active
        </span>
      </header>

      {/* EDGE-TO-EDGE WORKSTATION CONTAINER (No borders) */}
      <div className="relative w-full max-w-7xl shadow-2xl overflow-hidden select-none">
        
        {/* COMPRESSED SINK IMAGE BACKGROUND */}
        <img
          src="/open-sink.jpg" 
          alt="Multi-Sink Workstation"
          className="w-full h-auto block pointer-events-none"
        />

        {/* ================= EMBEDDED HMI SIMULATOR SCREEN ================= */}
        <div
          className="absolute overflow-hidden bg-slate-950 rounded-lg"
          style={{
            top: '10.5%',
            left: '42.0%',
            width: '20.5%',  // Matches the monitor frame width on your image
            height: '17.8%', // Matches the monitor frame height on your image
          }}
        >
          {/* Replace 'YOUR_SIMULATOR_URL_HERE' with your actual hosted simulator URL or local route */}
          <iframe
            src="https://fehefamily.vercel.app/" 
            title="Multi-Sink HMI Simulator Embedded"
            className="border-0"
            style={{
              width: '1280px',   // Simulator native design width
              height: '800px',   // Simulator native design height
              transform: 'scale(0.18)', // Adjust up/down if needed to fit monitor frame perfectly
              transformOrigin: 'top left',
            }}
          />
        </div>

        {/* ================= PEDAL CLICK HOTSPOTS (Basin A, B, C) ================= */}
        
        {/* Basin A Pedals (Fill, Drain, Lower, Elevate) */}
        <div className="absolute flex gap-1" style={{ bottom: '1.5%', left: '15.5%', width: '8%' }}>
          <div onClick={() => handlePedalAction('A', 'FILL')} className="flex-1 h-8 cursor-pointer hover:bg-cyan-400/20 rounded" title="Fill Basin A"></div>
          <div onClick={() => handlePedalAction('A', 'DRAIN')} className="flex-1 h-8 cursor-pointer hover:bg-cyan-400/20 rounded" title="Drain Basin A"></div>
          <div onClick={() => handlePedalAction('A', 'LOWER')} className="flex-1 h-8 cursor-pointer hover:bg-cyan-400/20 rounded" title="Lower Basin A"></div>
          <div onClick={() => handlePedalAction('A', 'ELEVATE')} className="flex-1 h-8 cursor-pointer hover:bg-cyan-400/20 rounded" title="Elevate Basin A"></div>
        </div>

        {/* Basin B Pedals */}
        <div className="absolute flex gap-1" style={{ bottom: '1.5%', left: '46%', width: '8%' }}>
          <div onClick={() => handlePedalAction('B', 'FILL')} className="flex-1 h-8 cursor-pointer hover:bg-cyan-400/20 rounded" title="Fill Basin B"></div>
          <div onClick={() => handlePedalAction('B', 'DRAIN')} className="flex-1 h-8 cursor-pointer hover:bg-cyan-400/20 rounded" title="Drain Basin B"></div>
          <div onClick={() => handlePedalAction('B', 'LOWER')} className="flex-1 h-8 cursor-pointer hover:bg-cyan-400/20 rounded" title="Lower Basin B"></div>
          <div onClick={() => handlePedalAction('B', 'ELEVATE')} className="flex-1 h-8 cursor-pointer hover:bg-cyan-400/20 rounded" title="Elevate Basin B"></div>
        </div>

        {/* Basin C Pedals */}
        <div className="absolute flex gap-1" style={{ bottom: '1.5%', left: '76.5%', width: '8%' }}>
          <div onClick={() => handlePedalAction('C', 'FILL')} className="flex-1 h-8 cursor-pointer hover:bg-cyan-400/20 rounded" title="Fill Basin C"></div>
          <div onClick={() => handlePedalAction('C', 'DRAIN')} className="flex-1 h-8 cursor-pointer hover:bg-cyan-400/20 rounded" title="Drain Basin C"></div>
          <div onClick={() => handlePedalAction('C', 'LOWER')} className="flex-1 h-8 cursor-pointer hover:bg-cyan-400/20 rounded" title="Lower Basin C"></div>
          <div onClick={() => handlePedalAction('C', 'ELEVATE')} className="flex-1 h-8 cursor-pointer hover:bg-cyan-400/20 rounded" title="Elevate Basin C"></div>
        </div>

      </div>

    </div>
  );
}