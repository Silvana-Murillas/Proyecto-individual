const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true
    },
    image:{ 
      type: DataTypes.STRING,
      defaultValue: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      validate:{
        isUrl:true
      }
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
     
    },
    summary:{
      type:DataTypes.TEXT,
      allowNull:false

    },
    healthScore:{
      type:DataTypes.INTEGER,
      validate:{
        min:0,
        max:100
      }

    },
    steps:{
      type:DataTypes.TEXT
    }
  });
};
