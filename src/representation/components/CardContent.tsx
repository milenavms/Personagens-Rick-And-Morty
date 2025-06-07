import React from 'react';

type Props = {
  children: React.ReactNode;
};

const CardContent: React.FC<Props> = ({ children }) => {
  return (
     <div className="rounded-2xl bg-[var(--bg-surface)] text-[var(--text-base)] transition-colors duration-300">
        {children}
     </div>

  );
};

export default CardContent;