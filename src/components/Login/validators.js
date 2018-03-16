
export const required = input => input ? undefined : 'Required field';

export const nonEmpty = input => input.trim() !== '' ? undefined : 'Cannot be empty';

export const greaterThan = input => input.length > 6 && input.length < 72 ? undefined : 'Passwords must be between 6 and 72 characters';