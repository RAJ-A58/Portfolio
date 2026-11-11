import React from 'react';
import { Trophy, Code2, Terminal, Award, GraduationCap, Flame, ArrowUpRight, CheckCircle2, Star } from 'lucide-react';
import TiltCard from './TiltCard.jsx';

const CompetitiveStats = () => {
  return (
    <section id="competitive" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-neon badge-glow-green" style={{ marginBottom: '1rem' }}>
            <Flame size={14} />
            <span>Competitive Programming & Academic Honors</span>
          </div>
          <h2 className="section-title">Contests, Ratings & Honors</h2>
          <p className="section-subtitle">
            Consistent algorithmic problem solving and competitive achievements on global coding platforms and national hackathons.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid" style={{ maxWidth: '1150px', margin: '0 auto' }}>
          
          {/* Card 1: LeetCode Featured Bento (Col 6) */}
          <div className="bento-col-6">
            <TiltCard
              className="glass-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                borderLeft: '4px solid #38bdf8',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8'
                  }}>
                    <Code2 size={24} />
                  </div>

                  <a
                    href="https://leetcode.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      padding: '0.35rem 0.8rem',
                      borderRadius: '20px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#38bdf8'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    <span>leetcode.com</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  LeetCode Contest Rating
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 900, color: '#38bdf8', lineHeight: 1 }}>
                    1561
                  </span>
                  <span style={{ fontSize: '1rem', color: '#00ed64', fontWeight: 700 }}>
                    • 350+ Solved
                  </span>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Actively compete in weekly LeetCode algorithmic contests. Mastered core algorithmic patterns spanning dynamic programming, graphs, union-find, DFS/BFS, binary search, and prefix sums.
                </p>
              </div>

              {/* Topic chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Dynamic Programming', 'Graph Theory', 'Trees & Tries', 'Sliding Window', 'Greedy', 'Monotonic Stack'].map((topic, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.78rem',
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(56, 189, 248, 0.06)',
                      border: '1px solid rgba(56, 189, 248, 0.18)',
                      borderRadius: '6px',
                      color: '#e2e8f0',
                      fontWeight: 500
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </TiltCard>
          </div>

          {/* Card 2: Codeforces Bento (Col 6) */}
          <div className="bento-col-6">
            <TiltCard
              className="glass-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                borderLeft: '4px solid #c084fc',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(168, 85, 247, 0.1)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#c084fc'
                  }}>
                    <Terminal size={24} />
                  </div>

                  <a
                    href="https://codeforces.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      padding: '0.35rem 0.8rem',
                      borderRadius: '20px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#c084fc'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    <span>codeforces.com</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  Codeforces Max Rating
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 900, color: '#c084fc', lineHeight: 1 }}>
                    1281
                  </span>
                  <span style={{ fontSize: '1rem', color: '#38bdf8', fontWeight: 700 }}>
                    • Pupil Rank
                  </span>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Competed in Div. 2 and Div. 3 rounds with rapid problem formulation under stringent time pressure. Experienced in number theory, combinatorics, bitmasking, and modular arithmetic.
                </p>
              </div>

              {/* Topic chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Number Theory', 'Bit Manipulation', 'Combinatorics', 'Constructive Algorithms', 'Fast I/O', 'Two Pointers'].map((topic, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.78rem',
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(168, 85, 247, 0.06)',
                      border: '1px solid rgba(168, 85, 247, 0.18)',
                      borderRadius: '6px',
                      color: '#e2e8f0',
                      fontWeight: 500
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </TiltCard>
          </div>

          {/* Card 3: Meta PyTorch Hackathon Finalist (Col 7) */}
          <div className="bento-col-7">
            <TiltCard
              className="glass-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                borderLeft: '4px solid #ff9900',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(255, 153, 0, 0.1)',
                    border: '1px solid rgba(255, 153, 0, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ff9900'
                  }}>
                    <Trophy size={24} />
                  </div>
                  <span className="badge-neon" style={{ background: 'rgba(255, 153, 0, 0.1)', color: '#ff9900', borderColor: 'rgba(255, 153, 0, 0.3)' }}>
                    Top 800 Nationwide
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
                  Finalist — Meta PyTorch OpenEnv Hackathon × Scaler
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#ff9900', fontWeight: 600, marginBottom: '1rem' }}>
                  India's Premier AI & Open Environment Hackathon • April 2026
                </p>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.4rem' }}>
                  Selected among the top 800 finalist teams nationwide out of 31,000+ registered competing developer teams across India. Designed high-performance PyTorch agent evaluation pipelines and simulation control.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase' }}>Participation Pool</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>31,000+ Teams</div>
                </div>
                <div style={{ width: '1px', height: '30px', background: 'rgba(255, 255, 255, 0.1)' }} />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase' }}>Finalist Standing</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ff9900' }}>National Top 2.5%</div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 4: Academic Excellence at VNIT (Col 5) */}
          <div className="bento-col-5">
            <TiltCard
              className="glass-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                borderLeft: '4px solid #00ed64',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(0, 237, 100, 0.1)',
                    border: '1px solid rgba(0, 237, 100, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00ed64'
                  }}>
                    <GraduationCap size={24} />
                  </div>
                  <span className="badge-neon badge-glow-green">
                    Academic Merit
                  </span>
                </div>

                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  VNIT Nagpur CGPA
                </div>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: '#00ed64', lineHeight: 1, marginBottom: '0.8rem' }}>
                  8.52
                </div>

                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>
                  B.Tech in Computer Science & Engineering
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  Visvesvaraya National Institute of Technology (VNIT), Nagpur (2024–2028). Rigorous coursework across Compilers, OS, DBMS, Algorithms, and Distributed Systems.
                </p>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.82rem', color: '#94a3b8' }}>
                ID: <strong>BT24CSE097</strong> • Batch of 2028
              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CompetitiveStats;
