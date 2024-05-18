// Footer.tsx
import React from 'react';
import './Footer.css';

interface FooterProps {
  onCheckboxChange?: (checked: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ onCheckboxChange }) => {
  return (
    <footer>
      <div className="storybook-footer">
        <div>
          <h1>HOLA</h1>
          <p>© 2024 HOLA Corporation. All rights reserved.</p>
        </div>
        <div>
          <label className="checkbox-label">
            <input type="checkbox" onChange={(e) => onCheckboxChange?.(e.target.checked)} />
            Accept Terms and Conditions
          </label>
          <div className="footer-info">
            <p>123 Street, City, ABC 12345</p>
            <p>Phone: 123-456-7890 | Email: info@HOLA.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
