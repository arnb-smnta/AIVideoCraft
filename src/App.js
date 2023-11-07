import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import appstore from "./Components/reduxcomponents/appstore";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";
function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        { path: "watch", element: <WatchPage /> },
      ],
    },
  ]);
  return (
    <Provider store={appstore}>
      <div className="">
        <Header />
        <RouterProvider router={approuter} />
      </div>
    </Provider>
  );
}

export default App;
