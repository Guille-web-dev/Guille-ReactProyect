function ImgProductsDetails({img,nombre}) {
    return ( 
        <div >
          <img className="imgPageDetails" src={img} alt={nombre} />
        </div>
     );
}

export default ImgProductsDetails;