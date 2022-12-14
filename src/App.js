
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Ststistics from './components/Ststistics/Ststistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>
        },
        {
          path: '/ststistics',
          element: <Ststistics></Ststistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <Quiz></Quiz>
        },

      ]
    },
    { path: '*', element: <h1>No Route Found:404</h1> }
  ]);
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
