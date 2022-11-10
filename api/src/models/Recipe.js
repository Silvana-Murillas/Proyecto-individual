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
      validate:{
        isUrl: true
      }
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
     
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
