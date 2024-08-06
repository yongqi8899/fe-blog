export default function ImgCard({ src, alt, title = "" }) {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <figure>
        <img
          src={src}
          alt={alt}
          onError={(e) => {
            e.target.src =
              "https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1";
          }}
          className="rounded-t-lg max-h-96 sm:max-h-[300px]"
        />
        {title && (
          <figcaption className="m-auto mt-2 text-center">{title}</figcaption>
        )}
      </figure>
    </div>
  );
}
