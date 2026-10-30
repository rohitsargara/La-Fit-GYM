import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validatePhoneNumber,
  validateEnquiry,
  generateWhatsAppUrl,
  isGymOpen,
  computeAverageRating,
  type ReviewItem,
} from './gymLogic';

test('validatePhoneNumber accepts valid Indian phone formats', () => {
  assert.equal(validatePhoneNumber('8408804848'), true);
  assert.equal(validatePhoneNumber('+91 84088 04848'), true);
  assert.equal(validatePhoneNumber('918408804848'), true);
  assert.equal(validatePhoneNumber('09822012345'), true);
  assert.equal(validatePhoneNumber('9822012345'), true);
  assert.equal(validatePhoneNumber('12345'), false);
  assert.equal(validatePhoneNumber('abcdefghij'), false);
  assert.equal(validatePhoneNumber(''), false);
});

test('validateEnquiry checks name and phone requirements', () => {
  const resultInvalid = validateEnquiry({ name: '', phone: '' });
  assert.equal(resultInvalid.valid, false);
  assert.ok(resultInvalid.errors.name);
  assert.ok(resultInvalid.errors.phone);

  const resultValid = validateEnquiry({ name: 'Rahul Joshi', phone: '8408804848' });
  assert.equal(resultValid.valid, true);
  assert.deepEqual(resultValid.errors, {});
});

test('generateWhatsAppUrl builds valid URL with prefilled text', () => {
  const url = generateWhatsAppUrl({
    name: 'Rohit',
    planDuration: '3 Months',
    timing: 'Morning (7 AM)',
  });

  assert.ok(url.startsWith('https://wa.me/918408804848?text='));
  assert.ok(url.includes('Rohit'));
  assert.ok(url.includes('3%20Months') || url.includes('3+Months') || decodeURIComponent(url).includes('3 Months'));
});

test('isGymOpen correctly reflects Mon-Sat and Sun operating schedule', () => {
  // Monday at 10 AM (day 1, hour 10) -> open
  const mon10am = isGymOpen(1, 10);
  assert.equal(mon10am.open, true);

  // Monday at 4 AM (day 1, hour 4) -> closed
  const mon4am = isGymOpen(1, 4);
  assert.equal(mon4am.open, false);

  // Sunday at 10 AM (day 0, hour 10) -> open
  const sun10am = isGymOpen(0, 10);
  assert.equal(sun10am.open, true);

  // Sunday at 5 PM (day 0, hour 17) -> closed
  const sun5pm = isGymOpen(0, 17);
  assert.equal(sun5pm.open, false);
});

test('computeAverageRating computes mean rating properly', () => {
  const mockReviews: ReviewItem[] = [
    { id: '1', author: 'A', rating: 5, date: '1 mo ago', text: 'Great gym' },
    { id: '2', author: 'B', rating: 5, date: '2 mo ago', text: 'Great floor' },
    { id: '3', author: 'C', rating: 4, date: '3 mo ago', text: 'Good equipment' },
  ];
  assert.equal(computeAverageRating(mockReviews), 4.7);
  assert.equal(computeAverageRating([]), 4.9);
});
