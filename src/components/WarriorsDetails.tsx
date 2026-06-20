import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Gamepad2, 
  TrendingUp, 
  Award, 
  ShieldAlert, 
  Zap, 
  Activity 
} from 'lucide-react';

interface WarriorsDetailsProps {
  onClose: () => void;
}

interface Player {
  name: string;
  fullName?: string;
  role: string;
  country: string;
  flag: string;
  motto: string;
  kd: string;
  favWeapon: string;
  clanLeader?: boolean;
  featured?: boolean;
  winRate?: string;
  killStreak?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const WarriorsDetails: React.FC<WarriorsDetailsProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'T1' | 'T2'>('T1');

  const t1Players: Player[] = [
    { name: '@W入~Undertaker', fullName: 'MYEHOUENOU DILANE', role: 'Chef de Clan / Slayer', country: 'Bénin', flag: '🇧🇯', motto: 'Fondateur et faucheuse des arènes. La loi du clan, c\'est lui.', kd: '2.45', favWeapon: 'Cran d\'arrêt ou Switchblade', clanLeader: true, featured: false },
    { name: '@W入~Rous_1223', fullName: 'GBEDAN Armand', role: 'Support / Rusher', country: 'Bénin', flag: '🇧🇯', motto: 'Tactique et précision, toujours prêt à soutenir la ligne.', kd: '1.85', favWeapon: 'Cran d\'arrêt', featured: false },
    { name: '@W入~Cus_Hunt3r', fullName: 'ASSOGBA Marcus', role: 'Anchor / Slayeur', country: 'Bénin', flag: '🇧🇯', motto: 'Maitrise du champ de bataille et du rythme des combats.', kd: '1.95', favWeapon: 'VMP', featured: false },
    { name: '@W入~Prudoh', fullName: 'HOUEDENOU Prudence', role: 'Flex / Polyvalent', country: 'Bénin', flag: '🇧🇯', motto: 'Polyvalent, il répond à tous les scénarios de match.', kd: '1.90', favWeapon: 'Aucune préférence', featured: false },
    { name: '@W入~BRAD', fullName: 'AZAÏNON Bradley', role: 'Sniper d\'Élite', country: 'Sénégal', flag: '🇸🇳', motto: 'Un tir, une élimination. Gardien des longues lignes.', kd: '2.10', favWeapon: 'LAG 53', featured: false },
    { name: '@W入~WAD', fullName: 'WAIDI Abdoul Wadoud', role: 'Anchor / Support', country: 'Nigéria', flag: '🇳🇬', motto: 'Verrouille les zones et sécurise les spawns tactiques.', kd: '2.65', favWeapon: 'VMP Éclosion Toxique', featured: false },
    { name: '@W入~MK_USER', fullName: 'KANGNIDE Morel', role: 'Flex / Rusher', country: 'Bénin', flag: '🇧🇯', motto: 'S\'adapte instantanément aux besoins de l\'escouade.', kd: '1.90', favWeapon: 'PP Bizon', featured: false },
    { name: '@W入~YAZ', fullName: 'YAROU Yazid', role: 'In-Game Leader (IGL)', country: 'Bénin', flag: '🇧🇯', motto: 'Le cerveau tactique du clan, maître des rotations.', kd: '2.98', favWeapon: 'QQ9', featured: false },
    { name: '@W入~BaKs女', fullName: 'BONOU Abraham', role: 'Sniper de Soutien', country: 'Bénin', flag: '🇧🇯', motto: 'Sécurise les zones ouvertes à longue distance.', kd: '1.60', favWeapon: 'Locus', featured: false },
    { name: '@W入~EML76', fullName: 'GANHE EMILIO', role: 'Slayer', country: 'Béninois / Américain', flag: '🇧🇯', motto: 'Cherche le duel pour briser la défense adverse.', kd: '2.76', favWeapon: 'Chopper', featured: false },
    { name: '@W入~PARKER0755', fullName: 'ASSIHOU Freddy', role: 'Rusher Élite / Flanker', country: 'Bénin', flag: '🇧🇯', motto: 'Inarrêtable. Brise chaque ligne de défense avant que l\'ennemi réalise.', kd: '2.91', favWeapon: 'USS9 / VMP Éclosion Toxique', winRate: '79%', killStreak: '32', clanLeader: true, featured: true }
  ];

