import React from 'react';
import { FullPageSlide, FullPageSection } from '../layouts';
import { StyleSheet, css } from 'aphrodite';
import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import {buttons} from '../layouts/SectionIntro';

const currencyToNumber = (currency) => {
  return Number(currency.replace(/[^0-9\.]+/g,""));
};

const onToken = (token) => {
  fetch('/save-stripe-token', {
   method: 'POST',
   body: JSON.stringify(token),
   }).then(response => {
     response.json().then(data => {
       alert(`We are in business, ${data.email}`);
     });
   });
}
const STRIPE_KEY = "pk_H4AX6EXvu8eDxQGFZXKHrT3JWGdNv";
const stripeProps = {
  stripeKey: STRIPE_KEY,
  token: onToken,
  name: "Charlie Duke"
}

const Shop = ({page, products}) => (
  <FullPageSection>
    <FullPageSlide
      theme="dark"
      backgroundPosition="76% center"
    >
      <div className={css(styles.products)}>
        <h2>{page.title}</h2>
        <div dangerouslySetInnerHTML={{__html: page.content}} />
        <div className={css(styles.row)}>
        {products.map(product => {
          return (
            <div key={product.id} className={css(styles.thirds)}>
              <div className={css(styles.product)}>
              <img src={product.image} style={{maxWidth: '100%'}}/><br/>
              <div style={{fontSize: '33px'}} dangerouslySetInnerHTML={{__html: product.title}}/>
              <StripeCheckout
                {...stripeProps}
                description={product.title}
                amount={(currencyToNumber(product.price) * 100) + (currencyToNumber(product.domesticShipping) * 100)}
                currency="USD"
                panelLabel={`${product.price} + ${product.domesticShipping} shipping`}
                image={product.image}
                >
              <div className={css(buttons.button)}>{product.price} + Shipping</div>
              </StripeCheckout>
              <div dangerouslySetInnerHTML={{__html: product.description}}/>
              </div>
            </div>
          )
        })}
        </div>
      </div>

    </FullPageSlide>
  </FullPageSection>
)

const styles = StyleSheet.create({
  row: {
    textAlign: 'center',
    '::after':{
      clear: 'both',
      content: '',
      display: 'table',
    }
  },
  thirds: {
    width: '33%',
    float: 'left',
    '@media(max-width: 760px)': {
      width: '100%',
    }
  },
  product: {
    padding: '5px 12px',
  },
  products: {
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
