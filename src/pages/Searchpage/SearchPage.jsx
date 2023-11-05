import React, { useState } from 'react';
import { useEffect } from 'react';
import { advanceSeach } from '../../actions/Anime';
import TablePagination from '@mui/material/TablePagination';
import  CardBody  from "../../Components/CardBody/CardBody.jsx"
import './SearchPage.css'; 
import Loader from '../../Components/Loader/Loader.jsx';
function SearchPage() {
  const [searchInput, setSearchInput] = useState('');
  const [animeSearch, setanimeSearch] = useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

useEffect(() => {
   advanceSeach(searchInput).then((data)=>{
    console.log(data.results)
    setanimeSearch(data.results)
   })
    return () => {
        
    };
}, [searchInput]);

  const handleSearchInputChange = (event) => {
    const newValue = event.target.value;
    setSearchInput(newValue);
  };



  return (
    <div className="searchPage">
    {animeSearch !== undefined ? (
      <div>
        <div className="search-container">
          <h1>Search Your Anime</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchInputChange}
              className="searchInput"
            />
        
          </div>
        </div>
        <div className="row">
          {animeSearch
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            .map((episode, i) => {
              return <CardBody d={episode} index={i} key={i} size={2} />;
            })}
        </div>
        <TablePagination
          component="div"
          count={animeSearch ? animeSearch.length : 0}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    ) : (
      <Loader />
    )}
  </div>
  );
}

export default SearchPage;
