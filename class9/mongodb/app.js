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
async function getbooks(id){
  const books = await Book.find({_id:id})

  console.log("books",books);
}
getbooks('65cde78b08d5c15d08ec0317');