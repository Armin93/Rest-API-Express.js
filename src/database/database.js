import Sequelize from 'sequelize';

export  const sequelize = new Sequelize('postgres','postgres','password',{
    host:'localhost',
    dialect:'postgres',
    
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }})

//TEST DB
sequelize.authenticate()
.then(()=>console.log('Database connected'))
.catch(err=>console.log(err));