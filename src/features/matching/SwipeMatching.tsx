import { useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  X,
  Heart,
  Star,
  Undo2,
  Briefcase,
  MapPin,
  Users,
  Sparkles,
} from "lucide-react";
import { SmartNavbar } from "@/components/layout";
import { Button, Badge, Modal, useToast } from "@/components/common";

interface StartupCard {
  id: string;
  name: string;
  logo: string;
  stage: string;
  industry: string;
  location: string;
  vision: string;
  requiredSkills: string[];
  teamSize: number;
  founderName: string;
  founderAvatar: string;
}

// Mock startup data
const mockStartups: StartupCard[] = [
  {
    id: "1",
    name: "TechViet AI",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=techviet",
    stage: "MVP",
    industry: "AI/ML",
    location: "Ho Chi Minh City",
    vision:
      "Revolutionizing Vietnamese businesses with AI-powered automation solutions. We help SMEs compete with enterprise-level AI capabilities.",
    requiredSkills: ["Python", "AI/ML", "Backend"],
    teamSize: 3,
    founderName: "Nguyen Van A",
    founderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=founder1",
  },
  {
    id: "2",
    name: "EduSpark",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=eduspark",
    stage: "Early Traction",
    industry: "EdTech",
    location: "Hanoi",
    vision:
      "Making quality education accessible to every Vietnamese student through personalized AI tutoring.",
    requiredSkills: ["React", "Node.js", "UI/UX"],
    teamSize: 5,
    founderName: "Tran Thi B",
    founderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=founder2",
  },
  {
    id: "3",
    name: "GreenPay",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=greenpay",
    stage: "Idea",
    industry: "FinTech",
    location: "Da Nang",
    vision:
      "Building sustainable payment solutions that reward eco-friendly consumer choices.",
    requiredSkills: ["Finance", "Mobile Dev", "Marketing"],
    teamSize: 2,
    founderName: "Le Van C",
    founderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=founder3",
  },
  {
    id: "4",
    name: "HealthLink",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=healthlink",
    stage: "Growth",
    industry: "HealthTech",
    location: "Ho Chi Minh City",
    vision:
      "Connecting patients with healthcare providers through a seamless telemedicine platform.",
    requiredSkills: ["Full Stack", "Healthcare", "Product"],
    teamSize: 8,
    founderName: "Pham Thi D",
    founderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=founder4",
  },
];

