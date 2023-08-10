import React from 'react';
import SectionTitle from './SectionTitle';
import WorkItem from './WorkItem'
function Works (){
    return(
        <div className='py-12'>
     <SectionTitle id='Works'> Recent Works</SectionTitle>
      <div>
        <WorkItem></WorkItem>
      </div>
        </div>
    )
}
export default Works