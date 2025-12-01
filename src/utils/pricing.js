export const calculatePrice = (weight, type) => {
  const rates = {
    student: 400,
    corporate: 600,
    family: 500
  }
  return weight ? Math.round(rates[type] * weight * 1.1) : 0
}