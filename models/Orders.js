module.exports = (sequelize, DataTypes) => {
    var Orders= sequelize.define("orders", {
        id: {
          type: DataTypes.BIGINT(20),
          primaryKey: true,
          autoIncrement: true
        },
        customer_id: {
          type: DataTypes.BIGINT(20),
          references: {         // WorkingDays hasMany Users n:n
            model: 'customers',
            key: 'id'
          }
        },
        description: {
          type: DataTypes.STRING
        },
        amount: {
          type: DataTypes.DOUBLE(15, 2)
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
    
      return Orders;
    
    
    }
      // Cria a tabela pela primeira vez. 
       //Post.sync( { force: true } )
       // dar acesso ao Post
      