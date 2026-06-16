import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Gamepad2, 
  Phone, 
  Globe, 
  Languages, 
  Sparkles, 
  CheckCircle2, 
  Loader2, 
  ShieldAlert 
} from 'lucide-react';

interface CandidacyFormProps {
  onClose: () => void;
}

// Animation variants for staggered list of inputs
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const CandidacyForm: React.FC<CandidacyFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    gamePseudo: '',
    whatsapp: '',
    country: '',
    language: 'Français'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Le nom complet est requis.';
    }
    if (!formData.gamePseudo.trim()) {
      newErrors.gamePseudo = 'Le pseudo dans le jeu est requis.';
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Le numéro WhatsApp est requis.';
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Le pays de référence est requis.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1800);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="w-full max-w-xl mx-auto p-10 rounded-3xl bg-zinc-950/70 border border-emerald-500/35 backdrop-blur-2xl shadow-[0_0_60px_rgba(16,185,129,0.2)] text-center relative overflow-hidden"
      >
        {/* Animated green beam at the top */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />
        
        {/* Abstract glowing aura */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 150, delay: 0.2 }}
          className="flex h-20 w-20 mx-auto items-center justify-center rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
        >
          <CheckCircle2 className="h-10 w-10 stroke-[2]" />
        </motion.div>

        <h3 className="font-display text-2xl font-black tracking-wide text-white uppercase mb-3">
          Candidature Enregistrée !
        </h3>
        
        <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed mb-8">
          Félicitations, votre demande d'enrôlement a été enregistrée avec succès ! Le clan <span className="text-emerald-400 font-bold">W入~RLORD</span> étudie désormais votre profil.
        </p>

        <div className="border-t border-zinc-800/60 my-6 pt-6 text-left">
          <p className="text-gray-400 text-xs font-mono mb-4 text-center">
            [TRANSMISSION SÉCURISÉE EN ATTENTE]
          </p>
          
          <motion.a
            href="https://discord.gg/warlord-waiting-room"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(6,182,212,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] cursor-pointer"
          >
            <span>Rejoindre le salon d'attente</span>
            <Sparkles className="h-4 w-4 text-white" />
          </motion.a>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClose}
          className="mt-4 text-zinc-500 hover:text-zinc-400 font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer"
        >
          Retour au Quartier Général
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-xl mx-auto p-8 md:p-10 rounded-3xl bg-zinc-950/40 border border-white/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(6,182,212,0.1)] relative overflow-hidden"
    >
      {/* Dynamic Cyber Bar with neon scanning animation */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-zinc-900/60 overflow-hidden">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
      </div>
      
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none" />

      <div className="text-left mb-8">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center space-x-2 w-max px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 mb-3"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-cyan-400">
            Formulaire d'Enrôlement
          </span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="font-display text-3xl font-black tracking-tight text-white uppercase"
        >
          REJOINDRE LE CLAN
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-400 text-xs mt-1"
        >
          Complétez les données de transmission suivantes pour postuler.
        </motion.p>
      </div>

      <motion.form 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit} 
        className="space-y-6 text-left"
      >
        {/* Nom Complet */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 font-mono">
            Nom Complet
          </label>
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors">
              <User className="h-4 w-4" />
            </span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="ex: Kaelen Vance"
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 text-white placeholder-gray-600 text-sm transition-all duration-300 outline-none hover:border-zinc-700 focus:bg-zinc-950/80"
            />
          </div>
          {errors.fullName && (
            <p className="text-rose-500 text-xs font-mono flex items-center space-x-1 mt-1.5">
              <ShieldAlert className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </motion.div>

        {/* Pseudo dans le jeu */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 font-mono">
            Pseudo dans le jeu (IGN)
          </label>
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors">
              <Gamepad2 className="h-4 w-4" />
            </span>
            <input
              type="text"
              name="gamePseudo"
              value={formData.gamePseudo}
              onChange={handleChange}
              placeholder="ex: Warlord_Kaelen"
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 text-white placeholder-gray-600 text-sm transition-all duration-300 outline-none hover:border-zinc-700 focus:bg-zinc-950/80"
            />
          </div>
          {errors.gamePseudo && (
            <p className="text-rose-500 text-xs font-mono flex items-center space-x-1 mt-1.5">
              <ShieldAlert className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.gamePseudo}</span>
            </p>
          )}
        </motion.div>

        {/* Numéro WhatsApp */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 font-mono">
            Numéro WhatsApp
          </label>
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors">
              <Phone className="h-4 w-4" />
            </span>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="ex: +33 6 12 34 56 78"
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 text-white placeholder-gray-600 text-sm transition-all duration-300 outline-none hover:border-zinc-700 focus:bg-zinc-950/80"
            />
          </div>
          {errors.whatsapp && (
            <p className="text-rose-500 text-xs font-mono flex items-center space-x-1 mt-1.5">
              <ShieldAlert className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.whatsapp}</span>
            </p>
          )}
        </motion.div>

        {/* Pays de Référence & Langue parlée (Côte à côte) */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Pays */}
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 font-mono">
              Pays de Référence
            </label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors">
                <Globe className="h-4 w-4" />
              </span>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="ex: France"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 text-white placeholder-gray-600 text-sm transition-all duration-300 outline-none hover:border-zinc-700 focus:bg-zinc-950/80"
              />
            </div>
            {errors.country && (
              <p className="text-rose-500 text-xs font-mono flex items-center space-x-1 mt-1.5">
                <ShieldAlert className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.country}</span>
              </p>
            )}
          </div>

          {/* Langue Parlée */}
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 font-mono">
              Langue Parlée
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <Languages className="h-4 w-4" />
              </span>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 text-white text-sm transition-all duration-300 outline-none hover:border-zinc-700 cursor-pointer appearance-none focus:bg-zinc-950/80"
              >
                <option value="Français">Français</option>
                <option value="English">English</option>
                <option value="Español">Español</option>
                <option value="Deutsch">Deutsch</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Boutons d'Action */}
        <motion.div variants={itemVariants} className="pt-6 flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(24, 24, 27, 0.9)' }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onClose}
            className="flex-1 py-3.5 px-6 rounded-xl border border-zinc-800 hover:border-zinc-700 text-gray-400 hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 text-center cursor-pointer"
          >
            Annuler
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(6,182,212,0.4)' }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === 'loading'}
            className="flex-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] flex items-center justify-center space-x-2 cursor-pointer"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-white" />
                <span>Enrôlement...</span>
              </>
            ) : (
              <>
                <span>Transmettre</span>
                <Sparkles className="h-4 w-4 text-white" />
              </>
            )}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default CandidacyForm;
