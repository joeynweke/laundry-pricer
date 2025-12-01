export default function PriceResult({ price }) {
  return (
    <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white text-center">
      <p className="text-sm opacity-90">Estimated Total</p>
      <p className="text-5xl font-bold mt-2">₦{price.toLocaleString()}</p>
      <p className="mt-3 text-sm">Ready in 24–48 hours</p>
    </div>
  )
}