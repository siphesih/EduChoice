import React from 'react';


const SliderComponent = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div
              className="text"
              style={{
                color: 'white',
                paddingTop: '50px', // Pushes the text down
              }}
            >
              <h1>
              Transform the way you learn—download notes, <span style={{ color: 'white' }}>stay updated with announcements,  </span> and prepare with assessments and practice papers,  <span style={{ color: 'white' }}>all in one place!</span>
              </h1>
              <p style={{ color: 'white' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.
              </p>
    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
