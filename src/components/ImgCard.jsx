export default function ImgCard({ src, alt, title = "" }) {
  return (

      <figure>
        <img
          src={src}
          alt={alt}
          onError={(e) => {
            e.target.src =
              "https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1";
          }}
          className="max-w-sm rounded-lg shadow-2xl w-100 h-80 object-cover"
        />
        {title && (
          <figcaption className="m-auto mt-2 text-center">{title}</figcaption>
        )}
      </figure>

  );
}
