/**
 * Pure business logic and utilities for La Fit Gym Kothrud, Pune.
 */

export interface EnquiryData {
  name: string;
  phone: string;
  planDuration?: string;
  goal?: string;
  timing?: string;
  message?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  isGoogleVerified?: boolean;
  avatarBg?: string;
}

/**
 * Validates Indian 10-digit phone number (optionally with +91 or leading 0).
 */
export function validatePhoneNumber(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  // Match 10 digits or 91 followed by 10 digits starting with 6-9
  if (/^[6-9]\d{9}$/.test(cleaned)) return true;
  if (/^91[6-9]\d{9}$/.test(cleaned)) return true;
  if (/^0[6-9]\d{9}$/.test(cleaned)) return true;
  return false;
}

/**
 * Validates enquiry input fields.
 */
export function validateEnquiry(data: EnquiryData): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name (minimum 2 characters)';
  }

  if (!data.phone || !validatePhoneNumber(data.phone)) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates an encoded WhatsApp URL with customized gym enquiry message.
 */
export function generateWhatsAppUrl(data: Partial<EnquiryData>, basePhone: string = '918408804848'): string {
  const cleanPhone = basePhone.replace(/[\s\+\-]/g, '');
  let message = `Hello La Fit Gym Kothrud,`;

  if (data.name) {
    message += ` I'm ${data.name.trim()}.`;
  }
  if (data.planDuration) {
    message += ` I would like details about the ${data.planDuration} membership plan.`;
  } else if (data.goal) {
    message += ` I am interested in training for ${data.goal}.`;
  } else {
    message += ` I would like to enquire about membership details and visit the gym.`;
  }

  if (data.timing) {
    message += ` Preferred workout timing: ${data.timing}.`;
  }

  if (data.message) {
    message += ` Additional note: ${data.message.trim()}`;
  }

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Determines whether the gym is currently open based on given hour (0-23) and day (0=Sun, 6=Sat).
 * Gym is open Mon-Sat: 6:00 AM to 11:00 PM (hour 6 to 22 inclusive).
 * Sunday: 8:00 AM to 1:00 PM (hour 8 to 12 inclusive).
 */
export function isGymOpen(day: number, hour: number): { open: boolean; message: string } {
  if (day === 0) {
    // Sunday
    if (hour >= 8 && hour < 13) {
      return { open: true, message: 'Open Today until 1:00 PM' };
    }
    return { open: false, message: 'Closed now (Opens Mon at 6:00 AM)' };
  }

  // Mon-Sat
  if (hour >= 6 && hour < 23) {
    return { open: true, message: 'Open Today until 11:00 PM' };
  }

  if (hour < 6) {
    return { open: false, message: 'Opens Today at 6:00 AM' };
  }

  return { open: false, message: 'Closed for the night (Opens tomorrow at 6:00 AM)' };
}

/**
 * Computes average review rating rounded to 1 decimal place.
 */
export function computeAverageRating(reviews: ReviewItem[]): number {
  if (!reviews || reviews.length === 0) return 4.9;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}
