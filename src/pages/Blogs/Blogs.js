import React, { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs - PC-Bikroy";
  }, []);
  return (
    <div>
      <div className=" mt-24 text-white font-extrabold">
        <div className="collapse w-3/4 rounded-md mx-auto">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-gray-700">
            <h2>What are the different ways to manage a state in a React application?</h2>
          </div>
          <div className="collapse-content bg-slate-900">
            <p className="pt-4 font-bold text-start">
              There are 4 ways to manage states in a React Application. <br/>
              1. Local State: Local State is when the state is used in one component or another and used locally. <br/>
              2. Global State: Global state is when a state variable is shared and updated across multiple component or pages. <br/>
              3. Server State: Server state is when we save the data we get by fetch from a server in a state variable. <br/>
              4. URL State: URL state is when we manage state which is inside a URL or query parameter.
            </p>
          </div>
        </div>
        <div className="collapse w-3/4 rounded-md mx-auto my-10">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-gray-700">
            <h2>How does prototypical inheritance work?</h2>
          </div>
          <div className="collapse-content bg-slate-900">
            <p className="pt-4 font-bold text-start">
              prototypical inheritance is a feature in JavaScript by which we can add methods and properties in an object. It is a method by which the properties and methods of an object can be inherited by a child object. "ChildObject.__proto__ = ParentObject" we use this syntax for prototypical inheritance.
            </p>
          </div>
        </div>
        <div className="collapse w-3/4 rounded-md mx-auto my-10">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-gray-700">
            <h2>What is a unit test? Why should we write unit tests?</h2>
          </div>
          <div className="collapse-content bg-slate-900">
            <p className="pt-4 font-bold text-start">
              unit test is a technique to isolate a written code and test it to determine if the code is written properly. It is a very important step as it helps us to debug our applications and find out the problems in that code unit. By this we can detect any flaw in our code early which could be more difficult to find later. 
            </p>
          </div>
        </div>
        <div className="collapse w-3/4 rounded-md mx-auto my-10">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-gray-700">
            <h2>React vs. Angular vs. Vue?</h2>
          </div>
          <div className="collapse-content bg-slate-900">
            <p className="pt-4 font-bold text-start">
              React is suitable for intermediate to advanced JavaScript developers who know about ES6 concepts and up. While Angular is for those developers who are familiar with TypeScript. And Vue is more suitable for new developers who are not that much familiar with JavaScript concepts. React is based on components and extra modules, Angular is more of a All-in-one which does not need any extras, while Vue is suited for creating small less complex apps and it is easier to learn compared to other frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
