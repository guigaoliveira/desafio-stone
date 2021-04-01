interface Item {
  amount: number
  price: number
}

interface Object {
  [key: string]: number
}

export function distributeNumber (
  total: number = 0,
  divider: number = 0
): number[] {
  const baseValue = total / divider
  const rest = total % divider
  return Array.from({ length: divider }, (_, index) => Math.trunc(index < rest ? baseValue + 1 : baseValue))
}

export function sumTotalPriceItems (items: Item[] = []): number {
  return items.reduce(
    (accumulator, { price, amount }) => accumulator + price * amount,
    0
  )
}

export function zipObject (keys: any[] = [], values: any[] = []): Object {
  return keys.reduce((obj, key, index) => {
    obj[key] = values[index]
    return obj
  }, {})
}

export function isValidInput (items: Item[] = [], emails: string[] = []): boolean {
  const isArrayFull = (array: any[]): boolean => array.length !== 0
  return isArrayFull(emails) && isArrayFull(items)
}

export function main (items: Item[] = [], emails: string[] = []): Object {
  if (!isValidInput(items, emails)) return {}

  const totalPriceItems = sumTotalPriceItems(items)
  const distributedPrices = distributeNumber(totalPriceItems, emails.length)
  return zipObject(emails, distributedPrices)
}
