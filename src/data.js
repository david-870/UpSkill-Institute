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
  { n: '02', title: 'Choose one career track', text: 'Ethical Hacking, AI & Automation, Digital Marketing, or Virtual Assistant & Business Support.' },
  { n: '03', title: 'Join the free Telegram orientation', text: 'Seven days inside the community — meet tutors, see the curriculum, ask questions.', tag: 'FREE 7-DAY ORIENTATION' },
  { n: '04', title: 'Decide, then pay your track\'s fee', text: 'No pressure before day 7. Enroll only once you\'re sure — fees range from ₦30,000 to ₦50,000.' },
  { n: '05', title: 'Get placed in your class', text: 'Private group, capped at 100 students, matched to your chosen course.' },
  { n: '06', title: 'Learn the weekly rhythm', text: 'Live teaching Mon, Tue, Thu–Fri — Wednesday off. Self-study Saturday, quiz & leaderboard Sunday.' },
  { n: '07', title: 'Final project, certificate, career support', text: 'Finish with a real project, a final exam, and help landing what\'s next.' },
]

export const COURSES = [
  { title: 'CyberSecurity & Ethical Hacking', price: '₦50,000', color: '#FF5470', desc: 'Learn how to prevent, detect, and investigate cyber attacks using real-world tools and techniques. Learn how to identify security vulnerabilities, protect organizations from hackers, and recover digital evidence after breaches. These are high-demand, high-income skills sought after by businesses, governments, and security firms worldwide.' },
  { title: 'AI & AI Automation / CRM', price: '₦40,000', color: '#8A80FF', desc: 'AI & AI Automation/CRM helps you use AI to automate daily tasks, save time, and help businesses work faster. Learn how to set up smart workflows, manage customers, and improve sales with AI and CRM tools. It is a practical, high-income skill that companies are actively looking for' },
  { title: 'Digital Marketing & Social Media', price: '₦30,000', color: '#FFB627', desc: 'Digital & Content Marketing teaches you how to grow businesses online using social media, content, and paid ads. Learn how to attract customers, increase sales, and build strong brands. It is a valuable skill for freelancers, business owners, and anyone looking to earn online.' },
  { title: 'Virtual Assistant & Business Support', price: '₦30,000', color: '#33D6A6', desc: 'Become the remote support person businesses can\'t run without — no coding, no design skills, no laptop required to start. You\'ll master inbox and calendar management, customer service, CRM and data entry, and everyday e-commerce and social support tasks. Learn the exact tools clients already expect you to know — Google Workspace, Notion, WhatsApp Business, and Canva basics. It\'s the lowest-barrier track we offer, built for absolute beginners who want to start earning fast. Finish in 8 weeks with real, client-ready skills — and your first paying gig within reach.' },
]

export const PODIUM = [
  { place: '2nd place', amount: 300000, note: 'Second-best project across the whole batch.', cls: 'place-2' },
  { place: '1st place', amount: 500000, note: 'Best project in the whole batch.', cls: 'place-1' },
  { place: '3rd place', amount: 150000, note: 'Third-best project across the whole batch.', cls: 'place-3' },
]

export const TRACKS = COURSES.map(c => c.title)
