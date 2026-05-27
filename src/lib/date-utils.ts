/**
 * Utility functions for handling dates safely in SSR/Client environments
 * Prevents hydration mismatches caused by date formatting differences
 */

export function formatDate(
  dateString: string, 
  options: Intl.DateTimeFormatOptions = { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  }
): string {
  try {
    return new Date(dateString).toLocaleDateString('en-US', options);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString; // Fallback to original string
  }
}

export function formatDateSafe(
  dateString: string,
  options?: Intl.DateTimeFormatOptions
): string {
  // Use a consistent format that won't vary between server and client
  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) {
    return dateString; // Return original if invalid
  }

  const defaultOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric', 
    year: 'numeric',
    timeZone: 'UTC' // Use UTC to ensure consistency
  };

  return date.toLocaleDateString('en-US', { ...defaultOptions, ...options });
}

export function createDateObject(dateString: string): Date | null {
  try {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date;
  } catch (error) {
    console.error('Error creating date object:', error);
    return null;
  }
}