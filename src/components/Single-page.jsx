
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SinglePage() {
  const { productId } = useParams(); // Fetch productId from URL params
  const [product, setProduct] = useState(null); // State to hold product data

  useEffect(() => {
    // Fetch product data from API using axios
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data); // Update product state with fetched data
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [productId]); // Dependency array to re-run effect when productId changes

  // Render loading state while fetching data
  if (!product) {
    return <p>Loading...</p>;
  }

  // Once data is loaded, render the product details
  return (
    <>
      <div className="container">
        <p className="title1">
        {product.title}
        </p>
        <p className="text">
        {product.category}
        </p>
        <p className='titlel text-center'>
         price:${product.price}
        </p>

        {/* Example usage of fetched product data */}
        <div className="imge-dev2 mt-5">
          <img src={product.image} alt="product"/>
        </div>
        <hr className="hr2"/>



        <div className="row mt-5">
          <div className="col-sm-1 d-flex justify-content-lg-end">
            <img src="../img/Mask Group.png" className="rounded-circle" alt=""/>
          </div>
          <div className="col-sm-3 user_content">
            <h5>Mika MAtikainen</h5>
            <p>Apr 15, 2020 · 4 min read</p>
          </div>
          <div className="col-sm-6"></div>
          <div className="col-sm-2 row">
            <div className="col-sm-6">
              <Link to="#"><i className="fa-brands fa-facebook icon_parent"></i></Link>
            </div>
            <div className="col-sm-6">
              <Link to="#"><i className="fa-brands fa-twitter icon_parent"></i></Link>
            </div>
          </div>
        </div>

        <div className="single-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.
          </p>
          <p className="single_headline">Next on the pipeline</p>
          <p className="single-text mt-4">
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>

        <div className="imge-dev2 mt-5">
          <img src="../img/photo.png" alt=""/>
        </div>

        <p className="text mt-4">
          Image caption centered this way and I’ll make this a bit longer
          <br/> to indicate the amount of line-height.
        </p>

        <p className="single-text">
          Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
        </p>

        <p className="single_headline">A list looks like this:</p>
        <ul className="ml-3">
          <li className="mt-4">First item in the list</li>
          <li className="mt-4">
            Second item in the list lorem ipsum dolor sit amet nunc felis<br/>
            dolor lorem ipsum sit amet
          </li>
          <li className="mt-4">Third item in the list</li>
        </ul>

        <p className="single-text">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
        </p>

        <p className="single_headline2">Thanks for reading, <br/>Mika</p>

        <div className="row row_icon">
          <div className="col-md-6">
            <Link to="#"><img src="../img/Group 38.png  " alt=""/></Link>
          </div>
          <div className="col-md-6">
            <Link to="#"><img src=" ../img/Group 37.png " alt=""/></Link>
          </div>
        </div>

        <p className="single_headline2 mt-5">Tags: product design, culture</p>
        <hr className="boot_c"/>

        <div className="row mt-5">
          <div className="d-flex justify-content-lg-end">
            <img src=" ../img/Mask Group.png " className="rounded-circle" alt=""/>
          </div>
          <p className="bootom_heading">
            <span>Mika Matikainen </span>
            is a Design Founder & Advisor, Berlin School of <br/>
            Creative Leadership Executive MBA participant, Zippie advisor, Wolt<br/>
            co-founder, and Nordic Rose stakeholder.
          </p>
        </div>

      </div>

      <div className="hr_parent">
        <div className="cover d-flex justify-content-center">
          <img src=" ../img/Group 10.png " alt=""/>
        </div>
        <hr/>
      </div>


      <div className="container">
        <div className="cards cards_2">
          <h1 className="text-center">All articles</h1>
          <div className="row justify-content-center">
            <Link className="card col-md-4 mt-5" to="single.html">
              <img src=" ../img/article-06.png" className="card-img-top card_img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Connecting artificial intelligence with digital product design</h5>
              </div>
            </Link>
            <Link className="card col-md-4 mt-5" to="single.html">
              <img src="../img/article-13.png" className="card-img-top card_img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Hello world, or, in other words, why this blog exists</h5>
              </div>
            </Link>
            <Link className="card card_sss col-md-4 mt-5" to="single.html">
              <img src="   ../img/Rectangle 12.png " className="card-img-top card_img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Here are some things you should know regarding how we work</h5>
              </div>
            </Link>
            <Link className="card col-md-4 mt-5" to="single.html">
              <img src="../img/Rectangle 37.png " className="card-img-top card_img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">A few words about this blog platform, Ghost, and how this site was made</h5>
              </div>
            </Link>
            <Link className="card col-md-4 mt-5" to="single.html">
              <img src=" ../img/Rectangle 39.png " className="card-img-top card_img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better</h5>
              </div>
            </Link>
            <Link className="card col-md-4 mt-5" to="single.html">
              <img src=" ../img/Rectangle 38.png"   className="card-img-top card_img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">How modern remote working tools get along with Old School Cowboy's methods</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="form_footer">
        <div>
          <h1>Sign up for the newsletter</h1>
          <p>
            If you want relevant updates occasionally, sign up for the<br/> private newsletter. Your email is never shared.
          </p>
          <div className="form_input">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-dark my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePage;





















/**

function SinglePage() {
    const{productId}=useParams
const[product,setProduct]=useState(null)

useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${productId}`).then(response=>{
        console.log(response)
    })
},[])

  return (
    <>
      <div className="container">
        <p className="title1">
          A few words about this blog platform, Ghost, and how this site was made
        </p>
        <p className="text">
          Why Ghost (& Figma) instead of Medium,<br/> WordPress or other options?
        </p>

        <div className="imge-dev2 mt-5">
          <img src="../img/article-02.png" alt="image"/>
        </div>
        <hr className="hr2"/>

        <div className="row mt-5">
          <div className="col-sm-1 d-flex justify-content-lg-end">
            <img src="img/Mask Group.png" className="rounded-circle" alt="photo"/>
          </div>
          <div className="col-sm-3 user_content">
            <h5>Mika MAtikainen</h5>
            <p>Apr 15, 2020 · 4 min read</p>
          </div>
          <div className="col-sm-6"></div>
          <div className="col-sm-2 row">
            <div className="col-sm-6">
              <NavLink href="#"><i className="fa-brands fa-facebook icon_parent"></i></NavLink>
            </div>
            <div className="col-sm-6">
              <NavLink href="#"><i className="fa-brands fa-twitter icon_parent"></i></NavLink>
            </div>
          </div>
        </div>

        <div className="single-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.
          </p>
          <p className="single_headline">Next on the pipeline</p>
          <p className="single-text mt-4">
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>

        <div className="imge-dev2 mt-5">
          <img src="img/photo.png" alt="image"/>
        </div>

        <p className="text mt-4">
          Image caption centered this way and I’ll make this a bit longer
          <br/> to indicate the amount of line-height.
        </p>

        <p className="single-text">
          Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
        </p>

        <p className="single_headline">A list looks like this:</p>
        <ul className="ml-3">
          <li className="mt-4">First item in the list</li>
          <li className="mt-4">
            Second item in the list lorem ipsum dolor sit amet nunc felis<br/>
            dolor lorem ipsum sit amet
          </li>
          <li className="mt-4">Third item in the list</li>
        </ul>

        <p className="single-text">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
        </p>

        <p className="single_headline2">Thanks for reading, <br/>Mika</p>

        <div className="row row_icon">
          <div className="col-md-6">
            <NavLink href="#"><img src="img/Group 38.png" alt=""/></NavLink>
          </div>
          <div className="col-md-6">
            <NavLink href="#"><img src="img/Group 37.png" alt=""/>/</NavLink>
          </div>
        </div>

        <p className="single_headline2 mt-5">Tags: product design, culture</p>
        <hr className="boot_c"/>

        <div className="row mt-5">
          <div className="d-flex justify-content-lg-end">
            <img src="img/Mask Group.png" className="rounded-circle" alt="photo"/>
          </div>
          <p className="bootom_heading">
            <span>Mika Matikainen </span>
            is a Design Founder & Advisor, Berlin School of <br/>
            Creative Leadership Executive MBA participant, Zippie advisor, Wolt<br/>
            co-founder, and Nordic Rose stakeholder.
          </p>
        </div>

      </div>

      <div className="hr_parent">
        <div className="cover d-flex justify-content-center">
          <img src="img/Group 10.png" alt=""/>
        </div>
        <hr/>
      </div>


      <div className="container">
        <div className="cards cards_2">
          <h1 className="text-center">All articles</h1>
          <div className="row justify-content-center">
            <NavLink className="card col-md-4 mt-5" href="single.html">
              <img src="img/Rectangle 13.png" className="card-img-top card_img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Connecting artificial intelligence with digital product design</h5>
              </div>
            </NavLink>
            <NavLink className="card col-md-4 mt-5" href="single.html">
              <img src="img/Rectangle 13 (1).png" className="card-img-top card_img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Hello world, or, in other words, why this blog exists</h5>
              </div>
            </NavLink>
            <NavLink className="card card_sss col-md-4 mt-5" href="single.html">
              <img src="img/Rectangle 12.png" className="card-img-top card_img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Here are some things you should know regarding how we work</h5>
              </div>
            </NavLink>
            <NavLink className="card col-md-4 mt-5" href="single.html">
              <img src="img/Rectangle 37.png" className="card-img-top card_img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">A few words about this blog platform, Ghost, and how this site was made</h5>
              </div>
            </NavLink>
            <NavLink className="card col-md-4 mt-5" href="single.html">
              <img src="img/Rectangle 39.png" className="card-img-top card_img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better</h5>
              </div>
            </NavLink>
            <NavLink className="card col-md-4 mt-5" href="single.html">
              <img src="img/Rectangle 38.png" className="card-img-top card_img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">How modern remote working tools get along with Old School Cowboy's methods</h5>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="form_footer">
        <div>
          <h1>Sign up for the newsletter</h1>
          <p>
            If you want relevant updates occasionally, sign up for the<br/> private newsletter. Your email is never shared.
          </p>
          <div className="form_input">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-dark my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePage;

 */