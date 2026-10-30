export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  // Allow international formatting (+91, spaces, dashes) with 7-15 digits
  const cleaned = phone.replace(/[\s\-()]/g, '');
  const phoneRegex = /^\+?[0-9]{7,15}$/;
  return phoneRegex.test(cleaned);
}

export function isNonEmpty(val: string, minLength = 2): boolean {
  return typeof val === 'string' && val.trim().length >= minLength;
}

export function validateContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!isNonEmpty(data.name, 2)) {
    errors.name = 'Full name must be at least 2 characters.';
  }

  if (!isValidEmail(data.email)) {
    errors.email = 'Please provide a valid business email address.';
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Please provide a valid telephone number with country code.';
  }

  if (!isNonEmpty(data.message, 10)) {
    errors.message = 'Project scope or message must be at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateCareerForm(data: {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  hasCv: boolean;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!isNonEmpty(data.fullName, 2)) {
    errors.fullName = 'Full name is required.';
  }

  if (!isValidEmail(data.email)) {
    errors.email = 'Valid email is required.';
  }

  if (!isValidPhone(data.phone)) {
    errors.phone = 'Valid phone number is required.';
  }

  if (!isNonEmpty(data.experience, 1)) {
    errors.experience = 'Please select your experience level.';
  }

  if (!data.hasCv) {
    errors.cv = 'Please upload your CV / Resume (PDF or DOCX).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function estimateProjectTimeline(service: string, budgetTier: string): string {
  if (budgetTier === '$5k-$15k') return '3 - 6 Weeks';
  if (budgetTier === '$15k-$30k') return '6 - 10 Weeks';
  if (budgetTier === '$30k-$50k') return '10 - 16 Weeks';
  if (budgetTier === '$50k+') return '16 - 24+ Weeks';
  return '4 - 8 Weeks';
}
