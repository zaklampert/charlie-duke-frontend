import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { FullPageSlide, FullPageSection } from '../layouts';

const Shop = ({ page, products }) => (
  <FullPageSection>
    <FullPageSlide theme="dark" backgroundPosition="76% center">
      <div className={css(styles.products)}>
        <h2>{page.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
        <div className={css(styles.row)}>
          {products.map(product => (
            <div key={product.id} className={css(styles.thirds)}>
              <div className={css(styles.productInner)}>
                <div
                  data-image={product.image}
                  data-intense={true}
                  className={css(styles.productImage)}
                  style={{ backgroundImage: `url(${product.image})` }}
                  onClick={() => {
                    window.location.href =
                      `https://shop.charlieduke.com/cart/add?id=${product.variantId}`;
                  }}
                />
                <div className={css(styles.productDetails)}>
                  <div
                    style={{ fontSize: '22px' }}
                    dangerouslySetInnerHTML={{ __html: product.title }}
                  />
                  <div dangerouslySetInnerHTML={{ __html: product.description }} />
                  <div style={{ color: '#666' }}>{product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FullPageSlide>
  </FullPageSection>
);

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  thirds: {
    width: '32%',
    '@media(max-width: 960px)': { width: '50%' },
    '@media (max-width: 670px)': { width: '100%' },
  },
  productInner: {
    padding: '5px 12px',
    textAlign: 'center',
  },
  productImage: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer',
    paddingBottom: '100%',
    width: '100%',
    margin: '0 auto',
    display: 'block',
  },
  productDetails: {
    padding: '22px 5px',
    maxWidth: '100%',
    margin: '0 auto',
  },
  products: {
    maxWidth: '1440px',
    margin: '0 auto',
    clear: 'both',
    padding: '15px 100px',
    '@media (max-width: 670px)': { padding: '22px 22px 100px 22px' },
  },
  title: {
    fontSize: '78px',
    textAlign: 'center',
    fontFamily: '"futura-pt-bold", sans-serif',
  },
});

const mapStateToProps = state => {
  const { products } = state;
  return { products };
};

export default connect(mapStateToProps)(Shop);
