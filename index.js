(async () => {
  const database = require('./db');
  const Produto = require('./produto');

  try{
    const resultado = await database.sync();
    console.log(resultado);

    //CREATE
    // const resultadoCreate = await Produto.create({
    //   name: 'mouse',
    //   preco: 10,
    //   descricao: 'Mouse USB'
    // });
    // console.log(resultadoCreate);

    //READ
    // const produtos = await Produto.findAll();
    // console.log(produtos);

    // const produto1 = await Produto.findByPk(1);
    // console.log(produto1);

    //UPDATE
    // const produto = await Produto.findByPk(1);
    // produto.name = 'Mouse top2';

    // const resultadoUpdate = await produto.save();
    // console.log(resultadoUpdate);

    //DELETE
    const produto = await Produto.findByPk(2);
    const resultadoDestroy = await produto.destroy();
    console.log(resultadoDestroy);

  }catch (error){
    console.log(error);
  }
})();