const connection = require('../database/connection')
const crypto = require('crypto')

module.exports={


async lista (request, response){
    const prod = await connection('produto').select('*')
    return response.json(prod);
},


   //criar produto
    async create(request, response){
        const {nome_produto, qta_produto}= request.body;
        const id = crypto.randomBytes(1).toString('hex');

 await connection('produto').insert({
            nome_produto,
            qta_produto,
            id
        });
        return response.json({nome_produto})        
         },    
        

         //deletar
         async deletar (request, response){
             const {id} = request.params;                 
            await connection('produto').where('id',id).delete();
            return response.status(204).send()

        },

        //update
        async atualizar (request, response){
            const {id} = request.params;                 
            await connection('produto').where('id',id).update(request.body, 
                {
                new: true        
            });
            return response.json({id}) 

        }

        

        };

         



