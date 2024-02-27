import React from 'react';
import TablePagination from '@mui/material/TablePagination'; // Import the TablePagination component
import Episodes_Body from '../episodesBody/Episodes_Body';
import "./Episodes.css"
import Loader from '../Loader/Loader';

export default function Episodes({ animeDetails }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const episodes = animeDetails?.episodes || [];

  return (
    <div className="page-container">
    {animeDetails ? (
      <div>
        <h3 className="page-header">Episodes</h3>
        <div className="row">
          {episodes
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            .map((episode, i) => {
              return <Episodes_Body d={episode} index={i} key={i} size={2} />;
            })}
        </div>
        <TablePagination
          component="div"
          count={episodes.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      ) : (
        <Loader/>
      )}
    </div>
  );
}
