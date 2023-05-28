import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

function Paging({ setPageHandler, postTotal }) {
  return (
    <StyledReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={setPageHandler}
      pageRangeDisplayed={5}
      previousLabel="<"
      pageCount={Math.ceil(postTotal / 10)}
      activeClassName="active"
    />
  );
}
const StyledReactPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  display: flex;
  font-size: 20px;
  a {
    margin: 5px;
    cursor: pointer;
  }
`;
export default Paging;
