
import React from 'react';
import './Badge.css';

export interface BadgeProps {
  label: string;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const Badge: React.FC<BadgeProps> = ({ label, color = 'default' }) => {
  return <span className={`badge badge-${color}`}>{label}</span>;
};

export default Badge;
