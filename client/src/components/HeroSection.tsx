import { Button } from '@/components/ui/button';
import { Shield, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero-section pt-40">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Make AI understand your business and figure out how to{' '}
            <span className="hero-title-accent">sell more</span>
          </h1>

          <p className="hero-description">
            Teramot is the layer that connects any AI model — Claude, ChatGPT, or Gemini — to your company's real data. In under an hour. No technical team needed.
          </p>

          <div className="hero-cta">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8"
            >
              Start for free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8"
            >
              Book a call
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="badge-group">
            <div className="badge">
              <Shield className="w-4 h-4 text-primary" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="badge">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>No credit card</span>
            </div>
            <div className="badge">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Ready in 1 hour</span>
            </div>
          </div>
        </div>

        {/* Right Diagram */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-full max-w-md h-96">
            {/* SVG Diagram */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circle */}
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="1"
              />

              {/* Center node */}
              <circle
                cx="200"
                cy="200"
                r="40"
                fill="#0052CC"
              />
              <text
                x="200"
                y="205"
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
              >
                TERAMOT
              </text>

              {/* Secondary center node */}
              <circle
                cx="200"
                cy="200"
                r="20"
                fill="#00D084"
                opacity="0.7"
              />

              {/* Connection lines */}
              <line x1="200" y1="200" x2="80" y2="120" stroke="#D1D5DB" strokeWidth="2" />
              <line x1="200" y1="200" x2="80" y2="200" stroke="#D1D5DB" strokeWidth="2" />
              <line x1="200" y1="200" x2="80" y2="280" stroke="#D1D5DB" strokeWidth="2" />
              <line x1="200" y1="200" x2="200" y2="80" stroke="#D1D5DB" strokeWidth="2" />
              <line x1="200" y1="200" x2="320" y2="120" stroke="#D1D5DB" strokeWidth="2" />
              <line x1="200" y1="200" x2="320" y2="200" stroke="#D1D5DB" strokeWidth="2" />

              {/* System nodes (left side) */}
              <g>
                {/* Postgres */}
                <circle cx="80" cy="120" r="20" fill="white" stroke="#0052CC" strokeWidth="2" />
                <text x="80" y="125" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0052CC">
                  Pg
                </text>

                {/* Salesforce */}
                <circle cx="80" cy="200" r="20" fill="white" stroke="#0052CC" strokeWidth="2" />
                <text x="80" y="205" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0052CC">
                  SF
                </text>

                {/* Excel */}
                <circle cx="80" cy="280" r="20" fill="white" stroke="#0052CC" strokeWidth="2" />
                <text x="80" y="285" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0052CC">
                  XL
                </text>
              </g>

              {/* AI Model nodes (right side) */}
              <g>
                {/* Claude */}
                <circle cx="320" cy="120" r="20" fill="white" stroke="#0052CC" strokeWidth="2" />
                <text x="320" y="125" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0052CC">
                  C
                </text>

                {/* ChatGPT */}
                <circle cx="320" cy="200" r="20" fill="white" stroke="#0052CC" strokeWidth="2" />
                <text x="320" y="205" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0052CC">
                  GPT
                </text>
              </g>

              {/* Labels */}
              <text x="40" y="60" fontSize="11" fontWeight="bold" fill="#0052CC" textAnchor="middle">
                YOUR SYSTEMS
              </text>
              <text x="360" y="60" fontSize="11" fontWeight="bold" fill="#0052CC" textAnchor="middle">
                YOUR FAVORITE AI
              </text>
              <text x="200" y="350" fontSize="11" fontWeight="bold" fill="#0052CC" textAnchor="middle">
                YOUR SECURE ENVIRONMENT
              </text>
            </svg>

            {/* SOC 2 Badge */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white border border-border rounded-full px-3 py-2 text-xs font-semibold text-primary">
              <Shield className="w-3 h-3" />
              SOC 2 CERTIFIED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
