export const TELEGRAM_URL = 'https://t.me/+Mgu0XPPV44FkN2Fk'

export const TICKER = [
  '₦25,000 CASH TO THE TOP STUDENT — EVERY SINGLE SUNDAY',
  '₦500,000 FOR 1ST PLACE',
  '2ND PLACE ₦300,000 · 3RD PLACE ₦150,000',
  'ONLY 100 SEATS PER COURSE',
  'FREE 7-DAY ORIENTATION',
]

export const STATS = [
  { target: 25000, prefix: '₦', label: 'Cash to the top student, every Sunday' },
  { target: 500000, prefix: '₦', label: 'Top prize for 1st place across the batch' },
  { target: 100, prefix: '', label: 'Seats per course — real competition, real payout' },
]

export const RHYTHM = [
  { day: 'Mon', what: 'Live class', type: 'live' },
  { day: 'Tue', what: 'Live class', type: 'live' },
  { day: 'Wed', what: 'No class', type: 'free' },
  { day: 'Thu', what: 'Live class', type: 'live' },
  { day: 'Fri', what: 'Live class', type: 'live' },
  { day: 'Sat', what: 'Self-study', type: 'study' },
  { day: 'Sun', what: 'Quiz + ₦25k', type: 'quiz' },
]

export const STEPS = [
  { n: '01', title: 'Register on the website', text: 'Create your applicant profile and tell us a bit about your goals.' },
  { n: '02', title: 'Choose one career track', text: 'Ethical Hacking, AI & Automation, Digital Marketing, or AI-Powered web development &' },
  { n: '03', title: 'Join the free Telegram orientation', text: 'Seven days inside the community — meet tutors, see the curriculum, ask questions.', tag: 'FREE 7-DAY ORIENTATION' },
  { n: '04', title: 'Decide, then pay your track\'s fee', text: 'No pressure before day 7. Enroll only once you\'re sure — fees range from ₦30,000 to ₦50,000.' },
  { n: '05', title: 'Get placed in your class', text: 'Private group, capped at 100 students, matched to your chosen course.' },
  { n: '06', title: 'Learn the weekly rhythm', text: 'Live teaching Mon, Tue, Thu–Fri — Wednesday off. Self-study Saturday, quiz & leaderboard Sunday.' },
  { n: '07', title: 'Final project, certificate, career support', text: 'Finish with a real project, a final exam, and help landing what\'s next.' },
]

export const COURSES = [
  { title: 'AI Powered Web Development & Vibe Coding', price: '₦50,000', color: '#33D6A6', desc: 'Learn how to use AI-assisted development to build and deploy modern web applications and websites with minimal coding effort while understanding the fundamentals behind what you\'re building.' },
  { title: 'CyberSecurity & Ethical Hacking', price: '₦45,000', color: '#FF5470', desc: 'Learn how to prevent, detect, and investigate cyber attacks using real-world tools and techniques. Learn how to identify security vulnerabilities, protect organizations from hackers, and recover digital evidence after breaches. These are high-demand, high-income skills sought after by businesses, governments, and security firms worldwide.' },
  { title: 'AI & AI Automation / CRM', price: '₦35,000', color: '#8A80FF', desc: 'AI & AI Automation/CRM helps you use AI to automate daily tasks, save time, and help businesses work faster. Learn how to set up smart workflows, manage customers, and improve sales with AI and CRM tools. It is a practical, high-income skill that companies are actively looking for' },
  { title: 'Digital Marketing & Social Media', price: '₦35,000', color: '#FFB627', desc: 'Digital & Content Marketing teaches you how to grow businesses online using social media, content, and paid ads. Learn how to attract customers, increase sales, and build strong brands. It is a valuable skill for freelancers, business owners, and anyone looking to earn online.' }
]
  

export const PODIUM = [
  { place: '2nd place', amount: 300000, note: 'Second-best project across the whole batch.', cls: 'place-2' },
  { place: '1st place', amount: 500000, note: 'Best project in the whole batch.', cls: 'place-1' },
  { place: '3rd place', amount: 150000, note: 'Third-best project across the whole batch.', cls: 'place-3' },
]

export const TRACKS = COURSES.map(c => c.title)
