import ProductListSec from '@/components/common/ProductListSec';
import DressStyle from '@/components/homepage/DressStyle';
import Header from '@/components/homepage/Header';
import Reviews from '@/components/homepage/Reviews';
import { Product } from '@/types/product.types';
import { Review } from '@/types/review.types';

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: 'T-shirt with Tape Details',
    srcUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop'],
    price: 1200,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    category: 't-shirts',
    colors: ['Black', 'White', 'Green'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    style: 'casual',
  },
  {
    id: 2,
    title: 'Skinny Fit Jacket',
    srcUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop'],
    price: 2600,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
    category: 'hoodie',
    colors: ['Black', 'Blue'],
    sizes: ['Medium', 'Large', 'X-Large'],
    style: 'casual',
  },
  {
    id: 3,
    title: 'Checkered Shirt',
    srcUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop'],
    price: 1800,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    category: 'shirts',
    colors: ['Red', 'Blue', 'White'],
    sizes: ['Small', 'Medium', 'Large'],
    style: 'formal',
  },
  {
    id: 4,
    title: 'Sleeve Striped T-shirt',
    srcUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop'],
    price: 1600,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
    category: 't-shirts',
    colors: ['Orange', 'White'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    style: 'casual',
  },
  {
    id: 5,
    title: 'Classic White T-shirt',
    srcUrl: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=600&fit=crop'],
    price: 950,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.2,
    category: 't-shirts',
    colors: ['White', 'Black', 'Gray'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large', 'XX-Large'],
    style: 'casual',
  },
  {
    id: 6,
    title: 'Denim Jacket',
    srcUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=600&fit=crop'],
    price: 2800,
    discount: {
      amount: 0,
      percentage: 15,
    },
    rating: 4.7,
    category: 'hoodie',
    colors: ['Blue', 'Black'],
    sizes: ['Medium', 'Large', 'X-Large'],
    style: 'casual',
  },
  {
    id: 7,
    title: 'Formal Dress Shirt',
    srcUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=600&fit=crop'],
    price: 1950,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.6,
    category: 'shirts',
    colors: ['White', 'Blue', 'Pink'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    style: 'formal',
  },
];

export const topSellingData: Product[] = [
  {
    id: 8,
    title: 'Graphic Print T-shirt',
    srcUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=600&fit=crop'],
    price: 1350,
    discount: {
      amount: 0,
      percentage: 25,
    },
    rating: 4.3,
    category: 't-shirts',
    colors: ['Black', 'White', 'Red'],
    sizes: ['Small', 'Medium', 'Large'],
    style: 'casual',
  },
  {
    id: 9,
    title: 'Vertical Striped Shirt',
    srcUrl: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&h=600&fit=crop'],
    price: 2320,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
    category: 'shirts',
    colors: ['Green', 'White', 'Blue'],
    sizes: ['Medium', 'Large', 'X-Large'],
    style: 'formal',
  },
  {
    id: 10,
    title: 'Courage Graphic T-shirt',
    srcUrl: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=600&fit=crop'],
    price: 1450,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
    category: 't-shirts',
    colors: ['Orange', 'Black', 'White'],
    sizes: ['Small', 'Medium', 'Large'],
    style: 'casual',
  },
  {
    id: 11,
    title: 'Loose Fit Bermuda Shorts',
    srcUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=600&fit=crop'],
    price: 800,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
    category: 'shorts',
    colors: ['Blue', 'Black', 'Gray'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    style: 'gym',
  },
  {
    id: 12,
    title: 'Faded Skinny Jeans',
    srcUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop'],
    price: 2100,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    category: 'jeans',
    colors: ['Blue', 'Black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    style: 'casual',
  },
  {
    id: 13,
    title: 'Premium Cotton T-shirt',
    srcUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=600&fit=crop'],
    price: 1100,
    discount: {
      amount: 0,
      percentage: 10,
    },
    rating: 4.8,
    category: 't-shirts',
    colors: ['White', 'Black', 'Navy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    style: 'casual',
  },
  {
    id: 14,
    title: 'Slim Fit Chinos',
    srcUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop'],
    price: 1750,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.4,
    category: 'shorts',
    colors: ['Beige', 'Black', 'Navy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    style: 'formal',
  },
];

export const relatedProductData: Product[] = [
  {
    id: 15,
    title: 'Ripped Jeans',
    srcUrl: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1604176354204-9268737828e4?w=500&h=600&fit=crop'],
    price: 2250,
    discount: {
      amount: 0,
      percentage: 15,
    },
    rating: 4.6,
    category: 'jeans',
    colors: ['Blue', 'Black'],
    sizes: ['Medium', 'Large', 'X-Large'],
    style: 'casual',
  },
  {
    id: 16,
    title: 'Striped Polo Shirt',
    srcUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&h=600&fit=crop'],
    price: 1650,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.3,
    category: 'shirts',
    colors: ['Red', 'Blue', 'White'],
    sizes: ['Small', 'Medium', 'Large'],
    style: 'party',
  },
  {
    id: 17,
    title: 'Polo with Contrast Trims',
    srcUrl: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=500&h=600&fit=crop'],
    price: 2420,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
    category: 'shirts',
    colors: ['Purple', 'White', 'Black'],
    sizes: ['Medium', 'Large', 'X-Large'],
    style: 'party',
  },
  {
    id: 18,
    title: 'Casual Style T-shirt',
    srcUrl: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&h=600&fit=crop'],
    price: 1100,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.1,
    category: 't-shirts',
    colors: ['Black', 'White', 'Yellow'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    style: 'casual',
  },
  {
    id: 19,
    title: 'Sports Hoodie',
    srcUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop'],
    price: 1950,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
    category: 'hoodie',
    colors: ['Black', 'Red', 'Blue'],
    sizes: ['Medium', 'Large', 'X-Large'],
    style: 'gym',
  },
  {
    id: 20,
    title: 'Party Style Shirt',
    srcUrl: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&h=600&fit=crop'],
    price: 1500,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
    category: 'shirts',
    colors: ['Black', 'White', 'Gray'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    style: 'party',
  },
  {
    id: 21,
    title: 'Formal Business Shirt',
    srcUrl: 'https://images.unsplash.com/photo-1603252109360-909baaf261c7?w=500&h=600&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1603252109360-909baaf261c7?w=500&h=600&fit=crop'],
    price: 2100,
    discount: {
      amount: 0,
      percentage: 10,
    },
    rating: 4.8,
    category: 'shirts',
    colors: ['White', 'Blue', 'Black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    style: 'formal',
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: 'Alex K.',
    content:
      '"Finding products that align with my personal style used to be a challenge until I discovered Vastraa. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."',
    rating: 5,
    date: 'August 14, 2023',
  },
  {
    id: 2,
    user: 'Sarah M.',
    content: `"I'm blown away by the quality and style of the clothes I received from Vastraa. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
    rating: 5,
    date: 'August 15, 2023',
  },
  {
    id: 3,
    user: 'Ethan R.',
    content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    rating: 5,
    date: 'August 16, 2023',
  },
  {
    id: 4,
    user: 'Olivia P.',
    content: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    rating: 5,
    date: 'August 17, 2023',
  },
  {
    id: 5,
    user: 'Liam K.',
    content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    rating: 5,
    date: 'August 18, 2023',
  },
  {
    id: 6,
    user: 'Samantha D.',
    content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
    rating: 5,
    date: 'August 19, 2023',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className='my-12.5 sm:my-18'>
        <div id="new-arrivals">
          <ProductListSec title='NEW ARRIVALS' data={newArrivalsData} viewAllLink='/shop' />
        </div>
        <div className='max-w-frame mx-auto px-4 xl:px-0'>
          <hr className='h-px border-t-black/10 my-10 sm:my-16' />
        </div>
        <div className='mb-12.5 sm:mb-20' id="top-selling">
          <ProductListSec title='top selling' data={topSellingData} viewAllLink='/shop' />
        </div>
        <div className='mb-12.5 sm:mb-20'>
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
