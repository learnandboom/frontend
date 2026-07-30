// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Dashboard from "./Components//Dashboard";
// import Navbar from "./Components/Navbar";
// import Book from "./Components/Book";
// import Courses from "./Components/Courses";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Home />
//         <Navbar />
//       </div>
//     ),
//   },
//   {
//     path: "/About",
//     element: (
//       <div>
//         <About />
//         <Navbar />
//       </div>
//     ),
//   },
//   {
//     path: "/Dashboard",
//     element: (
//       <div>
//         <Dashboard />
//         <Navbar />
//       </div>
//     ),
//     children: [
//       { path: "Book", element: <Book /> },
//       { path: "Courses", element: <Courses /> },
//     ],
//   },
// ]);
// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// };

// export default App;
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Offers from "./Components/offers";
import TestPage from "./Components/TestPage";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import Book from "./Components/Book";
import Courses from "./Components/Courses";
import Params from "./Components/Params";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home /> <Navbar />
        <br />
      </div>
    ),
  },

  {
    path: "/About",
    element: (
      <div>
        <About /> <Navbar />
        <br />
      </div>
    ),
  },
  {
    path: "/Dashboard",
    element: (
      <div>
        <Dashboard /> <Navbar />
        <br />
      </div>
    ),
    children: [
      { path: "Book", element: <Book /> },
      { path: "Courses", element: <Courses /> },
      {
        path: "Offers",
        element: <Offers />,
      },
      {
        path: "TestPage",
        element: <TestPage />,
      },
    ],
  },

  {
    path: "*",
    element: <h1> 404 - error</h1>,
  },
  {
    path: "/Student/:id",
    element: (
      <div>
        <Params />
        <Navbar />
      </div>
    ),
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
