/** Plain keyed wrapper: a CSS fade-in on mount. No JS animation state, nothing that can block rendering. */
export default function PageTransition({ children }) {
  return <main className="page page-enter">{children}</main>;
}
