import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Crown, 
  Award, 
  ShieldAlert, 
  Terminal, 
  Gamepad 
} from 'lucide-react';

interface PantheonDetailsProps {
  onClose: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 15 }
  }
};

const PantheonDetails: React.FC<PantheonDetailsProps> = ({ onClose }) => {
  const legends = [
    {
      name: '@W入~Undertaker',
      title: 'Chef de Clan & Fondateur',
      status: 'Légende Active',
      achievements: ['Chef de Clan & Fondateur du W入~RLORD', '12 Saisons consécutives Légendaire', 'MVP Tournoi Inter-Clans 2025'],
      bio: 'Créateur historique de l\'alliance. Tête pensante de la structure et pilote de la première escouade T1. Sa vision a bâti le clan.'
    },
    {
      name: '@W入~BRAD',
      title: 'Sniper d\'Élite T1',
      status: 'Figure Emblématique',
      achievements: ['Un tir, une élimination — sans exception', 'Gardien des longues portées en compétition', 'Meilleur taux de headshot du roster T1'],
      bio: 'Le sniper de référence du clan. Posté sur les hauteurs, il contrôle les lignes et dicte le rythme de chaque engagement.'
    },
    {
      name: '@W入~YAZ',
      title: 'In-Game Leader (IGL)',
      status: 'Haut Commandement',
      achievements: ['Maître stratège Search & Destroy', '30+ Victoires en Scrims majeurs', 'Rédacteur du Codex tactique W入~RLORD'],
      bio: 'Maître absolu des rotations et du placement d\'équipe. Ses stratégies ont mené le clan aux victoires décisives saison après saison.'
    },
    {
      name: '@W入~PARKER0755',
      title: 'Rusher Élite / Flanker',
      status: 'Figure Emblématique',
      achievements: ['Ratio K/D 2.47 — Inarrêtable', 'Win Rate 79% en matchs classés', 'Kill Streak record : 32 éliminations'],
      bio: 'Le rusher le plus redouté du T1. Il brise chaque ligne de défense avant que l\'ennemi réalise. Vitesse et précision absolue.'
    },
    {
      name: '@W入~WAD',
      title: 'Anchor / Support T1',
      status: 'Figure Emblématique',
      achievements: ['Verrouillage des zones stratégiques', 'Sécurisation experte des spawns', 'Pilier défensif de l\'escouade T1'],
      bio: 'L\'ancre tactique du clan. WAD sécurise les zones, contrôle les spawns et maintient la cohésion de l\'équipe sous pression.'
    },
    {
      name: '@W入~JAY',
      title: 'Support / Utility T1',
      status: 'Figure Emblématique',
      achievements: ['Expert en couverture et trophées', 'Ratio d\'assistance parmi les meilleurs', 'Indispensable en mode Search & Destroy'],
      bio: 'Le support de confiance du T1. JAY assure la couverture, pose les trophées et garantit que chaque allié peut jouer son rôle.'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto space-y-10 px-4 md:px-6 text-left relative z-10"
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

      {/* Pantheon intro */}
      <div className="p-8 rounded-3xl bg-zinc-950/50 border border-amber-500/20 backdrop-blur-xl relative overflow-hidden shadow-[0_0_60px_rgba(245,158,11,0.05)]">
        {/* Amber glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none animate-pulse" />
        
        <h2 className="font-display text-xs font-mono uppercase tracking-[0.25em] text-amber-400 mb-3 flex items-center space-x-2">
          <Crown className="h-4 w-4 text-amber-400" />
          <span>Panthéon // Temples des Légendes</span>
        </h2>
        <h3 className="font-display text-3xl font-black text-white mb-4 uppercase">
          LES FIGURES MYTHIQUES DU CLAN
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
          Le Panthéon rend hommage aux figures historiques et aux vétérans d'élite qui ont forgé la réputation des 
          <span className="text-amber-400 font-bold"> W入~RLORD </span> sur Call of Duty Mobile. 
          Leurs exploits tactiques, leur dévouement et leur maîtrise mécanique sont gravés à jamais dans nos archives.
        </p>
      </div>

      {/* Legends Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {legends.map((legend, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.01 }}
            className="p-8 rounded-3xl bg-zinc-950/70 border border-amber-500/20 hover:border-amber-500/40 backdrop-blur-2xl transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            {/* Gold corner light */}
            <div className="absolute top-0 right-0 w-12 h-[2px] bg-gradient-to-l from-amber-500 to-transparent group-hover:w-24 transition-all duration-300" />
            <div className="absolute top-0 right-0 h-12 w-[2px] bg-gradient-to-b from-amber-500 to-transparent group-hover:h-24 transition-all duration-300" />
            
            <div className="absolute top-8 right-8 text-amber-500/10 group-hover:text-amber-500/20 transition-colors pointer-events-none">
              <Award className="h-24 w-24 stroke-[1.5]" />
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <Crown className="h-6 w-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-display text-xl font-black text-white tracking-wide">
                  {legend.name}
                </h4>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest leading-none block mt-1">
                  {legend.title}
                </span>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-zinc-400 text-xs leading-relaxed border-b border-zinc-900 pb-4 font-sans">
                {legend.bio}
              </p>
              
              <div className="space-y-3">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
                  // EXPLOITS MAJEURS
                </span>
                <ul className="space-y-2">
                  {legend.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className="flex items-start space-x-2 text-[11px] font-mono text-zinc-300">
                      <span className="text-amber-400 font-bold shrink-0">&gt;</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PantheonDetails;
