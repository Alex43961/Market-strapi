import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  // productStorage: any[] = [];

  // private productsList: Products[] = [

  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_pro_max_black_titanium_pdp_image_position-1__ww-en.jpg',
  //     name: 'Apple iPhone 15 Pro Max 256GB Black Titanium (MU773)',
  //     price: 999.99,
  //     description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
  //   },
  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_2.jpg',
  //     name: 'Apple iPhone 15 Pro Max 256GB Natural Titanium (MU793)',
  //     price: 999.99,
  //     description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
  //   },
  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_pro_max_blue_titanium_pdp_image_position-1__ww-en_3.jpg',
  //     name: 'Apple iPhone 15 Pro Max 256GB Blue Titanium (MU7A3)',
  //     price: 999.99,
  //     description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
  //   },
  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_pro_max_white_titanium_pdp_image_position-1__ww-en_3.jpg',
  //     name: 'Apple iPhone 15 Pro Max 256GB White Titanium (MU783)',
  //     price: 999.99,
  //     description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
  //   },
  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1a_2.jpg',
  //     name: 'Apple iPhone 14 Pro Max 256GB Deep Purple (MQ9X3)',
  //     price: 799.99,
  //     description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
  //   },
  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_plus_blue_pdp_image_position-1__ww-en.jpg',
  //     name: 'Apple iPhone 15 128GB Blue (MTP43)',
  //     price: 499.99,
  //     description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
  //   },
  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_plus_black_pdp_image_position-1__ww-en.jpg',
  //     name: 'Apple iPhone 15 128GB Dark (MTP43)',
  //     price: 499.99,
  //     description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
  //   },
  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_plus_pink_pdp_image_position-1__ww-en.jpg',
  //     name: 'Apple iPhone 15 128GB Pink (MTP43)',
  //     price: 499.99,
  //     description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
  //   },
  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_plus_yellow_pdp_image_position-1__ww-en.jpg',
  //     name: 'Apple iPhone 15 128GB Yellow (MTP43)',
  //     price: 499.99,
  //     description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
  //   },
  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_plus_green_pdp_image_position-1__ww-en.jpg',
  //     name: 'Apple iPhone 15 128GB Green (MTP43)',
  //     price: 499.99,
  //     description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
  //   },

  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/m/b/mba15-midnight-gallery1-202306_result_1.jpg',
  //     name: 'Ноутбук Apple MacBook Air 15" M2 256GB (MQKW3) Midnight',
  //     price: 499.99,
  //     description: 'Макбук (MacBook) - это линейка ноутбуков, разработанных и производимых американской компанией Apple. MacBook известен своим стильным дизайном, высокой производительностью и экосистемной интеграцией с другими устройствами Apple',
  //   },

  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/m/b/mba15-spacegray-gallery1-202306_result_1.jpg ',
  //     name: 'Ноутбук Apple MacBook Air 15" M2 256GB (MQKP3) Space Grey',
  //     price: 499.99,
  //     description: 'Макбук (MacBook) - это линейка ноутбуков, разработанных и производимых американской компанией Apple. MacBook известен своим стильным дизайном, высокой производительностью и экосистемной интеграцией с другими устройствами Apple',
  //   },

  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/m/b/mba15-starlight-gallery1-202306_result_1.jpg',
  //     name: 'Ноутбук Apple MacBook Air 15" M2 256GB (MQKU3) Starlight',
  //     price: 499.99,
  //     description: 'Макбук (MacBook) - это линейка ноутбуков, разработанных и производимых американской компанией Apple. MacBook известен своим стильным дизайном, высокой производительностью и экосистемной интеграцией с другими устройствами Apple'
  //   },

  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/m/b/mba15-silver-gallery1-202306_result_1.jpg',
  //     name: 'Ноутбук Apple MacBook Air 15" M2 256GB (MQKR3) Silver',
  //     price: 499.99,
  //     description: 'Макбук (MacBook) - это линейка ноутбуков, разработанных и производимых американской компанией Apple. MacBook известен своим стильным дизайном, высокой производительностью и экосистемной интеграцией с другими устройствами Apple',
  //   },

  //   {
  //     image: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/6/1682044_zoom.jpg',
  //     name: 'Ноутбук Apple MacBook Pro 13" M2 16/512GB (Z16R002DS) Space Grey',
  //     price: 499.99,
  //     description: 'Макбук (MacBook) - это линейка ноутбуков, разработанных и производимых американской компанией Apple. MacBook известен своим стильным дизайном, высокой производительностью и экосистемной интеграцией с другими устройствами Apple',
  //   },
  // ];

  constructor(private http: HttpClient) { }

  // getProductsList(): Observable<any> {
  //   //return this.productsList;
  //   // now returns an Observable of Config
  //   return this.http.get<any>('http://localhost:3000/products');
  // }

  // private productsSubject = new Subject<any[]>();

  

  // getProductsList(): Observable<any[]> {
  //   // Вместо эмитирования данных из Subject, делаем HTTP-запрос
  //   this.http.get<any[]>('http://localhost:3000/products')
  //     .subscribe({
  //       next: data => {
  //         this.productsSubject.next(data);
  //       },
  //       error: e => {
  //         console.error(Error);
  //       }
  //     });

  //   return this.productsSubject.asObservable();
  // }

  PORT = 'http://localhost:3000';

  // updateProductsList(newData: any[]) {
  //   this.productsSubject.next(newData);
  // }


   getProductsList(): Observable<any> {
    return this.http.get<any>(`${this.PORT}/products`);
  }

  getProduct(productId: string): Observable<any> {
    return this.http.get<any>(`${this.PORT}/products/${productId}`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.PORT}/products`, product);
  }

 
  deleteProduct(productId: string): Observable<any> {
    return this.http.delete<any>(`${this.PORT}/products/${productId}`);
  }


 
  updateProduct(updatedProduct: any): Observable<any> {
    return this.http.put<any>(`${this.PORT}/products/${updatedProduct._id}`, updatedProduct);
  }

  
  saveComment(productId: string, comment: string): Observable<any> {
    const body = { comment }; 
    return this.http.post<any>(`${this.PORT}/products/${productId}/add-comment`, body);
  }

   
    getComments(productId: string): Observable<string[]> {
      return this.http.get<string[]>(`${this.PORT}/products/${productId}`);
  }
}

