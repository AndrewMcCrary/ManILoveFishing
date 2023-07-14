import { Injectable } from '@angular/core';
@Injectable()
export class ContentService {
  pages: any = {
  
    'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/DockFishing.jpg'},
    'TDF': {title: 'TDF', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/Fish.png'},
    'DTF': {title: 'DTF', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/mail.png'},
    'MBT': {title: 'MBT', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/Fish.png'},
    'LBIYA': {title: 'LBIYA', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/Fish.png'},
    'Fish Hub': {title: 'Fish Hub', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/Fish.png'},
    'Bait Buddy': {title: 'Bait Buddy', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/Fish.png'}
    


  };
}