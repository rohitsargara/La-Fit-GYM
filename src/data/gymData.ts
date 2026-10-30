/**
 * Real business information and curated content for La Fit Gym Kothrud, Pune.
 */

export interface ServiceProgram {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  details: string;
  iconName: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface PlanItem {
  id: string;
  durationNumber: string;
  durationUnit: string;
  desc: string;
  popular?: boolean;
  idealFor: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'machines' | 'ambience';
  categoryLabel: string;
  url: string;
  aspect: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  text: string;
  isGoogleVerified: boolean;
}

export const GYM_CONTACT = {
  name: 'LA FIT GYM',
  tagline: 'MORE THAN A WORKOUT',
  subtitle: 'KOTHRUD · PUNE',
  phone: '+91 84088 04848',
  phoneClean: '918408804848',
  email: 'lafitgym.kothrud@gmail.com',
  address: '4th Floor, Petrol Pump, Karve Road, Opposite Karve Putla, Next to HP Petrol Pump, Mayur Colony, Kothrud, Pune, Maharashtra 411038',
  landmark: '4th Floor, Opposite Karve Putla, Next to HP Petrol Pump, Above Domino\'s Pizza',
  googleMapsUrl: 'https://www.google.com/maps/place/La+Fit+GYM+Kothrud+Pune+Best+GYM+In+pune/',
  googleMapsEmbed: 'https://maps.google.com/maps?q=La+Fit+GYM+Kothrud+Pune+Karve+Road&t=&z=16&ie=UTF8&iwloc=&output=embed',
  timings: {
    weekdays: 'Monday–Saturday: 6:00 AM – 11:00 PM',
    sunday: 'Sunday: 8:00 AM – 1:00 PM (Confirm with gym)',
    firstSession: '6:00 AM',
  },
  stats: {
    googleRating: '4.9',
    totalReviews: '50+',
    openingTime: '6:00 AM',
    floor: '4th Floor',
  },
};

export const PROGRAMS_DATA: ServiceProgram[] = [
  {
    id: 'strength',
    number: '01',
    title: 'Strength Training',
    shortDesc: 'The foundation of physical power that reshapes you for a healthier tomorrow.',
    details: 'Heavy compound barbell lifts, progressive overload, squat cages, deadlift platforms, and targeted power development under certified supervision.',
    iconName: 'Dumbbell',
  },
  {
    id: 'weight',
    number: '02',
    title: 'Weight Training',
    shortDesc: 'Sculpt lean muscle and hyper-trophy with biomechanically calibrated equipment.',
    details: 'Full spectrum dumbbell sets, pre-loaded EZ-bars, pin-loaded selectorized equipment, and cable crossovers tailored for precision isolation.',
    iconName: 'Shield',
  },
  {
    id: 'cardio',
    number: '03',
    title: 'Cardio & Stamina',
    shortDesc: 'Elevate your heart rate, burn calories, and build endurance on your terms.',
    details: 'Commercial motorized treadmills, recumbent bikes, cross-trainers, and stair climbers overlooking Karve Road through 4th floor panoramic windows.',
    iconName: 'HeartPulse',
  },
  {
    id: 'personal',
    number: '04',
    title: 'Personal Training',
    shortDesc: 'One-on-one dedicated guidance to accelerate results and prevent injury.',
    details: 'Custom tailored exercise protocols, weekly form assessments, biometric body fat tracking, and goal accountability from certified master coaches.',
    iconName: 'UserCheck',
  },
  {
    id: 'coaching',
    number: '05',
    title: 'Fitness Coaching',
    shortDesc: 'Structured lifestyle, mobility conditioning, and dietary guidance.',
    details: 'Holistic workout splits, nutrition habit coaching, body recomposition tracking, and sustainable fitness routines adapted for working professionals.',
    iconName: 'Award',
  },
  {
    id: 'functional',
    number: '06',
    title: 'Functional & Core',
    shortDesc: 'Dynamic movement, core stability, and functional athletic conditioning.',
    details: 'Kettlebells, battle ropes, medicine balls, core rotational movements, and flexibility drills for injury prevention and real-world athletic vitality.',
    iconName: 'Flame',
  },
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'ac',
    title: 'Air-Conditioned Floor',
    desc: 'Fully climate-controlled 4th floor training floor ensuring optimal workout stamina and clean fresh air circulation.',
    icon: 'Wind',
  },
  {
    id: 'weights',
    title: 'Heavy Free Weights Deck',
    desc: 'Extensive dumbbell racks from 2.5 kg to heavy dumbbells, Olympic barbells, flat/incline/decline benches.',
    icon: 'Dumbbell',
  },
  {
    id: 'machines',
    title: 'World-Class Machinery',
    desc: 'Biomechanically sound plate-loaded leg presses, hack squats, lat pull-downs, chest presses, and dual cable towers.',
    icon: 'Cpu',
  },
  {
    id: 'cardio',
    title: 'High-Tech Cardio Zone',
    desc: 'Commercial treadmills, spin bikes, elliptical cross-trainers with heart rate and calorie telemetry.',
    icon: 'Activity',
  },
  {
    id: 'bca',
    title: 'Body Composition (BCA)',
    desc: 'Precise body fat percentage, muscle mass, visceral fat, and metabolic rate assessments.',
    icon: 'Scale',
  },
  {
    id: 'steam',
    title: 'Steam & Shower',
    desc: 'Rejuvenating steam room session and clean hot/cold shower cubicles for post-workout recovery.',
    icon: 'Droplets',
  },
  {
    id: 'lockers',
    title: 'Personal Locker Storage',
    desc: 'Secure daily lockers and cubbies to safely store your bags, keys, and personal belongings while you train.',
    icon: 'Lock',
  },
  {
    id: 'hygiene',
    title: 'Maintained Hygiene',
    desc: 'Continuous sanitized equipment wipes, clean floor mats, clean changing rooms, and strict sanitation.',
    icon: 'Sparkles',
  },
  {
    id: 'music',
    title: 'Music That Moves You',
    desc: 'Acoustically tuned sound setup with high-energy workout playlists to keep you focused and in the zone.',
    icon: 'Music',
  },
  {
    id: 'view',
    title: 'Spacious 4th Floor Vibe',
    desc: 'Elevated panoramic views over Karve Road, high ceilings, natural daylight, and zero cramped feeling.',
    icon: 'Eye',
  },
];

