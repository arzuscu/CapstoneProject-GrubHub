const foodDetail= [ 
        { 
            id: '100',
            image: '../Assets/Images/beanBurger.jpg',
            author: 'by Arzu',
            title: 'Bean Burger',
            ingridients:[
            'Bean Burger','1 can black beans drained','2 carrots grated','1/2 onion,chopped 3 potatoes shredded','2 1/2 ounces Gorgonzola cheese','1 cup corn', '2 eggs', 'salt and black pepper to taste','2 tablespoons vegetable oil'
            ],
            Directions: 'Mash black beans with a fork in a large bowl. Mix carrots, onion, potatoes, and corn into the mashed beans. Stir eggs into bean mixture to integrate completely.Form the mixture into 8 patties with wet hands; season with salt and black pepper.Heat vegetable oil in a skillet over medium heat. Cook the patties in hot oil until cooked through, about 6 minutes per side.'  
        },
        { 
            id: '101',
            image: '../Assets/Images/pizza.jpg',
            author: 'by Farzin',
            title: 'Pizza',
            ingridients:[
            '1 (16 ounce) package refrigerated pizza crust dough' ,'4 ounces sliced provolone cheese', '1 Bosc pear', 'thinly sliced', '2 ounces chopped walnuts', '2 1/2 ounces Gorgonzola cheese','crumbled 2 tablespoons', 'chopped fresh chives'],
            Directions: 'Preheat oven to 450 degrees F (230 degrees C). Place pizza crust dough on a medium baking sheet. Layer with Provolone cheese. Top cheese with Bosc pear slices. Sprinkle with walnuts and Gorgonzola cheese. Bake in the preheated oven 8 to 10 minutes, or until cheese is melted and crust is lightly browned. Remove from heat. Top with chives and slice to serve.'  
        },
        { 
            id: '102',
            image: '../Assets/Images/waffle.jpg',
            author: 'by Roman',
            title: 'Waffle',
            ingridients:['2 eggs beaten', '1 3/4 cups skim milk', '1 Bosc pear', 'thinly sliced', '1/4 cup unsweetened applesauce', '1 teaspoon vanill extract', '1 cup whole wheat pastry flour','1/2 cup flax seed meal','1/4 cup wheat germ', '1/4 cup all-purpose flour','4 teaspoons baking powder','1 tablespoon sugar','1/4 teaspoon salt'],
            Directions: 'In a large bowl, whisk together the eggs, milk, oil, applesauce, and vanilla. Beat in whole wheat pastry flour, flax seed meal, wheat germ, all-purpose flour, baking powder, sugar, and salt until batter is smooth. Preheat a waffle iron, and coat with cooking spray. Pour batter into waffle iron in batches, and cook until crisp and golden brown.'  
        },
        { 
            id: '103',
            image: '../Assets/Images/buddhaBowl.jpg',
            author: 'by Rebecca',
            title: 'Buddha Bowl',
            ingridients:[' 1 tablespoon olive or avocado oil', '1 small yellow onion', 'diced 2 cloves garlic', 'minced 1 tablespoon grated ginger', '1 tablespoon curry powder', '1 teaspoon turmeric', '1 1/2 cups red lentils', '1 (15 oz.) can coconut milk', '1 cup water', '1/2 teaspoon salt', 'fresh cilantro for garnish', 'cooked rice for serving'],
            Directions: 'Heat oil in a large pot over medium low heat. Add the onion and saute until translucent. Add the garlic and ginger and saute another minute. Add the curry powder and turmeric and stir in briefly. Stir in the lentils, coconut milk, and water. Partially cover and simmer over low heat until lentils are tender, about 15 minutes. Season to taste with salt. Add more water to create a thinner soup-like dal, or simmer uncovered to thicken. Garnish with fresh cilantro and serve with rice or flatbread.'  
        },
        { 
            id: '104',
            image: '../Assets/Images/quiche.jpg',
            author: 'by Roisin',
            title: 'Quiche',
            ingridients:['2 cups milk', '4 eggs', '3/4 cup biscuit baking mix', '1/4 cup butter softened', '1 cup grated Parmesan cheese', '1 (10 ounce) package chopped frozen broccoli', 'Thawed and drained 1 cup cubed cooked ham', '8 ounces shredded Cheddar cheese'],
            Directions: 'Preheat oven to 375 degrees F (190 degrees C). Lightly grease a 10 inch quiche dish.In a large bowl, beat together milk, eggs, baking mix, butter and parmesan cheese. Batter will be lumpy. Stir in broccoli, ham and Cheddar cheese. Pour into prepared quiche dish. Bake in preheated oven for 50 minutes, until eggs are set and top is golden brown.'  
        },
        { 
            id: '105',
            image: '../Assets/Images/steak.jpg',
            author: 'by Arzu',
            title: 'Steak',
            ingridients:['1/2 cup vegetable oil', '1/3 cup soy sauce', '1/4 cup red wine vinegar', '2 tablespoons fresh lemon juice', '1 1/2 tablespoons Worcestershire sauce', '1 tablespoon Dijon mustard', '2 cloves garlic minced', '1/2 teaspoon ground black pepper', '1 1/2 pounds flank steak  '],
            Directions: 'In a medium bowl, mix the oil, soy sauce, vinegar, lemon juice, Worcestershire sauce, mustard, garlic, and ground black pepper. Place meat in a shallow glass dish. Pour marinade over the steak, turning meat to coat thoroughly. Cover, and refrigerate for 6 hours. Preheat grill for medium-high heat. Oil the grill grate. Place steaks on the grill, and discard the marinade. Grill meat for 5 minutes per side, or to desired doneness.'  
        },
        { 
            id: '106',
            image: '../Assets/Images/curry.jpg',
            author: 'by Janki',
            title: 'Curry',
            ingridients:['2 pounds chicken breasts cut into chunks', '1 teaspoon salt and pepper', '1 1/2 tablespoons vegetable oil', '2 tablespoons curry powder', '1/2 onion thinly sliced' ,'2 cloves garlic crushed', '1 (14 ounce) can coconut milk', '1 (14.5 ounce) can stewed', 'diced tomatoes', '1 (8 ounce) can tomato sauce', '3 tablespoons sugar '],
            Directions: 'Season chicken pieces with salt and pepper. Heat oil and curry powder in a large skillet over medium-high heat for two minutes. Stir in onions and garlic, and cook 1 minute more. Add chicken, tossing lightly to coat with curry oil. Reduce heat to medium, and cook for 7 to 10 minutes, or until chicken is no longer pink in center and juices run clear. Pour coconut milk, tomatoes, tomato sauce, and sugar into the pan, and stir to combine. Cover and simmer, stirring occasionally, approximately 30 to 40 minutes.ir into stew. Cover and simmer 1 hour more.'  
        },
        { 
            id: '107',
            image: '../Assets/Images/stew.jpg',
            author: 'by Arzu',
            title: 'Beef Stew',
            ingridients:['x2 pounds cubed beef stew meat', '3 tablespoons vegetable oil', '4 cubes beef bouillon', '4 cups water', '1 teaspoon dried rosemary', '1 teaspoon dried parsley','1/2 teaspoon ground black pepper '],
            Directions: 'In a large pot or dutch oven, cook beef in oil over medium heat until brown. Dissolve bouillon in water and pour into pot. Stir in rosemary, parsley and pepper. Bring to a boil, then reduce heat, cover and simmer 1 hour. Stir potatoes, carrots, celery, and onion into the pot. Dissolve cornstarch in 2 teaspoons cold water and stir into stew. Cover and simmer 1 hour more.' 
        },
    ]
    module.exports = foodDetail;

     