import { Component } from 'react';
import { Link } from 'react-router-dom';

/** Stops one broken component from blanking the whole site, and shows what went wrong. */
export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidUpdate(prev) {
    if (prev.resetKey !== this.props.resetKey && this.state.error) this.setState({ error: null });
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Something went wrong</p>
          <h1>This page could not be displayed</h1>
          <p>
            <Link to="/" style={{ color: 'var(--gold-light)' }}>Return to the homepage</Link>
          </p>
          <pre style={{ whiteSpace: 'pre-wrap', color: 'rgba(255,255,255,.7)', marginTop: 20, fontSize: '.8rem' }}>
            {String(this.state.error?.message || this.state.error)}
          </pre>
        </div>
      </section>
    );
  }
}
