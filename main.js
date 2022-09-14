
const fastify = require('fastify')({ logger: true })

const cars = ['camrey','lexus'];

// Declare a route
fastify.get('/cars', async (request, reply) => {
  return cars;
})



fastify.get('/foods', async (request, reply) => {
  return ["burger"]
})

fastify.post('/cars', async (request, reply) => {
  cars.push(request.body);
  return cars;
})

const host = process.env.Node_ENV === 'production' ? '0.0.0.0' : '127.1';
const port = process.env.$PORT || 3000;

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port:port,
      host:host
     })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
