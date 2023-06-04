function ImgProductsDetails({img,nombre}) {
    return ( 
        <>
          <img className="imgPageDetails" src={img} alt={nombre} />
        </>
     );
}

export default ImgProductsDetails;