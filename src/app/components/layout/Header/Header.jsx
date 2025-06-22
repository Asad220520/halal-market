import Button from "@components/ui/Button/Button";

const Header = () => {
  return (
    <header className="w-full bg-[#0A8791]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold text-white">
          HALAL Industry
        </div>

        <div className="flex gap-6">
          <Button variant="outline">Стать продавцом</Button>
          <Button variant="primary">Войти</Button>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
