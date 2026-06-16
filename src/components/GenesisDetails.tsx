import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Terminal, 
  Flame, 
  Crosshair, 
  Shield 
} from 'lucide-react';

interface GenesisDetailsProps {
  onClose: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', stiffness: 90, damping: 14 }
  }
};

const GenesisDetails: React.FC<GenesisDetailsProps> = ({ onClose }) => {
  const codeRules = [
    {
      num: '01',
      title: 'FRATERNITÉ ET SYNERGIE',
      desc: 'En Recherche & Destruction ou en Point Chaud, la communication est notre arme principale. Un Warlord joue pour l\'équipe, pas pour son ratio personnel.',
      color: 'border-cyan-500/20 shadow-cyan-950/20 text-cyan-400'
    },
    {
      num: '02',
      title: 'DISCIPLINE ET RIGUEUR TACTIQUE',
      desc: 'Entraînements, Scrims réguliers et maîtrise absolue des rotations. Le viseur toujours prêt, les réflexes aiguisés à chaque seconde.',
      color: 'border-rose-500/20 shadow-rose-950/20 text-rose-400'
    },
    {
      num: '03',
      title: 'SUPRÉMATIE EN ARÈNE',
      desc: 'Que ce soit sur Firing Range, Standoff ou Raid, nous jouons pour conquérir les grades Légendaires et dominer les tournois.',
      color: 'border-amber-500/20 shadow-amber-950/20 text-amber-400'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto space-y-10 px-4 md:px-6 text-left relative z-10"
    >
      {/* Return Navigation */}
      <div>
        <button
          onClick={onClose}
          className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>RETOUR AUX CHOIX</span>
        </button>
      </div>

      {/* Title Header */}
      <div className="border-b border-zinc-800/80 pb-6 relative">
        <div className="inline-flex items-center space-x-2 w-max px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 mb-4 font-mono">
          <Terminal className="h-3.5 w-3.5 text-cyan-400" />
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">
            Base De Données // Décryptée
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
          LA GENÈSE CODM
        </h1>
        <p className="text-zinc-500 text-xs mt-2 font-mono uppercase tracking-widest">
          Code W入~RLORD : HISTOIRE ET COMPÉTITION v1.0
        </p>
      </div>

      {/* Main Content Layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Left Side: Lore Narrative */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-display text-lg font-black text-white flex items-center space-x-2">
              <span className="text-cyan-400">#</span>
              <span>L'ÉVEIL DES LOBBIES COMPÉTITIFS</span>
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed font-sans">
              Né de l'ambition de dominer la scène e-sport mobile de Call of Duty Mobile, le clan <span className="text-cyan-400 font-bold">W入~RLORD</span> rassemble des tireurs d'élite, des stratèges de zone et des spécialistes du corps à corps. Notre clan a été fondé sur un principe simple : allier la précision mécanique à une coordination d'équipe digne des meilleures équipes pro.
            </p>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              Chaque duel sur Firing Range ou Raid a forgé notre réputation. Nous ne jouons pas seulement pour passer le temps, mais pour imposer notre tactique dans chaque Scrim et grimper au sommet des classements de serveurs.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-display text-lg font-black text-white flex items-center space-x-2">
              <span className="text-rose-400">#</span>
              <span>LA FORGE DE LA PREMIÈRE DIVISION</span>
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed font-sans">
              Nous avons structuré notre effectif en deux tiers de combat : le Roster T1, qui regroupe la force de frappe principale et les stratèges de Recherche & Destruction, et le Roster T2, qui prépare la relève et accueille les espoirs les plus actifs. Chez W入~RLORD, le grade n'est pas figé : il se gagne balle après balle sur le terrain.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-display text-lg font-black text-white flex items-center space-x-2">
              <span className="text-amber-400">#</span>
              <span>OBJECTIF SUPRÉMATIE E-SPORT</span>
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed font-sans">
              À chaque saison, notre objectif est clair : remporter les tournois communautaires majeurs, maintenir nos joueurs au rang de Légendaire, et asseoir la réputation des W入~RLORD comme l'un des clans les plus redoutés de la scène mobile.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Directives & Stats */}
        <div className="space-y-6">
          {/* Directives */}
          <motion.div 
            variants={itemVariants} 
            className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-zinc-900 rounded-bl-full pointer-events-none border-l border-b border-zinc-800/50" />
            <h4 className="font-display text-sm font-bold text-white mb-6 uppercase tracking-wider font-mono">
              // CODE TACTIQUE
            </h4>
            
            <div className="space-y-6">
              {codeRules.map((rule, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">
                      {rule.num}
                    </span>
                    <h5 className="font-display text-xs font-black text-white tracking-wide">
                      {rule.title}
                    </h5>
                  </div>
                  <p className="text-zinc-400 text-[11px] leading-relaxed pl-7">
                    {rule.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tactical Metrics Card */}
          <motion.div 
            variants={itemVariants} 
            className="p-6 rounded-2xl bg-zinc-950/40 border border-cyan-500/20 backdrop-blur-xl relative"
          >
            <h4 className="font-display text-sm font-bold text-white mb-5 uppercase tracking-wider font-mono flex items-center space-x-2">
              <Crosshair className="h-4 w-4 text-cyan-400" />
              <span>ÉTAT OFFENSIF</span>
            </h4>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="text-zinc-500 text-[10px] font-mono uppercase">Rangs Légendaires</span>
                <span className="text-cyan-400 text-sm font-bold font-mono">100%</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="text-zinc-500 text-[10px] font-mono uppercase">Scrims Joués</span>
                <span className="text-white text-sm font-bold font-mono">350+</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-zinc-500 text-[10px] font-mono uppercase">Taux de Victoire</span>
                <span className="text-rose-400 text-sm font-bold font-mono">82.7%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default GenesisDetails;
