//problem 1
SELECT email FROM customers ORDER BY email;

//problem 2
dumb

//problem 3
SELECT SUM(num_cupcakes) FROM orders WHERE processed = 'f';

//problem 4
SELECT cupcakes.name, SUM(orders.num_cupcakes) FROM cupcakes LEFT JOIN orders ON cupcakes.id = orders.cupcake_id GROUP BY cupcakes.name ORDER BY cupcakes.name;

//problem 5
SELECT customers.email, SUM(orders.num_cupcakes) FROM customers LEFT JOIN orders ON customers.id = orders.customer_id GROUP BY customers.email ORDER BY customers.email;

//problems 6
SELECT MIN(customers.fname), MIN(customers.lname), MIN(customers.email) from customers INNER JOIN orders ON customers.id = orders.customer_id INNER JOIN cupcakes ON orders.cupcake_id = cupcakes.id WHERE cupcakes.name = 'funfetti' AND orders.processed = 't';

