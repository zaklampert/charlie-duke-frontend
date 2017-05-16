import React from 'react';
import { FullPageSlide, FullPageSection } from '../layouts';
import { StyleSheet, css } from 'aphrodite';
import {connect} from 'react-redux';

import {buttons} from '../layouts/SectionIntro';

const Shop = ({page, products}) => (
  <FullPageSection>
    <FullPageSlide
      theme="dark"
      backgroundPosition="76% center"
    >
      <div className={css(styles.defaultLayout)}>
        The shop
        {products.map(product => {
          return (
            <div key={product.id}>
              <span dangerouslySetInnerHTML={{__html: product.title}}/> - {product.price}
              <div dangerouslySetInnerHTML={{__html: product.description}}/>
              <img src={product.image}/>
            </div>
          )
        })}
      </div>

    </FullPageSlide>
  </FullPageSection>
)

const styles = StyleSheet.create({
  defaultLayout: {
    maxWidth: '1440px',
    margin: '0 auto',
    clear: 'both',
    padding: '15px 100px',
    '@media (max-width: 670px)':{
      padding: '22px 22px 100px 22px',
    }
  },
  title: {
    fontSize: '78px',
    textAlign: 'center',
    fontFamily: '"futura-pt-bold", sans-serif',
  }
})

const mapStateToProps = state => {
  const { products } = state

  return {
    products
  }
}

export default connect(mapStateToProps)(Shop)
