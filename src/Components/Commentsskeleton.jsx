import React from "react";

const Commentsskeleton = () => {
  return (
    <div className="p-4 w-[72rem]">
      <ul>
        <li>
          <h2 className="font-bold py-2">Akshay Saini</h2>
        </li>
        <li>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            obcaecati cupiditate veritatis vero velit dolores quas sint illum! A
            recusandae deleniti aperiam eos commodi nesciunt eum laudantium
            laborum, voluptas voluptatum?
          </p>
        </li>
        <li>
          <div className="flex justify-between w-[20rem]">
            <div>
              <button className="p-4">like</button>
              <button className="p-4">dislike</button>
            </div>
            <div>
              {" "}
              <button className="p-4">reply</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Commentsskeleton;
