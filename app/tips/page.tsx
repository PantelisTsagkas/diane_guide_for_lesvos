import Header from "../components/Header";
import TipCard from "../components/TipCard";
import { tips } from "../data/tips";

export default function TipsPage() {
  return (
    <div className="flex flex-col">
      <Header
        title="Travel Tips"
        subtitle="Practical advice for your trip to Greece"
        emoji="💡"
      />

      <div className="px-4 pt-5 pb-8 mx-auto w-full max-w-lg">
        <p className="text-sm text-gray-500 leading-relaxed mb-5">
          Greece has its own customs and rhythms. These tips will help you feel
          confident and connected during your holiday in Lesvos.
        </p>

        <div className="space-y-3">
          {tips.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>

        {/* Quick Reference */}
        <div className="mt-8 rounded-2xl bg-deep-blue p-5 text-white">
          <h3 className="font-bold text-base mb-3">🆘 Quick Reference</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-white/70">Emergency</span>
              <span className="font-semibold">112</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Tourist Police</span>
              <span className="font-semibold">171</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Coast Guard</span>
              <span className="font-semibold">108</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Country Code</span>
              <span className="font-semibold">+30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
