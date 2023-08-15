import React from 'react'
import { useMatch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import FooterBlog from '../FooterBlog/FooterBlog';


function FooterRouter() {
    const isBlogPage = useMatch('/blog');
const isContactUsPage = useMatch('/contact');
  return (
    <>
    { isBlogPage ? <FooterBlog/> : isContactUsPage ? "" : <Footer/>}
    </>
  )
}

export default FooterRouter