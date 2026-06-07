import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Product', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'For Specialists', href: '#' },
    { label: 'Tutorials', href: '#' },
    { label: 'Docs', href: '#' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="nav-logo">
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold">Teramot</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="nav-cta">
          <div className="flex items-center gap-2">
            <button className="text-sm px-3 py-1 hover:text-primary transition-colors">
              ES
            </button>
            <button className="text-sm px-3 py-1 hover:text-primary transition-colors">
              EN
            </button>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            Book a call
          </Button>
          <Button
            size="sm"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            Start for free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-foreground text-foreground"
              >
                Book a call
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-foreground text-background"
              >
                Start for free
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
