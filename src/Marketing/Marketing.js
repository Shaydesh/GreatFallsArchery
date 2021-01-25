import React from 'react';
import banner from '../Marketing/banner5.jpg';
import photoGallery from '../Marketing/gallerybutton.jpg';
import keeper from '../Marketing/keeper.gif';
import '../Marketing/Marketing.css';

const Marketing = () => {
  return (
    <div className="container marketing">

      <div className="row">
        <div className="col-lg-4">
          <img className="bd-placeholder-img" src={keeper} alt="HTML5 Logo" width="140" height="140" />
          {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}

          <h2>Dues Are Due !!!</h2>
          <p>Club policy and decisions are made by those who care enough to attend and participate in the monthly membership meetings "Please Attend"</p>
          <p><button className="btn btn-secondary" href="#">View details &raquo;</button></p>
        </div>
        <div className="col-lg-4">
          {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
          <img className="bd-placeholder-img" src={banner} alt="HTML5 Logo" width="140" height="140" />
          <h2>Club Information</h2>
          <p>We can be reached by mail at the following address</p>
          <p><address>Great Falls Archery Club PO Box 3653 Great Falls, MT. 59403 </address> E-mail: President@GFAC </p>
          <p><button className="btn btn-secondary" href="#">View details &raquo;</button></p>
        </div>
        <div className="col-lg-4">
          <img className="bd-placeholder-img" src={photoGallery} alt="HTML5 Logo" width="140" height="140" />
          {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}

          <h2>Photo Gallery</h2>
          <p>Great Falls Archery Club Photos.</p>
          <p><button className="btn btn-secondary" href="#">View details &raquo;</button></p>
        </div>
      </div>
    </div>

  );
};

export default Marketing;
