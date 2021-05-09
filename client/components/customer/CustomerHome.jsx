// grid of images, 3 columns
// uncomment navCustomer once ready
// replace placeholder with company logos

import React from 'react'
// import NavCustomer from './NavCustomer'
import { Container, Grid, Image } from 'semantic-ui-react'
import NavCustomer from './NavCustomer'

function CustomerHome () {
  return (
    <>
      <div>
        <NavCustomer />
      </div>
      <Container textAlign='justified'>
        <Grid className='card-grid' relaxed columns={3}>
          <Grid.Column>
            <Image className='card' href='#' src='/images/placeholder.png' alt='Image1' />
          </Grid.Column>
          <Grid.Column>
            <Image className='card' href='#' src='/images/placeholder.png' alt='Image2' />
          </Grid.Column>
          <Grid.Column>
            <Image className='card' href='#' src='/images/placeholder.png' alt='Image1' />
          </Grid.Column>
          <Grid.Column>
            <Image className='card' href='#' src='/images/placeholder.png' alt='Image1' />
          </Grid.Column>
          <Grid.Column>
            <Image className='card' href='#' src='/images/placeholder.png' alt='Image1' />
          </Grid.Column>
          <Grid.Column>
            <Image className='card' href='#' src='/images/placeholder.png' alt='Image1' />
          </Grid.Column>
          <Grid.Column>
            <Image className='card' href='#' src='/images/placeholder.png' alt='Image1' />
          </Grid.Column>
          <Grid.Column>
            <Image className='card' href='#' src='/images/placeholder.png' alt='Image1' />
          </Grid.Column>
          <Grid.Column>
            <Image className='card' href='#' src='/images/placeholder.png' alt='Image1' />
          </Grid.Column>
          <Grid.Column>
            <Image className='card' href='#' src='/images/placeholder.png' alt='Image1' />
          </Grid.Column>
          <Grid.Column>
            <Image className='card' href='#' src='/images/placeholder.png' alt='Image1' />
          </Grid.Column>
          <Grid.Column>
            <Image className='card' href='#' src='/images/placeholder.png' alt='Image1' />
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default CustomerHome
