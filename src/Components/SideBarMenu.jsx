import React from "react";

const SideBarMenu = () => {
  return (
    <div className="p-6 shadow-lg">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>YtMusic</li>
      </ul>
      <h1 className="font-bold pt-5 pb-2 overline">You </h1>
      <ul>
        <li>History</li>
        <li>Videos</li>
        <li>Watch Later</li>
        <li>Showmore</li>
      </ul>
      <h1 className="font-bold pt-5 pb-2 overline">Subscriptions</h1>
      <ul>
        <li>TanmayBhat</li>
        <li>ThinkSchool</li>
        <li>Yadnya-news</li>
        <li>ParimalAde</li>
      </ul>
    </div>
  );
};

export default SideBarMenu;
