/**
 * Date Utilities
 * 
 * This module provides helper functions for handling dates consistently
 * across the application. It centralizes date formatting, calculation,
 * and display logic.
 */

import { format, formatDistance, formatRelative, parseISO } from 'date-fns';

/**
 * Format a date string or Date object into a display format for the UI
 * @param dateValue - ISO date string or Date object
 * @param formatString - Optional format pattern (defaults to 'MMM yyyy')
 */
export function formatDate(dateValue: string | Date, formatString = 'MMM yyyy'): string {
  const date = typeof dateValue === 'string' ? parseISO(dateValue) : dateValue;
  return format(date, formatString);
}

/**
 * Get a relative time description (e.g., "2 months ago")
 * @param dateValue - ISO date string or Date object
 * @param baseDate - Optional reference date (defaults to now)
 */
export function getRelativeTime(dateValue: string | Date, baseDate = new Date()): string {
  const date = typeof dateValue === 'string' ? parseISO(dateValue) : dateValue;
  return formatDistance(date, baseDate, { addSuffix: true });
}

/**
 * Format a date range for display (e.g., "Jan 2020 - Present")
 * @param startDate - ISO date string for start date
 * @param endDate - ISO date string for end date, or null for "Present"
 * @param formatString - Optional format pattern
 */
export function formatDateRange(
  startDate: string,
  endDate: string | null, 
  formatString = 'MMM yyyy'
): string {
  const formattedStartDate = formatDate(startDate, formatString);
  const formattedEndDate = endDate ? formatDate(endDate, formatString) : 'Present';
  return `${formattedStartDate} - ${formattedEndDate}`;
}

/**
 * Calculate the duration between two dates in a human-readable format
 * @param startDate - ISO date string for start date
 * @param endDate - ISO date string for end date, or null for current date
 */
export function calculateDuration(startDate: string, endDate: string | null): string {
  const start = parseISO(startDate);
  const end = endDate ? parseISO(endDate) : new Date();
  
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  
  let totalMonths = years * 12 + months;
  if (end.getDate() < start.getDate()) {
    totalMonths -= 1;
  }
  
  const displayYears = Math.floor(totalMonths / 12);
  const displayMonths = totalMonths % 12;
  
  if (displayYears > 0 && displayMonths > 0) {
    return `${displayYears} year${displayYears !== 1 ? 's' : ''}, ${displayMonths} month${displayMonths !== 1 ? 's' : ''}`;
  } else if (displayYears > 0) {
    return `${displayYears} year${displayYears !== 1 ? 's' : ''}`;
  } else {
    return `${displayMonths} month${displayMonths !== 1 ? 's' : ''}`;
  }
}
