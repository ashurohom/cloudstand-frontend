export const chatbotQuickPrompts = [
  'What AI services does CloudStand offer?',
  'How can AI help Oracle Cloud teams?',
  'Suggest an AI demo use case',
  'What is the ROI of AI automation?',
]

export const chatbotWelcomeMessage = {
  id: 'welcome',
  role: 'assistant',
  text:
    'Hi, I am the CloudStand AI demo assistant. I can explain AI use cases, Oracle Cloud automation ideas, analytics opportunities, and demo-ready transformation concepts.',
}

export function getChatbotReply(input) {
  const message = input.toLowerCase()

  if (message.includes('hello') || message.includes('hi')) {
    return 'Hello. If you want, I can walk you through CloudStand AI solutions, Oracle AI use cases, or a quick demo conversation for a client meeting.'
  }

  if (message.includes('service') || message.includes('offer')) {
    return 'CloudStand AI demo services focus on workflow automation, document intelligence, predictive analytics, AI-assisted reporting, and practical AI integration inside Oracle-led business processes.'
  }

  if (message.includes('oracle')) {
    return 'For Oracle Cloud environments, AI is most useful when it improves real processes: HR request routing, finance exception detection, dashboard summaries, employee support assistants, and analytics-driven decision support.'
  }

  if (message.includes('demo') || message.includes('use case')) {
    return 'A strong demo use case is an AI assistant that classifies HR tickets, routes them to the right workflow, summarizes case history, and pushes analytics to leadership dashboards.'
  }

  if (message.includes('roi') || message.includes('benefit') || message.includes('value')) {
    return 'The clearest AI ROI usually comes from reduced manual effort, faster response times, fewer processing errors, and better decision support for operations, HR, finance, and support teams.'
  }

  if (message.includes('automation')) {
    return 'AI automation works best on repeatable workflows like approvals, service requests, payroll checks, employee onboarding steps, and report preparation. The goal is to remove friction without disrupting core systems.'
  }

  if (message.includes('analytics') || message.includes('dashboard') || message.includes('bi')) {
    return 'AI can strengthen analytics by summarizing KPI trends, highlighting anomalies, generating executive-ready insights, and helping business teams interpret dashboard changes faster.'
  }

  if (message.includes('contact') || message.includes('consultation')) {
    return 'For a live discussion, the best next step is to use the Contact page and request an AI or Oracle Cloud consultation. This demo assistant is UI-only and does not submit data anywhere.'
  }

  return 'For demo purposes, I can help with AI automation ideas, Oracle Cloud AI use cases, workflow intelligence, analytics opportunities, and business-ready talking points. Try asking about AI services, ROI, or demo use cases.'
}
