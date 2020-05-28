module.exports = (sequelize, DataTypes) => {
var Customer = sequelize.define("customers", {
    id: {
      type: DataTypes.BIGINT(20),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    passwd: {
      type: DataTypes.STRING
    },
    created_at: {
      type: 'TIMESTAMP',
      default: Date.now()
    },
    updated_at: {
      type: 'TIMESTAMP',
      default: Date.now()
    }

    
  }
  
  )

  return Customer;


}
  // Cria a tabela pela primeira vez. 
   //Post.sync( { force: true } )
   // dar acesso ao Post
  