  const t2Players = [
    { name: '@W入~Roussel', role: 'Support', country: 'Côte d\'Ivoire', flag: '🇨🇮', motto: 'Assure la liaison tactique et la couverture.', kd: '1.52', favWeapon: 'Grau 5.56' },
    { name: '@W入~Valdophe', role: 'Rusher', country: 'Cameroun', flag: '🇨🇲', motto: 'Agressivité constante sur les lignes latérales.', kd: '1.58', favWeapon: 'Fennec' },
    { name: '@W入~EML', role: 'Slayer', country: 'Togo', flag: '🇹🇬', motto: 'Cherche le duel pour briser la défense adverse.', kd: '1.62', favWeapon: 'DR-H' },
    { name: '@W入~Sage', role: 'IGL Adjoint', country: 'France', flag: '🇫🇷', motto: 'Organise les replacements en Recherche & Destruction.', kd: '1.45', favWeapon: 'LK24' },
    { name: '@W入~Kings', role: 'Rusher', country: 'Bénin', flag: '🇧🇯', motto: 'Pression constante sur les arrières de l\'ennemi.', kd: '1.48', favWeapon: 'Switchblade X9' },
    { name: '@W入~Coloss19', role: 'Sniper de Soutien', country: 'France', flag: '🇫🇷', motto: 'Sécurise les zones ouvertes à longue distance.', kd: '1.60', favWeapon: 'Locus' },
    { name: '@W入~Cus_hunter', role: 'Anchor', country: 'Sénégal', flag: '🇸🇳', motto: 'Maintient la position d\'ancrage arrière.', kd: '1.38', favWeapon: 'HVK-30' },
    { name: '@W入~MK_USER', role: 'Flex', country: 'Cameroun', flag: '🇨🇲', motto: 'S\'adapte aux besoins selon la carte jouée.', kd: '1.40', favWeapon: 'Kilo 141' }
  ];

  const currentRoster = activeTab === 'T1' ? t1Players : t2Players;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto space-y-10 px-4 md:px-6 text-left relative z-10"
    >
      {/* Return Button */}
      <div>
        <button
          onClick={onClose}
          className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>RETOUR AUX CHOIX</span>
        </button>
      </div>

      {/* Roster Guide Card */}
      <div className="p-8 rounded-3xl bg-zinc-950/50 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.05)]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
        <h2 className="font-display text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-3">
          Roster // Système de Division
        </h2>
        <h3 className="font-display text-3xl font-black text-white mb-4 uppercase">
          L'ÉLITE CODM DU CLAN
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
          Notre effectif est divisé en deux sections compétitives. 
          <span className="text-cyan-400 font-bold"> Le Roster T1 </span> regroupe les titulaires permanents et les plus actifs. 
          Les places se méritent au combat : impliquez-vous aux Scrims collectifs et restez actif pour y entrer, ou perdez votre place en cas de relâchement.
        </p>

