import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const defaultProps = {
    center: {
      lat: -31.197,
      lng: 150.744
    },
    zoom: 11
  };

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="bradcam_area breadcam_bg_2" style={{ marginTop: '70px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flexGrow: '1', textAlign: 'center' }}>
                    <h3>Send Email</h3>
                </div>
                <div>
                    <h3 style={{ marginTop: '0px' }}>Contact Us</h3>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Saya telah menghapus elemen h2 dengan kelas contact-title */}
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                noValidate="novalidate">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="name"
                        id="name"
                        type="text"
                        onFocus={(event) => (event.target.placeholder = '')}
                        onBlur={(event) => (event.target.placeholder = 'Enter your name')}
                        placeholder="Enter your name"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="email"
                        id="email"
                        type="email"
                        onFocus={(event) => (event.target.placeholder = '')}
                        onBlur={(event) => (event.target.placeholder = 'Enter email address')}
                        placeholder="Email"/>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        onFocus={(event) => (event.target.placeholder = '')}
                        onBlur={(event) => (event.target.placeholder = 'Enter Subject')}
                        placeholder="Enter Subject"/>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        onFocus={(event) => (event.target.placeholder = '')}
                        onBlur={(event) => (event.target.placeholder = 'Enter Message')}
                        placeholder=" Pesan"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="button button-contactForm boxed-btn">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-home"></i></span>
                <div className="media-body">
                  <p style={{ width: '400px', textAlign: 'justify' }}>Butuh bantuan? Jangan ragu untuk menghubungi kami! Tim kami siap membantu Anda dengan pertanyaan, saran, atau masukan apa pun yang Anda miliki.</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-home"></i></span>
                <div className="media-body">
                  <h6 style={{ display: 'flex', alignItems: 'center' }}><span style={{ marginRight: '5px' }}>Alamat:</span> Jl. Blablabla</h6>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                <div className="media-body">
                  <h6 style={{ display: 'flex', alignItems: 'center' }}><span style={{ marginRight: '5px' }}>WhatsApp:</span> 085678910112</h6>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-email"></i></span>
                <div className="media-body">
                  <h6 style={{ display: 'flex', alignItems: 'center' }}><span style={{ marginRight: '5px' }}>Email:</span> javahotel03@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-sm-block mb-5 pb-4">
            <div id="map" style={{ height: '480px', position: 'relative', overflow: 'hidden' }}>
              <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}>
                <AnyReactComponent
                  lat={-31.197}
                  lng={150.744}
                  text="My Marker"/>
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