function SwipeCard({
  startup,
  onSwipe,
  isTop,
}: {
  startup: StartupCard;
  onSwipe: (direction: "left" | "right" | "up") => void;
  isTop: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotate = useTransform(x, [-300, 0, 300], [-25, 0, 25]);
  const opacity = useTransform(
    x,
    [-300, -100, 0, 100, 300],
    [0.5, 1, 1, 1, 0.5],
  );

  // Indicator opacity based on swipe direction
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);
  const superLikeOpacity = useTransform(y, [-100, 0], [1, 0]);

  const handleDragEnd = useCallback(
    (
      _: unknown,
      info: {
        offset: { x: number; y: number };
        velocity: { x: number; y: number };
      },
    ) => {
      const threshold = 100;
      const velocity = 500;

      if (info.offset.x > threshold || info.velocity.x > velocity) {
        onSwipe("right");
      } else if (info.offset.x < -threshold || info.velocity.x < -velocity) {
        onSwipe("left");
      } else if (info.offset.y < -threshold || info.velocity.y < -velocity) {
        onSwipe("up");
      }
    },
    [onSwipe],
  );

  if (!isTop) {
    return (
      <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden scale-95 opacity-70" />
    );
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, y, rotate, opacity }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: "grabbing" }}
    >
      <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Swipe indicators */}
        <motion.div
          className="absolute top-8 right-8 z-20 px-6 py-3 bg-emerald-500 text-white font-bold text-2xl rounded-xl border-4 border-emerald-400 rotate-12"
          style={{ opacity: likeOpacity }}
        >
          LIKE
        </motion.div>
        <motion.div
          className="absolute top-8 left-8 z-20 px-6 py-3 bg-red-500 text-white font-bold text-2xl rounded-xl border-4 border-red-400 -rotate-12"
          style={{ opacity: nopeOpacity }}
        >
          NOPE
        </motion.div>
        <motion.div
          className="absolute top-8 left-1/2 -translate-x-1/2 z-20 px-6 py-3 bg-[#135bec] text-white font-bold text-2xl rounded-xl border-4 border-[#3b7aed]"
          style={{ opacity: superLikeOpacity }}
        >
          SUPER LIKE
        </motion.div>

        {/* Card content */}
        <div className="h-full flex flex-col">
          {/* Header with gradient - Stitch primary #135bec */}
          <div className="relative h-48 bg-gradient-to-br from-[#135bec] via-purple-500 to-orange-500 p-6">
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />

            {/* Logo */}
            <div className="absolute -bottom-8 left-6 w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden border-4 border-white">
              <img
                src={startup.logo}
                alt={startup.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stage badge */}
            <div className="absolute top-6 right-6">
              <Badge variant="aurora">{startup.stage}</Badge>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 pt-12 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {startup.name}
                </h2>
                <p className="text-gray-500">{startup.industry}</p>
              </div>
            </div>

            {/* Location & Team */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{startup.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <Users className="w-4 h-4" />
                <span className="text-sm">{startup.teamSize} team members</span>
              </div>
            </div>

            {/* Vision */}
            <p className="text-gray-600 mb-6 line-clamp-3">{startup.vision}</p>

            {/* Required skills */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Looking for
              </h4>
              <div className="flex flex-wrap gap-2">
                {startup.requiredSkills.map((skill) => (
                  <Badge key={skill} variant="blue" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Founder */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <img
                src={startup.founderAvatar}
                alt={startup.founderName}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {startup.founderName}
                </p>
                <p className="text-xs text-gray-500">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Match celebration modal
function MatchCelebration({
  isOpen,
  onClose,
  startup,
}: {
  isOpen: boolean;
  onClose: () => void;
  startup: StartupCard | null;
}) {
  if (!startup) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton={false}>
      <div className="text-center py-8">
        {/* Confetti effect */}
        <div className="relative mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
            className="relative z-10"
          >
            {/* Avatars */}
            <div className="flex items-center justify-center -space-x-4">
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden glow-purple">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=you"
                  alt="You"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden glow-blue">
                <img
                  src={startup.founderAvatar}
                  alt={startup.founderName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Sparkles */}
          <Sparkles className="absolute top-0 left-1/4 w-8 h-8 text-yellow-400 animate-pulse" />
          <Sparkles className="absolute bottom-0 right-1/4 w-6 h-6 text-purple-400 animate-pulse" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold bg-gradient-to-r from-[#135bec] via-purple-500 to-orange-500 bg-clip-text text-transparent mb-2"
        >
          It's a Match!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-8"
        >
          You and {startup.name} liked each other
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <Button className="w-full">Start Chatting</Button>
          <Button variant="secondary" onClick={onClose} className="w-full">
            Keep Swiping
          </Button>
        </motion.div>
      </div>
    </Modal>
  );
}

export function SwipeMatching() {
  const [cards, setCards] = useState(mockStartups);
  const [history, setHistory] = useState<StartupCard[]>([]);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedStartup, setMatchedStartup] = useState<StartupCard | null>(
    null,
  );
  const { showToast } = useToast();

  const handleSwipe = (direction: "left" | "right" | "up") => {
    if (cards.length === 0) return;

    const currentCard = cards[0];
    setHistory([currentCard, ...history]);
    setCards(cards.slice(1));

    // Show feedback based on direction
    if (direction === "left") {
      showToast({
        type: "info",
        title: "Passed",
        message: `You passed on ${currentCard.name}`,
        duration: 2000,
      });
    } else if (direction === "up") {
      showToast({
        type: "success",
        title: "Super Liked!",
        message: `You super liked ${currentCard.name}!`,
        duration: 2000,
      });
    }

    // Simulate match on right swipe or super like (30% chance)
    if ((direction === "right" || direction === "up") && Math.random() > 0.7) {
      setMatchedStartup(currentCard);
      setShowMatch(true);
    } else if (direction === "right") {
      showToast({
        type: "success",
        title: "Liked!",
        message: `You liked ${currentCard.name}`,
        duration: 2000,
      });
    }
  };

  const handleUndo = () => {
    if (history.length === 0) {
      showToast({
        type: "warning",
        title: "No Actions to Undo",
        message: "There are no previous actions to undo.",
        duration: 2000,
      });
      return;
    }

    const lastCard = history[0];
    setCards([lastCard, ...cards]);
    setHistory(history.slice(1));

    showToast({
      type: "info",
      title: "Undo Successful",
      message: `${lastCard.name} has been restored.`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SmartNavbar />

      <main className="max-w-lg mx-auto px-4 py-8">
        {/* Mode toggle */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {["AI Mode", "Swipe Mode", "Grid Mode"].map((mode) => (
            <button
              key={mode}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                mode === "Swipe Mode"
                  ? "bg-purple-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Card stack */}
        <div className="relative h-[600px] w-full">
          <AnimatePresence>
            {cards.length > 0 ? (
              cards
                .slice(0, 2)
                .map((startup, index) => (
                  <SwipeCard
                    key={startup.id}
                    startup={startup}
                    onSwipe={handleSwipe}
                    isTop={index === 0}
                  />
                ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl shadow-xl"
              >
                <Briefcase className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No more startups
                </h3>
                <p className="text-gray-600 mb-6">
                  Check back later for new opportunities!
                </p>
                <Button onClick={() => setCards(mockStartups)}>
                  Start Over
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleUndo}
            disabled={history.length === 0}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Undo2 className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSwipe("left")}
            className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-red-500 border-2 border-red-100"
          >
            <X className="w-8 h-8" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSwipe("up")}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-[#135bec] to-[#0f4ac7] shadow-lg flex items-center justify-center text-white"
          >
            <Star className="w-7 h-7" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSwipe("right")}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg flex items-center justify-center text-white border-2 border-emerald-400"
          >
            <Heart className="w-8 h-8" />
          </motion.button>
        </div>

        {/* Match celebration modal */}
        <MatchCelebration
          isOpen={showMatch}
          onClose={() => setShowMatch(false)}
          startup={matchedStartup}
        />
      </main>
    </div>
  );
}

export default SwipeMatching;
