import { describe, it, expect, vi } from 'vitest';
import { Logger } from '../utils/logger';

vi.mock('@sentry/react', () => ({
    addBreadcrumb: vi.fn(),
    captureMessage: vi.fn(),
    captureException: vi.fn(),
}));

describe('Logger Utility', () => {
    it('should log info messages without error', () => {
        expect(() => Logger.info('Test Info Message')).not.toThrow();
    });

    it('should log warn messages without error', () => {
        expect(() => Logger.warn('Test Warn Message')).not.toThrow();
    });

    it('should log error messages without error', () => {
        const error = new Error('Test Error');
        expect(() => Logger.error('Test Error Message', error)).not.toThrow();
    });
});
