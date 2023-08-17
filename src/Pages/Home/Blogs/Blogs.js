import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <section class="text-gray-700">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                This is My Blogs
              </h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how technology works.
              </p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Difference between javascript and nodejs?
                  </summary>

                  <span>
                    JavaScript is a proper high-level programming language used
                    to create web scripts whereas Node.js is a run time
                    environment built on google’s v8 engine.JavaScript is
                    executed in the browser whereas using Node.js gives us the
                    ability to execute JavaScript outside the browser.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    When should you use nodejs and when should you use mongodb?
                  </summary>

                  <span>
                    Enterprises admire the speed of Node.js. Node.js uses the V8
                    engine developed by Google which compiles JavaScript into
                    native machine code and runs at lightning speed. Node.js
                    does not jumble up with creating separate threads involving
                    locking headache but it rather has single thread i.e. the
                    event loop which is responsible for all the asynchronous I/O
                    operations. MongoDB is a document database used to build
                    highly available and scalable internet applications. With
                    its flexible schema approach, it’s popular with development
                    teams using agile methodologies. Offering drivers for all
                    major programming languages, MongoDB allows you to
                    immediately start building your application without spending
                    time configuring a database.
                  </span>
                </details>
              </div>
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Differences between sql and nosql databases?
                  </summary>

                  <span class="px-4 py-2">
                    SQL is the programming language used to interface with
                    relational databases. (Relational databases model data as
                    records in rows and tables with logical links between them).
                    NoSQL is a class of DBMs that are non-relational and
                    generally do not use SQL.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What is the purpose of jwt and how does it work?
                  </summary>

                  <span class="px-4 py-2">
                    JWT, or JSON Web Token, is an open standard used to share
                    information between two parties securely — a client and a
                    server. In most cases, it’s an encoded JSON containing a set
                    of claims and a signature. It’s usually used in the context
                    of other authentication mechanisms like OAuth, OpenID to
                    share user-related information. It’s also a popular way to
                    authenticate/authorize users in a microservice architecture.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
