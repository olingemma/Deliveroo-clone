export default {
  name: 'dish',
  title: 'Name of dish',
  type: 'document',
  fields: [
    {
      name:"dish",
      type:"string",
      title:"Name of dish",
      validation:(Rule)=> Rule.required()
    },
    {
      name:"short_description",
      type:"string",
      title:"Short description",
      validation:(Rule)=> Rule.max(200)
    },
    {
      name:"price",
      type:"number",
      title:"Price of the dish in GBP",
    },
    {
      name:"image",
      type:"image",
      title:"Image of the Dish"
    }
  ]
}
