import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {

  const navigateByUrl=useNavigate()

  return (
    <>
      <Row ClassName="mt-5 align-items-center justify-contentt-between w-100" >
        <Col></Col>
        <Col lg={5}>
            <h1 style={{fontSize:'40px'}}>Welcome to <span className='text-warning'>Media Player</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis mollitia facilis assumenda cupiditate sit non illo fugiat labore dolorum explicabo, laborum aspernatur autem soluta voluptate sapiente placeat reprehenderit animi.</p>
            <button onClick={()=>navigateByUrl('./home')} className='btn btn-info mt-4' >Get Started</button>
        </Col>
        <Col lg={5}>
            <img src="https://i.pinimg.com/originals/ec/8d/da/ec8dda885688ef35203135cc247e2259.gif" alt="" width={480} height={400} />
        </Col>
        <Col></Col>
      </Row>

      <div className="container mt-5 mb-5 align-items-center justify-contentt-center flex-column">
        <h3>Features</h3>
        <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100' >

        <Card style={{ width: '18rem' }} className='p-4 bg-info' >
      <Card.Img variant="top" height={'300px'} width={'300px'}  src="https://i.pinimg.com/originals/ff/62/08/ff620854b85ca2824e8e3b6b3e5d079e.gif" />
      <Card.Body>
        <Card.Title className='text-primary' >Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='p-4 bg-info' >
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ff/62/08/ff620854b85ca2824e8e3b6b3e5d079e.gif" />
      <Card.Body>
        <Card.Title className='text-primary' >Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='p-4 bg-info' >
      <Card.Img variant="top" height={'300px'} width={'300px'}  src="https://i.pinimg.com/originals/ff/62/08/ff620854b85ca2824e8e3b6b3e5d079e.gif" />
      <Card.Body>
        <Card.Title className='text-primary' >Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

        </div>

      </div>


      <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
          <div className="col-lg-5">
            <h4 className='text-warning'>Simple,Powerful & Fast</h4>
            <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, unde nemo voluptates aspernatur earum praesentium corporis cupiditate a illum. Sapiente, dignissimos quod. Animi, dolor. Nemo cum magni voluptatibus ratione omnis.</h6>

            <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, unde nemo voluptates aspernatur earum praesentium corporis cupiditate a illum. Sapiente, dignissimos quod. Animi, dolor. Nemo cum magni voluptatibus ratione omnis.</h6>

            <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, unde nemo voluptates aspernatur earum praesentium corporis cupiditate a illum. Sapiente, dignissimos quod. Animi, dolor. Nemo cum magni voluptatibus ratione omnis.</h6>
          </div>
          <div className="video col-lg-5">
          <iframe width="100%" height="300" src="https://www.youtube.com/embed/ccpVpcP8m44" title="Best of Sushin Shyam 2023 | Audio Jukebox | Hits of Sushin Shyam | OST" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
          </div>
      </div>
    </>
  )
}

export default LandingPage