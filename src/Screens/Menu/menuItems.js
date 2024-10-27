import pancake from '../../Assets/Images/menu_pancake.jpg'
import burger from '../../Assets/Images/menu_burger.jpg'
import salad from '../../Assets/Images/menu_salad.jpg'
import orangejuice from '../../Assets/Images/menu_orangejuice.jpg'
import menu_icecream from '../../Assets/Images/menu_icecream.jpg'
import menu_scrambledegg from '../../Assets/Images/menu_scrambledegg.jpg'
import menu_pizza from '../../Assets/Images/menu_pizza.jpg'
import menu_soup from '../../Assets/Images/menu_soup.jpg'


import omlette from '../../Assets/Images/menu_egg.jpg'
import frenchtoast from '../../Assets/Images/menu_sandwich.jpg'
import smoothie from '../../Assets/Images/menu_smoothie.jpg'
import burrito from '../../Assets/Images/menu_burrito.jpg'
import granola from '../../Assets/Images/menu_granola.jpg'
import bangle from '../../Assets/Images/bangledonut.jpg'


import grilled from '../../Assets/Images/menu_grilled.jpg'

import steak from '../../Assets/Images/menu_steak.jpg'
import tacos from '../../Assets/Images/menu_tacos.jpg'
import bbq from '../../Assets/Images/menu_bbq.jpg'
import pasta from '../../Assets/Images/menu_pasta.jpg'
import veggieburger from '../../Assets/Images/menu_veggieburger.jpg'

import spring from '../../Assets/Images/menu_spring.jpg'
import wings from '../../Assets/Images/menu_wings.jpg'
import eggap from '../../Assets/Images/menu_eggapp.jpg'
import brush from '../../Assets/Images/menu_brush.jpg'
import mozrella from '../../Assets/Images/menu_mozrella.jpg'
import mushroom from '../../Assets/Images/menu_mushrooms.jpg'
import nachos from '../../Assets/Images/menu_nachos.jpg'
import potato_skin from '../../Assets/Images/menu_skin.jpg'


import icedcoffee from '../../Assets/Images/menu_icedcoffee.jpg'
import lemonade from '../../Assets/Images/menu_lemonade.jpg'

import greentea from '../../Assets/Images/menu_greentea.jpg'
import soda from '../../Assets/Images/menu_soda.jpg'
import milkshake from '../../Assets/Images/menu_milkshake.jpg'
import water from '../../Assets/Images/menu_water.jpg'
import chocolatecake from '../../Assets/Images/menu_chocolatecake.jpg'

import applepie from '../../Assets/Images/menu_applepie.jpg'
import cheesecake from '../../Assets/Images/menu_cheesecake.jpg'
import brownie from '../../Assets/Images/menu_brownie.jpg'
import pudding from '../../Assets/Images/menu_pudding.jpg'
import macaron from '../../Assets/Images/menu_macarons.jpg'
import cupcake from '../../Assets/Images/menu_cupcake.jpg'

