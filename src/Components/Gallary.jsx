

const Gallary = () => {
  return (
    <div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900 px-8">
        <h2 className="text-3xl text-center py-2">
          Latest <span className="text-[#ed5b31]">Gallery</span>
        </h2>
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.postimg.cc/RZMrTd7Y/gallery-img-1.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.postimg.cc/Y9Nf86fX/gallery-img-2.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.postimg.cc/P5rXqTRN/gallery-img-3.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.postimg.cc/4d4bLKLs/gallery-img-4.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.postimg.cc/9X6JdB5j/gallery-img-5.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.postimg.cc/RCKcB58j/gallery-img-6.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.postimg.cc/ZRh5Pgcd/gallery-img-8.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.postimg.cc/tJJQFtL6/gallery-img-9.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.postimg.cc/xCdFZjtD/gallery-img-11.jpg"
          />
          <img
            src="https://i.postimg.cc/BZPGZNBW/gallery-img-12.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallary;
