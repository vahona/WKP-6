## Project weekend

#### 1. In a few sentences, explain the structure of your project .

   - First I generate the html from the object;
   - second I created html for the order list;


#### 2. If you had more time, what area of your work would you improve?

   - If I had more time I would try to discover what the real trouble of my code, weather it is the code or computer;
   - Then I would try to do the next part which I did not finish.

#### 3. Did you learn anything new while working on this project? 

#### 4. What was the most challenging part for you?

   - I really struggle of how to apply map, reduce, join, filter ....ect. When we learn about it, It seems that I understand but when I did my project I totally lost, I did not know anything.

### 5. Would you like a new explanation about a specific topic?

   - It is hard for me to ask for a new explanation because you've explain them clearly but I do not know how to apply them in a big project like this.


### 6. Any comments? (edited)

   - It was such a frustrated weekend, the project was difficult, something went wrong. I could not open my code in my browser but when I restart my coputer all of my code was gone then I code just without looking the console. I had clone twice because when I tried to copy my code in another file all gone. I lost everything I could not see my code even in the place where I copied it, then I clone again. Luckly I've pushed once and some code I've pushed I could get it by pulling. 
   - To conclude, I did not know anything, sothing went wrong, I was totally lost and my code was just borshit code so **I'm really sorry for that really sorry**



# WKP6 - Hungry Student Restaurant

### Another website about food, really...

Yes, but who doesn't like food? 😄

This time, we're going to build a food delivery app, where we can see the meal options, select them, and see the result in our cart.

### Users must be able to :

-   See a list of five meal options
-   See the prices of each meal option
-   Add a meal to the cart
-   Filter the list to see only the vegetarian meals, or only the spicy ones
-   See their total bill
-   “Check out” - this doesn’t have to process payment, just simply display
    a message stating the order as been confirmed.

### Bonus :

-   Change the quantity of meals in the cart
-   Remove a meal from the cart

Here is an example of layout :

![assets/1.png](assets/1.png)

And when I click on the _Confirm Order_ button, I can display a message to show the total bill from the order.

![assets/2.png](assets/2.png)

### Food list

Here's the food object :

```jsx
const foods = [
	{
		id: 'ravitoto',
		price: 5000,
		title: 'Ravitoto',
		spicy: true,
		vegetarian: false,
	},
	{
		id: 'pasta',
		price: 4000,
		title: 'Pasta',
		spicy: true,
		vegetarian: true,
	},
	{
		id: 'burger',
		price: 5000,
		title: 'Burger',
		spicy: false,
		vegetarian: false,
	},
	{
		id: 'rice',
		price: 2000,
		title: 'Rice and Leaves',
		spicy: false,
		vegetarian: true,
	},
	{
		id: 'mofogasy',
		price: 500,
		title: 'Mofogasy',
		spicy: false,
		vegetarian: false,
	},
];
```

The **id** here is a unique string, is role is to identify an element inside the list. The title will be the food name shown to the user.

You'll also have an **order** collection, where you will push a food object every time the user add an element to his order.

### Maps, Filter, Reduce, and other friends

-   To generate any list of element (for example, the list of food), **Map** is really useful.
-   To get the full price of list of items, **Reduce** is the perfect use case.
-   To count how many times an item is in a list, you could **Filter** the list and see the length of the result, or use a **Reduce** to count all of the instances.

But this is just one way to think about that. Feel free to try any other logic you have in mind.

### 💡Tips

-   Don't forget to clean your code, and update your readme before Monday morning.

Good luck!
