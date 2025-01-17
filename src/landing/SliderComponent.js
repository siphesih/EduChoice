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
              <h1
                style={{
                  fontSize: '4rem',
                  color: 'white',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                Stay updated <br />
                <span
                  style={{
                    color: 'white',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  with EduFlow <br />
                </span>
                <span
                  style={{
                    color: 'white',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  all in one place!
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
