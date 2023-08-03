import './App.css';
import React from 'react';
import{
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,

}from "reactstrap";

const tshirts=[
  {
      ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230609/LsJG/6483127cd55b7d0c635cdc79/-473Wx593H-466230217-offwhite-MODEL.jpg",
      Brand:"TOM HIDDLE",
      Model:"Typographic Print Crew-Neck T-Shirt",
      Price:"₹280"
  },

  {
    ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230628/ythN/649b67c6eebac147fc132517/-473Wx593H-465647923-black-MODEL.jpg",
    Brand:"JUMP CUTS",
    Model:"Typographic Print Slim Fit Hooded T-Shirt with Flap Pocket",
    Price:"₹380"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230623/BbG2/649555e6eebac147fcd18547/-473Wx593H-464918983-blue-MODEL.jpg",
  Brand:"EyeBoggler",
  Model:"Colour-Blocked Polo T-shirt",
  Price:"₹182"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20221028/iw7R/635ae593aeb269659c5f0ff2/-473Wx593H-469234393-black-MODEL.jpg",
  Brand:"Buda Jeens Co",
  Model:"Rocky Pigment Print Crew-Neck T-Shirt",
  Price:"₹450"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230717/GVm3/64b54671eebac147fc727ae2/-1117Wx1400H-466364452-grey-MODEL.jpg",
  Brand:"LACOSTE",
  Model:"egular Fit Stretch Cotton Pique Polo T-Shirt with Contrast Collar",
  Price:"₹7000"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230604/o7oU/647b949e42f9e729d721b5b0/-1117Wx1400H-466217940-cream-MODEL.jpg",
  Brand:"THE HOLLANDER",
  Model:"Graphic Print Crew-Neck T-Shirt",
  Price:"₹409"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230629/XtT7/649cd026a9b42d15c91bc64b/-473Wx593H-466083920-navy-MODEL.jpg",
  Brand:"FREESOCIETY",
  Model:"Graphic Print Regular Fit Crew- Neck T-shirt",
  Price:"₹299"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230726/XwOf/64c15b67a9b42d15c9712ad5/-473Wx593H-466388415-white-MODEL.jpg",
  Brand:"PUMA",
  Model:"Slim Fit Polo T-Shirt",
  Price:"₹985"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20221107/GOVE/6368e374aeb269659c74fcf8/-473Wx593H-469234390-black-MODEL.jpg",
  Brand:"BUDA JEENS",
  Model:"Iron Maiden Crew-Neck T-Shirt",
  Price:"₹400"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230516/yRnh/64636a7d42f9e729d78be4cb/-473Wx593H-466118720-white-MODEL.jpg",
  Brand:"ASUK",
  Model:"Striped Crew-Neck T-Shirt",
  Price:"₹269"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230602/aqUa/6479304b42f9e729d70bf6f2/-473Wx593H-461340286-multi-MODEL.jpg",
  Brand:"BULLER",
  Model:"Pack of 3 Graphic Print Crew-Neck T-shirts",
  Price:"₹399"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20221102/5RAG/63629a38f997ddfdbd51eb67/-473Wx593H-469200040-midindigo-MODEL.jpg",
  Brand:"BUDA JEENS CO",
  Model:"Slim Fit Crew-Neck T-Shirt with Welt Pocket",
  Price:"₹550"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230629/CNAX/649ce8d0eebac147fc358272/-473Wx593H-466065623-green-MODEL.jpg",
  Brand:"BULLMER",
  Model:"Graphic Print Regular Fit Crew- Neck T-shirt",
  Price:"₹299"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20221202/fuS9/638a31a3f997ddfdbdb42753/-473Wx593H-441128501-darkblue-MODEL3.jpg",
  Brand:"",
  Model:"Fastdry Active Crew-Neck T-shirt", 
  Price:"₹250"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230629/uD2w/649cdbc6eebac147fc33c5fe/-473Wx593H-466038716-white-MODEL.jpg",
  Brand:"EYEBOGGLER",
  Model:"Checked Polo T-Shirt",
  Price:"₹299"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230609/zPsy/648317b142f9e729d7341554/-473Wx593H-466247989-black-MODEL.jpg",
  Brand:"TOM HIDDLE",
  Model:"Graphic Print Loose Fit Round-Neck T-Shirt",
  Price:"₹280"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20211002/BZ8K/615833bdf997ddce89ef5ce1/-473Wx593H-410294162-1510-MODEL.jpg",
  Brand:"ARMANI EXCHANGE",
  Model:"Typographic Print Crew-Neck T-shirt",
  Price:"₹2,999"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230629/jaJx/649cf1e3a9b42d15c920449b/-473Wx593H-466086439-black-MODEL.jpg",
  Brand:"STI",
  Model:"Typographic Printed Crew-Neck T-Shirt",
  Price:"₹180"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230629/8N58/649cbf07eebac147fc2f8343/-473Wx593H-465985196-blue-MODEL.jpg",
  Brand:"STELLERS",
  Model:"Polo T-Shirt with Embroidered Logo",
  Price:"₹700"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230731/ektJ/64c7da9eeebac147fc97c680/-473Wx593H-469523852-black-MODEL.jpg",
  Brand:"TOMY HILINDER",
  Model:"Brand Print Slim Fit Crew-Neck T-Shirt",
  Price:"₹2,599"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230629/2kMm/649cbafbeebac147fc2ee61f/-473Wx593H-465974723-blue-MODEL.jpg",
  Brand:"RISS",
  Model:"Polo T-Shirt with Short Sleeves",
  Price:"₹480"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20220824/r8pX/630522e0aeb269176196f7bf/-473Wx593H-463616374-green-MODEL.jpg",
  Brand:"DIFFERENCE OF OPINION",
  Model:"Crew-Neck Oversized T-shirt",
  Price:"₹499"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230710/y3SZ/64ac0b43eebac147fc6065b4/-473Wx593H-466346482-white-MODEL.jpg",
  Brand:"TOM HIDDLE",
  Model:"Graphic Print Loose Fit Crew-Neck T-Shirt",
  Price:"₹290"
},

{
  ImagePath:"https://assets.ajio.com/medias/sys_master/root/20230623/Ew0G/6495642ceebac147fcd3188e/-473Wx593H-464979926-grey-MODEL.jpg",
  Brand:"STELLERS",
  Model:"Polo T-shirt with Brand Print",
  Price:"₹700"
},

]



function App() {
  return (
    <div>
      <Container>
        <Row>
          {tshirts.map((ajio)=>{
          return(
            <Col className="col-4">
            <Card className="my-4 mx-2">                      
            <img
            height={400}
            width={400}
            alt="Ajio tshirts for men"
            src={ajio.ImagePath} />
             
          <CardBody className="text-en center-text">
             <CardTitle tag="h4">{ajio.Brand}</CardTitle>     
                <CardSubtitle>{ajio.Model}</CardSubtitle>                            
                  <CardText style={{color : 'green'}}>
                    {ajio.Price}</CardText>
                    <button type="button" class="btn btn-primary">
                      Buy
                    </button>
          </CardBody>   
       </Card>
       </Col>
          )
       })}
        </Row>
      </Container>
    </div>
  )
}

export default App;


