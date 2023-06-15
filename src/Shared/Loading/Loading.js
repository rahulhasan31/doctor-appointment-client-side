import React from 'react';
import { Dna } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
  <div className=" inline-block w-8 h-8  " role="status">
  <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
  </div>
</div>
        </div>
    );
};

export default Loading;