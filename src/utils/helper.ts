export function calcAge(dateString: string) {
    const birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / 31557600000);
  }