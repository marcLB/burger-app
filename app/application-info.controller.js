export class ApplicationInfoController {

    constructor() {
        this.info = {
          name: 'Burger',
          version: '1.0.0',
          date: new Date(2012, 10, 10)
        }
        this.toggle = false
        
        
         this.users = [
      { name: 'John', email: 'test@ici' },
      { name: 'lzkejflkez', email: 'sdfsd@ici' },
      { name: 'frezfezf', email: 'tedgfdgdst@ici' },
      { name: 'regergre', email: 'ouliu@ici' }
    ]
        
        
        
    }
    
    
    
    toggleVersion() {
        this.toggle = !this.toggle;
    }
}
