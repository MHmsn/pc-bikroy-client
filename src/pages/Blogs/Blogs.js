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
            <p className="pt-4 font-bold">
              SQL databases are table based, but NoSQL databases are mostly
              object or key-value based. So SQL is better for structured data
              like tables. While NoSQL databases are better for unstructured
              data like JSON. Also, SQL databases are vertically scalable but
              NoSQL databases are horizontally scalable.
            </p>
          </div>
        </div>
        <div className="collapse w-3/4 rounded-md mx-auto my-10">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-gray-700">
            <h2>How does prototypical inheritance work?</h2>
          </div>
          <div className="collapse-content bg-slate-900">
            <p className="pt-4 font-bold">
              JWT stands for JSON Web Token. It helps to encrypt the user data
              so that the data does not fall into the wrong hands. Also, it
              issues a token for authentication, which can be decrypted and used
              for authentication purposes. The token can be stored on local
              storage but it is not recommended. it is mostly stored on http
              only cookie. this token can be sent with API and then decoded to
              authenticate the user.
            </p>
          </div>
        </div>
        <div className="collapse w-3/4 rounded-md mx-auto my-10">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-gray-700">
            <h2>What is a unit test? Why should we write unit tests?</h2>
          </div>
          <div className="collapse-content bg-slate-900">
            <p className="pt-4 font-bold">
              JavaScript is a simple scripting language which is used for
              creating interactive web pages. While node.js is a JavaScript
              runtime environment. Usually JavaScript can run only in the
              browser. but with node.js, now javascript code can be executed
              outside of the browser as well. JavaScript is used for frontend
              web development while Node.js is used for backend web development
              in the server side.
            </p>
          </div>
        </div>
        <div className="collapse w-3/4 rounded-md mx-auto my-10">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-gray-700">
            <h2>React vs. Angular vs. Vue?</h2>
          </div>
          <div className="collapse-content bg-slate-900">
            <p className="pt-4 font-bold">
              Node JS handle multiple request at the same time by one of it's
              main features, event loop. Event loop allows Node JS to run
              asynchronous functions. As it is normally single threaded, it
              handles one request at a time. but for asynchronous functions, it
              sets that asynchronous function aside from the call stack, and
              starts working on the next requests. This method allows node to do
              multiple tasks at the same time even though it is single threaded.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
