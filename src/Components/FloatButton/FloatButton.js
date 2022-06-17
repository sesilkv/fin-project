import React from 'react';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
import {IoIosAdd} from 'react-icons/io';

import './float.css';

const FloatButton = () => {
  return (
    <div className='container text-center'>
        <button type="button" className='float'><IoIosAdd />Jual</button>
        {/* <Fab className='float' variant='extended'>
            <AddIcon />
            <p className='p-1 m-2 text-lowercase'>Jual</p>
        </Fab> */}
    </div>
  )
}

export default FloatButton