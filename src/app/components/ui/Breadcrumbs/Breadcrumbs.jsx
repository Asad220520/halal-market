import { Link, useLocation } from "react-router-dom";

const labelMap = {
  menu: "Меню",
  beauty: "Красота и здоровье",
  "face-care": "Уход за лицом",
};

const formatLabel = (slug) =>
  decodeURIComponent(slug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  if (pathnames.length < 1) return null;

  return (
    <div className="mx-auto px-4  my-b sm:mb-8">
      <nav className=" container  ">
        <div className="text-[12px] sm:text-[16px] font-[400] sm:font-[500]">
          {pathnames.map((segment, index) => {
            const to = "/" + pathnames.slice(0, index + 1).join("/");
            const isLast = index === pathnames.length - 1;
            const label = labelMap[segment] || formatLabel(segment);

            return (
              <span key={to}>
                {!isLast ? (
                  <>
                    <Link
                      to={to}
                      className="hover:text-[#0A8791] text-[#868889]"
                    >
                      {label}
                    </Link>
                    <span className="text-[#868889]">/</span>
                  </>
                ) : (
                  <span className="text-[#0A8791]">{label}</span>
                )}
              </span>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
