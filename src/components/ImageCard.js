import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="mx-w-sm m-2 rounded overflow-hidden shadow-lg bg-gray-800 text-white">
      <img src={image.webformatURL} alt="" className="w-full h-48" />
      <div className="flex flex-col gap-4 p-6 h-auto">
        <div>
          <div className="font-bold text-teal-400 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <a
        href={image.pageURL}
        className="mb-6 mx-6 inline-block w-auto rounded-md border border-4 border-teal-400 hover:bg-teal-200 transition ease-in-out duration-500 hover:text-gray-700 font-semibold text-teal-400 px-4 py-2"
      >
        View on Pixabay
      </a>
    </div>
  );
};

export default ImageCard;
