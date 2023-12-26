import React, { useState } from 'react';
import Navbar from '../components/navbar';
import AddClass from '../components/addClassButton';
import InsClassCard from '../components/insClassCard';
import InsClasses from '../components/insClasses';

function InsHome() {
  return (
    <div>
      <Navbar />
<center>
  <br></br>
      <AddClass />
      <InsClassCard/>
      {/* <InsClasses /> */}
    </center>
    </div>
  );
}

export default InsHome;
//