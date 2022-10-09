export function CEPMask(value: string) {
  return value.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2') // get 2 number groups, the first one with 03 and the second one with 01. After get the first group it adds a dot before second group.
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1') // get 2 numbers followed by a hyphen and don't let the input receive no more values.
}

export function removeNonDigitsChar(value: string) {
  return value.replace(/[\W_]/g, "");
}