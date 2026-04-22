'use client';

import { useState } from 'react';
import Link from 'next/link';
import './login.css';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      // Reset form
      setFormData({ email: '', password: '' });
      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      setErrors({ submit: 'Login failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <Link href="/">
          <div className="logo">EcoLoop</div>
        </Link>
      </header>

      <main className="login-main">
        <div className="login-card">
          <div className="login-content">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">
              Log in to continue your sustainable shopping journey
            </p>

            {success && (
              <div className="success-message">
                ✓ Login successful! Redirecting...
              </div>
            )}

            {errors.submit && (
              <div className="error-message">{errors.submit}</div>
            )}

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`form-input ${errors.password ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.password && (
                  <span className="error-text">{errors.password}</span>
                )}
              </div>

              <div className="form-footer">
                <Link href="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Log In'}
              </button>
            </form>

            <div className="login-divider">
              <span>Don't have an account?</span>
            </div>

            <Link href="/signup" className="signup-link">
              Create an EcoLoop account
            </Link>
          </div>

          <div className="login-illustration">
            <div className="illustration-content">
              <div className="eco-icon">🌱</div>
              <h2>Join the Circular Economy</h2>
              <p>
                Be part of a community making sustainable choices, one purchase at a time.
              </p>
              <ul className="benefits-list">
                <li>✓ Shop eco-friendly products</li>
                <li>✓ Sell pre-loved items</li>
                <li>✓ Track your environmental impact</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="login-footer">
        <p>
          By logging in, you agree to our{' '}
          <Link href="/terms">Terms of Service</Link> and{' '}
          <Link href="/privacy">Privacy Policy</Link>
        </p>
      </footer>
    </div>
  );
}
