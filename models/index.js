// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)

Product.belongsToMany(
  Tag, 
  {
      through: 'product_tag',
      foreignKey: 'product_id',
  }
)
Tag.belongsToMany(
  Product, 
  {
      through: 'product_tag',
      foreignKey: 'tag_id',
  }
)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
