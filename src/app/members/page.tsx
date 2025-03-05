"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const team = [
  { name: "Doki", role: "Founder", image: "/team/dokiLogo.png", bio: "Είμαι ο Γιάννης ή αλλιώς Doki, παίζω κυρίως competitive παιχνιδιά από μικρή ηλικία (και ας μην έπαιξα ποτέ σε competitive επίπεδο 🤡 ) και κάπως έτσι κατέληξα στο Rocket League με το υψηλότερο rank που έχω φτάσει να είναι το grand champion 2. Γενικά τον τελευταίο καιρό παίζω αρκετά πιο casual (και ας με βλέπεις να σπάω γραφεία σε κάθε stream). Στο twitch μου θα δεις αρκετό rocket league αλλα πλέον περισσότερο Valorant και LoL. Θα υπάρχει περίπτωση να με δεις να παίζω και άλλα παιχνίδια πιο casual και συνήθως με παρέα. Φήμες λένε πως το mentality μου ΔΕΝ καλά είναι βουνά μου." },
  { name: "Dets", role: "Founder", image: "/team/detsLogo.png", bio: "Γεια σας είμαι ο Κωνσταντίνος η αλλιώς MrDets, στο κανάλι μου θα με δείτε να streamarw τις περισσότερες φόρες Valorant (Peak Immortal 1) , Rocket league (Peak GC1), League of legends. Παρόλα αυτά θα με δείτε να παίζω όλων των ειδών παιχνίδια από indie μέχρι horror." },
  { name: "Ragna", role: "Founder", image: "/team/ragnaLogo.png", bio: "Είμαι ο Γιάννης AKA Ragnarok, στο stream μου θα δεις να προσπαθώ να σας πείσω ότι έχω ιδέα από το game που παίζω και να σε πείσω ότι είμαι κάλος, συνήθως θα με δεις να παίζω FPS games όπως R6 siege που είναι και το main game μου και έχω καταφέρει να φτάσω μέχρι Platinum, Apex Legends που έχω φτάσει μέχρι Master και Valorant, επίσης θα με δεις να παίζω και διάφορα άλλα παιχνίδια και κυρίως με παρέα οπότε αν θες να με δεις να fail-αρω Πέρνα να πεις ένα γεια" },
  { name: "Sanity", role: "Streamer", image: "/team/sanityLogo.png", bio: "Είμαι ο Αποστόλης ή αλλιώς Χ Sanity 30 ετών. Ξεκίνησα το gaming απο τα 12 μου σε ιντερνετ καφε παίζοντως Lineage 2 και CS 1.6 και Dota 1. Αργότερα γύρισα σε LoL οπου έφτασα Master Season 4 EUW. Και τέλος γνώρισα το Rocket League και το Apex Legends οπου εφτασα 1670 mmr (old)season 13 (Rocket League) και Masters στο Apex Legends. Γενικά παίζω φουλ competitive games και προσπαθώ να ειμαι γενικα στην λίστα των 'above average'. Είμαι ανοιχτός στο να παίξω και πιο casual games που και που." },
  { name: "Biller", role: "Streamer", image: "/team/billerLogo.png", bio: "Greetings! Ονομάζομαι Βασίλης a.k.a Biller. Είμαι ο Editor της ομάδας και φυσικά Gamer. Ξεκίνησα να streamάρω CSGO, αλλά τώρα θα βλέπετε κυρίως Valorant και ό,τι άλλο προκύψει!" },
  { name: "Marpix", role: "Streamer", image: "/team/marpixLogo.png", bio: "Είμαι η Μαρία ή αλλιώς marpix21r, στο κανάλι μου θα δεις να παίζω κυρίως Valorant αλλά δεν αποκλείεται να δεις κιάλλα games όπως CS, Apex Legends Rocket League. Μην περιμένεις να δεις τρομερά plays , μπορείς όμως να πεις ένα γεια και να γνωριστούμε." }
];

export default function MembersPage() {
  const [index, setIndex] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < 500) return; // Prevent rapid scrolling
      setLastScrollTime(now);

      if (e.deltaY > 0) {
        // Scrolling down
        setIndex((prev) => (prev + 1) % team.length);
      } else {
        // Scrolling up
        setIndex((prev) => (prev - 1 + team.length) % team.length);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [lastScrollTime]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, #a865fa 0%, #75cfff 100%)' }}>
      <motion.div
        key={team[index].name}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-center p-10 border border-gray-700 rounded-2xl shadow-xl bg-gray-900 max-w-md"
      >
        <img src={team[index].image} alt={team[index].name} className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white">{team[index].name}</h2>
        <h3 className="text-lg text-gray-400">{team[index].role}</h3>
        <p className="mt-4 text-gray-300">{team[index].bio}</p>
      </motion.div>
      <p className="mt-4 text-white/60 text-sm">Scroll to change members</p>
      <Link 
        href="/" 
        className="mt-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition text-white font-semibold border border-white/20"
      >
        Back to Home
      </Link>
    </div>
  );
} 