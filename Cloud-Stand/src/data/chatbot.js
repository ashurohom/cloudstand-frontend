export const chatbotQuickPrompts = [
  'What Oracle Cloud services do you offer?',
  'Where are your offices located?',
  'Tell me about your Managed Services',
  'Are you currently hiring?',
]

export const chatbotWelcomeMessage = {
  id: 'welcome',
  role: 'assistant',
  text:
    'Welcome to CloudStand. I can answer questions about our Oracle Cloud consulting, services, careers, AI innovations, or help connect you with our experts. How can I assist you today?',
}

const qaDatabase = [
  {
    keywords: ['what is cloudstand', 'who are you', 'company overview', 'about cloudstand'],
    reply: "CloudStand Consulting is a fast-growing, innovation-driven Oracle Cloud consulting firm dedicated to helping organizations unlock the full value of their Oracle Cloud investments. Founded in India and expanded across the USA, Canada, and UAE, we specialize in end-to-end Oracle Cloud consulting, implementation, managed services, and enterprise transformation."
  },
  {
    keywords: ['pune', 'india'],
    reply: "Our India Office (Headquarters) is located at:\nOffice No.19, Nirvana Hub, Keshav Nagar - Manjari Rd, z-corner, Pune 412307\nPhone: +91 9503036784"
  },
  {
    keywords: ['texas', 'austin', 'tx'],
    reply: "Our Texas, USA Office is located at:\n5900 Balcones Dr Suit 100, Austin, TX 78731\nPhone: +1 (512) 903-8971"
  },
  {
    keywords: ['arkansas', 'bentonville'],
    reply: "Our Arkansas, USA Office is located at:\n900 SE 5th St, Suite 22, Bentonville, Arkansas, 72712\nPhone: +1 (602) 503-9547"
  },
  {
    keywords: ['usa', 'united states', 'america', 'us office'],
    reply: "We have two offices in the USA:\n\n• Texas:\n5900 Balcones Dr Suit 100, Austin, TX 78731\nPhone: +1 (512) 903-8971\n\n• Arkansas:\n900 SE 5th St, Suite 22, Bentonville, Arkansas, 72712\nPhone: +1 (602) 503-9547"
  },
  {
    keywords: ['canada', 'ontario', 'mississauga', 'missisauga'],
    reply: "Our Canada Office is located at:\n1711 Carolyn Road, Mississauga, Ontario, L5M 2C9\nPhone: +1 (226) 338-7868"
  },
  {
    keywords: ['dubai', 'uae', 'united arab emirates', 'abu dhabi'],
    reply: "Our UAE Office (Regional Partner) is located at:\nMeydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.\nPhone: +971 52 867 7172"
  },
  {
    keywords: ['location', 'where', 'offices', 'headquarters', 'global presence', 'country', 'countries', 'address', 'addres'],
    reply: "CloudStand has 5 global offices:\n\n• Pune, India (Headquarters)\nOffice No.19, Nirvana Hub, Keshav Nagar - Manjari Rd, z-corner, Pune 412307\n\n• Texas, USA\n5900 Balcones Dr Suit 100, Austin, TX 78731\n\n• Arkansas, USA\n900 SE 5th St, Suite 22, Bentonville, Arkansas 72712\n\n• Canada\n1711 Carolyn Road, Mississauga, Ontario, L5M 2C9\n\n• Dubai, UAE\nMeydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E."
  },
  {
    keywords: ['what services does cloudstand offer', 'service', 'offer', 'what do you do', 'hcm', 'erp', 'health check', 'managed services'],
    reply: "We offer 8 specialized service lines:\n1. Oracle Cloud Transformation\n2. Oracle Managed Services\n3. Integration, Reporting & Analytics\n4. Health Check & Advisory Services\n5. Business User Assistance Services\n6. NA Seasonal Payroll & Benefits Support\n7. AI & Digital Enablement Services\n8. Workforce Enablement, Staffing & Corporate Training"
  },
  {
    keywords: ['how can i contact', 'contact', 'email', 'phone', 'reach', 'get in touch'],
    reply: "You can reach us through:\n• Website: cloudstandconsulting.com\n• General & Management: info@cloudstandconsulting.com\n• AI & Technology Queries: ai@cloudstandconsulting.com\n\nOur team typically responds within 1 business day."
  },
  {
    keywords: ['schedule a consultation', 'book a meeting', 'consultation'],
    reply: "Click 'Contact Us' or 'Book a Meeting' on the homepage and fill out the form. Our team will reach out within 24 hours to schedule a call."
  },
  {
    keywords: ['management directly', 'ceo', 'leadership', 'reach management'],
    reply: "You can reach our management team directly at:\n• General & Management: info@cloudstandconsulting.com\n• AI & Technology: ai@cloudstandconsulting.com\n\nOur management team is accessible and typically responds within 1 business day."
  },
  {
    keywords: ['who do i contact for ai', 'ai query', 'ai queries'],
    reply: "For Oracle Payroll AI Agent, CoE innovations, AI-driven HCM, or digital transformation queries — email: ai@cloudstandconsulting.com"
  },
  {
    keywords: ['schedule a demo', 'demo request', 'demo'],
    reply: "Email info@cloudstandconsulting.com with subject: 'Demo Request — Oracle AI Payroll Agent' and our CoE team will set up a personalized walkthrough tailored to your needs."
  },
  {
    keywords: ['webinar', 'training session', 'events', 'host webinars'],
    reply: "Yes! CloudStand regularly hosts educational webinars on Oracle Cloud topics. Our latest webinar covers:\n• AI-Driven Payroll Optimization in Oracle HCM\n• Oracle Payroll Digital Agent live demonstrations\n• Center of Excellence (CoE) innovations\n\nVisit our website or follow us on LinkedIn to stay updated on upcoming sessions."
  },
  {
    keywords: ['register', 'invitation list', 'sign up for webinar'],
    reply: "Visit our website and look for the Events or Webinar section. You can also email info@cloudstandconsulting.com to be added to our invitation list."
  },
  {
    keywords: ['blog', 'insight', 'articles', 'write', 'read', 'latest blogs'],
    reply: "Visit cloudstand.netlify.app/insights for articles covering:\n• Oracle Cloud HCM best practices\n• AI & Digital Transformation in payroll\n• Oracle CoE implementation strategies\n• Industry trends in ERP transformation\n\nNew articles are published regularly — bookmark the page to stay updated!"
  },
  {
    keywords: ['what topics does cloudstand write about', 'write about'],
    reply: "• Oracle HCM & Payroll innovations\n• AI Agent use cases in enterprise payroll\n• Global payroll compliance tips\n• Oracle Cloud implementation guides\n• Center of Excellence (CoE) strategies"
  },
  {
    keywords: ['career', 'hiring', 'jobs', 'work at cloudstand', 'apply', 'vacancy', 'job', 'actively growing'],
    reply: "Yes! CloudStand is actively growing across all regions. We are looking for:\n• Oracle HCM Functional Consultants\n• Oracle Cloud Technical Leads\n• AI & Digital Enablement Specialists\n• Payroll Analysts & Advisors\n• Client Success Managers\n\nVisit our Careers page or email info@cloudstandconsulting.com."
  },
  {
    keywords: ['what is it like to work', 'work culture'],
    reply: "CloudStand is an innovation-first, people-focused organization. We offer:\n• Global exposure across USA, India, Canada & UAE\n• Work on cutting-edge Oracle AI & Cloud projects\n• A collaborative, fast-growing team environment\n• Opportunities for upskilling and Oracle certifications"
  },
  {
    keywords: ['how do i apply', 'apply for a career'],
    reply: "Email info@cloudstandconsulting.com\nSubject line: 'Career Opportunity — [Your Role/Specialization]'\n\nOur HR team will get back to you within 2-3 business days."
  },
  {
    keywords: ['company policy', 'policy'],
    reply: "CloudStand follows a people-first, innovation-driven policy built on three core pillars:\n• Integrity — Transparent communication with clients and team members\n• Collaboration — Cross-regional teamwork across USA, India, Canada & UAE\n• Continuous Learning — Oracle certifications, AI upskilling & industry participation\n\nWe maintain a flexible, inclusive, and respectful work culture."
  },
  {
    keywords: ['team activities', 'organize'],
    reply: "• Regular knowledge-sharing sessions & internal webinars\n• Cross-regional collaboration projects\n• Virtual and in-person team celebrations & milestone recognitions\n• Oracle AI World & ERP forum participation\n• Internal CoE innovation challenges\n• Client engagement events and networking opportunities"
  },
  {
    keywords: ['onsite', 'travel', 'global exposure', 'abroad', 'international'],
    reply: "Yes! CloudStand actively provides onsite opportunities to its consultants:\n• More than 50% of our consultants have traveled internationally\n• Onsite assignments across USA, Canada, UAE, and other global locations\n• Short-term and long-term project-based onsite deployments\n• Regular client visits and stakeholder meetings\n\nOnsite exposure is a core part of the CloudStand experience."
  },
  {
    keywords: ['visa', 'sponsor', 'h1b', 'work permit'],
    reply: "Yes! CloudStand sponsors visas on a need basis:\n• Visa sponsorship available for qualifying consultants\n• More than 50% of consultants have traveled internationally for projects\n• Support for USA, Canada, and UAE engagements\n\nFor specific visa sponsorship queries: info@cloudstandconsulting.com"
  },
  {
    keywords: ['perks', 'benefits', 'why join'],
    reply: "• Global Onsite Exposure — travel to USA, Canada, UAE & beyond\n• Visa Sponsorship — available on need basis\n• Oracle Certifications — support for professional certifications & upskilling\n• Direct Client Access — work with enterprise-level clients\n• Innovation Culture — contribute to CoE research & AI agent development\n• Diverse Project Portfolio — Oracle HCM, Payroll, AI, integrations & more\n• Global Community — Oracle AI World & ERP forum participation\n• Fast Career Growth — growing firm with expanding global opportunities"
  },
  {
    keywords: ['career stability', 'stability'],
    reply: "CloudStand offers strong career stability backed by:\n• A rapidly growing client base across USA, Canada, India & UAE\n• Long-term Oracle managed services contracts ensuring consistent work\n• An expanding CoE with ongoing R&D in Oracle AI\n• Leadership team with decades of Oracle HCM industry experience\n• Active pipeline of new projects across healthcare, finance & enterprise sectors"
  },
  {
    keywords: ['vision', 'future reach', 'future'],
    reply: "CloudStand's vision is to become a leading global Oracle Cloud consulting powerhouse:\n• Currently operating across 3+ global locations — USA, India, Canada & UAE\n• Building AI-powered Oracle CoE solutions for enterprise payroll & HCM\n• Expanding into Cloud Health Scan — our proprietary health check product\n• Continuous R&D on Oracle AI Agents, Benefit Analysis, and OTL automation\n• Growing presence in MENA, APAC and EMEA markets"
  },
  {
    keywords: ['how fast is cloudstand growing', 'growing', 'growth'],
    reply: "CloudStand is on an accelerated growth path:\n• Expanded from India to USA, Canada & UAE within a short span\n• Over 50% of consultants have international onsite experience\n• Active engagements with large US healthcare and enterprise organizations\n• New AI & digital enablement service lines launched in 2025-2026"
  },
  {
    keywords: ['payroll digital agent', 'payroll agent', 'oracle ai'],
    reply: "The Oracle Payroll Digital Agent is an AI-powered assistant built on Oracle HCM that enables:\n• Natural language payroll queries\n• Instant payroll run comparisons\n• Pay slip and deduction summaries\n• Level-1 HR query resolution without escalation\n\nCloudStand's CoE has enhanced this agent with custom prompts, deep links, and cross-module integrations."
  },
  {
    keywords: ['involved in oracle ai communities', 'communities', 'ai communities', 'forums', 'oracle ai world'],
    reply: "CloudStand is actively engaged in global Oracle communities including Oracle AI World and ERP transformation forums. We stay aligned with evolving customer needs, regulatory landscapes, and emerging Oracle technologies."
  },
  {
    keywords: ['hello', 'hi ', 'hey', 'greetings', 'good morning', 'good afternoon'],
    reply: "Hello! Welcome to CloudStand. How can I help you with your Oracle Cloud journey today?"
  },
  {
    keywords: ['thank'],
    reply: "You are very welcome! If you need anything else, just ask."
  }
];

export function getChatbotReply(input) {
  const message = input.toLowerCase()

  if (message.trim() === 'hi') {
    return "Hello! Welcome to CloudStand. How can I help you with your Oracle Cloud journey today?"
  }

  // Iterate over database to find matching keywords
  for (const entry of qaDatabase) {
    for (const keyword of entry.keywords) {
      if (message.includes(keyword)) {
        return entry.reply
      }
    }
  }

  return 'I am an AI assistant and I am still learning. To get started, you can ask me about our company, services, careers, webinars, or how to contact us.'
}
