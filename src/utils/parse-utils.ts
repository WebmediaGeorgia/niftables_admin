import { IPasswordErrors, PasswordErrorTypes } from '@type/general';
import { ProfileNotifications } from '../common/models/notification';

export const getConflictField = (message: string): string => {
  console.log('get conflict field: ', message);
  if (typeof message !== 'string') {
    return '';
  }
  const field = message.split(/[()]+/)[1];
  if (field) {
    return field;
  }
  const isOtp = message.includes('2FA') || message.includes('OTP');
  if (isOtp) {
    return 'otp';
  }
  const isPassword = message.toUpperCase().includes('PASSWORD');
  if (isPassword) {
    return 'password';
  }
  const isEmail = message.includes('EMAIL');
  if (isEmail) {
    return 'email';
  }
  return '';
};

export const parseConflictMessage = (string) => {
  string.message.split(/[()]+/).reduce((p, c, i, arr) => {
    return {
      field: arr[1],
      value: arr[3],
      code: 'already exists',
    };
  });
};

export const parsePasswordErrorMessage = (message: string): IPasswordErrors => {
  // bad backend error message typing, need to handle on front end
  switch (message.toLowerCase().replace('_', ' ')) {
    case 'password too weak':
      return {
        type: PasswordErrorTypes.TOO_WEAK,
        message: 'Password too weak',
      };
    case 'wrong password':
      return {
        type: PasswordErrorTypes.WRONG_PASSWORD,
        message: 'Current password is incorrect. Please try again',
      };
    default:
      return {
        type: PasswordErrorTypes.UNKNOWN,
        message: 'Something went wrong. Please try again or contact support',
      };
  }
};

export const parseErrorMessage = (message: string): string => {
  const field = getConflictField(message);
  switch (field) {
    case 'email':
      return 'User with provided email already exists';
    case 'username':
      return 'Username is already taken. Please select a different one.';
    case 'otp':
      return 'Wrong 6-digit code. Please try again';
    case 'password':
      return parsePasswordErrorMessage(message).message;
    default:
      return 'Something went wrong';
  }
};

export const EmailVerificationError = 'EMAIL_VERIFICATION';

export const convertErrorMessage = (message: string): string => {
  switch (message) {
    case EmailVerificationError:
      return EmailVerificationError;
    case 'BLOCKED':
      return 'Your account has been frozen. For any further questions please contact support.';
    case 'DELETED':
      return 'Your account has been deleted. For any further questions please contact support.';
    default:
      return 'Password or email/username is incorrect. Please try again.';
  }
};

export const parseNotificationSettings = (type: string): string => {
  switch (type) {
    case ProfileNotifications.SUCCESSFUL_PURCHASE:
      return 'Successful purchase';
    case ProfileNotifications.COLLECTION_REVEAL:
      return 'Collection reveal';
    case ProfileNotifications.PACKS:
      return 'Packs';
    case ProfileNotifications.DROPS:
      return 'Drops';
    default:
      return type;
  }
};
export const parseNotificationDescription = (type: string): string => {
  switch (type) {
    case ProfileNotifications.SUCCESSFUL_PURCHASE:
      return 'Notifies about successful purchase of any item when it is added to the inventory.';
    case ProfileNotifications.COLLECTION_REVEAL:
      return 'When NFTs become revealed';
    case ProfileNotifications.PACKS:
      return 'When new NFT packs become available.';
    case ProfileNotifications.DROPS:
      return 'When a creator releases new NFT’s for sale.';
    default:
      return type;
  }
};
export const getErrorType = (message: string): string => {
  const field = getConflictField(message);
  return field || 'unknown';
};

export const renderPrice = (price: string, gasFee?: string) => {
  if (!gasFee) return Number(price).toFixed(2);
  return (Number(price) + Number(gasFee)).toFixed(2);
};
