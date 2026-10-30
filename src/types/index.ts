export type PageRoute = 'home' | 'about' | 'services' | 'portfolio' | 'careers' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'software' | 'web' | 'mobile' | 'ai' | 'cloud' | 'design';
  features: string[];
  deliverables: string[];
  techStack: string[];
  businessImpact: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'AI & ML' | 'Web Apps' | 'Mobile Apps' | 'Enterprise Software';
  summary: string;
  challenge: string;
  solution: string;
  architecture: string[];
  metrics: { label: string; value: string; change: string }[];
  tags: string[];
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'aiml' | 'cloud';
  description: string;
  useCase: string;
  maturity: 'Enterprise Standard' | 'Industry Standard' | 'High Performance';
}

export interface JobOpening {
  id: string;
  title: string;
  department: 'Engineering' | 'AI & ML' | 'Mobile' | 'Design';
  location: string;
  type: string;
  experience: string;
  salaryRange: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface WorkflowStep {
  step: string;
  name: string;
  phase: string;
  duration: string;
  description: string;
  activities: string[];
  outputs: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
  metric: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'error';
}
