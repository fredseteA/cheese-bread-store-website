import { ShoppingCart, Settings, X, Eye, EyeOff, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "@/contexts/StoreContext";
import { useState, useRef, useCallback, useEffect } from "react";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

interface HeaderProps {
  onCartClick?: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { isAdminMode, toggleAdminMode, getCartCount } = useStore();
  const cartCount = onCartClick ? getCartCount() : 0;
  const navigate = useNavigate();

  const [showModal, setShowModal]       = useState(false);
  const [password, setPassword]         = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError]               = useState(false);
  const [shake, setShake]               = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);

  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const CLICKS_NEEDED = 5;
  const CLICK_WINDOW  = 2000;

  const handleLogoClick = useCallback(() => {
    if (isAdminMode) {
      toggleAdminMode();
      return;
    }
    clickCount.current += 1;
    if (clickTimer.current) clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => {
      clickCount.current = 0;
    }, CLICK_WINDOW);
    if (clickCount.current >= CLICKS_NEEDED) {
      clickCount.current = 0;
      if (clickTimer.current) clearTimeout(clickTimer.current);
      setPassword("");
      setError(false);
      setShowModal(true);
    }
  }, [isAdminMode, toggleAdminMode]);

  const handlePasswordSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      toggleAdminMode();
      setShowModal(false);
      setPassword("");
      setError(false);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setPassword("");
    setError(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#mobile-menu") && !target.closest("#menu-btn")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // Cada item: label exibido + rota destino
  const navItems = [
    { label: "Início",   to: "/" },
    { label: "Produtos", to: "/#produtos" },
    { label: "Sobre",    to: "/AboutUs" },
    { label: "Contato",  to: "/contact" },
  ];

  const handleNavClick = (to: string) => {
    setMenuOpen(false);
    if (to.startsWith("/#")) {
      // âncora na home
      navigate("/");
      setTimeout(() => {
        const id = to.replace("/#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className={`header-inner ${scrolled ? "header-floating" : "header-transparent"}`}>
          <div
            className="mx-auto flex items-center justify-between"
            style={{
              padding: "0 clamp(1.25rem, 4vw, 3rem)",
              height: "clamp(52px, 7vw, 68px)",
            }}
          >
            {/* ── Logo ── */}
            <Link
              to="/"
              className="flex items-center gap-2.5 select-none"
              style={{ textDecoration: "none" }}
              onClick={handleLogoClick as any}
            >
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{
                  width: 36, height: 36,
                  background: "rgba(245,220,160,0.18)",
                  border: "1.5px solid rgba(245,220,160,0.5)",
                }}
              >
                <span style={{ fontSize: 18, lineHeight: 1 }}>🧀</span>
              </div>
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(14px, 1.8vw, 18px)",
                  color: "#f5e8d0",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                }}
              >
                Pão de Queijo
              </span>
            </Link>

            {/* ── Nav desktop ── */}
            <nav className="hidden md:flex items-center" style={{ gap: "clamp(1rem, 2.5vw, 2.5rem)" }}>
              {navItems.map(({ label, to }) =>
                to.startsWith("/#") ? (
                  <button
                    key={label}
                    onClick={() => handleNavClick(to)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(11px, 1.2vw, 13px)",
                      color: "rgba(245,232,208,0.85)",
                      letterSpacing: "0.04em",
                      padding: 0,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f5e8d0")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(245,232,208,0.85)")}
                  >
                    {label}
                  </button>
                ) : (
                  <Link
                    key={label}
                    to={to}
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(11px, 1.2vw, 13px)",
                      color: "rgba(245,232,208,0.85)",
                      letterSpacing: "0.04em",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f5e8d0")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(245,232,208,0.85)")}
                  >
                    {label}
                  </Link>
                )
              )}
            </nav>

            {/* ── Ações direita ── */}
            <div className="flex items-center gap-1.5">
              {isAdminMode && (
                <button
                  onClick={toggleAdminMode}
                  title="Sair do modo admin"
                  className="flex items-center justify-center rounded-full transition-all"
                  style={{ width: 34, height: 34, background: "rgba(245,220,160,0.25)", border: "1px solid rgba(245,220,160,0.5)" }}
                >
                  <Settings style={{ width: 15, height: 15, color: "#f5e8d0" }} />
                </button>
              )}

              {onCartClick && (
                <button
                  onClick={onCartClick}
                  className="relative flex items-center justify-center rounded-full transition-all"
                  style={{ width: 34, height: 34, background: "transparent", border: "1px solid rgba(245,220,160,0.3)" }}
                >
                  <ShoppingCart style={{ width: 15, height: 15, color: "rgba(245,232,208,0.85)" }} />
                  {cartCount > 0 && (
                    <span
                      className="absolute flex items-center justify-center rounded-full"
                      style={{ top: -6, right: -6, width: 18, height: 18, background: "#c47820", color: "#fff", fontSize: 10, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}
                    >
                      {cartCount}
                    </span>
                  )}
                </button>
              )}

              <button
                id="menu-btn"
                onClick={() => setMenuOpen((v) => !v)}
                className="flex md:hidden items-center justify-center rounded-full transition-all"
                style={{ width: 34, height: 34, background: menuOpen ? "rgba(245,220,160,0.2)" : "transparent", border: "1px solid rgba(245,220,160,0.3)" }}
              >
                {menuOpen
                  ? <X    style={{ width: 15, height: 15, color: "#f5e8d0" }} />
                  : <Menu style={{ width: 15, height: 15, color: "rgba(245,232,208,0.85)" }} />
                }
              </button>
            </div>
          </div>
        </div>

        {/* ── Menu mobile ── */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden"
            style={{
              background: "rgba(18,8,2,0.97)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid rgba(245,220,160,0.12)",
              padding: "8px 0 16px",
              animation: "menuSlide 0.2s ease",
            }}
          >
            {navItems.map(({ label, to }, i) =>
              to.startsWith("/#") ? (
                <button
                  key={label}
                  onClick={() => handleNavClick(to)}
                  style={{
                    display: "block", width: "100%", textAlign: "left",
                    padding: `14px clamp(1.25rem, 4vw, 3rem)`,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 400, fontSize: 15,
                    color: "rgba(245,232,208,0.85)",
                    letterSpacing: "0.04em",
                    background: "none", border: "none", cursor: "pointer",
                    borderBottom: i < navItems.length - 1 ? "1px solid rgba(245,220,160,0.07)" : "none",
                  }}
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: `14px clamp(1.25rem, 4vw, 3rem)`,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 400, fontSize: 15,
                    color: "rgba(245,232,208,0.85)",
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    borderBottom: i < navItems.length - 1 ? "1px solid rgba(245,220,160,0.07)" : "none",
                  }}
                >
                  {label}
                </Link>
              )
            )}
          </div>
        )}
      </header>

      {/* ── Modal de senha ── */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div
            className="relative flex flex-col"
            style={{
              background: "#1a0f05",
              border: "1px solid rgba(245,220,160,0.25)",
              borderRadius: 16,
              padding: "36px 32px 28px",
              width: "min(360px, 90vw)",
              animation: shake ? "shake 0.4s ease" : "fadeIn 0.2s ease",
            }}
          >
            <button
              onClick={handleClose}
              className="absolute flex items-center justify-center rounded-full transition-opacity hover:opacity-70"
              style={{ top: 14, right: 14, width: 28, height: 28, background: "rgba(245,220,160,0.1)", border: "none", color: "rgba(245,232,208,0.6)" }}
            >
              <X style={{ width: 14, height: 14 }} />
            </button>

            <div className="flex items-center justify-center rounded-full mx-auto mb-4"
              style={{ width: 52, height: 52, background: "rgba(196,120,32,0.15)", border: "1.5px solid rgba(196,120,32,0.35)", fontSize: 24 }}
            >
              🔐
            </div>

            <h2 className="text-center mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 20, color: "#f5e8d0", letterSpacing: "-0.01em" }}
            >
              Área restrita
            </h2>
            <p className="text-center mb-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(245,232,208,0.5)", fontWeight: 300 }}
            >
              Digite a senha para continuar
            </p>

            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
                placeholder="Senha"
                autoFocus
                style={{
                  width: "100%",
                  background: "rgba(245,220,160,0.07)",
                  border: `1px solid ${error ? "#e05a2b" : "rgba(245,220,160,0.2)"}`,
                  borderRadius: 8, padding: "11px 40px 11px 14px",
                  color: "#f5e8d0", fontFamily: "'Inter', sans-serif",
                  fontSize: 14, outline: "none", transition: "border-color 0.2s",
                }}
              />
              <button type="button" onClick={() => setShowPassword((v) => !v)}
                className="absolute flex items-center justify-center"
                style={{ right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(245,232,208,0.45)", cursor: "pointer", padding: 0 }}
              >
                {showPassword ? <EyeOff style={{ width: 15, height: 15 }} /> : <Eye style={{ width: 15, height: 15 }} />}
              </button>
            </div>

            {error && (
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#e05a2b", marginBottom: 8, textAlign: "center" }}>
                Senha incorreta. Tente novamente.
              </p>
            )}

            <button onClick={handlePasswordSubmit}
              className="mt-3 rounded-full transition-opacity hover:opacity-90"
              style={{ background: "#c47820", color: "#1a0f05", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", padding: "12px 20px", border: "none", cursor: "pointer" }}
            >
              Entrar
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-8px); }
          40%       { transform: translateX(8px); }
          60%       { transform: translateX(-5px); }
          80%       { transform: translateX(5px); }
        }
        @keyframes menuSlide {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}