import React from "react";
import bg from "../../assets/images/Backdrop2.png";

function MenuList() {
  return (
    <div>
      <div
        className="bg-[#333333] bg-cover bg-center    w-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1
          className="font-vast-shadow font-semiboldbold text-[#e8af33] text-4xl pt-10  lg:text-5xl text-center "
          data-aos="flip-up"
        >
          OUR MENU
        </h1>
        <p className="text-center text-white lg:text-lg mx-auto px-2 lg:px-0 mt-10 lg:w-[850px]">
          Designates Gluten Free - *All food is prepared in common kitchen with
          the risk of gluten exposure. • 18% gratuity will be added to parties
          of 8 or more. *Eating raw or undercooked meats, poultry, seafood,
          shellfish, or eggs may increase your risk of foodborne illness.
        </p>

        <div className="flex justify-evenly gap-5 lg:gap-0 mt-5 pb-10 flex-col lg:flex-row ">
          {/* left */}
          <div className="flex flex-col  items-center gap-4">
            <div className="lg:w-[450px] w-[90%] rounded bg-white  flex flex-col gap-5">
              <h1 className="font-vast-shadow text-[#E8AF33] uppercase text-3xl mt-5 text-center">
                Let's Get Started
              </h1>
              <p className=" text-center px-4 lg:text-lg">
                Gluten free items are prepared in common kitchen with the risk
                of gluten exposure.
              </p>
              <div className="flex  gap-5 px-4 ">
                <div className="h-[1060px]  lg:h-[800px] w-[2px] bg-[#e8af33]"></div>
                <div className="flex flex-col gap-3 pb-5">
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between">
                      CHEESE STICKS <span>| 8.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Mozzarella cheese fried golden and served with our
                      housemade marinara and shredded parmesan.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between">
                      PIEROGIES <span>| 8.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Potato and cheese pierogies sauteed in butter with
                      caramelized onions. Served with green onions and a side of
                      sour cream.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      mediterranean hummus<span>| 9.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      A blend of chickpeas, fresh lemon, tahini, garlic, and
                      extra virgin olive oil. Served with vegetable crudités and
                      naan bread.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between">
                      PORK RINDS<span>| 5.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Housemade pork rinds seasoned with Chef’s blend of sea
                      salt and spicy smoked chilies. Served still cracklin’ with
                      a side of ranch and Crystal hot sauce.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      bangkok shrimp |<span>| 5.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Royal red shrimp marinated in Cajun buttermilk, fried
                      golden brown and drizzled with our version of bang bang
                      sauce. Finished with green onions.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      chicken tenders|<span>| 5.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Fresh chicken marinated in Cajun buttermilk, fried, and
                      served with your choice of dipping sauce and celery.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      loaded fries |<span>| 10.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Loaded fries with cheddar, bacon, ranch, Mustang sauce,
                      sour cream, and green onions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[450px] w-[90%] rounded bg-white  flex flex-col gap-5">
              <h1 className="font-vast-shadow text-[#E8AF33]  uppercase text-3xl mt-5 text-center">
                housemade soups and salads
              </h1>
              <p className=" text-center px-4 lg:text-lg">
                Housemade Dressings: Balsamic Vinaigrette, Honey Mustard, Ranch,
                Bleu Cheese, Caesar, Cockfight Maple | Light Options: Light
                Italian, Oil & Vinegar | Add Ons: Grilled Chicken Breast $5.00,
                Grilled Portobello $4.00, Sautéed Shrimp $7.00
              </p>
              <div className="flex  gap-5 px-4 ">
                <div className="h-[820px]  lg:h-[590px] w-[2px] bg-[#e8af33]"></div>
                <div className="flex flex-col gap-3 pb-5">
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      housemade soup cup | 3.75 <span>bowl | 6.00</span>
                    </h5>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      black and blue salad<span>| 14.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Mixed greens topped with blackened grilled chicken, gala
                      apples, red onions, carrots, gorgonzola crumbles, and
                      blackened candied walnuts. Served with our housemade,
                      spicy Mustang Maple dressing.
                    </p>
                  </div>
                  <div className="flex flex-col  gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      mediterranean salad<span>| 14.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Mixed greens topped with grilled chicken, marinated
                      artichoke hearts, roasted red peppers, chickpeas, grape
                      tomatoes, carrots, red onions, and feta. Served with our
                      housemade Balsamic vinaigrette.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      house salad half size | 5.95<span>full size | 9.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Mixed greens with red onions, grape tomatoes, carrots,
                      roasted pepitas, and shredded parmesan. Served with your
                      choice of dressing.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      caesar salad half size | 5.95{" "}
                      <span>full size | 9.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Chopped romaine lettuce, shredded parmesan, housemade
                      croutons, tossed in our housemade Caesar vinaigrette.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col items-center  gap-4">
            <div className="lg:w-[450px] w-[90%] rounded bg-white  flex flex-col gap-5">
              <h1 className="font-vast-shadow text-[#E8AF33] uppercase text-3xl mt-5 text-center">
                sandwiches & wraps
              </h1>
              <p className=" text-center px-4 lg:text-lg">
                All sandwiches are served with your choice of side•SIDES: Fries,
                Apple Coleslaw, House Salad, or Caesar Salad | Substitute a cup
                of soup $2.50 | Spice up any sandwich by adding our giardiniera
                pepper slaw $1.00
              </p>
              <div className="flex  gap-5 px-4 ">
                <div className="h-[1140px]  lg:h-[850px] w-[2px] bg-[#e8af33]"></div>
                <div className="flex flex-col gap-3 pb-5">
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      half-pound angus beef burger* <span>| 14.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Ohio Natural RL Valley Ranch Blend dusted with our house
                      steak seasoning and char-grilled to your preference.
                      Served on a brioche bun with lettuce, tomato, and onions.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      grilled chicken sandwich <span>| 13.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Char-grilled seven-herb chicken breast. Served on a
                      brioche bun with lettuce, tomato, and onions.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      tcb melt<span>| 12.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Turkey, tomatoes, bacon, cheddar, and our housemade honey
                      mustard on toasted bread and panini pressed.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      the vito half size | 10.95<span>full size | 14.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Pepperoni, honey pit ham, Genoa salami, capicola, and
                      provolone. Finished with lettuce, tomatoes, onions, banana
                      peppers, and a housemade creamy submarine dressing. Served
                      on a torpedo roll.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      bangkok shrimp |<span>| 5.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Royal red shrimp marinated in Cajun buttermilk, fried
                      golden brown and drizzled with our version of bang bang
                      sauce. Finished with green onions.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      chicken tenders|<span>| 5.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Fresh chicken marinated in Cajun buttermilk, fried, and
                      served with your choice of dipping sauce and celery.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      loaded fries |<span>| 10.95</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Loaded fries with cheddar, bacon, ranch, Mustang sauce,
                      sour cream, and green onions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[450px] w-[90%] rounded bg-white  flex flex-col gap-5">
              <h1 className="font-vast-shadow text-[#E8AF33]  uppercase text-3xl mt-5 text-center">
                Sandwich and wraps add-ons
              </h1>
              <p className=" text-center px-4 lg:text-lg">
                All sandwiches are served with your choice of side•SIDES: Fries,
                Apple Coleslaw, House Salad, or Caesar Salad | Substitute a cup
                of soup $2.50 | Spice up any sandwich by adding our giardiniera
                pepper slaw $1.00
              </p>
              <div className="flex  gap-5 px-4 ">
                <div className="h-[520px]  lg:h-[430px] w-[2px] bg-[#e8af33]"></div>
                <div className="flex flex-col gap-3 pb-5">
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      cheeses<span>| 1.00</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      American, Swiss, Cheddar, Provolone, Pepper Jack, Fresh
                      Mozzarella, Feta, Shredded Parmesan, Gorgonzola Crumbles,
                      Ricotta.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      proteins<span>| 2.50</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Bacon, Capicola, Genoa Salami
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      veggies<span>| 1.00</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Roasted Garlic, Red Onions, Wild Mushrooms, Mixed Bell
                      Peppers, Sauteed Spinach, Banana Peppers, Mixed Olives,
                      Artichokes, Caramelized Onions
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[#e8af33] flex justify-between uppercase">
                      housemade sauces<span>| 1.00</span>
                    </h5>
                    <p className="text-gray-700 lg:w-[350px]">
                      Mayo, Teriyaki, Mustang, Buffalo, Honey Mustard, BBQ,
                      Spicy BBQ, Ranch, Bleu Cheese, Marinara, French
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
