import React from 'react';
import { ColorRing } from  'react-loader-spinner'




const Loader = () => {
    return (
        <div style={{height: "inherit"}} className='w-100 bg-dark d-flex justify-content-center align-content-center align-items-center'>
        <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['red', 'red', 'red', 'red', 'red']}
/>
        </div>
    );
}

export default Loader;
