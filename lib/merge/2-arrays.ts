export default function merge(a: any[], b: any[]) {
  const m = a.length;
  const n = b.length;
  let i = 0;
  let j = 0;
  let k = 0;
  const output = new Array(m + n);
  while (i < m && j < n) {
    if (a[i] < b[j]) {
      output[k++] = a[i++];
    } else if (a[i] == b[j]) {
      output[k++] = a[i++]
      output[k++] = b[j++];
    } else {
      output[k++] = b[j++];
    }
  }
  if (i < m) {
    for (; i < m; i++) {
      output[k++] = a[i];
    }
  }
  if (j < n) {
    for (; j < n; j++) {
      output[k++] = b[j];
    }
  }
  return output;
}