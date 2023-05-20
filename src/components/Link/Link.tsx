import { VariantProps, cva } from "class-variance-authority";
import React, { ReactNode, ComponentType } from "react";

interface LinkProps {
  to: string;
  children: ReactNode;
  component?: ComponentType<any>;
  className?: string;
}

const link = cva("inline-flex", {
  variants: {
    type: {
      header: ["capitalize"],
    },
  },
});

export interface StyledLink extends LinkProps, VariantProps<typeof link> {}

const Link: React.FC<StyledLink> = ({
  to,
  children,
  type,
  component: Component,
  ...props
}) => {
  if (Component) {
    return (
      <Component to={to} {...props} className={link({ type })}>
        {children}
      </Component>
    );
  }

  return (
    <a href={to} {...props} className={link({ type })}>
      {children}
    </a>
  );
};

export default Link;
