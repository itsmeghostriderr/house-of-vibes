import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidEmail,
  isValidPhone,
  isNonEmpty,
  validateContactForm,
  validateCareerForm,
  estimateProjectTimeline,
} from './validation.ts';

test('email validation checks valid and invalid addresses', () => {
  assert.equal(isValidEmail('contact@houseofvibes.in'), true);
  assert.equal(isValidEmail('alex.dev+work@gmail.com'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail('missing@domain'), false);
  assert.equal(isValidEmail(''), false);
});

test('phone validation handles international formats', () => {
  assert.equal(isValidPhone('+917600764647'), true);
  assert.equal(isValidPhone('+1 (555) 019-2834'), true);
  assert.equal(isValidPhone('7600764647'), true);
  assert.equal(isValidPhone('abc'), false);
  assert.equal(isValidPhone('123'), false);
});

test('contact form validation flags missing required fields', () => {
  const resultInvalid = validateContactForm({
    name: 'A',
    email: 'bad-email',
    message: 'short',
  });
  assert.equal(resultInvalid.isValid, false);
  assert.ok(resultInvalid.errors.name);
  assert.ok(resultInvalid.errors.email);
  assert.ok(resultInvalid.errors.message);

  const resultValid = validateContactForm({
    name: 'Rajesh Sharma',
    email: 'rajesh@enterprise.com',
    phone: '+91 9876543210',
    service: 'Enterprise AI Solutions',
    message: 'We are seeking an enterprise AI agent platform for automated underwriting.',
  });
  assert.equal(resultValid.isValid, true);
  assert.equal(Object.keys(resultValid.errors).length, 0);
});

test('career form validation enforces CV and contact details', () => {
  const invalid = validateCareerForm({
    fullName: '',
    email: 'invalid',
    phone: '',
    experience: '',
    hasCv: false,
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.cv);

  const valid = validateCareerForm({
    fullName: 'Priya Mehta',
    email: 'priya.mehta@dev.io',
    phone: '+91 7600764647',
    experience: '5+ Years (Lead / Principal)',
    hasCv: true,
  });
  assert.equal(valid.isValid, true);
});

test('estimateProjectTimeline provides expected ranges based on tier', () => {
  assert.equal(estimateProjectTimeline('Web', '$5k-$15k'), '3 - 6 Weeks');
  assert.equal(estimateProjectTimeline('Mobile', '$50k+'), '16 - 24+ Weeks');
});
