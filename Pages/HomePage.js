export class HomePage {

  constructor(page){
    this.page = page
    
  }

  async openPage(){
    await this.page.goto("https://example.com")
  }




}