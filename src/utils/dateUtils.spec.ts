import { describe, expect, it } from 'vitest';
import { formatDate } from './dateUtils';

describe('dateUtils', () => {
  describe('FormatDate', () => {
    it('format ISO date', () => {
      const isoDate = '2024-01-15T10:30:00.000Z';
      const result = formatDate(isoDate);
      
      expect(result).toContain('15 января');
      expect(result).toContain('2024 г.');
    });

    it('should format leap year', () => {
      const leapYearDate = '2024-02-29T12:00:00.000Z';
      const result = formatDate(leapYearDate);
      
      expect(result).toContain('29 февраля');
      expect(result).toContain('2024 г.');
    });

    it('should handle invalid dates', () => {
      const invalidDate = 'invalid-date-string';
      
      expect(() => formatDate(invalidDate)).not.toThrow();
      
      const result = formatDate(invalidDate);
      expect(result).toBe('Invalid Date');
    });
  });
});
