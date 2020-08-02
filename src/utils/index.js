export function getOS() {
  if (/(iPhone|iPod|iOS)/i.test(navigator.userAgent)) {
    return 2;
  } else if (/(iPad)/i.test(navigator.userAgent)) {
    return 3;
  } else if (/(Android)/i.test(navigator.userAgent)) {
    return 1;
  } else {
    return 0;
  }
}
