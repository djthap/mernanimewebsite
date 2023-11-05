import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Loading from './Components/Loader'
import Dashboard from './pages/Dashboard/Dashboard';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import StreamingPage from './pages/StreamingPage/StreamingPage';
import SearchPage from './pages/Searchpage/SearchPage';
const FirstPage = React.lazy(() => import("./pages/mainPage/FirstPage"));

export default function RouteList() {

  return (
   <Suspense fallback={<Loading />} >
    <Routes>
        <Route exact path='/' element={<Dashboard Child={<FirstPage/>}/>} />
        <Route path="/details/:slug" element={<Dashboard Child={<DetailsPage/>}/>}  />
        <Route path="/watch/:slug" element={<Dashboard Child={<StreamingPage/>}/>}  />
        <Route path="/search" element={<Dashboard Child={<SearchPage/>}/>}  />
    </Routes>
   </Suspense>
  )
}
