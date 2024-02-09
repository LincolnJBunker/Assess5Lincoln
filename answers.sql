//problem 1
SELECT email FROM customers ORDER BY email;

//problem 2
dumb

//problem 3
SELECT SUM(num_cupcakes) FROM orders WHERE processed = 'f';

//problem 4
SELECT cupcakes.name, SUM(orders.num_cupcakes) FROM cupcakes LEFT JOIN orders ON cupcakes.id = orders.cupcake_id GROUP BY cupcakes.name ORDER BY cupcakes.name;

//problem 5
