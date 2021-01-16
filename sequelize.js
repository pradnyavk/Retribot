'use strict';
require('dotenv').config();

const { User } = require('discord.js');
const {Sequelize, DataTypes, DATE, Model} = require('sequelize');

const con = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 3000
      }
  });

  //authenticating the connection
con
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  const data = con.define('data',{
    meetingName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    mdate:{
      type:DataTypes.DATE,
      allowNull:false
    }
  });


  console.log(data === con.models.data);
  //create a table with model data and drop and create new if it already exists
  data.sync({force:true});


  exports.addToDB = function(userInput){
    var dbcolums = userInput.split(" ");
    const row = data.create({meetingName:dbcolums[0],mdate:new DATE(dbcolums[1])});
    console.log('entry added!');
  }