const Sequelize = require('sequelize')
const op = Sequelize.Op

const db = new Sequelize('shopper', '','',{
	host: '',
	dialect:'sqlite',
	operatorsAliases : op,
	pool: {
		min :0,
		max:5,
	},
	"storage":"./shopper.sqlite"
})

const User = db.define('users',{
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
    },
	fname: {
		type: Sequelize.STRING,
		allowNull: false,
    },
    lname: {
		type: Sequelize.STRING,
		allowNull: false,
    },
    email: {
		type: Sequelize.STRING,
		allowNull: false,
		},
		address: {
			type: Sequelize.STRING,
			allowNull: false,
			},
		course: {
			type: Sequelize.STRING,
			allowNull: false,
			},
		college: {
			type: Sequelize.STRING,
			allowNull: false,
			},
    mobile: {
		type: Sequelize.STRING,

	},
    password: {
		type: Sequelize.STRING,
		allowNull: false,
	}
})

const Product = db.define('products',{
	id: {
		type: Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	image: {
		type: Sequelize.STRING,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
    },
    authorName: {
		type: Sequelize.STRING,
		allowNull: false
    },
    condition: {
		type: Sequelize.STRING,
		enum : ['new','almost new','slight damage','worn'],
		defaultValue: 'new',
		allowNull: false
	},
	actualPrice: {
		type: Sequelize.FLOAT,
		allowNull: false,
		defaultValue: 0.0
	},
	resellPrice: {
		type: Sequelize.FLOAT,
		allowNull: false,
		defaultValue: 0.0
	},
	
  })

const Cart = db.define('cart',{
	id: {
		type: Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
    orderid: {
        type: Sequelize.STRING
	},
	productkey: {
		type: Sequelize.INTEGER
},

})
const Wishlist = db.define('wishlist',{
	id: {
		type: Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
    orderid: {
        type: Sequelize.STRING
	},
	productkey: {
		type: Sequelize.INTEGER
},

})
const Message = db.define('message',{
	id: {
		type: Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	productkey: {
		type: Sequelize.INTEGER
},
text: {
	type: Sequelize.STRING
},
})
Message.belongsTo(Product, { onDelete: 'cascade' });
Product.hasMany(Message,{onDelete: 'cascade' });
Message.belongsTo(User,{onDelete: 'cascade' })
User.hasMany(Message,{onDelete: 'cascade' })

Cart.belongsTo(Product, { onDelete: 'cascade' });
Product.hasMany(Cart, { onDelete: 'cascade' });
Cart.belongsTo(User);
User.hasMany(Cart, { onDelete: 'cascade' });
Product.belongsTo(User);
User.hasMany(Product, { onDelete: 'cascade' })

Wishlist.belongsTo(Product, { onDelete: 'cascade' });
Product.hasMany(Wishlist, { onDelete: 'cascade' });
Wishlist.belongsTo(User);
User.hasMany(Wishlist, { onDelete: 'cascade' });
//db.sync()
db.sync({force : true})
	.then(() => console.log("Database have been synced"))
	.catch((err) => console.error(err))
exports = module.exports = {
	User, Product, Cart, Wishlist, Message
}