export const MEMBERSHIP_PLANS: PlanItem[] = [
  {
    id: '1-month',
    durationNumber: '1',
    durationUnit: 'MONTH',
    desc: 'Try the full floor, equipment, and training atmosphere for a month.',
    idealFor: 'Beginners & Trial',
  },
  {
    id: '3-months',
    durationNumber: '3',
    durationUnit: 'MONTHS',
    desc: 'Long enough to build discipline, see initial strength gains, and establish consistency.',
    idealFor: 'Consistency & Habit',
  },
  {
    id: '6-months',
    durationNumber: '6',
    durationUnit: 'MONTHS',
    desc: 'A half-year of progressive strength conditioning with measurable transformation.',
    idealFor: 'Body Transformation',
  },
  {
    id: '12-months',
    durationNumber: '12',
    durationUnit: 'MONTHS',
    desc: 'The full-year commitment. Best overall value and dedicated fitness lifestyle.',
    popular: true,
    idealFor: 'Ultimate Value & Lifestyle',
  },
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Heavy Strength & Free Weights Zone',
    category: 'strength',
    categoryLabel: 'Strength Zone',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-4/3',
  },
  {
    id: 'g2',
    title: 'Cardio Deck with 4th Floor Views',
    category: 'cardio',
    categoryLabel: 'Cardio Deck',
    url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-4/3',
  },
  {
    id: 'g3',
    title: 'Plate-Loaded & Selectorized Equipment',
    category: 'machines',
    categoryLabel: 'Machines',
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-4/3',
  },
  {
    id: 'g4',
    title: 'Trainer Coaching & Technique Consultation',
    category: 'ambience',
    categoryLabel: 'Coaching',
    url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-4/3',
  },
  {
    id: 'g5',
    title: 'Olympic Barbells & Squat Stations',
    category: 'strength',
    categoryLabel: 'Strength Zone',
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-4/3',
  },
  {
    id: 'g6',
    title: 'Functional Turf & Core Training Deck',
    category: 'machines',
    categoryLabel: 'Functional',
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-4/3',
  },
];

export const INITIAL_REVIEWS: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'Prathamesh Deshmukh',
    role: 'Member · Karve Road',
    rating: 5,
    date: '1 month ago',
    text: 'One of the best gyms in Kothrud, Pune. The 4th floor setup is very spacious and ventilated, which means you never feel cramped even during peak evening hours. The machinery and dumbbell lines are well maintained. Highly recommended for serious fitness enthusiasts.',
    isGoogleVerified: true,
  },
  {
    id: 'rev-2',
    author: 'Snehal Kulkarni',
    role: 'Member · Mayur Colony',
    rating: 5,
    date: '2 months ago',
    text: 'Joined 4 months back and my fitness has improved significantly. The atmosphere is motivating and friendly. Floor trainers are certified and actively assist with your exercise posture and technique. The steam and shower facilities are clean and hygienic.',
    isGoogleVerified: true,
  },
  {
    id: 'rev-3',
    author: 'Akshay Shinde',
    role: 'Member · Kothrud',
    rating: 5,
    date: '3 months ago',
    text: 'Great gym right opposite Karve Putla. Location is super convenient on Karve Road next to HP petrol pump. Ample weights, good crowd, positive vibe, and helpful management. Value for money gym membership in Pune.',
    isGoogleVerified: true,
  },
  {
    id: 'rev-4',
    author: 'Tanvi Joshi',
    role: 'Member · Pune',
    rating: 5,
    date: '4 months ago',
    text: 'Clean floor, great energy, motivating music, and high quality cardio gear. What I love most is that it is safe, welcoming, and the trainers genuinely guide you through your routine. 5/5 stars for La Fit Gym.',
    isGoogleVerified: true,
  },
];
