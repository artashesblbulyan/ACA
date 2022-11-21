// Task 2
// Your task is to create a class to handle paginated content in a website. A pagination is used
// to divide long lists of content into a series of pages.
// The Pagination class will accept 2 parameters:
// ● items (default: []): An array of contents to paginate.
// ● pageSize (default: 10): The amount of items to show in each page.
// So for example we could initialize our pagination like this:
// const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
// const p = new Pagination(alphabetArray, 4);
// And then use the method getVisibleItems to show the contents of the paginated array.
// console.log(p.getVisibleItems()); // ["a", "b", "c", "d"]
// You will have to implement various methods to go through the pages such as:
// ● prevPage
// ● nextPage
// ● firstPage
// ● lastPage
// ● goToPage
// Here's a continuation of the example above using nextPage and lastPage:
// p.nextPage();
// console.log(p.getVisibleItems());
// // ["e", "f", "g", "h"]
// p.lastPage();
// console.log(p.getVisibleItems());
// // ["y", "z"]



class Pagination {
  pageSize = 10;
  constructor(item,pageSize){
    this.item = item;
    this.pageSize = pageSize
    this.start = 0
  }
  getVisibleItems(){
    this.page = this.item.splice(this.start,this.pageSize)
    return this.page
  }
  prevPage(){
    if(this.start-this.pageSize >= 0){
    this.start -= this.pageSize
    }
  }
  nextPage(){
    let remainder =  this.item.length % this.pageSize
    if(this.start + remainder < this.item.length){
    this.start += this.pageSize}
  
  }
  firstPage(){
    this.start = 0
    
  }
  lastPage(){
   let k =  this.item.length / this.pageSize
   this.start = this.pageSize * Math.floor(k)

  }
  goToPage(page){
    this.start = page * this.pageSize 

  }
}

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const p = new Pagination(alphabetArray, 4);
p.goToPage(7)
// p.nextPage()
// p.nextPage()
// p.nextPage()
// p.nextPage()
// p.nextPage()
// p.nextPage()
// p.nextPage()
// p.prevPage()
// p.prevPage()
// p.prevPage()
// p.lastPage()
console.log(p.getVisibleItems());