        {/* Tab Switcher */}
        <div className="flex space-x-4 mt-8">
          <button
            onClick={() => setActiveTab('T1')}
            className={`px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center space-x-2 ${
              activeTab === 'T1'
                ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            <Zap className="h-4 w-4" />
            <span>ROSTER T1 (ÉLITE)</span>
          </button>
          <button
            onClick={() => setActiveTab('T2')}
            className={`px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center space-x-2 ${
              activeTab === 'T2'
                ? 'bg-zinc-100 text-black shadow-lg'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            <Activity className="h-4 w-4" />
            <span>ROSTER T2 (ESPOIRS)</span>
          </button>
        </div>
      </div>

      {/* Roster Cards Grid */}
      <motion.div 
        key={activeTab} // Forces animation when tab changes
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {currentRoster.map((player, idx) => (
          (player as any).featured && activeTab === 'T1' ? (
            /* ===== PARKER FEATURED CARD ===== */
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              className="sm:col-span-2 lg:col-span-2 p-0 rounded-2xl relative overflow-hidden group"
              style={{ gridRow: '1' }}
            >
              {/* Outer glow border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 opacity-70 blur-[2px] pointer-events-none" />
              <div className="relative m-[2px] rounded-[14px] bg-zinc-950 p-7 h-full flex flex-col justify-between overflow-hidden">
                {/* Animated corner light */}
                <div className="absolute top-0 right-0 w-32 h-[2px] bg-gradient-to-l from-cyan-400 to-transparent group-hover:w-56 transition-all duration-500" />
                <div className="absolute top-0 right-0 h-32 w-[2px] bg-gradient-to-b from-cyan-400 to-transparent group-hover:h-56 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-gradient-to-r from-indigo-500 to-transparent group-hover:w-32 transition-all duration-500" />
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-600/5 pointer-events-none" />

                {/* TOP: Badge + Name */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center space-x-3">
                      <span className="px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-[9px] font-mono font-black text-cyan-300 uppercase tracking-[0.25em] shadow-[0_0_10px_rgba(6,182,212,0.25)]">
                        ⚡ MVP T1
                      </span>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                        OPERATIVE // T1
                      </span>
                    </div>
                    <span className="text-2xl" title={(player as any).country}>{(player as any).flag}</span>
                  </div>

                  <h4 className="font-display text-3xl font-black tracking-wide text-white mb-1 leading-none">
                    {(player as any).name}
                  </h4>
                  {(player as any).fullName && (
                    <p className="text-xs text-zinc-400 uppercase tracking-[0.18em] mb-2">
                      {player.fullName}
                    </p>
                  )}
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                    {(player as any).role}
                  </span>
                </div>

                {/* STATS GRID */}
                <div className="grid grid-cols-3 gap-4 mt-6 mb-5">
                  <div className="bg-zinc-900/80 rounded-xl p-3 border border-cyan-500/10 text-center">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Ratio K/D</span>
                    <span className="text-2xl font-black text-white font-mono">{(player as any).kd}</span>
                    <div className="mt-1 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
                  </div>
                  <div className="bg-zinc-900/80 rounded-xl p-3 border border-cyan-500/10 text-center">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Win Rate</span>
                    <span className="text-2xl font-black text-cyan-400 font-mono">{(player as any).winRate ?? '79%'}</span>
                    <div className="mt-1 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
                  </div>
                  <div className="bg-zinc-900/80 rounded-xl p-3 border border-cyan-500/10 text-center">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Kill Streak</span>
                    <span className="text-2xl font-black text-indigo-400 font-mono">{(player as any).killStreak ?? '32'}</span>
                    <div className="mt-1 h-[2px] bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full" />
                  </div>
                </div>

                {/* Arme */}
                <div className="flex items-center justify-between border-t border-zinc-900 pt-4">
                  <div>
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">Arme Favorite</span>
                    <span className="text-sm font-mono font-black text-white">{(player as any).favWeapon}</span>
                  </div>
                  {/* Motto */}
                  <p className="text-cyan-300/60 text-[10px] leading-relaxed italic text-right max-w-[55%]">
                    "{(player as any).motto}"
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ===== REGULAR PLAYER CARD ===== */
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-6 rounded-2xl bg-zinc-950/70 border backdrop-blur-xl shadow-2xl relative overflow-hidden group transition-all duration-300 ${
                activeTab === 'T1' && (player as any).clanLeader
                  ? 'border-amber-500/40 hover:border-amber-500/70 shadow-[0_0_25px_rgba(245,158,11,0.08)]'
                  : activeTab === 'T1' 
                  ? 'border-cyan-500/20 hover:border-cyan-500/50' 
                  : 'border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {/* Tech line decorations */}
              <div className={`absolute top-0 right-0 w-8 h-[2px] transition-colors ${activeTab === 'T1' ? 'bg-cyan-500/30 group-hover:bg-cyan-500' : 'bg-zinc-800 group-hover:bg-zinc-600'}`} />
              <div className={`absolute top-0 right-0 h-8 w-[2px] transition-colors ${activeTab === 'T1' ? 'bg-cyan-500/30 group-hover:bg-cyan-500' : 'bg-zinc-800 group-hover:bg-zinc-600'}`} />

              {/* Header of Player Card */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block tracking-widest uppercase">
                    OPERATIVE // {activeTab === 'T1' ? 'T1' : 'T2'}
                  </span>
                  {(player as any).clanLeader && activeTab === 'T1' && (
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-[8px] font-mono font-black text-amber-400 uppercase tracking-[0.2em] mb-1 shadow-[0_0_8px_rgba(245,158,11,0.2)]">
                      <span>⚔️</span><span>Chef de Clan</span>
                    </span>
                  )}
                  <h4 className={`font-display text-base font-black tracking-wide ${activeTab === 'T1' ? 'text-white' : 'text-zinc-200'}`}>
                    {(player as any).name}
                  </h4>
                  {(player as any).fullName && (
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                      {player.fullName}
                    </p>
                  )}
                </div>
                <span className="text-xl" title={(player as any).country}>
                  {(player as any).flag}
                </span>
              </div>

              {/* Middle Stats */}
              <div className="space-y-3 mb-4 border-b border-zinc-900 pb-4">
                <div>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">Rôle principal</span>
                  <span className={`text-xs font-bold uppercase tracking-wider ${activeTab === 'T1' ? 'text-cyan-400' : 'text-zinc-300'}`}>
                    {(player as any).role}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">Ratio K/D</span>
                    <span className="text-xs font-mono font-bold text-white">{(player as any).kd}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">Arme Fav.</span>
                    <span className="text-xs font-mono font-bold text-white">{(player as any).favWeapon}</span>
                  </div>
                </div>
              </div>

              {/* Motto / Description */}
              <p className="text-zinc-500 text-[11px] leading-relaxed italic">
                "{(player as any).motto}"
              </p>
            </motion.div>
          )
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WarriorsDetails;
