import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
        <MDBFooter  className='text-center text-lg-start text-muted'>
     

       <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4' style={{color:'blueviolet'}}>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:'blueviolet'}}>
                <MDBIcon icon="video" className="me-3" />
                Video Player
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi natus doloribus consequuntur quia deserunt quam repudiandae optio obcaecati exercitationem, beatae ipsum numquam eaque rem animi. At illum quidem sit esse.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:'blueviolet'}} >Links</h6>              
                <p>
                <Link to={'/'} style={{color:'white',textDecoration:'none'}}>Landing Page
                </Link>
                </p>
              <p>
              <Link to={'/home'} style={{color:'white',textDecoration:'none'}}>Home Page
                </Link>
              </p>
                <p>
                <Link to={'/watchhistory'} style={{color:'white',textDecoration:'none'}}>Watch History
                </Link>
                </p>              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:'blueviolet'}}>Guides</h6>
              <p>
              <Link to={'https://react.dev/'} style={{color:'white',textDecoration:'none'}}>React
                </Link>
              </p>
              <p>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{color:'white',textDecoration:'none'}}>React Bootstrap
                </Link>
              </p>
              <p>
              <Link to={'https://bootswatch.com/'} style={{color:'white',textDecoration:'none'}}>Bootswatch
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:'blueviolet'}}>Contact Us</h6>

              <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>

              <MDBCol md='7' start>
                <MDBInput contrast type='email' className='mb-4' placeholder='Enter Your Email ID'  />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4' style={{backgroundColor:'blueviolet'}}>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

              <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Media Player.Built with React
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer