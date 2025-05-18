import express from "express"
import cors from "cors"
import mongoose from "mongoose"
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://narmingkbf206:narmin28311007_@cluster0.etsr5ne.mongodb.net/')
.then(()=>console.log("Connected"))
.catch(()=>console.log("NOT Connected"))

const productSchema = new mongoose.Schema({
  name: String,
  price:Number,
  image:String
});

const Products = mongoose.model('Products', productSchema);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', async(req, res) => {
  const products= await Products.find()
  res.send(products)
})

app.get('/products/:id', async(req, res) => {
  const {id}= req.params
  const products= await Products.findById(id)
  res.send(products)
})

app.delete('/products/:id', async(req, res) => {
  const {id}= req.params
  const products= await Products.findByIdAndDelete(id)
  res.send(products)
})

app.post('/products', async(req, res) => {
  const {body}= req
  const products= await Products.create(body)
  res.send(products)
})

app.put('/products/:id', async(req, res) => {
  const {id}= req.params
  const {body}= req
  const products= await Products.findByIdAndUpdate(id,body)
  res.send(products)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})