import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Gamepad2, 
  Crown, 
  Check, 
  ArrowLeft 
} from 'lucide-react';

interface ClanDiscoveryProps {
  onClose: () => void;
  onExploreGenesis: () => void;
  onExploreWarriors: () => void;
  onExplorePantheon: () => void;
}

const ClanDiscovery: React.FC<ClanDiscoveryProps> = ({ onClose, onExploreGenesis, onExploreWarriors, onExplorePantheon }) => {
  const sections = [
    {
      title: 'La Genèse',
      badge: 'ORIGINES',
      subtitle: 'Lore & Code de conduite',
      actionText: 'Explorer le Lore',
      features: [
        'Texte de Lore immersif du clan',
        'Code de conduite (3 préceptes clés)',
        'Membres actifs & stats globales',
        'Opérations militaires réussies'
      ],
      isPopular: false,
      color: 'border-white/10 hover:border-cyan-500/30 shadow-zinc-950',
      badgeColor: 'bg-zinc-800 text-zinc-300'
    },
    {
      title: 'Les Guerriers',
      badge: 'DIVISIONS',
      subtitle: 'Classes & Spécialités',
      actionText: 'Inspecter les Rangs',
      features: [
        'Division Rair (Première Ligne)',
        'Division Forge (Développeurs & Artistes)',
        'Division Apex (Stratèges Marketing)',
        'Spécifications de combat et dApps'
      ],
      isPopular: true,
      color: 'border-cyan-500/20 hover:border-cyan-500/50 shadow-cyan-950/5',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
    },
    {
      title: 'Le Panthéon',
      badge: 'LÉGENDES',
      subtitle: 'Figures Historiques',
      actionText: 'Entrer dans le Temple',
      features: [
        'Archon Suprême (ODIN)',
        'Tech Commander (Valkyrie)',
        'Security Sentinel (Zero)',
        'Campagnes d\'influence publiques'
      ],
      isPopular: false,
      color: 'border-white/10 hover:border-purple-500/30 shadow-zinc-950',
      badgeColor: 'bg-zinc-800 text-zinc-300'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto space-y-10 px-4 md:px-6"
    >
      {/* Return Button */}
      <div className="text-left">
        <button
          onClick={onClose}
          className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>RETOUR AU QG</span>
        </button>
      </div>

      {/* Main 3-Column Card Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className={`flex flex-col p-8 rounded-3xl bg-zinc-950/60 border backdrop-blur-2xl transition-all duration-300 shadow-2xl relative ${section.color}`}
          >
            {/* Populaire / Target Badge */}
            {section.isPopular && (
              <div className="absolute top-4 right-4">
                <span className="text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full bg-cyan-500 text-black font-mono">
                  ACTIF
                </span>
              </div>
            )}

            {/* Header of Card */}
            <div className="text-left mb-6">
              <span className={`inline-block text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded ${section.badgeColor} mb-3`}>
                {section.badge}
              </span>
              <h3 className="font-display text-3xl font-black text-white leading-tight">
                {section.title}
              </h3>
              <p className="text-zinc-500 text-xs mt-1">
                {section.subtitle}
              </p>
            </div>

            {/* Price-like accent element (Empty or Stat-like value) */}
            <div className="text-left mb-8 flex items-baseline">
              <span className="font-display text-4xl font-extrabold text-white">
                // 0{idx + 1}
              </span>
              <span className="text-zinc-500 text-xs font-mono ml-2 uppercase">
                Section
              </span>
            </div>

            {/* Action Button inside card */}
            <div className="mb-8">
              <button 
                onClick={
                  section.title === 'La Genèse' 
                    ? onExploreGenesis 
                    : section.title === 'Les Guerriers' 
                    ? onExploreWarriors 
                    : onExplorePantheon
                }
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  section.isPopular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.25)]' 
                    : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-gray-300 hover:text-white'
                }`}
              >
                {section.actionText}
              </button>
            </div>

            {/* Features Checkmark list */}
            <ul className="space-y-4 text-left flex-grow">
              {section.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start space-x-3">
                  <span className={`p-0.5 rounded-full shrink-0 ${section.isPopular ? 'text-cyan-400' : 'text-zinc-500'}`}>
                    <Check className="h-4 w-4 stroke-[2.5]" />
                  </span>
                  <span className="text-zinc-400 text-xs leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ClanDiscovery;
