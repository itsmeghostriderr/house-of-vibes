export const WHATSAPP_PHONE_NUMBER = '917600764647';

export function createConsultationWhatsAppUrl(data: {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}): string {
  const text = [
    `*NEW PROJECT CONSULTATION INQUIRY - HOUSE OF VIBES*`,
    `----------------------------------------`,
    `*Name:* ${data.fullName}`,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone}`,
    `*Requested Service:* ${data.service}`,
    `*Estimated Budget:* ${data.budget}`,
    `*Target Timeline:* ${data.timeline}`,
    `----------------------------------------`,
    `*Project Scope & Requirements:*`,
    `${data.message}`,
  ].join('\n');

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function createCareerWhatsAppUrl(data: {
  fullName: string;
  email: string;
  phone: string;
  roleTitle: string;
  experience: string;
  portfolioUrl?: string;
  cvFileName?: string;
  coverNote?: string;
}): string {
  const text = [
    `*JOB APPLICATION - HOUSE OF VIBES CAREERS*`,
    `----------------------------------------`,
    `*Position:* ${data.roleTitle}`,
    `*Candidate Name:* ${data.fullName}`,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone}`,
    `*Experience Level:* ${data.experience}`,
    data.portfolioUrl ? `*Portfolio / GitHub:* ${data.portfolioUrl}` : '',
    data.cvFileName ? `*CV Attached:* ${data.cvFileName}` : '',
    `----------------------------------------`,
    data.coverNote ? `*Candidate Note:*\n${data.coverNote}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}
