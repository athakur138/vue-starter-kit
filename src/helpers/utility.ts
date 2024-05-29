export const uniqueArray = (): void => {
    // logic for the function
}

export const reverseWords = (text: string): string => {
    return text.split(' ').map((word: string) => word.split('').reverse().join('')).join(' ');
  };
  