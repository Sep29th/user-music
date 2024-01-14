import Login from "../../pages/Login/index.jsx";
import AuthLayout from "../../components/layouts/AuthLayout/index.jsx";
import Register from "../../pages/Register/index.jsx";
import UserLayout from "../../components/layouts/UserLayout/index.jsx";
import Home from "../../pages/Home/index.jsx";
import ListSongOfPlaylist from "../../pages/ListSongOfPlaylist/index.jsx";
import SingerProfile from "../../pages/SingerProfile/index.jsx";
import Library from "../../pages/Library/index.jsx";
import SearchResult from "../../pages/SearchResult/index.jsx";
import DetailInfoMation from "../../pages/DetailInformation/index.jsx";
import ForSinger from "../../pages/ForSinger/index.jsx";
import ListSongOfAlbum from "../../pages/ListSongOfAlbum/index.jsx";

export const configRouters = [
  {
    element: <AuthLayout/>,
    children: [
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
  {
    element: <UserLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/list-song-of-playlist/:playlistId", /* */
        element: <ListSongOfPlaylist/>,
      },
      {
        path: "/list-song-of-album/:albumId", /* */
        element: <ListSongOfAlbum/>
      },
      {
        path: "/singer-profile/:singerId", /* */
        element: <SingerProfile/>,
      },
      {
        path: "/library",
        element: <Library/>,
      },
      {
        path: "/search-result", /* */
        element: <SearchResult/>,
      },
      {
        path: "/detail-information",
        element: <DetailInfoMation/>,
      },
      {
        path: "/for-singer",
        element: <ForSinger/>,
      },
    ],
  },
];