export const menuItems = {
    All: [
      { id: 1, name: "Pancakes", description: "Fluffy and golden, topped with syrup.", price: "5.99",pic: pancake },
      { id: 2, name: "Burger", description: "Juicy beef patty with cheese and lettuce.", price: "10.99",pic: burger },
      { id: 3, name: "Salad", description: "Fresh greens with a light vinaigrette.", price: "6.99",pic:salad },
      { id: 4, name: "Orange Juice", description: "Freshly squeezed oranges.", price: "3.99",pic: orangejuice },
      { id: 5, name: "Ice Cream", description: "Creamy vanilla scoop.", price: "4.99" ,pic: menu_icecream},
      { id: 6, name: "Scrambled Eggs", description: "Fluffy eggs with a hint of butter.", price: "4.50",pic: menu_scrambledegg },
      { id: 7, name: "Pizza", description: "Cheesy slice with pepperoni.", price: "12.99",pic: menu_pizza },
      { id: 8, name: "Soup", description: "Warm and hearty chicken soup.", price: "5.99",pic: menu_soup },
    ],
    Breakfast: [
      { id: 1, name: "Pancakes", description: "Fluffy and golden, topped with syrup.", price: "5.99", pic: pancake },
      { id: 2, name: "Omelette", description: "Three-egg omelette with veggies.", price: "6.50",pic: omlette },
      { id: 3, name: "Scrambled Eggs", description: "Fluffy eggs with a hint of butter.", price: "4.50",pic: menu_scrambledegg  },
      { id: 4, name: "French Toast", description: "Served with powdered sugar.", price: "5.99", pic: frenchtoast},
      { id: 5, name: "Bagel with Cream Cheese", description: "Classic bagel spread with cream cheese.", price: "3.99",pic: bangle },
      { id: 6, name: "Breakfast Burrito", description: "Eggs, cheese, and salsa wrapped in a tortilla.", price: "7.99",pic: burrito },
      { id: 7, name: "Smoothie Bowl", description: "Topped with fresh fruit and granola.", price: "6.99",pic: smoothie },
      { id: 8, name: "Granola Parfait", description: "Layers of granola, yogurt, and fruit.", price: "5.50",pic: granola },
    ],
    "Main Dishes": [
      { id: 1, name: "Burger", description: "Juicy beef patty with cheese and lettuce.", price: "10.99",pic: burger },
      { id: 2, name: "Pizza", description: "Cheesy slice with pepperoni.", price: "12.99",pic: menu_pizza },
      { id: 3, name: "Grilled Chicken", description: "Marinated chicken breast, grilled to perfection.", price: "13.99",pic: grilled },
      { id: 4, name: "Steak", description: "Juicy steak cooked to your liking.", price: "20.99",pic: steak },
      { id: 5, name: "Fish Tacos", description: "Soft tacos with grilled fish and slaw.", price: "11.99",pic:tacos },
      { id: 6, name: "Pasta Carbonara", description: "Creamy pasta with bacon.", price: "14.99",pic: pasta },
      { id: 7, name: "BBQ Ribs", description: "Tender ribs smothered in BBQ sauce.", price: "18.99",pic: bbq },
      { id: 8, name: "Veggie Burger", description: "Healthy patty with fresh veggies.", price: "10.99",pic: veggieburger },
    ],
    Appetizer: [
      { id: 1, name: "Spring Rolls", description: "Crispy rolls with veggies inside.", price: "4.99",pic: spring },
      { id: 2, name: "Bruschetta", description: "Toasted bread topped with tomatoes.", price: "5.99",pic: brush },
      { id: 3, name: "Stuffed Mushrooms", description: "Mushrooms filled with cheese.", price: "6.50",pic: mushroom },
      { id: 4, name: "Chicken Wings", description: "Spicy and crispy wings.", price: "8.99",pic: wings },
      { id: 5, name: "Mozzarella Sticks", description: "Cheese sticks served with marinara.", price: "5.99",pic: mozrella },
      { id: 6, name: "Deviled Eggs", description: "Egg halves with creamy filling.", price: "3.99",pic: eggap },
      { id: 7, name: "Nachos", description: "Corn chips with melted cheese.", price: "7.99",pic: nachos },
      { id: 8, name: "Potato Skins", description: "Loaded potato halves.", price: "6.99",pic: potato_skin},
    ],
    Beverages: [
      { id: 1, name: "Orange Juice", description: "Freshly squeezed oranges.", price: "3.99",pic: orangejuice },
      { id: 2, name: "Iced Coffee", description: "Cold brew coffee over ice.", price: "3.50" ,pic : icedcoffee},
      { id: 3, name: "Lemonade", description: "Fresh and tangy.", price: "2.99",pic : lemonade },
      { id: 4, name: "Smoothie", description: "Blended fruits and yogurt.", price: "4.99",pic: smoothie },
      { id: 5, name: "Green Tea", description: "Hot and calming.", price: "2.50",pic: greentea},
      { id: 6, name: "Soda", description: "Classic soda options.", price: "1.99",pic: soda },
      { id: 7, name: "Milkshake", description: "Thick and creamy milkshake.", price: "5.50",pic: milkshake },
      { id: 8, name: "Water", description: "Refreshing bottled water.", price: "1.00",pic: water },
    ],
    Desserts: [
      { id: 1, name: "Ice Cream", description: "Creamy vanilla scoop.", price: "4.99",pic: menu_icecream },
      { id: 2, name: "Chocolate Cake", description: "Rich and moist.", price: "5.99",pic: chocolatecake },
      { id: 3, name: "Apple Pie", description: "Classic pie with a cinnamon twist.", price: "4.99",pic: applepie},
      { id: 4, name: "Cheesecake", description: "Creamy with a graham cracker crust.", price: "5.99" ,pic: cheesecake},
      { id: 5, name: "Brownies", description: "Chocolatey and gooey.", price: "3.99", pic: brownie},
      { id: 6, name: "Cupcake", description: "Soft cake with frosting.", price: "2.99",pic: cupcake },
      { id: 7, name: "Pudding", description: "Smooth and sweet.", price: "3.50",pic: pudding },
      { id: 8, name: "Macarons", description: "Light and flavorful French treat.", price: "6.99",pic: macaron},
    ],
  };