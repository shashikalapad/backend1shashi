const  mongoose = require('mongoose');

mongoose
.connect("mongodb://localhost:27017/")
.then(()=>console.log("mongoDB is connected"))
.catch(err=>console.log(err))
//schema
const bookSchema = new mongoose.Schema({
    name:{type:String,required:true,minlength:3,maxlength:15},
    author:String,
    genre:{type:[String],enum:["fancy","thriller,comady"]},
    date:{type:Date,default:Date.now},
    isPublished:Boolean,
})
//creating Model
const Book = mongoose.model("Book",bookSchema);

async function createBook(){
  const book =new Book({
    // name:"Harry Potter and the query",
   name:"ifhkjlk",
    author:"J k rowling and shashikala",
    //genere:["fancy","thriller,comady"],
    genere:["shasad"],
    isPublished:true,
  });
  try{
  const result = await book.save();
  console.log(`Created a book with data - ${result}`);
  }catch(err){
    console.log(`Error occured  while creating  a book -->${err}`)
  }
}
createBook();
//get book
// async function getallBooks(){
//   const books = await Book.find();
//   console.log("Books",books);
// }
// getallBooks();

//to find perticular book
// async function getbooks(){
  // const books = await Book.find({author:"J k rowling and shashikala"});
  //const books = await Book.find({isPublished:true});
  // const books = await Book.find({author:"J k rowling and shashikala",isPublished:true});
//want select parameters
//const books = await Book.find({
  // author:"J k rowling and shashikala",
  // isPublished:true}).select({name:1,author:1});
//})
//if sort required
//.sort({name:-1})
//.select({name:1,author:1});
//.count();
//want top 3
//.limit(2);
//And condition
// const books = await Book.find().and([
//   {name:"Harry potter"},
//   {isPublished:true},
// ])
//or operation
// const books = await Book.find().or([
//   {name:"Harry potter"},
//   {isPublished:true},
// ])
//regularexpression(regex )
//const books = await Book.find({author:/^J k/});
//const books = await Book.find({author:/la$/});
//const books = await Book.find({author:/J k/i});
//const books = await Book.find({author:/.*shi.*/});
//getbooks();

//By id
// async function getbooks(id){
//   const books = await Book.find({_id:id})//find return array of object

//   console.log("books",books);
// }
// getbooks('65cde78b08d5c15d08ec0317');

//update data
// async function updateBooks(id){
//   const books = await Book.findById(id);
//   console.log("book to be updated",Book);
// }
//updateBooks('65cde78b08d5c15d08ec0317');
//if pass empty or wrong id
// async function updateBooks(id){
//   const books = await Book.findById(id);
//   console.log("book to be updated",Book);
// }
// updateBooks();
//if no book
// async function updateBooks(id){
//   const book = await Book.findById(id);
//   console.log("book to be updated",Book);
//   if(!book) return ;
//   book.author ="k k rowling";
//   book.isPublished = false;
//   const updatedBook =await book.save();
//   console.log(`updated book->${updatedBook}`)

// }
// updateBooks('65cde78b08d5c15d08ec0317');

//destucturing
// async function updateBooks(id){
//   const book = await Book.findById(id);
//   console.log("book to be updated",Book);
//   if(!book) return ;
//   // book.author ="k k rowling";
//   // book.isPublished = false;
//   book.set({
//     author:"RR Rowling",
//     name:"Harry potter",
//   });
//   const updatedBook =await book.save();
//   console.log(`updated book->${updatedBook}`)

// }
// updateBooks('65cde78b08d5c15d08ec0317');


//how to write in express
// async function updateBooks(id){
//   const book = await Book.findById(id);
//   console.log("book to be updated",Book);
//   if(!book) return ; 
//   const {author,name } = req.body;
//   book.set({
//     author,
//     name,
//   });
//   const updatedBook =await book.save();
//   console.log(`updated book->${updatedBook}`)

// }
//updateBooks('65cde78b08d5c15d08ec0317');
//delete
async function deleteBooks(id){
  // const Book =await Book.findByIdAndDelete(id)//recommanded way

   const deletedBook =await Book.deleteOne({author:"shashikala"})
  console.log("deleted book",deletedBook);
}
deleteBooks('65cdfbeb2646e6e234bf21fe')


