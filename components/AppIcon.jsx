
import React from 'react';
import * as LucideIcons from 'lucide-react';

const AppIcon = ({ name, ...props }) => {
  const IconComponent = LucideIcons[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
};

export default AppIcon;
