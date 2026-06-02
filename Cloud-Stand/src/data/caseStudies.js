const detailedStudy = {
  slug: 'global-hcm-security-optimization',
  category: 'HCM Transformation',
  title: 'Global Oracle HCM Security Optimization Across 13+ Countries',
  summary: 'A global enterprise operating across 21+ countries engaged CloudStand as a subcontracting implementation partner to support a large-scale Oracle HCM rollout. A key focus area of the program was security optimization across Core HR, Payroll, Time & Labor, Benefits, and Compensation to ensure controlled access and compliance across regions.',
  overview: [
    'A global enterprise operating across 21+ countries engaged CloudStand as a subcontracting implementation partner to support a large-scale Oracle HCM rollout. A key focus area of the program was security optimization across Core HR, Payroll, Time & Labor, Benefits, and Compensation to ensure controlled access and compliance across regions.',
    'With simultaneous rollout across multiple geographies, the organization required a scalable security model that could balance standardization, data protection, and operational efficiency without creating excessive role complexity.'
  ],
  businessChallenges: [
    'Multi-country rollout requiring consistent security framework',
    'Risk of data exposure due to overlapping functional roles',
    'High role proliferation (10–12 roles per country becoming unsustainable)',
    'Difficulty maintaining governance across HR, Payroll, and Benefits access',
    'Complex combination of functional and data security requirements',
    'Limited visibility into role assignments and security impact'
  ],
  solutionDelivered: 'CloudStand designed and implemented a global security optimization framework focusing on role simplification, governance, and controlled access design.',
  keyComponents: [
    'Consolidated global role design based on functional similarity (HR, Payroll, Benefits, Compensation)',
    'Elimination of country-specific role duplication (e.g., HR US / HR UK / HR India merged into unified roles where functionality was identical)',
    'Implementation of Area of Responsibility (AOR) for country-specific data security segregation',
    'Use of Custom Security Criteria for granular access control where required',
    'Development of a security analysis checklist framework before any role creation or assignment',
    'Introduction of structured “do’s and don’ts” governance guidelines for IT security administrators',
    'Prevention mechanism for role proliferation and uncontrolled access expansion'
  ],
  governanceIntro: 'To strengthen operational governance, CloudStand introduced:',
  governance: [
    'A backend security monitoring report tracking role assignments and modifications',
    'Standardized checklist-driven approval workflow for role provisioning (especially for super users like Payroll/HR/Benefits Analysts)',
    'Security journey templates defining standard practices, forbidden configurations, and risk impact of incorrect role assignments',
    'Audit-ready tracking of security changes and user-role mapping',
    'Improved visibility into “who changed what and why” across the security layer'
  ],
  businessImpact: [
    'Significant reduction in number of roles required per country',
    'Simplified global security architecture with improved maintainability',
    'Reduced risk of data leakage and unauthorized access',
    'Faster onboarding and role provisioning for HR and Payroll teams',
    'Improved governance through checklist-driven enforcement model',
    'Enhanced audit readiness and compliance traceability',
    'Reduced operational effort in security troubleshooting and debugging'
  ],
  outcome: 'CloudStand enabled a successful multi-country Oracle HCM rollout by establishing a scalable and optimized security framework that reduced complexity, strengthened governance, and ensured consistent functional and data security across 13+ countries. The checklist-driven security model became a key differentiator in ensuring controlled and auditable role management throughout the implementation lifecycle.'
};

export const caseStudies = [
  detailedStudy,
  { ...detailedStudy, slug: 'global-hcm-security-optimization-2' },
  { ...detailedStudy, slug: 'global-hcm-security-optimization-3' }
];
