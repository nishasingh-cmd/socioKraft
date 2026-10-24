import { useState } from "react";
import { Calculator, TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GrowthCalculator = () => {
  const [monthlyInquiries, setMonthlyInquiries] = useState<number>(30);
  const [avgPatientValue, setAvgPatientValue] = useState<number>(5000);

  // Projections
  const estimatedSurgeInquiries = Math.round(monthlyInquiries * 2.8);
  const additionalMonthlyRevenue = Math.round((estimatedSurgeInquiries - monthlyInquiries) * (avgPatientValue * 0.35));

  return (
    <div className="glass-card rounded-3xl p-8 md:p-12 border border-line bg-card shadow-sm relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-line text-bronze text-xs font-mono">
            <Calculator size={14} />
            <span>Interactive ROI & Patient Growth Estimator</span>
          </div>

          <h3 className="font-heading font-bold text-2xl md:text-4xl text-ink">
            Calculate your practice growth potential
          </h3>

          <p className="text-taupe text-sm md:text-base leading-relaxed">
            See how SocioKraft's SEO, conversion web design, and digital marketing can boost your practice inquiries and monthly revenue.
          </p>

          <div className="space-y-6 pt-4">
            <div>
              <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                <span>Current Monthly Patient Inquiries: <strong className="text-bronze">{monthlyInquiries}</strong></span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={monthlyInquiries}
                onChange={(e) => setMonthlyInquiries(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-bronze"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                <span>Avg Patient Procedure Value (₹): <strong className="text-bronze">₹{avgPatientValue.toLocaleString('en-IN')}</strong></span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={avgPatientValue}
                onChange={(e) => setAvgPatientValue(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-bronze"
              />
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="w-full lg:w-96 bg-stone-50 border border-line p-7 rounded-2xl space-y-6 text-center shadow-xs">
          <div className="space-y-1">
            <span className="text-xs text-taupe font-mono uppercase tracking-wider">Estimated Inquiries With SocioKraft</span>
            <div className="font-heading font-bold text-4xl text-bronze flex items-center justify-center gap-2">
              <TrendingUp size={28} />
              <span>{estimatedSurgeInquiries} / mo</span>
            </div>
            <span className="text-[11px] text-taupe font-mono">+180% Avg Lead Surge</span>
          </div>

          <div className="border-t border-line pt-4 space-y-1">
            <span className="text-xs text-taupe font-mono uppercase tracking-wider">Projected Additional Revenue</span>
            <div className="font-heading font-bold text-3xl text-ink">
              +₹{additionalMonthlyRevenue.toLocaleString('en-IN')} / mo
            </div>
          </div>

          <a
            href="https://wa.me/919999999999?text=Hi%20Sociokraft,%20I'd%20like%20to%20claim%20my%20practice%20growth%20strategy%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-glow bg-bronze hover:bg-bronze/90 text-white text-xs md:text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-xs"
          >
            <span>Claim Your Strategy Plan</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GrowthCalculator;
