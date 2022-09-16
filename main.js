//New Code:

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
    const cars =["camrey","hilux"]; 

    fastify.get('/cars', async (request, reply) => {
      return cars;
    })



// Run the server!
const port = process.env.$PORT || 4000;
const start = async () => {
  try {
    await fastify.listen(port, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()


//Old Code
/*
const fastify = require('fastify')({ logger: true })

const cars =["camrey","hilux"];
// Declare a route
fastify.get('/cars', async (request, reply) => {
  return cars;
})

fastify.post('/cars', async (request, reply) => {
  cars.push(request.body);
  return cars;
})

const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.1';
const port = process.env.$PORT || 4000;

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port:port,host:host})
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();
// Deploy to heroku
*/
