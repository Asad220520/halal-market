import image from "../../asesst/images/product(1).png";
import CategoryCard from "../components/ui/CategoryCard/CategoryCard";
import Breadcrumbs from "../components/ui/Breadcrumbs/Breadcrumbs";

export default function CategoryPage() {
  const categories = [
    {
      title: "Здоровье и красота",
      image: image,
      subcategories: [
        { title: "Декоративная косметика", image: image },
        { title: "Уход за лицом", image: image },
        { title: "Уход за волосами", image: image },
        { title: "Уход за телом", image: image },
        { title: "Уход за полостью рта", image: image },
        { title: "Интимная гигиена", image: image },
        { title: "Инструменты и аксессуары для красоты", image: image },
        { title: "Парфюмерия", image: image },
        { title: "Средства для мужчин", image: image },
      ],
    },
    {
      title: "Товары для детей",
      image: image,
      subcategories: [
        { title: "Декоративная косметика", image: image },
        { title: "Уход за лицом", image: image },
        { title: "Уход за волосами", image: image },
        { title: "Уход за телом", image: image },
        { title: "Уход за полостью рта", image: image },
        { title: "Интимная гигиена", image: image },
        { title: "Инструменты и аксессуары для красоты", image: image },
        { title: "Парфюмерия", image: image },
        { title: "Средства для мужчин", image: image },
      ],
    },
    {
      title: "Напитки",
      image: image,
      subcategories: [
        { title: "Декоративная косметика", image: image },
        { title: "Уход за лицом", image: image },
        { title: "Уход за волосами", image: image },
        { title: "Уход за телом", image: image },
        { title: "Уход за полостью рта", image: image },
        { title: "Интимная гигиена", image: image },
        { title: "Инструменты и аксессуары для красоты", image: image },
        { title: "Парфюмерия", image: image },
        { title: "Средства для мужчин", image: image },
      ],
    },
    {
      title: "Бакалея",
      image: image,
      subcategories: [
        { title: "Декоративная косметика", image: image },
        { title: "Уход за лицом", image: image },
        { title: "Уход за волосами", image: image },
        { title: "Уход за телом", image: image },
        { title: "Уход за полостью рта", image: image },
        { title: "Интимная гигиена", image: image },
        { title: "Инструменты и аксессуары для красоты", image: image },
        { title: "Парфюмерия", image: image },
        { title: "Средства для мужчин", image: image },
      ],
    },
    {
      title: "Готовая еда",
      image: image,
      subcategories: [
        { title: "Декоративная косметика", image: image },
        { title: "Уход за лицом", image: image },
        { title: "Уход за волосами", image: image },
        { title: "Уход за телом", image: image },
        { title: "Уход за полостью рта", image: image },
        { title: "Интимная гигиена", image: image },
        { title: "Инструменты и аксессуары для красоты", image: image },
        { title: "Парфюмерия", image: image },
        { title: "Средства для мужчин", image: image },
      ],
    },
    {
      title: "Кондитерские изделия",
      image: image,
      subcategories: [
        { title: "Декоративная косметика", image: image },
        { title: "Уход за лицом", image: image },
        { title: "Уход за волосами", image: image },
        { title: "Уход за телом", image: image },
        { title: "Уход за полостью рта", image: image },
        { title: "Интимная гигиена", image: image },
        { title: "Инструменты и аксессуары для красоты", image: image },
        { title: "Парфюмерия", image: image },
        { title: "Средства для мужчин", image: image },
      ],
    },
    {
      title: "Мука, хлеб и выпечка",
      image: image,
      subcategories: [
        { title: "Декоративная косметика", image: image },
        { title: "Уход за лицом", image: image },
        { title: "Уход за волосами", image: image },
        { title: "Уход за телом", image: image },
        { title: "Уход за полостью рта", image: image },
        { title: "Интимная гигиена", image: image },
        { title: "Инструменты и аксессуары для красоты", image: image },
        { title: "Парфюмерия", image: image },
        { title: "Средства для мужчин", image: image },
      ],
    },
    {
      title: "Молочные продукты",
      image: image,
      subcategories: [
        { title: "Декоративная косметика", image: image },
        { title: "Уход за лицом", image: image },
        { title: "Уход за волосами", image: image },
        { title: "Уход за телом", image: image },
        { title: "Уход за полостью рта", image: image },
        { title: "Интимная гигиена", image: image },
        { title: "Инструменты и аксессуары для красоты", image: image },
        { title: "Парфюмерия", image: image },
        { title: "Средства для мужчин", image: image },
      ],
    },
    {
      title: "Замороженные продукты",
      image: image,
      subcategories: [
        { title: "Декоративная косметика", image: image },
        { title: "Уход за лицом", image: image },
        { title: "Уход за волосами", image: image },
        { title: "Уход за телом", image: image },
        { title: "Уход за полостью рта", image: image },
        { title: "Интимная гигиена", image: image },
        { title: "Инструменты и аксессуары для красоты", image: image },
        { title: "Парфюмерия", image: image },
        { title: "Средства для мужчин", image: image },
      ],
    },
    {
      title: "Рыба и морепродукты",
      image: image,
      subcategories: [
        { title: "Декоративная косметика", image: image },
        { title: "Уход за лицом", image: image },
        { title: "Уход за волосами", image: image },
        { title: "Уход за телом", image: image },
        { title: "Уход за полостью рта", image: image },
        { title: "Интимная гигиена", image: image },
        { title: "Инструменты и аксессуары для красоты", image: image },
        { title: "Парфюмерия", image: image },
        { title: "Средства для мужчин", image: image },
      ],
    },
    {
      title: "Мясо птицы и яйца",
      image: image,
      subcategories: [
        { title: "Декоративная косметика", image: image },
        { title: "Уход за лицом", image: image },
        { title: "Уход за волосами", image: image },
        { title: "Уход за телом", image: image },
        { title: "Уход за полостью рта", image: image },
        { title: "Интимная гигиена", image: image },
        { title: "Инструменты и аксессуары для красоты", image: image },
        { title: "Парфюмерия", image: image },
        { title: "Средства для мужчин", image: image },
      ],
    },
    {
      title: "Мясо и мясные продукты",
      image: image,
      subcategories: [
        { title: "Декоративная косметика", image: image },
        { title: "Уход за лицом", image: image },
        { title: "Уход за волосами", image: image },
        { title: "Уход за телом", image: image },
        { title: "Уход за полостью рта", image: image },
        { title: "Интимная гигиена", image: image },
        { title: "Инструменты и аксессуары для красоты", image: image },
        { title: "Парфюмерия", image: image },
        { title: "Средства для мужчин", image: image },
      ],
    },
  ];
  return (
    <div className="container  mx-auto px-4  pb-4 sm:pb-12">
      <div className='flex justify-center flex-wrap gap-2 items-center sm:gap-4  sm:items-start"'>
        {categories.map((el, id) => (
          <CategoryCard el={el} key={id} />
        ))}
      </div>
    </div>
  );
}
