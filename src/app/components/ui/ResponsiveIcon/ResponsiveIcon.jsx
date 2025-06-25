import { useEffect, useState } from "react";

const ResponsiveIcon = ({ Icon, sizeMobile = 12, sizeDesktop = 18, ...props }) => {
  const [iconSize, setIconSize] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 640
      ? sizeMobile
      : sizeDesktop
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newSize = width < 640 ? sizeMobile : sizeDesktop;
      setIconSize(newSize);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sizeMobile, sizeDesktop]);

  return <Icon size={iconSize} {...props} />;
};

export default ResponsiveIcon;
