import test from 'node:test';
import assert from 'node:assert/strict';
import { createConsultationWhatsAppUrl, createCareerWhatsAppUrl } from './whatsapp.ts';

test('createConsultationWhatsAppUrl generates valid wa.me link with encoded details', () => {
  const url = createConsultationWhatsAppUrl({
    fullName: 'Rahul Joshi',
    email: 'rahul@enterprise.com',
    phone: '+91 7600764647',
    service: 'Enterprise AI Solutions',
    budget: '$30k-$50k',
    timeline: '2-4 Months',
    message: 'Need automated LLM document processing pipeline.',
  });

  assert.ok(url.startsWith('https://wa.me/917600764647?text='));
  assert.ok(url.includes(encodeURIComponent('Rahul Joshi')));
  assert.ok(url.includes(encodeURIComponent('Enterprise AI Solutions')));
});

test('createCareerWhatsAppUrl includes candidate position and experience', () => {
  const url = createCareerWhatsAppUrl({
    fullName: 'Sara Khan',
    email: 'sara@dev.com',
    phone: '+91 99999 88888',
    roleTitle: 'Senior Full-Stack Engineer',
    experience: '4 - 7 Years',
    cvFileName: 'Sara_Khan_Resume.pdf',
  });

  assert.ok(url.startsWith('https://wa.me/917600764647?text='));
  assert.ok(url.includes(encodeURIComponent('Senior Full-Stack Engineer')));
  assert.ok(url.includes(encodeURIComponent('Sara_Khan_Resume.pdf')));
});
